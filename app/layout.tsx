import './globals.css';

export const metadata = {
  title: 'Aja broneerimine',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="et">
      <body className="bg-gray-100 text-gray-900 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}