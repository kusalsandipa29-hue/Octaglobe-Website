import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import wordmark from '../../imports/Wordmark.png';
import wordmarkInvert from '../../imports/Wordmark__Invert_.png';

const PAGE_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Blog', to: '/blog' },
  { label: 'About', to: '/about' },
];

const SECTION_LINKS = [
  { label: 'Process', target: 'operating-model' },
  { label: 'Research', target: 'research-engine' },
  { label: 'Philosophy', target: 'philosophy' },
  { label: 'Connect', target: 'connect' },
];

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();
  const isHome = pathname === '/';
  const solid = open || scrolled || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname, hash]);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 767.98px)');
    const onChange = (event: MediaQueryListEvent) => {
      if (!event.matches) setOpen(false);
    };

    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;

    const focusDrawer = window.requestAnimationFrame(() => {
      drawerRef.current?.querySelector<HTMLElement>('[data-initial-focus]')?.focus();
    });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setOpen(false);
        return;
      }

      if (event.key !== 'Tab' || !drawerRef.current) return;
      const focusable = Array.from(drawerRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR));
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      window.cancelAnimationFrame(focusDrawer);
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      triggerRef.current?.focus();
    };
  }, [open]);

  const close = () => setOpen(false);

  const goHome = () => {
    close();
    if (isHome) {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    }
  };

  const goToSection = (target: string) => {
    close();
    if (!isHome || hash !== `#${target}`) navigate({ pathname: '/', hash: target });

    window.setTimeout(() => {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      document.getElementById(target)?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
    }, isHome ? 40 : 120);
  };

  return (
    <>
      <header className={`mobile-nav ${solid ? 'mobile-nav--solid' : 'mobile-nav--overlay'}`}>
        <div className="mobile-nav__bar">
          <Link className="mobile-nav__brand" to="/" aria-label="OctaGlobe home" onClick={goHome}>
            <img src={solid ? wordmark : wordmarkInvert} alt="OctaGlobe" />
          </Link>
          <button
            ref={triggerRef}
            className="mobile-nav__trigger"
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={open}
            aria-controls="mobile-navigation-drawer"
            onClick={() => setOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {open && (
        <div className="mobile-nav__layer">
          <button className="mobile-nav__backdrop" type="button" aria-label="Close navigation menu" onClick={close} />
          <div
            ref={drawerRef}
            id="mobile-navigation-drawer"
            className="mobile-nav__drawer"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-navigation-title"
          >
            <div className="mobile-nav__drawer-head">
              <span id="mobile-navigation-title">Menu</span>
              <button
                className="mobile-nav__close"
                type="button"
                aria-label="Close navigation menu"
                onClick={close}
                data-initial-focus
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <nav className="mobile-nav__links" aria-label="Mobile navigation">
              <div className="mobile-nav__group">
                <span className="mobile-nav__group-label">Pages</span>
                {PAGE_LINKS.map((item) => {
                  const active = pathname === item.to;
                  return (
                    <Link
                      key={item.to}
                      className={`mobile-nav__link${active ? ' mobile-nav__link--active' : ''}`}
                      to={item.to}
                      aria-current={active ? 'page' : undefined}
                      onClick={item.to === '/' ? goHome : close}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              <div className="mobile-nav__group">
                <span className="mobile-nav__group-label">Explore</span>
                {SECTION_LINKS.map((item) => (
                  <button
                    key={item.target}
                    className={`mobile-nav__link${isHome && hash === `#${item.target}` ? ' mobile-nav__link--active' : ''}`}
                    type="button"
                    aria-current={isHome && hash === `#${item.target}` ? 'location' : undefined}
                    onClick={() => goToSection(item.target)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
