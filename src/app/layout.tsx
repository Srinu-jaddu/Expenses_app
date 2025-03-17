import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Mini Finance Tracker',
  description: 'Track your expenses with charts',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
