import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './components/Pages/Home.jsx';
import ResetPassword from './components/Pages/ResetPassword.jsx'
import App from './App.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />
  },{
    path: "reset-password",
    element: <ResetPassword />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
