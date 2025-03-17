'use client';
import { useState } from 'react';
import { Expense } from '@/components/types/expense';

interface Props {
  onAdd: () => void;
}

export default function AddExpense({ onAdd }: Props) {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !category || !date) return;

    await fetch('/api/expenses', {
      method: 'POST',
      body: JSON.stringify({
        amount: parseFloat(amount),
        category,
        date,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    setAmount('');
    setCategory('');
    setDate('');
    onAdd();
  };

  return (
    <form onSubmit={handleSubmit} className="grid sm:grid-cols-4 gap-4 p-4 bg-white/10 rounded-2xl backdrop-blur shadow-lg">
      <input
        type="number"
        placeholder="Amount"
        className="input-field"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Category"
        className="input-field"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <input
        type="date"
        className="input-field"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button type="submit" className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-bold py-2 rounded-lg shadow-md">
        Add
      </button>
    </form>
  );
}
