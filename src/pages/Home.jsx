import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import StayCard from '../components/StayCard'
import CtaBanner from '../components/CtaBanner'
import { stays, services, experiences, stats, testimonials } from '../data/content'
import './Home.css'

export default function Home() {
  const featured = stays.slice(0, 3)

  return (
    <div className="home">
      {/* ===================== HERO ===================== */}
      <section className="hero">
        <div className="hero__bg" />
        <div className="hero__overlay" />
        <div className="container hero__inner">
          <motion.div
            className="hero__content"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
            }}
          >
            <motion.span className="hero__eyebrow" variants={fade}>
              <Icon name="pin" size={15} /> Dharamkot Ridge · Himachal Pradesh
            </motion.span>
            <motion.h1 className="hero__title display" variants={fade}>
              Sleep among
              <br />
              the <span className="serif-italic">deodars.</span>
            </motion.h1>
            <motion.p className="hero__sub" variants={fade}>
              A premium mountain hostel where geodesic domes, private rooms and a
              warm community of travellers meet 2,200 metres above the world.
            </motion.p>
            <motion.div className="hero__actions" variants={fade}>
              <Link to="/stays" className="btn btn--primary">
                Check out our stays
              </Link>
              <Link to="/experiences" className="btn btn--outline-light">
                See experiences
              </Link>
            </motion.div>
            <motion.div className="hero__trust" variants={fade}>
              <div className="hero__stars">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="star" size={16} />
                ))}
              </div>
              <span>
                <strong>4.9/5</strong> from 1,200+ travellers
              </span>
            </motion.div>
          </motion.div>
        </div>

        <a href="#intro" className="hero__scroll" aria-label="Scroll down">
          <span />
        </a>
      </section>

      {/* ===================== LOGO / TRUST MARQUEE ===================== */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[...marqueeItems, ...marqueeItems].map((m, i) => (
            <span key={i} className="marquee__item">
              <Icon name="mountain" size={16} /> {m}
            </span>
          ))}
        </div>
      </div>

      {/* ===================== INTRO ===================== */}
      <section className="section" id="intro">
        <div className="container intro">
          <Reveal className="intro__copy">
            <p className="eyebrow">Welcome to Pinewood</p>
            <h2 className="section-title">
              Not just a place to sleep — a place to belong.
            </h2>
            <p className="lead mt-2">
              Pinewood began as a single timber cabin and a kettle of chai. Today
              it is a hand-built mountain hideaway for the curious — solo
              wanderers, couples, remote workers and lifelong friends who haven't
              met yet.
            </p>
            <p className="mt-2" style={{ color: 'var(--ink-700)' }}>
              We sit on a quiet ridge above the Kangra valley, wrapped in deodar
              forest and framed by the Dhauladhar peaks. Wake to birdsong, work
              from a sun-deck, trek a hidden trail, and end every day around the
              fire with people from across the world.
            </p>
            <div className="intro__points mt-3">
              {introPoints.map((p) => (
                <div className="intro__point" key={p}>
                  <Icon name="check" size={16} />
                  {p}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="intro__media" delay={0.15}>
            <div className="intro__img intro__img--main">
              <img
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80"
                alt="Cozy hostel interior"
                loading="lazy"
              />
            </div>
            <div className="intro__img intro__img--sub">
              <img
                src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?auto=format&fit=crop&w=600&q=80"
                alt="Mountain view from Pinewood"
                loading="lazy"
              />
            </div>
            <div className="intro__chip">
              <span className="intro__chip-num">9 yrs</span>
              <span className="intro__chip-label">hosting travellers</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== SERVICES ===================== */}
      <section className="section bg-alt">
        <div className="container">
          <Reveal className="head-block text-center mx-auto">
            <p className="eyebrow" style={{ justifyContent: 'center' }}>
              What we offer
            </p>
            <h2 className="section-title mx-auto">
              Everything you need to slow down and explore
            </h2>
          </Reveal>

          <div className="services-grid mt-4">
            {services.map((s, i) => (
              <Reveal
                as="article"
                className="service"
                key={s.title}
                delay={i * 0.06}
              >
                <span className="service__icon">
                  <Icon name={s.icon} size={26} />
                </span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FEATURED STAYS ===================== */}
      <section className="section">
        <div className="container">
          <div className="head-row">
            <Reveal>
              <p className="eyebrow">Where you'll stay</p>
              <h2 className="section-title">Domes, rooms &amp; bunks</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Link to="/stays" className="link-arrow">
                View all stays <Icon name="arrow" size={18} />
              </Link>
            </Reveal>
          </div>

          <div className="grid stays-grid mt-4">
            {featured.map((stay, i) => (
              <Reveal key={stay.id} delay={i * 0.08}>
                <StayCard stay={stay} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== EXPERIENCES STRIP ===================== */}
      <section className="section bg-pine exp-strip">
        <div className="container">
          <div className="head-row">
            <Reveal>
              <p className="eyebrow" style={{ color: 'var(--clay-400)' }}>
                Things to do
              </p>
              <h2 className="section-title" style={{ color: 'var(--cream-50)' }}>
                Adventures from your doorstep
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Link
                to="/experiences"
                className="link-arrow"
                style={{ color: 'var(--clay-400)' }}
              >
                All experiences <Icon name="arrow" size={18} />
              </Link>
            </Reveal>
          </div>

          <div className="exp-grid mt-4">
            {experiences.map((e, i) => (
              <Reveal as="article" className="exp" key={e.title} delay={i * 0.07}>
                <div className="exp__media">
                  <img src={e.image} alt={e.title} loading="lazy" />
                </div>
                <div className="exp__body">
                  <span className="exp__duration">{e.duration}</span>
                  <h3>{e.title}</h3>
                  <p>{e.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== STATS ===================== */}
      <section className="section--tight">
        <div className="container">
          <div className="stats">
            {stats.map((s, i) => (
              <Reveal className="stat" key={s.label} delay={i * 0.08}>
                <span className="stat__value">{s.value}</span>
                <span className="stat__label">{s.label}</span>
                <span className="stat__sub">{s.sub}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section className="section bg-alt">
        <div className="container">
          <Reveal className="head-block text-center mx-auto">
            <p className="eyebrow" style={{ justifyContent: 'center' }}>
              Guest stories
            </p>
            <h2 className="section-title mx-auto">Loved by travellers worldwide</h2>
          </Reveal>

          <div className="testi-grid mt-4">
            {testimonials.map((t, i) => (
              <Reveal as="blockquote" className="testi" key={t.name} delay={i * 0.08}>
                <span className="testi__mark">
                  <Icon name="quote" size={28} />
                </span>
                <div className="testi__stars">
                  {[...Array(t.rating)].map((_, j) => (
                    <Icon key={j} name="star" size={15} />
                  ))}
                </div>
                <p className="testi__quote">“{t.quote}”</p>
                <footer className="testi__foot">
                  <strong>{t.name}</strong>
                  <span>{t.from}</span>
                </footer>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  )
}

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const marqueeItems = [
  'Geodesic Domes',
  'Mountain Kitchen',
  'Guided Treks',
  'Fibre Wi-Fi',
  'Bonfire Nights',
  'Yoga & Wellness',
  'Café & Bakery',
]

const introPoints = [
  'Hand-built in local pine & stone',
  'Carbon-conscious & solar-powered',
  '24/7 mountain hospitality team',
  'Walkable to Triund trail-heads',
]
