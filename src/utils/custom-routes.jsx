import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home/Home';
import TodoPage from '../components/TodoPage/TodoPage';
import ExamsPage from '../components/ExampsPage/ExamsPage';
import Translate from '../components/TranslatorPage/TranslatorPage';
import CalendarPage from '../components/CalendarPage/CalendarPage';
import ExamPage from '../components/ExamPage/ExamPage';

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
  {
    path: '/translator',
    element: <Translate />,
    errorElement: <div>404</div>,
  },
  {
    path: '/calendar',
    element: <CalendarPage />,
    errorElement: <div>404</div>,
  },
  {
    path: '/aboutus',
    element: <ExamsPage />,
    errorElement: <div>404</div>,
  },
  {
    path: '/exam/:examId',
    element: <ExamPage />,
    errorElement: <div>404</div>,
  },
]);

export default router;
