'use client';
import { usePathname } from 'next/navigation';
import Layout from '@/components/Layout';
import { Toaster } from 'react-hot-toast';

const noLayoutRoutes = ['/login/', '/admin/'];

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  console.log("pathname", pathname)
  
  return (
    <>
      {!noLayoutRoutes.includes(pathname) ? (
        <Layout>
          {children}
          <Toaster />
        </Layout>
      ) : (
        <>
          {children}
          <Toaster />
        </>
      )}
    </>
  );
}
