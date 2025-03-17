// src/components/ExpenseChart.tsx
'use client';

import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { Expense } from '@/components/types/expense';

interface ExpenseChartProps {
  data: Expense[];
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function ExpenseChart({ data }: ExpenseChartProps) {
  const chartData = data.reduce((acc: any[], expense) => {
    const found = acc.find((item) => item.name === expense.category);
    if (found) {
      found.value += expense.amount;
    } else {
      acc.push({ name: expense.category, value: expense.amount });
    }
    return acc;
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg shadow mt-4">
      <h2 className="text-lg font-semibold mb-4">Expense Chart</h2>
      <PieChart width={400} height={300}>
        <Pie
          data={chartData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}
