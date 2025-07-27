'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LoginContainer from '@/components/Admin/Login/LoginContainer';
import { useAuth } from '@/components/Context/AuthContext';
import LoadingSpinner from '@/components/Shared/LoadingSpinner';

const LoginPage = () => {
  const { isLoggedIn, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && isLoggedIn) {
      router.push('/admin');
    }
  }, [isLoggedIn, loading, router]);

  if (loading) {
    return <LoadingSpinner message="Checking authentication..." />;
  }

  if (isLoggedIn) {
    return null;
  }

  return (
    <>
      <LoginContainer />
    </>
  );
};

export default LoginPage;
