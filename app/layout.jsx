import {Inter} from 'next/font/google'
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';
const inter=Inter({subsets:["latin"]});
import Header from '@/components/header';
import CreateEventDrawer from '@/components/create-event';
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header/>
          <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">{children}</main>
          <CreateEventDrawer/>
        </body>
      </html>
    </ClerkProvider>
  );
}
