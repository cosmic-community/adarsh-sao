import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Adarsh Sao — Digital Marketing Executive',
  description:
    'Performance marketer driving real leads and revenue growth using Meta Ads, Google Ads, and data-first SEO strategy. Not just clicks — conversions that matter.',
  keywords: [
    'digital marketing',
    'meta ads',
    'google ads',
    'performance marketing',
    'SEO',
    'lead generation',
    'Adarsh Sao',
  ],
  openGraph: {
    title: 'Adarsh Sao — Digital Marketing Executive',
    description:
      'I drive real leads and revenue growth using Meta Ads, Google Ads, and data-first SEO strategy.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string;

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎯</text></svg>"
        />
        <script src="/dashboard-console-capture.js" />
      </head>
      <body className="min-h-screen">
        {children}
        <CosmicBadgeWrapper bucketSlug={bucketSlug} />
      </body>
    </html>
  );
}

import CosmicBadgeWrapper from '@/components/CosmicBadgeWrapper';