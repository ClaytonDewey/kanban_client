import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// react router
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

// local imports
import Login from './components/Login';
import Task from './components/Task';
import Comments from './components/Comments';

const router = createBrowserRouter([
  { path: '/', element: <Login /> },
  { path: '/task', element: <Task /> },
  { path: '/comments', element: <Comments /> },
  { path: '/comments/:category/:id', element: <Comments /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>
);
