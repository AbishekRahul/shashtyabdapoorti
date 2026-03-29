import { useMemo } from 'react';
import { AnimatePresence, motion as Motion, useReducedMotion } from 'framer-motion';
import './App.css';

// ── DATA ──────────────────────────────────────────────────────────────────────
const CEREMONY = [
  { id: 'date_1', label: 'Day 1 - Rudra Ekadashini', value: '18 April 2026' },
  { id: 'date_2', label: 'Day 2 - Shashtyabdapoorti', value: '19 April 2026' },
  { id: 'muhurtham', label: 'Muhurtham', value: '10:00 AM – 11:30 AM' },
  { id: 'venue', label: 'Venue', value: 'VilludaiyanPattu Marriage Hall', sub: 'Neyveli – 607 801' },
];



// ── HELPERS ───────────────────────────────────────────────────────────────────
function buildPetals() {
  return Array.from({ length: 22 }, (_, i) => ({
    id: i,
    left: 2 + ((i * 11) % 96),
    delay: (i % 7) * 1.1,
    dur: 13 + (i % 5) * 2.2,
    drift: -22 + (i % 6) * 8,
    size: 6 + (i % 4) * 3,
    opacity: 0.16 + (i % 5) * 0.06,
    rotate: i * 23,
  }));
}

// ── SVG / UI PRIMITIVES ───────────────────────────────────────────────────────
function OmGlyph() {
  return (
    <Motion.div className="om-symbol"
      initial={{ opacity: 0, scale: 0.75 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
    >ௐ</Motion.div>
  );
}

function KolamBorder() {
  const diamonds = [80, 160, 240, 320, 400, 480, 560, 640, 720];
  return (
    <svg viewBox="0 0 800 56" className="kolam-border" aria-hidden="true" preserveAspectRatio="none">
      <defs>
        <linearGradient id="kg" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D4A017" stopOpacity="0" />
          <stop offset="18%" stopColor="#F5C842" stopOpacity="0.85" />
          <stop offset="82%" stopColor="#F5C842" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#D4A017" stopOpacity="0" />
        </linearGradient>
      </defs>
      <Motion.line x1="0" y1="28" x2="800" y2="28"
        stroke="url(#kg)" strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.2, delay: 2.5, ease: 'easeInOut' }}
      />
      {diamonds.map((x, i) => (
        <g key={x}>
          <Motion.path d={`M${x},16 L${x + 12},28 L${x},40 L${x - 12},28 Z`}
            fill="none" stroke="#F5C842" strokeWidth="1.1" strokeOpacity="0.65"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 2.8 + i * 0.08 }}
          />
          <Motion.circle cx={x} cy={28} r="2.2" fill="#F5C842" fillOpacity="0.88"
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            transition={{ duration: 0.35, delay: 3.2 + i * 0.08 }}
          />
        </g>
      ))}
    </svg>
  );
}

function GoldenDivider() {
  return (
    <div className="golden-divider" aria-hidden="true">
      <span className="golden-divider__line" />
      <span className="golden-divider__motif">✦</span>
      <span className="golden-divider__line" />
    </div>
  );
}

function LampSVG() {
  return (
    <svg viewBox="0 0 40 60" className="lamp-icon" aria-hidden="true">
      <defs>
        <linearGradient id="lb" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5C842" />
          <stop offset="100%" stopColor="#8A6930" />
        </linearGradient>
      </defs>
      <ellipse cx="20" cy="48" rx="12" ry="4" fill="#D4A017" opacity="0.35" />
      <path d="M12 42 Q12 28 20 24 Q28 28 28 42 Z" fill="url(#lb)" />
      <rect x="18" y="36" width="4" height="8" fill="#8A6930" />
      <ellipse cx="20" cy="44" rx="6" ry="2" fill="#8A6930" />
      <Motion.path d="M20 24 Q22 18 20 12 Q18 18 20 24" fill="#F5C842"
        animate={{ scaleY: [1, 1.15, 0.88, 1.1, 1], skewX: [0, 2, -2, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '20px 24px' }}
      />
      <Motion.path d="M20 22 Q21 17 20 14 Q19 17 20 22" fill="#fff8e1"
        animate={{ scaleY: [1, 1.2, 0.82, 1.05, 1], skewX: [0, -1, 2, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
        style={{ transformOrigin: '20px 22px' }}
      />
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="detail-icon">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="16" y1="2" x2="16" y2="6" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="detail-icon">
      <circle cx="12" cy="12" r="9" />
      <polyline points="12,6 12,12 15,15" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="detail-icon">
      <path d="M12 2a7 7 0 0 1 7 7c0 4.5-7 13-7 13S5 13.5 5 9a7 7 0 0 1 7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

const ICONS = { date_1: IconCalendar, date_2: IconCalendar, muhurtham: IconClock, venue: IconPin };

// ── CURTAIN ───────────────────────────────────────────────────────────────────
function CurtainReveal() {
  const less = useReducedMotion();
  if (less) return null;
  return (
    <Motion.div className="curtain"
      initial={{ opacity: 1 }} animate={{ opacity: 0, pointerEvents: 'none' }}
      transition={{ delay: 1.3, duration: 0.45 }} aria-hidden="true"
    >
      <Motion.div className="curtain__panel curtain__panel--left"
        initial={{ x: 0 }} animate={{ x: '-100%' }}
        transition={{ duration: 1.35, ease: [0.76, 0, 0.24, 1] }}
      />
      <Motion.div className="curtain__panel curtain__panel--right"
        initial={{ x: 0 }} animate={{ x: '100%' }}
        transition={{ duration: 1.35, ease: [0.76, 0, 0.24, 1] }}
      />
    </Motion.div>
  );
}

// ── FLOATING JASMINE ──────────────────────────────────────────────────────────
function FloatingJasmine() {
  const less = useReducedMotion();
  const petals = useMemo(buildPetals, []);
  if (less) return null;
  return (
    <div className="floating-jasmine" aria-hidden="true">
      {petals.map((p) => (
        <Motion.span key={p.id} className="jasmine-petal"
          style={{ left: `${p.left}%`, width: `${p.size}px`, height: `${p.size * 2.2}px`, opacity: p.opacity }}
          initial={{ y: '-8vh', rotate: p.rotate }}
          animate={{ y: '108vh', x: [0, p.drift, p.drift * -0.4, p.drift * 0.6], rotate: [p.rotate, p.rotate + 180, p.rotate + 90, p.rotate + 270] }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'linear' }}
        />
      ))}
    </div>
  );
}

// ── SECTIONS ──────────────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.65, delay },
});

function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__content">
        <div className="hero__om-wrap">
          <OmGlyph />
          <Motion.div className="om-ring"
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        <Motion.p className="hero__kicker"
          initial={{ opacity: 0, letterSpacing: '0.1em' }}
          animate={{ opacity: 1, letterSpacing: '0.28em' }}
          transition={{ duration: 0.9, delay: 1.8 }}
        >
          Shashtyabdapoorti Invitation
        </Motion.p>

        <Motion.p className="hero__tamil"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.0 }}
        >
          அருபதம் கல்யாணம் · ஸ்ரீ கணேஷாய நமஃ
        </Motion.p>

        <Motion.h1 className="hero__names"
          initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.1 }}
        >
          <span className="hero__name">Krithivasan.S</span>
          <span className="hero__amp">⁘</span>
          <span className="hero__name">Anuradha.K</span>
        </Motion.h1>

        <Motion.div className="hero__date-wrap"
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.35 }}
        >
        </Motion.div>

        <Motion.div className="hero__kolam-wrap"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <KolamBorder />
        </Motion.div>

        <Motion.p className="hero__scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.55, 0] }}
          transition={{ duration: 2.2, delay: 3.8, repeat: Infinity }}
        >
          ↓ Scroll to explore
        </Motion.p>
      </div>
    </section>
  );
}

function CeremonyCards() {
  return (
    <section className="ceremony-cards" id="details">
      <div className="ceremony-cards__inner">
        <Motion.div className="section-header" {...fadeUp()}>
          <p className="section-kicker">Sacred Details</p>
          <h2 className="section-title">The Auspicious Occasion</h2>
        </Motion.div>
        <div className="cards-grid">
          {CEREMONY.map((c, i) => {
            const Icon = ICONS[c.id];
            return (
              <Motion.article key={c.id} className="detail-card" {...fadeUp(i * 0.12)}
                whileHover={{ y: -6, transition: { duration: 0.28 } }}
              >
                <div className="detail-card__icon-wrap"><Icon /></div>
                <p className="detail-card__label">{c.label}</p>
                <h3 className="detail-card__value">{c.value}</h3>
                <p className="detail-card__sub">{c.sub}</p>
              </Motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}



function BlessingSection() {
  return (
    <section className="blessing" id="blessing">
      <div className="blessing__bg" aria-hidden="true" />
      <div className="blessing__inner">
        <Motion.div className="blessing__lamp-row" {...fadeUp()}>
          <LampSVG />
        </Motion.div>
        <Motion.p className="section-kicker section-kicker--light" {...fadeUp(0.15)}>
          A Blessing for the Ages
        </Motion.p>
        <Motion.blockquote className="blessing__quote" {...fadeUp(0.25)}>
          <span className="blessing__quote-mark">"</span>
          On the sacred turning of sixty years, we invite you to witness vows renewed in
          dharma, gratitude, and eternal joy.
          <span className="blessing__quote-mark">"</span>
        </Motion.blockquote>
        <Motion.p className="blessing__tamil" {...fadeUp(0.35)}>
          வந்து ஆசீர்வதிக்க வேண்டுகிறோம்
        </Motion.p>
        <Motion.div className="blessing__milestone"
          initial={{ opacity: 0, scale: 0.88 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <span className="milestone-number">60</span>
          <span className="milestone-label">Years of Grace &amp; Companionship</span>
        </Motion.div>
      </div>
    </section>
  );
}

function VenueSection() {
  return (
    <section className="venue" id="venue">
      <div className="venue__inner">
        <Motion.div className="section-header" {...fadeUp()}>
          <p className="section-kicker">Join Us</p>
          <h2 className="section-title">Arrive &amp; Celebrate</h2>
        </Motion.div>
        <div className="venue__grid">
          <Motion.div className="venue__address-card"
            initial={{ opacity: 0, x: -22 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7 }}
          >
            <p className="venue__label">Venue</p>
            <h3 className="venue__name">VilludaiyanPattu Marriage Hall</h3>
            <p className="venue__address">Neyveli - 607801<br /></p>
            <div className="venue__info-row">
              <div>
                <p className="venue__info-label">Date</p>
                <p className="venue__info-value">19 April 2026, Sunday</p>
              </div>
              <div>
                <p className="venue__info-label">Muhurtham</p>
                <p className="venue__info-value">10:00 AM – 11:30 AM</p>
              </div>
            </div>
            <div className="venue__map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.298593287593!2d79.51610711080146!3d11.602048343374815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a54b72a49f04049%3A0x5ef8ca318eeb0c60!2sVilludaiyanPattu%20Marriage%20Hall!5e0!3m2!1sen!2sin!4v1774802468067!5m2!1sen!2sin"
                width="100%"
                height="240"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Venue Map"
              ></iframe>
            </div>
          </Motion.div>

          <Motion.div className="venue__hosted-card"
            initial={{ opacity: 0, x: 22 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7, delay: 0.12 }}
          >
            <p className="venue__label">Warmly Invited By</p>
            <div className="hosted-names">
              <p className="hosted-name">Koushik & Swathi</p>
              <p className="hosted-name">Rahul & Gowry</p>
              <p className="hosted-name">Our families bundle of joy Drithi </p>
            </div>
            <div className="hosted__blessing">
              We seek your blessings and cherished presence as our beloved parents
              complete sixty sacred years together in grace and devotion.
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
}

function CouplePhotoSection() {
  return (
    <section className="couple-photo" id="couple">
      <div className="couple-photo__inner">
        <Motion.div className="section-header" {...fadeUp()}>
          <p className="section-kicker">The Celebrated Couple</p>
          <h2 className="section-title">Shashtyabdapoorti</h2>
        </Motion.div>

        <Motion.div className="couple-photo__frame-wrap"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Ornamental corners */}
          <span className="photo-corner photo-corner--tl" aria-hidden="true" />
          <span className="photo-corner photo-corner--tr" aria-hidden="true" />
          <span className="photo-corner photo-corner--bl" aria-hidden="true" />
          <span className="photo-corner photo-corner--br" aria-hidden="true" />

          <div className="couple-photo__img-wrap">
            <img
              src={`${import.meta.env.BASE_URL}couple.jpg`}
              alt="The couple in traditional Tamil Brahmin attire"
              className="couple-photo__img"
              loading="lazy"
            />
            <div className="couple-photo__overlay" aria-hidden="true" />
          </div>

          <Motion.div className="couple-photo__caption"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="couple-photo__caption-text">
              Sixty years of morning prayers, shared meals, and quiet devotion —
              dressed in the colours of grace, standing at the threshold of a new chapter.
            </p>
          </Motion.div>
        </Motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <KolamBorder />
      <div className="footer__inner">
        <Motion.p className="footer__tamil" {...fadeUp()}>
          ஓம் ஷாந்தி ஷாந்தி ஷாந்தி
        </Motion.p>
        <p className="footer__copy">With love &amp; blessings from the family</p>
      </div>
    </footer>
  );
}

// ── APP ───────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <CurtainReveal />
      <FloatingJasmine />
      <main className="page" role="main" id="main">
        <HeroSection />
        <CeremonyCards />
        <BlessingSection />
        <CouplePhotoSection />
        <VenueSection />
        <Footer />
      </main>
    </>
  );
}
