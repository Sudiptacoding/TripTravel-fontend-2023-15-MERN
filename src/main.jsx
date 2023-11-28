import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'preline'
import AuthContext from './context/AuthContext.jsx';
import {
  RouterProvider,
} from "react-router-dom";
import router from './routers/Routes.jsx';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast';
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthContext>
    <Toaster/>
  </React.StrictMode>,
)
