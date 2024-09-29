"use client"

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, initializeCount } from '@/lib/features/counter/counterSlice';
import { RootState } from '@/lib/store';

interface CounterComponentProps {
  serverCounter: number; // Init value fetch from db
}
const CounterComponent: React.FC<CounterComponentProps> = ({ serverCounter }) => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  useEffect(() => {
    // Client need to reset the count to serverCounter
    dispatch(initializeCount(serverCounter));
  }, [serverCounter, dispatch]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {/* 注意：{count > 0 ? count : serverCounter} でSSRの際には初期値取得できるように、そうしないと一瞬で0表示される */}
      <h1 className='text-2xl'>Store Counter: {count > 0 ? count : serverCounter}</h1>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        onClick={() => dispatch(increment())}>+ Store</button>
      <button
        className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-700 transition ml-4"
        onClick={() => dispatch(decrement())}>- Store</button>
    </div>
  );
};

export default CounterComponent;