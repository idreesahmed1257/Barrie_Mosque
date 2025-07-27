'use client';
import { usePathname } from 'next/navigation';
import '../styles/globals.scss';
import MyThemeProvider from '../components/ThemeProvider';
import Layout from '@/components/Layout';
import "@fontsource/quicksand";
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from '@/components/Context/AuthContext';

const noLayoutRoutes = ['/admin/login', '/admin'];

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const useLayout = !noLayoutRoutes.includes(pathname);
  console.log("pathname", pathname)
  return (
    <html lang="en">
      <body>
        <MyThemeProvider>
          {useLayout ? (
            <Layout>
              {children}
              <Toaster />
            </Layout>
          ) : (
            <>
                <AuthProvider>
              {children}
              <Toaster />
                </AuthProvider>
            </>
          )}
        </MyThemeProvider>
      </body>
    </html>
  );
}
