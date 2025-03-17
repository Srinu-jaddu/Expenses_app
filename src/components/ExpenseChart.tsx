'use client';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { Expense } from '@/components/types/expense';

interface Props {
  data: Expense[];
}

const COLORS = ['#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#dc2626'];

export default function ExpenseChart({ data }: Props) {
  const chartData = Object.values(
    data.reduce((acc, expense) => {
      acc[expense.category] = acc[expense.category] || { name: expense.category, value: 0 };
      acc[expense.category].value += expense.amount;
      return acc;
    }, {} as Record<string, { name: string; value: number }>)
  );

  return (
    <div className="bg-white/10 backdrop-blur p-4 rounded-2xl shadow-lg mt-4">
      <h2 className="text-xl font-bold mb-4 text-white">📊 Expense Distribution</h2>
      <div className="flex justify-center">
        <PieChart width={400} height={300}>
          <Pie data={chartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
            {chartData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
}
