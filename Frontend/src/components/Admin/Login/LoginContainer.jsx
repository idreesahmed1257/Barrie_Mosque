'use client';
import { useState } from 'react';
import { Button, Paper, TextField, Typography, InputAdornment, IconButton } from '@mui/material';
import useAuthStore from '../../../lib/authStore';
import styles from './login.module.scss';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import api from '../../../lib/api';

const LoginContainer = () => {
  const { login } = useAuthStore();
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const validate = () => {
    let tempErrors = { email: '', password: '' };
    let isValid = true;

    if (!formData.email) {
      tempErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Invalid email format';
      isValid = false;
    }

    if (!formData.password) {
      tempErrors.password = 'Password is required';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');

    if (validate()) {
      setLoading(true);
      try {
        const response = await api.post('/login', formData);

        if (response.status === 200) {
          login(response.data.token);
          toast.success(response.data.message);
          router.push('/admin');
        } else {
          setApiError(response.data.message || 'Login failed');
          toast.error(response.data.message || 'Login failed');
        }
      } catch (error) {
        if (error.response) {
          setApiError(error.response.data.message || 'Login failed');
          toast.error(error.response.data.message || 'Login failed');
        } else {
          setApiError('Network error or server unavailable.');
          toast.error('Network error or server unavailable.');
        }
      } finally {
        setLoading(false);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className={styles.loginWrapper}>
      <div className={styles.imageSection}></div>
      <Paper elevation={3} className={styles.formSection}>
        <Typography variant="h4" className={styles.heading}>
          Barrie Mosque Admin
        </Typography>
        <form onSubmit={handleSubmit} className={styles.form} noValidate>
          <TextField
            name="email"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
            error={Boolean(errors.email)}
            helperText={errors.email}
            className={styles.input}
          />
          <TextField
            name="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            fullWidth
            variant="outlined"
            value={formData.password}
            onChange={handleChange}
            error={Boolean(errors.password)}
            helperText={errors.password}
            className={styles.input}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {apiError && (
            <Typography color="error" className={styles.errorMessage}>
              {apiError}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className={styles.button}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default LoginContainer;
