import './globals.css';
import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'TRASHY TRASH CAN\'S - F*CK BORING BINS! 🤘',
  description: 'Join the trash revolution! The most ridiculous, eye-catching trash cans ever created. Make your garbage GLORIOUS!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-black text-white antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}