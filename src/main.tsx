import * as Sentry from '@sentry/react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  debug: import.meta.env.DEV,
});

createRoot(document.getElementById('root')!).render(<App />);
