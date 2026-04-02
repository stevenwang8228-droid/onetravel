import type { Metadata } from 'next';
import './styles.css';

export const metadata: Metadata = {
  title: 'ONETRAVEL',
  description: 'Marketplace travel untuk Super Admin, Travel Partner, dan Customer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
