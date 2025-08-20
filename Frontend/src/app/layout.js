import "@fontsource/quicksand";
import MyThemeProvider from '../components/ThemeProvider';
import '../styles/globals.scss';
import ClientLayout from "./ClientLayout";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MyThemeProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </MyThemeProvider>
      </body>
    </html>
  );
}
