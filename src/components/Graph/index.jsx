import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import { useTheme } from 'styled-components';

import NodeDetail from '@/components/NodeDetail';
import Modal from '@/components/Modal';

const Graph = ({ data, width = 600, height = 400 }) => {
  const svgRef = useRef(null);
  const sideDrawerRef = useRef(null);
  const theme = useTheme();
  const [selectedNode, setSelectedNode] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleClosePopup = () => {
    setSelectedNode(null);
    setIsDrawerOpen(false);
  };

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove(); // Clear previous chart

    // Create a zoom behavior
    // if we have many nodes. This will help UX easy to use
    const zoom = d3
      .zoom()
      .scaleExtent([0.01, 3]) // Set zoom scale (min 1%, max 300%)
      .on('zoom', (event) => {
        // console.log('>>>event.transform', event.transform);
        g.attr('transform', event.transform); // Apply transform to the group
      });

    svg.call(zoom); // Attach zoom behavior to the SVG

    // Add a group to hold the entire chart
    const g = svg.append('g');

    // Define arrow markers
    svg
      .append('defs')
      .append('marker')
      .attr('id', 'arrowhead')
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 30) // Adjust this to position the arrow correctly, depend on the logo size
      .attr('refY', 0)
      .attr('markerWidth', 6)
      .attr('markerHeight', 6)
      .attr('orient', 'auto')
      .append('path')
      .attr('d', 'M0,-5L10,0L0,5')
      .attr('fill', '#999999');

    // Create simulation
    const simulation = d3
      .forceSimulation(data.nodes)
      .force(
        'link',
        d3
          .forceLink(data.links)
          .id((d) => d.id)
          .distance((d) => d.distance || 100)
      )
      .force('charge', d3.forceManyBody().strength(-300))
      .force('center', d3.forceCenter(width / 2, height / 2));

    // Add links (edges)
    const link = g
      .append('g')
      .attr('stroke', '#999999')
      .attr('stroke-opacity', 0.6)
      .selectAll('line')
      .data(data.links)
      .enter()
      .append('line')
      .attr('stroke-width', 2)
      .attr('marker-end', 'url(#arrowhead)'); // Attach arrow marker

    // init graph with some events
    const node = g
      .append('g')
      .selectAll('g')
      .data(data.nodes)
      .enter()
      .append('g')
      .on('click', (event, d) => {
        setSelectedNode(d); // Update the selected node
        setIsDrawerOpen(true); // Keep the drawer open
      })
      .call(
        d3
          .drag()
          .on('start', (event, d) => {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
          })
          .on('drag', (event, d) => {
            d.fx = event.x;
            d.fy = event.y;
          })
          .on('end', (event, d) => {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = d.x;
            d.fy = d.y; // Lock node position
          })
      );

    node
      .append('circle') // Add a circle background
      .attr('r', 22)
      .attr('fill', theme.bg)
      .attr('stroke', (d) => {
        return selectedNode && selectedNode.id === d.id ? theme.fg : '#cccccc';
      })
      .attr('stroke-width', 1.5);

    // Add logos (masked as circular images)
    node
      .append('image')
      .attr('xlink:href', (d) => d.logo)
      .attr('x', -20)
      .attr('y', -20)
      .attr('width', 40)
      .attr('height', 40)
      .attr('object-fit', 'cover')
      .attr('clip-path', (d) => `url(#clip-${d.id})`);

    // show label
    node
      .append('text')
      .text((d) => d.name)
      .attr('text-anchor', 'middle')
      .attr('dy', 35)
      .attr('fill', (d) => {
        return selectedNode && selectedNode.id === d.id ? theme.fg : '#000000';
      })
      .attr('font-weight', (d) => {
        return selectedNode && selectedNode.id === d.id ? 'bold' : 'unset';
      })
      .style('font-size', '12px');

    // Update positions on each tick
    simulation.on('tick', () => {
      link
        .attr('x1', (d) => d.source.x)
        .attr('y1', (d) => d.source.y)
        .attr('x2', (d) => d.target.x)
        .attr('y2', (d) => d.target.y);

      node.attr('transform', (d) => `translate(${d.x},${d.y})`);
    });
  }, [data, selectedNode]);

  // Detect clicks outside the drawer
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sideDrawerRef.current &&
        !sideDrawerRef.current.contains(event.target) &&
        !svgRef.current.contains(event.target)
      ) {
        setIsDrawerOpen(false); // Close drawer
        setSelectedNode(null); // remove seleected node
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <svg
        ref={svgRef}
        width={width}
        height={height}
        style={{ border: `1px solid ${theme.fg}`, cursor: 'grab' }}
      />

      {/* Side Drawer */}
      <div ref={sideDrawerRef}>
        <Modal
          isOpen={isDrawerOpen}
          onClose={handleClosePopup}
          title='Node Detail'
        >
          <NodeDetail data={selectedNode} />
        </Modal>
      </div>
    </>
  );
};

export default Graph;
