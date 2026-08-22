'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LoginContainer from '@/components/Admin/Login/LoginContainer';
import useAuthStore from '@/lib/authStore';

const LoginPage = () => {
  const { isLoggedIn, isHydrated } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    // Only redirect after hydration is complete
    if (isHydrated && isLoggedIn === true) {
      router.push('/admin');
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

  // If already logged in, show nothing (will redirect)
  if (isLoggedIn === true) {
    return null;
  }

  return (
    <>
      <LoginContainer />
    </>
  );
};

export default LoginPage;
