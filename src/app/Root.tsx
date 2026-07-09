import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Nav } from './components/Nav';
import { SideSections } from './components/SideSections';
import { COLORS } from './components/primitives';

export function Root() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname, hash]);

  const padTop = pathname === '/' ? 0 : 76;

  return (
    <div
      style={{
        width: '100%',
        backgroundColor: COLORS.clarity,
        color: COLORS.structure,
        paddingTop: padTop,
      }}
    >
      <Nav />
      <SideSections />
      <Outlet />
    </div>
  );
}
