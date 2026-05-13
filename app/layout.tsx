import './globals.css';
import { ClearanceProvider } from '@/lib/store';
import { SupremeDecree } from '@/components/ui/SupremeDecree';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ClearanceProvider>
          <SupremeDecree enabled={true} />
          {children}
        </ClearanceProvider>
      </body>
    </html>
  );
}
