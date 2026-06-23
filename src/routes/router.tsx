import { createBrowserRouter } from 'react-router';
import RootLayout from '@/components/layouts/RootLayout';
import MainPage from '@/pages/MainPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: MainPage,
      },
    ],
  },
]);
