import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Helper function to set cookie
const setCookie = (name, value, days = 7) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
};

// Helper function to clear cookie
const clearCookie = (name) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};

const useAuthStore = create(
  persist(
    (set, get) => ({
      // State
      isLoggedIn: false,
      user: null,
      isHydrated: false,
      
      // Actions
      login: (userData) => {
        // Handle both token string and user object
        const user = typeof userData === 'string' ? { token: userData } : userData;
        
        // Store token in cookie for API interceptor
        if (user.token) {
          setCookie('authToken', user.token);
        }
        
        set({ 
          isLoggedIn: true, 
          user: user
        });
      },
      
      logout: () => {
        // Clear token from cookie
        clearCookie('authToken');
        
        set({ 
          isLoggedIn: false, 
          user: null
        });
      },
      
      setHydrated: (hydrated) => {
        set({ isHydrated: hydrated });
      },
      
      // Getters
      getAuthStatus: () => get().isLoggedIn,
      getUser: () => get().user,
      getToken: () => get().user?.token,
      getHydrationStatus: () => get().isHydrated,
    }),
    {
      name: 'auth-storage', // unique name for localStorage key
      partialize: (state) => ({ 
        isLoggedIn: state.isLoggedIn, 
        user: state.user 
      }), // only persist these fields
      onRehydrateStorage: () => (state) => {
        // Mark as hydrated after rehydration
        if (state) {
          state.setHydrated(true);
          
          // Also restore the token in cookie if user is logged in
          if (state.user?.token) {
            setCookie('authToken', state.user.token);
          }
        }
      },
    }
  )
);

export default useAuthStore;
