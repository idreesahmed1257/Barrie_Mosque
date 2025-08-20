'use client';
import { Logout } from '@mui/icons-material';
import { AppBar, Box, Button, Container, Paper, Toolbar, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './adminContainer.module.scss';
import { CustomSwitch } from './helper';
import api from '../../../lib/api';
import useAuthStore from '../../../lib/authStore';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const AdminContainer = () => {
  const { user, logout } = useAuthStore();
  const router = useRouter();

  const [business, setBusinesses] = useState([])

  const getBusinesses = async () => {
    try {
      const resp = await api.get('/get-businesses-admin');
      setBusinesses(resp?.data?.data)
    } catch (err) {
      console.log("Error in Fetching Businesses", err)
    }
  }

  useEffect(() => {
    if (user?.token) {
      getBusinesses();
    }
  }, [user?.token]);

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    router.push('/login');
  };

  const handleToggle = async (id, currentState) => {
    try {
      // Optimistically update UI
      setBusinesses((prev) =>
        prev.map((row) =>
          row._id === id ? { ...row, state: !currentState } : row
        )
      );

      // Call API to persist change
      await api.put(`/update-business/${id}`, { state: !currentState });
    } catch (error) {
      console.error('Error updating business state:', error);

      setBusinesses((prev) =>
        prev.map((row) =>
          row._id === id ? { ...row, state: currentState } : row
        )
      );
    }
  };

  const dirColumns = [
    { field: 'name', headerName: 'Business Name', flex: 1 },
    { field: 'phone', headerName: 'Phone Number', flex: 1 },
    { field: 'email', headerName: 'Business Email', flex: 1 },
    {
      field: 'website',
      headerName: 'Website',
      flex: 1,
      renderCell: (params) => (
        <Link href={params.value || '#'} target="_blank" rel="noopener" style={{ color: '#042A29' }}>
          {params.value}
        </Link>
      ),
    },
    { field: 'category', headerName: 'Category', flex: 1 },
    { field: 'details', headerName: 'Details', flex: 2 },
    {
      field: 'state',
      headerName: 'State',
      flex: 0.5,
      renderCell: (params) => (
        <CustomSwitch
          checked={params.row.state}
          onChange={() => handleToggle(params.row._id, params.row.state)}
        />
      )

    },
  ];

  return (
    <div className={styles.adminContainer}>
      <AppBar position="static" className={styles.appBar}>
        <Toolbar className={styles.toolbar}>
          <Typography variant="h6" className={styles.welcomeText}>
            Welcome, Admin
          </Typography>
          <Button
            variant="outlined"
            startIcon={<Logout />}
            className={styles.logoutButton}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="xl" className={styles.contentWrapper}>
        <Paper elevation={2} className={styles.tableWrapper}>
          <Typography variant="h5" className={styles.sectionTitle}>
            Business Directory
          </Typography>
          <Box sx={{ height: 400 }}>
            <DataGrid
              rows={business}
              columns={dirColumns}
              disableRowSelectionOnClick
              getRowId={(row) => row?._id}
              sx={{
                backgroundColor: '#ffffff',
                color: "#042A29"
              }}
            />
          </Box>
        </Paper>
      </Container>
    </div>
  );
};

export default AdminContainer;
