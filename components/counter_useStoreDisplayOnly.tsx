"use client"

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';

const CounterComponent: React.FC = () => {

  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 className='text-2xl'>Store Counter: {count}</h1>
    </div>
  );
};

export default CounterComponent;