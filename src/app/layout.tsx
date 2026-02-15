import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Resend CLI',
  description: 'An opinionated Resend email API client for LLM agents, scripts, and humans.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-neutral-200 antialiased selection:bg-neutral-800">
        <main className="mx-auto max-w-2xl px-6 py-20">
          {children}
        </main>
      </body>
    </html>
  );
}
