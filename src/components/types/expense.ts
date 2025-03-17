export interface Expense {
  id: string; // UUID string
  amount: number;
  category: string;
  date: string;       // or Date if you're handling it as Date object
  createdAt?: string; // optional
}
