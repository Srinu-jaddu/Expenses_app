// src/components/ClientChartWrapper.tsx
'use client';
import dynamic from 'next/dynamic';

const ExpenseChart = dynamic(() => import('./ExpenseChart'), { ssr: false });

export default ExpenseChart;
