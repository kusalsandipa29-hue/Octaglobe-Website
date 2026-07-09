import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { COLORS, MONO, MAX_W, Reveal, Frame } from '../components/primitives';
import { SiteFooter } from '../components/SiteFooter';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

type Category = 'Process' | 'Research' | 'Product' | 'Design' | 'Engineering';
const CATEGORIES: ('All' | Category)[] = ['All', 'Process', 'Research', 'Product', 'Design', 'Engineering'];

interface Post {
  id: string;
  title: string;
  excerpt: string;
  category: Category;
  author: string;
  date: string;
  readTime: string;
  image?: string;
  featured?: boolean;
  body: string[];
}

const POSTS: Post[] = [
  {
    id: 'why-we-validate-first',
    title: 'Why we validate before we build a single screen',
    excerpt: 'The most expensive code is the code nobody needed. Here is the loop we run before committing to a product.',
    category: 'Process',
    author: 'OctaGlobe',
    date: 'Jul 2, 2026',
    readTime: '6 min',
    featured: true,
    body: [
      'Every product we build starts as a question, not a plan. Before we design a screen or write a line of code, we run a validation loop that forces the opportunity to prove itself.',
      'It sounds slow. In practice it is the fastest thing we do — because it kills weak ideas before they cost us months.',
      'Research before assumptions. Validation before investment. Everything downstream depends on getting this right.',
    ],
  },
  {
    id: 'observing-the-workaround',
    title: 'Observing the workaround: where real problems hide',
    excerpt: 'People rarely tell you their problems. They show you — in the spreadsheets and habits they built to cope.',
    category: 'Research',
    author: 'OctaGlobe',
    date: 'Jun 24, 2026',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    body: [
      'The best signal in research is not what people say — it is what they build to survive a broken process.',
      'We look for the duct tape: the shared doc, the manual export, the Slack channel that exists only because a tool failed someone.',
    ],
  },
  {
    id: 'smallest-artifact',
    title: 'Ship the smallest artifact that can prove the point',
    excerpt: 'A prototype is not a small product. It is an experiment with a hypothesis attached.',
    category: 'Product',
    author: 'OctaGlobe',
    date: 'Jun 18, 2026',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1686061592689-312bbfb5c055?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    body: [
      'We do not build MVPs to launch. We build them to learn. The question is always: what is the smallest thing that can move a real behavior?',
    ],
  },
  {
    id: 'four-primitives',
    title: 'Designing with four primitives: Node, Line, Module, Frame',
    excerpt: 'A tiny visual language keeps every product in the system feeling like part of one operating system.',
    category: 'Design',
    author: 'OctaGlobe',
    date: 'Jun 9, 2026',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1590103514966-5e2a11c13e21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    body: [
      'Consistency is not a style guide. It is a set of primitives so small they are impossible to misuse.',
    ],
  },
  {
    id: 'measuring-outcomes',
    title: 'Measuring outcomes, not opinions',
    excerpt: 'Every launch is an instrument. We decide in advance what result would prove us right — or wrong.',
    category: 'Process',
    author: 'OctaGlobe',
    date: 'May 30, 2026',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    body: [
      'A launch without a metric is just a vibe. We define the measurable behavior before we ship, so the result can actually teach us something.',
    ],
  },
  {
    id: 'industry-agnostic',
    title: 'Being industry-agnostic on purpose',
    excerpt: 'The market changes. The operating system does not. Why we refuse to pick one niche.',
    category: 'Research',
    author: 'OctaGlobe',
    date: 'May 21, 2026',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1771922748624-b205cf5d002d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    body: [
      'We follow opportunity, not industry. The domain is a variable; the way we discover and validate is the constant.',
    ],
  },
  {
    id: 'building-in-loops',
    title: 'Building in loops, not launches',
    excerpt: 'Momentum compounds. Findings from one product quietly seed the next.',
    category: 'Engineering',
    author: 'OctaGlobe',
    date: 'May 12, 2026',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    body: [
      'A launch is not the finish line. It is one turn of a loop that measures, improves, and scales.',
    ],
  },
  {
    id: 'small-team-high-ownership',
    title: 'Small team, high ownership',
    excerpt: 'A focused team that owns outcomes end to end beats a big team that owns tickets.',
    category: 'Process',
    author: 'OctaGlobe',
    date: 'May 3, 2026',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1590402494587-44b71d7772f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    body: [
      'Ownership is the multiplier. When the same people research, build, and measure, nothing gets lost in a handoff.',
    ],
  },
];

const CAT_INDEX: Record<Category, string> = {
  Process: '01',
  Research: '02',
  Product: '03',
  Design: '04',
  Engineering: '05',
};

export function Blog() {
  const [active, setActive] = useState<'All' | Category>('All');
  const [reading, setReading] = useState<Post | null>(null);

  const featured = POSTS.find((p) => p.featured)!;
  const filtered = useMemo(() => {
    const rest = POSTS.filter((p) => !p.featured);
    return active === 'All' ? rest : rest.filter((p) => p.category === active);
  }, [active]);

  return (
    <div style={{ backgroundColor: COLORS.clarity }}>
      {/* Header */}
      <section style={{ padding: '150px 0 48px' }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto', padding: '0 40px' }}>
          <Reveal>
            <h1 style={{ fontSize: 'clamp(44px, 6vw, 84px)', fontWeight: 600, letterSpacing: '-0.04em', color: COLORS.structure }}>
              Blog
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p style={{ fontSize: 19, lineHeight: 1.7, color: COLORS.ink55, maxWidth: 560, marginTop: 20 }}>
              Notes from inside the operating system — how we research opportunities, validate ideas,
              and build products people genuinely use.
            </p>
          </Reveal>

          {/* Filters */}
          <Reveal delay={0.14}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 40 }}>
              {CATEGORIES.map((c) => {
                const on = active === c;
                return (
                  <button
                    key={c}
                    onClick={() => setActive(c)}
                    style={{
                      fontFamily: MONO,
                      fontSize: 12,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      padding: '9px 18px',
                      borderRadius: 999,
                      cursor: 'pointer',
                      border: `1px solid ${on ? COLORS.structure : COLORS.line}`,
                      backgroundColor: on ? COLORS.structure : 'transparent',
                      color: on ? COLORS.clarity : COLORS.ink55,
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured */}
      <section style={{ paddingBottom: 24 }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto', padding: '0 40px' }}>
          <motion.button
            onClick={() => setReading(featured)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: 'block',
              width: '100%',
              textAlign: 'left',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              borderRadius: 24,
              overflow: 'hidden',
              backgroundColor: COLORS.structure,
            }}
          >
            <div
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 380 }}
              className="lg:grid-cols-2 grid-cols-1"
            >
              <div style={{ padding: '56px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 40 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: COLORS.signal }} />
                  <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>
                    Featured · {featured.category}
                  </span>
                </div>
                <div>
                  <h2 style={{ fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 600, lineHeight: 1.15, letterSpacing: '-0.02em', color: COLORS.clarity, marginBottom: 20 }}>
                    {featured.title}
                  </h2>
                  <p style={{ fontSize: 16, lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', maxWidth: 420, marginBottom: 28 }}>
                    {featured.excerpt}
                  </p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: MONO, fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', color: COLORS.signal }}>
                    Read more
                    <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
                      <path d="M1 6H17M17 6L12 1M17 6L12 11" stroke={COLORS.signal} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Node-diagram visual panel */}
              <div style={{ position: 'relative', backgroundColor: 'rgba(3,239,98,0.06)', overflow: 'hidden', minHeight: 260 }}>
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage:
                      'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }}
                />
                <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
                  <line x1="30%" y1="35%" x2="60%" y2="55%" stroke="rgba(3,239,98,0.5)" strokeWidth="1" />
                  <line x1="60%" y1="55%" x2="75%" y2="30%" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                  <line x1="60%" y1="55%" x2="45%" y2="78%" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                  {[
                    ['30%', '35%', 5, true],
                    ['60%', '55%', 8, true],
                    ['75%', '30%', 4, false],
                    ['45%', '78%', 4, false],
                  ].map(([cx, cy, r, fill], i) => (
                    <circle key={i} cx={cx as string} cy={cy as string} r={r as number} fill={fill ? COLORS.signal : 'transparent'} stroke={COLORS.signal} strokeWidth="1.4" />
                  ))}
                </svg>
              </div>
            </div>
          </motion.button>
        </div>
      </section>

      {/* Grid */}
      <section style={{ padding: '32px 0 80px' }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto', padding: '0 40px' }}>
          <motion.div
            layout
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}
            className="lg:grid-cols-3 sm:grid-cols-2 grid-cols-1"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((post) => (
                <PostCard key={post.id} post={post} onOpen={() => setReading(post)} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p style={{ fontFamily: MONO, fontSize: 13, color: COLORS.ink40, marginTop: 40 }}>
              // no posts in this category yet
            </p>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section style={{ padding: '40px 0 120px' }}>
        <div style={{ maxWidth: MAX_W, margin: '0 auto', padding: '0 40px' }}>
          <Newsletter />
        </div>
      </section>

      <SiteFooter />

      {/* Reader modal */}
      <AnimatePresence>
        {reading && <Reader post={reading} onClose={() => setReading(null)} />}
      </AnimatePresence>
    </div>
  );
}

function PostCard({ post, onOpen }: { post: Post; onOpen: () => void }) {
  const [hover, setHover] = useState(false);
  return (
    <motion.button
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      onClick={onOpen}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'block',
        textAlign: 'left',
        cursor: 'pointer',
        padding: 0,
        border: `1px solid ${hover ? COLORS.signal : COLORS.line}`,
        borderRadius: 18,
        overflow: 'hidden',
        backgroundColor: COLORS.clarity,
        transition: 'border-color 0.25s ease',
      }}
    >
      <div style={{ aspectRatio: '16 / 10', overflow: 'hidden', backgroundColor: COLORS.surface }}>
        {post.image ? (
          <ImageWithFallback
            src={post.image}
            alt={post.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.5s ease',
              transform: hover ? 'scale(1.04)' : 'scale(1)',
            }}
          />
        ) : (
          <div style={{ width: '100%', height: '100%', backgroundColor: 'rgba(3,239,98,0.08)' }} />
        )}
      </div>
      <div style={{ padding: '24px 24px 28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
          <span style={{ fontFamily: MONO, fontSize: 10, color: COLORS.signal }}>{CAT_INDEX[post.category]}</span>
          <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: COLORS.ink40 }}>
            {post.category}
          </span>
        </div>
        <h3 style={{ fontSize: 19, fontWeight: 600, lineHeight: 1.3, letterSpacing: '-0.01em', color: COLORS.structure, marginBottom: 12 }}>
          {post.title}
        </h3>
        <p style={{ fontSize: 14, lineHeight: 1.6, color: COLORS.ink55, marginBottom: 18 }}>{post.excerpt}</p>
        <div style={{ fontFamily: MONO, fontSize: 11, color: COLORS.ink40, letterSpacing: '0.02em' }}>
          {post.date} · {post.readTime}
        </div>
      </div>
    </motion.button>
  );
}

function Newsletter() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  return (
    <Frame ticks style={{ padding: '56px 48px', backgroundColor: COLORS.surface }}>
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 40, alignItems: 'center' }}
        className="lg:grid-cols-[1fr_auto] grid-cols-1"
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: COLORS.signal }} />
            <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: COLORS.ink40 }}>
              Newsletter
            </span>
          </div>
          <h3 style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 600, letterSpacing: '-0.02em', color: COLORS.structure, maxWidth: 420 }}>
            Field notes from the operating system.
          </h3>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (email.trim()) setDone(true);
          }}
          style={{ display: 'flex', gap: 10, minWidth: 320 }}
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@work.com"
            disabled={done}
            style={{
              flex: 1,
              padding: '13px 18px',
              borderRadius: 999,
              border: `1px solid ${COLORS.line}`,
              backgroundColor: COLORS.clarity,
              fontSize: 14,
              color: COLORS.structure,
              outline: 'none',
            }}
          />
          <button
            type="submit"
            disabled={done}
            style={{
              padding: '13px 22px',
              borderRadius: 999,
              border: 'none',
              cursor: done ? 'default' : 'pointer',
              backgroundColor: done ? COLORS.signal : COLORS.structure,
              color: done ? COLORS.structure : COLORS.clarity,
              fontFamily: MONO,
              fontSize: 12,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}
          >
            {done ? 'Subscribed' : 'Subscribe'}
          </button>
        </form>
      </div>
    </Frame>
  );
}

function Reader({ post, onClose }: { post: Post; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        backgroundColor: 'rgba(20,18,40,0.55)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        justifyContent: 'center',
        overflowY: 'auto',
        padding: '80px 20px',
      }}
    >
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: 720,
          backgroundColor: COLORS.clarity,
          borderRadius: 24,
          padding: '48px 56px 64px',
          height: 'fit-content',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: COLORS.signal }} />
            <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: COLORS.ink40 }}>
              {post.category} · {post.readTime}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              width: 34,
              height: 34,
              borderRadius: '50%',
              border: `1px solid ${COLORS.line}`,
              background: 'none',
              cursor: 'pointer',
              color: COLORS.ink55,
              fontSize: 16,
              lineHeight: 1,
            }}
          >
            ✕
          </button>
        </div>

        <h1 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 600, lineHeight: 1.15, letterSpacing: '-0.03em', color: COLORS.structure, marginBottom: 20 }}>
          {post.title}
        </h1>
        <div style={{ fontFamily: MONO, fontSize: 12, color: COLORS.ink40, marginBottom: 32 }}>
          {post.author} · {post.date}
        </div>

        {post.image && (
          <div style={{ borderRadius: 16, overflow: 'hidden', marginBottom: 32, border: `1px solid ${COLORS.line}` }}>
            <ImageWithFallback src={post.image} alt={post.title} style={{ width: '100%', display: 'block' }} />
          </div>
        )}

        <p style={{ fontSize: 19, lineHeight: 1.7, color: COLORS.structure, marginBottom: 24, fontWeight: 500 }}>
          {post.excerpt}
        </p>
        {post.body.map((p, i) => (
          <p key={i} style={{ fontSize: 17, lineHeight: 1.8, color: COLORS.ink70, marginBottom: 20 }}>
            {p}
          </p>
        ))}
      </motion.article>
    </motion.div>
  );
}
