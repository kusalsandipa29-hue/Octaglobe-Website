import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { MobileNav } from './components/MobileNav';
import { Nav } from './components/Nav';
import { SideSections } from './components/SideSections';
import { COLORS } from './components/primitives';
import '../styles/shell-responsive.css';

export function Root() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname, hash]);

  const padTop = pathname === '/' ? 0 : 76;

  return (
    <div
      className={`site-shell ${pathname === '/' ? 'site-shell--home' : 'site-shell--subpage'}`}
      style={{
        width: '100%',
        backgroundColor: COLORS.clarity,
        color: COLORS.structure,
        paddingTop: padTop,
      }}
    >
      <div className="site-shell__desktop-nav">
        <Nav />
      </div>
      <MobileNav />
      <SideSections />
      <Outlet />
    </div>
  );
}
