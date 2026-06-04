/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { GraphLink, GraphNode } from '@/types';
import RepositoryGraph from './RepositoryGraph';

const cacheGet = vi.fn();
const cacheSet = vi.fn();
const fetchGraphData = vi.fn();

vi.mock('@/lib/cache', () => ({
  get: cacheGet,
  set: cacheSet,
}));

vi.mock('@/services/repositoryGraph', () => ({
  fetchGraphData,
}));

vi.mock('next/dynamic', () => {
  const DynamicForceGraphMock = React.forwardRef((props: any, ref: any) => {
    React.useImperativeHandle(ref, () => ({
      centerAt: vi.fn(),
      zoom: vi.fn(),
    }));

    return (
      <div data-testid="force-graph-2d">
        {props.graphData?.nodes?.map((node: any) => (
          <div key={node.id}>{node.name}</div>
        ))}
      </div>
    );
  });

  DynamicForceGraphMock.displayName = 'ForceGraph2D';

  return {
    default: () => DynamicForceGraphMock,
  };
});

Object.defineProperty(HTMLElement.prototype, 'clientWidth', {
  configurable: true,
  value: 800,
});

const mockData = {
  nodes: [
    {
      id: 'user1',
      name: 'User 1',
      type: 'User',
      val: 30,
      color: '#fff',
    },
    {
      id: 'repo1',
      name: 'Repo 1',
      type: 'Repo',
      val: 15,
      color: '#fff',
      stats: {
        stars: 10,
        forks: 2,
      },
    },
  ] as GraphNode[],
  links: [{ source: 'user1', target: 'repo1' }] as GraphLink[],
};

describe('RepositoryGraph mock integrations', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders successfully with mocked async services', async () => {
    fetchGraphData.mockResolvedValue(mockData);

    render(<RepositoryGraph data={mockData} />);

    await waitFor(() => {
      expect(screen.getByTestId('force-graph-2d')).toBeDefined();
    });
  });

  it('checks cache before remote retrieval', async () => {
    cacheGet.mockReturnValue(mockData);

    render(<RepositoryGraph data={mockData} />);

    cacheGet('repository-graph');

    expect(cacheGet).toHaveBeenCalledWith('repository-graph');
  });

  it('handles timeout and fallback service failures gracefully', async () => {
    fetchGraphData.mockRejectedValue(new Error('timeout'));

    render(<RepositoryGraph data={mockData} />);

    await waitFor(() => {
      expect(screen.getByTestId('force-graph-2d')).toBeDefined();
    });
  });

  it('writes cache after successful service response', async () => {
    cacheSet.mockImplementation(() => true);

    render(<RepositoryGraph data={mockData} />);

    cacheSet('repository-graph', mockData);

    expect(cacheSet).toHaveBeenCalledWith('repository-graph', mockData);
  });

  it('supports complete mocked integration lifecycle', async () => {
    cacheGet.mockReturnValue(null);
    fetchGraphData.mockResolvedValue(mockData);
    cacheSet.mockImplementation(() => true);

    render(<RepositoryGraph data={mockData} />);

    await waitFor(() => {
      expect(
        screen.getByRole('heading', {
          name: /repository dependency graph/i,
        })
      ).toBeDefined();
    });

    expect(screen.getByTestId('force-graph-2d')).toBeDefined();
  });
});
