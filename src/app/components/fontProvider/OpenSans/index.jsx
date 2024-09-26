'use client'; 

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';

const theme = createTheme({
  typography: {
    fontFamily: 'Open Sans, sans-serif',
  },
});

const ThemeProviderWrapper = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderWrapper;
