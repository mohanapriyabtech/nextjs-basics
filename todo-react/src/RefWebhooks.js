import React, { useState, useRef, useEffect } from 'react';

function RefWebhooks() {
  // State for click count (triggers re-render)
  const [clickCount, setClickCount] = useState(0);
  
  // Ref for render count (does not trigger re-render)
  const renderCount = useRef(0);

  // Increment render count each time the component re-renders
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log(renderCount.current,"renderCount.current")
  });

  return (
    <div>
      <h1>Using useState (Click Count): {clickCount}</h1>
      <h2>Using useRef (Render Count): {renderCount.current}</h2>

      <button onClick={() => setClickCount(clickCount + 1)}>Increase Click Count</button>
      
      <p>
        Click the button to increase the click count. The render count will be updated every time the component re-renders.
        But, you will notice that updating the click count (via `useState`) will cause a re-render, while `renderCount` stored in `useRef` will not.
      </p>
    </div>
  );
}

export default RefWebhooks;
