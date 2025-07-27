'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AdminContainer from '@/components/Admin/AdminContainer/AdminContainer';
import { useAuth } from '@/components/Context/AuthContext';
import LoadingSpinner from '@/components/Shared/LoadingSpinner';

const AdminPage = () => {
  const { isLoggedIn, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isLoggedIn) {
      router.push('/admin/login');
    }
  }, [isLoggedIn, loading, router]);

  if (loading) {
    return <LoadingSpinner message="Checking authentication..." />;
  }

  if (!isLoggedIn) {
    return null;
  }

  return (
    <>
      <AdminContainer />
    </>
  );
};

export default AdminPage;
