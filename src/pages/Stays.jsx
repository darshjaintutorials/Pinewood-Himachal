import { useState } from 'react'
import PageHero from '../components/PageHero'
import StayCard from '../components/StayCard'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import CtaBanner from '../components/CtaBanner'
import { stays } from '../data/content'
import './Stays.css'

const filters = ['All', 'Dome', 'Private Room', 'Dorm']

const inclusions = [
  { icon: 'wifi', label: 'Fibre Wi-Fi' },
  { icon: 'fire', label: 'Hot water 24/7' },
  { icon: 'leaf', label: 'Breakfast included' },
  { icon: 'bed', label: 'Fresh mountain linens' },
  { icon: 'clock', label: 'Flexible check-in' },
  { icon: 'spa', label: 'Free yoga sessions' },
]

export default function Stays() {
  const [active, setActive] = useState('All')
  const filtered =
    active === 'All' ? stays : stays.filter((s) => s.type === active)

  return (
    <div>
      <PageHero
        eyebrow="Domes · Rooms · Bunks"
        title="Find your perfect mountain stay"
        sub="From transparent stargazer domes to private valley rooms and friendly bunk lofts — every space is hand-built, heated and made for rest."
        image="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="section">
        <div className="container">
          <Reveal className="stays-filter">
            {filters.map((f) => (
              <button
                key={f}
                className={`filter-chip ${active === f ? 'is-active' : ''}`}
                onClick={() => setActive(f)}
              >
                {f}
                {f !== 'All' && (
                  <span className="filter-chip__count">
                    {stays.filter((s) => s.type === f).length}
                  </span>
                )}
              </button>
            ))}
          </Reveal>

          <div className="grid stays-page-grid mt-4">
            {filtered.map((stay, i) => (
              <Reveal key={stay.id} delay={i * 0.06}>
                <StayCard stay={stay} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusions */}
      <section className="section bg-alt">
        <div className="container">
          <Reveal className="head-block">
            <p className="eyebrow">Every stay includes</p>
            <h2 className="section-title">Comfort, sorted — so you can wander free</h2>
          </Reveal>
          <div className="inclusions mt-4">
            {inclusions.map((inc, i) => (
              <Reveal className="inclusion" key={inc.label} delay={i * 0.05}>
                <span className="inclusion__icon">
                  <Icon name={inc.icon} size={22} />
                </span>
                {inc.label}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  )
}
