import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Canvas Bistro Bar | CBD Belapur, Navi Mumbai',
  description:
    'Lively bistro bar offering artisanal coffee, Sunday buffet, fresh seafood, continental delicacies, craft cocktails, and table reservations at Nilgiri Gardens, CBD Belapur.',
  openGraph: {
    title: 'Canvas Bistro Bar | CBD Belapur, Navi Mumbai',
    description:
      'Lively bistro bar offering artisanal coffee, Sunday buffet, fresh seafood, continental delicacies, craft cocktails, and table reservations at Nilgiri Gardens, CBD Belapur.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Canvas Bistro Bar | CBD Belapur, Navi Mumbai',
    description:
      'Lively bistro bar offering artisanal coffee, Sunday buffet, fresh seafood, continental delicacies, craft cocktails, and table reservations.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-[#FAF6F0] text-[#1F1109] selection:bg-[#F59E0B] selection:text-[#130A05]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
