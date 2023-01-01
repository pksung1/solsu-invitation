import React from 'react';

const RenderIf: React.FC<{isRender: boolean}> = ({isRender, children}) => {
  return  <>{isRender ? children : null}</>
}

export default RenderIf;