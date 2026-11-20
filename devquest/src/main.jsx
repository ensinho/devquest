import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/tokens.css';
import { initTheme } from './utils/theme';

initTheme();

const params = new URLSearchParams(window.location.search);
const isShowcaseMode = params.get('showcase') === 'design-system';

const RootView = isShowcaseMode
  ? lazy(() => import('./components/DesignSystemShowcase.jsx'))
  : lazy(() => import('./App.jsx'));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={null}>
      <RootView />
    </Suspense>
  </StrictMode>
);
