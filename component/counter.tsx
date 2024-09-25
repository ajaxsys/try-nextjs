import React, { useState } from 'react';

const Counter: React.FC = () => {
  // 使用 useState 钩子定义 count 状态，并设置其类型为 number
  const [count, setCount] = useState<number>(0);

  // 定义增加和减少计数的函数
  const increment = (): void => setCount(count + 1);
  const decrement = (): void => setCount(count - 1);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  );

  
}

export default Counter;
