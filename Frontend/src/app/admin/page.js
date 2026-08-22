'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AdminContainer from '@/components/Admin/AdminContainer/AdminContainer';
import useAuthStore from '@/lib/authStore';

const AdminPage = () => {
  const { isLoggedIn, isHydrated } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    // Only redirect after hydration is complete
    if (isHydrated && isLoggedIn === false) {
      router.push('/login');
    }
  }, [isLoggedIn, router, isHydrated]);

  // Show loading while hydrating
  if (!isHydrated) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '18px'
      }}>
        Loading...
      </div>
    );
  }

  // If not logged in, show nothing (will redirect)
  if (isLoggedIn !== true) {
    return null;
  }

  return (
    <>
      <AdminContainer />
    </>
  );
};

export default AdminPage;
