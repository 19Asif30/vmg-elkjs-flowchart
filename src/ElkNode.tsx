import { Handle, NodeProps, Position } from 'reactflow';

import { ElkNodeData } from './nodes';
import React from 'react';

export default function ElkNode({ data }: NodeProps<ElkNodeData>) {
  return (
    <>
      <div className="handles targets">
        {data.targetHandles.map((handle) => (
          <Handle
            key={handle.id}
            id={handle.id}
            type="target"
            position={Position.Top}
          />
        ))}
      </div>
      <div className="label">{data.label}</div>
      <div className="handles sources">
        {data.sourceHandles.map((handle) => (
          <Handle
            key={handle.id}
            id={handle.id}
            type="source"
            position={Position.Bottom}
          />
        ))}
      </div>
    </>
  );
}
