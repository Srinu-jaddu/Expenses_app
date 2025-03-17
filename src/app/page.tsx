'use client';

import { useEffect, useState } from 'react';
import AddExpense from '@/components/AddExpense';
import ExpenseList from '@/components/ExpenseList';
import ExpenseChart from '@/components/ExpenseChartWrapper';
import { Expense } from '@/components/types/expense';

export default function Page() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const refreshExpenses = async () => {
    try {
      const res = await fetch('/api/expenses');
      const data = await res.json();
      setExpenses(data);
    } catch (err) {
      console.error('Failed to fetch expenses', err);
    }
  };

  useEffect(() => {
    refreshExpenses();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-extrabold text-center">💸 Mini Finance Tracker</h1>
        <AddExpense onAdd={refreshExpenses} />
        <ExpenseList expenses={expenses} onDelete={refreshExpenses} />
        <ExpenseChart data={expenses} />
      </div>
    </div>
  );
}
