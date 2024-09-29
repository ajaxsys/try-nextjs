"use client"

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '@/lib/features/counter/counterSlice';
import { RootState } from '@/lib/store';

const CounterComponent: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 className='text-2xl'>Store Counter: {count}</h1>
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