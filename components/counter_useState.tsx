"use client"

import React, { useState } from 'react';

interface CounterComponentProps {
  serverCounter?: number; // Init value fetch from db
}
const CounterComponent: React.FC<CounterComponentProps> = ({ serverCounter = 0 }) => {
  // 使用 useState 钩子定义 count 状态，并设置其类型为 number
  const [count, setCount] = useState<number>(serverCounter);

  // 定义增加和减少计数的函数
  const increment = (): void => setCount(count + 1);
  const decrement = (): void => setCount(count - 1);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 className='text-2xl'>Counter: {count}</h1>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        onClick={increment}> + Increase</button>
      <button
        className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-700 transition ml-4"
        onClick={decrement}> - Decrease</button>
    </div>
  );
}

export default CounterComponent;
