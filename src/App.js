import ReactFlow, {
  Controls,
  Background,
  MiniMap,
  useNodesState,
  useEdgesState,
  ReactFlowProvider,
} from 'reactflow';

import 'reactflow/dist/style.css';
import './index.css';

import ElkNode from './ElkNode.tsx';
import { nodes as initNodes } from './nodes.ts';
import { edges as initEdges } from './edges.ts';
import useLayoutNodes from './useLayoutNodes.ts';

const nodeTypes = {
  elk: ElkNode,
};

function App() {
  const [nodes, , onNodesChange] = useNodesState(initNodes);
  const [edges, , onEdgesChange] = useEdgesState(initEdges);

  useLayoutNodes();

  return (
    <ReactFlow
      nodes={nodes}
      onNodesChange={onNodesChange}
      edges={edges}
      onEdgesChange={onEdgesChange}
      fitView
      nodeTypes={nodeTypes}
    >
      <Background />
      <Controls />
      <MiniMap />
    </ReactFlow>
  );
}

export default () => (
  <ReactFlowProvider>
    <App />
  </ReactFlowProvider>
);
