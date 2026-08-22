// src/components/ThemeProvider.js
"use client";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useMemo } from 'react';

const theme = createTheme({
    palette: {
        primary: {
            main: '#042A29',
        },
        secondary: {
            main: '#C69B47',
        },
        background: {
            default: '#F2F3F2',
            paper: '#F2F3F2',
        },
        text: {
            primary: '#597370',
            secondary: '#54493C',
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
    },
});

export default function MyThemeProvider({ children }) {
    const memoizedTheme = useMemo(() => theme, []);

    return (
        <ThemeProvider theme={memoizedTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}
