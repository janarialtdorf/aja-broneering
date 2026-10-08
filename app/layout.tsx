import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PÖFF Broneerimissüsteem',
  description: 'Vabatahtlike graafik ja aegade valimine',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="et">
      <body className="antialiased bg-neutral-100 text-neutral-900">
        {children}
      </body>
    </html>
  );
}