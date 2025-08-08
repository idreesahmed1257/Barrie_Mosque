import axios from 'axios';
import toast from 'react-hot-toast';

// Create axios instance with base configuration
const apiInterceptor = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

// Request interceptor to add auth token to all requests
apiInterceptor.interceptors.request.use(
    (config) => {
        // Get token from cookies
        const token = document.cookie
            .split('; ')
            .find(row => row.startsWith('authToken='))
            ?.split('=')[1];

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor to handle unauthorized responses
apiInterceptor.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response?.status === 401) {
            // Token is expired or invalid
            // Clear the auth token from cookies
            document.cookie = 'authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

            // Show error message
            toast.error('Session expired. Please login again.');

            // Redirect to login page
            if (typeof window !== 'undefined') {
                window.location.href = '/admin/login';
            }
        }
        return Promise.reject(error);
    }
);

export default apiInterceptor; 