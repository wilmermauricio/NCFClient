import './App.css'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import theme from '../theme/Theme'
import AppRoutes from './assets/AppRoutes/AppRoutes'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {

  const queryClient = new QueryClient();

  return (
    <>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient} >
          <BrowserRouter>
            <CssBaseline />
              <AppRoutes />
          </BrowserRouter>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  )
}

export default App
