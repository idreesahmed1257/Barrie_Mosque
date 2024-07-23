// src/app/layout.js
import '../styles/globals.scss';
import MyThemeProvider from '../components/ThemeProvider';
import Layout from '@/components/Layout';
import "@fontsource/quicksand";
import { Toaster } from 'react-hot-toast';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MyThemeProvider>
          <Layout>
            {children}
            <Toaster />
          </Layout>
        </MyThemeProvider>
      </body>
    </html>
  );
}
