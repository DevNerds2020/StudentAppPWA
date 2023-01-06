import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home/Home';
import TodoPage from '../components/TodoPage/TodoPage';
import ExamsPage from '../components/ExampsPage/ExamsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <div>404</div>,
  },
  {
    path: '/todo',
    element: <TodoPage />,
    errorElement: <div>404</div>,
  },
  {
    path: '/about',
    element: <div>About</div>,
    errorElement: <div>404</div>,
  },
  {
    path: '/tools',
    element: <div>Tools</div>,
    errorElement: <div>404</div>,
  },
  {
    path: '/exams',
    element: <ExamsPage />,
    errorElement: <div>404</div>,
  },
]);

export default router;
