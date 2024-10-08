"use client";

import MyComp from "./MyComp";
import { ShapeSsrStore } from "./shapes";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  
  return (
    <ShapeSsrStore>
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <MyComp />
      </div>
    </ShapeSsrStore>
  );
}
