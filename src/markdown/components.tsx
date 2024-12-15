"use client";

import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <div>{count}</div>
    </div>
  );
}
