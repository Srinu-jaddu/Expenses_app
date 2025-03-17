import { Expense } from './types/expense';

interface ExpenseListProps {
  expenses: Expense[];
  onDelete: () => void;
}

export default function ExpenseList({ expenses, onDelete }: ExpenseListProps) {
  const handleDelete = async (id: string) => {
    const res = await fetch(`/api/expenses/${id}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      onDelete(); // Refresh the list after deletion
    } else {
      console.error('Failed to delete expense');
    }
  };

  return (
    <div className="space-y-4">
      {expenses.map((expense) => (
        <div
          key={expense.id}
          className="bg-gray-800 p-4 rounded-xl shadow-lg flex justify-between items-center"
        >
          <div>
            <p className="text-lg font-semibold">{expense.category}</p>
            <p className="text-sm text-gray-400">
              {new Date(expense.date).toLocaleDateString()}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-xl font-bold">${expense.amount.toFixed(2)}</p>
            <button
              onClick={() => handleDelete(expense.id)}
              className="text-red-400 hover:text-red-600"
            >
              ✖
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
