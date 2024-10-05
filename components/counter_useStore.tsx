"use client"

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, initializeCount } from '@/lib/features/counter/counterSlice';
import { RootState } from '@/lib/store';

interface CounterComponentProps {
  serverCounter: number; // Init value fetch from db
}
const CounterComponent: React.FC<CounterComponentProps> = ({ serverCounter }) => {
  const dispatch = useDispatch();

  // 方式１：`state.counter.value || serverCounter` でSSRの際には初期値を優先表示させるように、そうしないと一瞬で0表示される
  const count = useSelector((state: RootState) => state.counter.value || serverCounter);
  //        ここのuseEffectは、遅延でクライアント側のstoreに初期化することです
  useEffect(() => {
    dispatch(initializeCount(count));
  }, []);

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