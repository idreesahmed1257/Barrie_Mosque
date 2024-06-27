// src/app/layout.js
import '../styles/globals.scss';
import MyThemeProvider from '../components/ThemeProvider';
import Layout from '@/components/Layout';
import "@fontsource/quicksand";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MyThemeProvider>
          <Layout>
            {children}
          </Layout>
        </MyThemeProvider>
      </body>
    </html>
  );
}
