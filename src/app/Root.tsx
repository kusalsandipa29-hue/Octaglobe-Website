import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Nav } from './components/Nav';
import { COLORS } from './components/primitives';

export function Root() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return (
    <div style={{ width: '100%', backgroundColor: COLORS.clarity, color: COLORS.structure }}>
      <Nav />
      <Outlet />
    </div>
  );
}
