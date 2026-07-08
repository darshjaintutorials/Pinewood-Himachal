import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import CtaBanner from '../components/CtaBanner'
import { experiences, services } from '../data/content'
import './Experiences.css'

const dayPlan = [
  { time: '6:30', title: 'Sunrise yoga on the deck', note: 'Optional · all levels' },
  { time: '8:00', title: 'Fresh bakes & filter coffee', note: 'Café opens' },
  { time: '9:30', title: 'Guided trek departs', note: 'Triund ridge or waterfalls' },
  { time: '13:30', title: 'Himachali thali lunch', note: 'Communal table' },
  { time: '16:00', title: 'Free time / work / café', note: 'Slow it down' },
  { time: '19:30', title: 'Bonfire & live music', note: 'Stories under the stars' },
]

export default function Experiences() {
  return (
    <div>
      <PageHero
        eyebrow="Things to do"
        title="Adventures, culture & calm"
        sub="Pinewood is a basecamp for the curious. Trek to hidden ridges, cook with a local family, or simply sink into a hammock — the mountain sets the pace."
        image="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=2000&q=80"
      />

      {/* Signature experiences */}
      <section className="section">
        <div className="container">
          <Reveal className="head-block">
            <p className="eyebrow">Signature experiences</p>
            <h2 className="section-title">Curated by people who live here</h2>
          </Reveal>

          <div className="exp-list mt-4">
            {experiences.map((e, i) => (
              <Reveal
                as="article"
                className={`exp-row ${i % 2 ? 'exp-row--rev' : ''}`}
                key={e.title}
                delay={0.05}
              >
                <div className="exp-row__media">
                  <img src={e.image} alt={e.title} loading="lazy" />
                  <span className="exp-row__tag">{e.duration}</span>
                </div>
                <div className="exp-row__body">
                  <h3>{e.title}</h3>
                  <p>{e.text}</p>
                  <p className="exp-row__more">
                    Led by certified local guides with all gear, safety and a
                    refuel stop included. Suitable for first-timers and seasoned
                    explorers alike.
                  </p>
                  <span className="link-arrow">
                    Reserve a spot <Icon name="arrow" size={18} />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* A day at Pinewood */}
      <section className="section bg-pine">
        <div className="container">
          <Reveal className="head-block">
            <p className="eyebrow" style={{ color: 'var(--clay-400)' }}>
              A day at Pinewood
            </p>
            <h2 className="section-title" style={{ color: 'var(--cream-50)' }}>
              From sunrise yoga to fireside stories
            </h2>
          </Reveal>

          <div className="timeline mt-4">
            {dayPlan.map((d, i) => (
              <Reveal className="tl-item" key={d.time} delay={i * 0.06}>
                <span className="tl-time">{d.time}</span>
                <span className="tl-dot" />
                <div className="tl-card">
                  <h3>{d.title}</h3>
                  <span>{d.note}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* On-site services recap */}
      <section className="section bg-alt">
        <div className="container">
          <Reveal className="head-block">
            <p className="eyebrow">On-site</p>
            <h2 className="section-title">Everything within a few steps</h2>
          </Reveal>
          <div className="svc-mini mt-4">
            {services.map((s, i) => (
              <Reveal className="svc-mini__item" key={s.title} delay={i * 0.05}>
                <span className="svc-mini__icon">
                  <Icon name={s.icon} size={22} />
                </span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  )
}
