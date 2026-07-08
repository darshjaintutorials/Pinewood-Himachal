import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import CtaBanner from '../components/CtaBanner'
import { stats } from '../data/content'
import './About.css'

const values = [
  {
    icon: 'leaf',
    title: 'Light on the land',
    text: 'Solar power, rainwater harvesting, zero single-use plastic and food sourced from valley farms within 20 km.',
  },
  {
    icon: 'users',
    title: 'Community first',
    text: 'We hire and train locally, and every long table is built to turn strangers into the kind of friends you visit again.',
  },
  {
    icon: 'compass',
    title: 'Rooted in place',
    text: 'Our guides, recipes and stories come from the Kangra valley. We share Himachal as the people who call it home.',
  },
]

const team = [
  {
    name: 'Aarav Thakur',
    role: 'Founder & Host',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Meera Kapoor',
    role: 'Experiences Lead',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Tenzin Norbu',
    role: 'Head Trek Guide',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Priya Sharma',
    role: 'Kitchen & Café',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=500&q=80',
  },
]

export default function About() {
  return (
    <div>
      <PageHero
        eyebrow="Our story"
        title="Built by hand, run with heart"
        sub="Pinewood is a small mountain hostel with a big belief: that travel is best when it is slow, shared and rooted in the place you are visiting."
        image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=80"
      />

      {/* Story */}
      <section className="section">
        <div className="container about-story">
          <Reveal className="about-story__media">
            <img
              src="https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=900&q=80"
              alt="Mountain landscape in Himachal"
              loading="lazy"
            />
            <div className="about-story__badge">
              <Icon name="mountain" size={26} />
              <span>2,200 m above sea level</span>
            </div>
          </Reveal>
          <Reveal className="about-story__copy" delay={0.12}>
            <p className="eyebrow">How it began</p>
            <h2 className="section-title">
              One cabin, a kettle of chai, and a guestbook
            </h2>
            <p className="lead mt-2">
              In 2017, Aarav left a city desk to rebuild his grandparents' timber
              cabin on a forgotten pine ridge. Travellers started knocking — first
              for directions, then for a bed, then for a reason to stay another
              week.
            </p>
            <p className="mt-2" style={{ color: 'var(--ink-700)' }}>
              Nine years on, that one cabin has grown into a hand-built village of
              domes, rooms and bunks — but the spirit hasn't changed. Pinewood is
              still a place where you arrive a stranger and leave with a second
              family, a few new trails under your boots, and the mountains in your
              chest.
            </p>
            <div className="about-sign mt-3">
              <span className="about-sign__name">Aarav Thakur</span>
              <span className="about-sign__role">Founder, Pinewood</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats band */}
      <section className="section--tight">
        <div className="container">
          <div className="about-stats">
            {stats.map((s, i) => (
              <Reveal className="about-stat" key={s.label} delay={i * 0.07}>
                <span className="about-stat__value">{s.value}</span>
                <span className="about-stat__label">{s.label}</span>
                <span className="about-stat__sub">{s.sub}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-alt">
        <div className="container">
          <Reveal className="head-block">
            <p className="eyebrow">What we stand for</p>
            <h2 className="section-title">Three things we never compromise on</h2>
          </Reveal>
          <div className="values mt-4">
            {values.map((v, i) => (
              <Reveal className="value" key={v.title} delay={i * 0.08}>
                <span className="value__icon">
                  <Icon name={v.icon} size={26} />
                </span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <Reveal className="head-block">
            <p className="eyebrow">The people</p>
            <h2 className="section-title">Your hosts on the ridge</h2>
          </Reveal>
          <div className="team mt-4">
            {team.map((m, i) => (
              <Reveal className="member" key={m.name} delay={i * 0.06}>
                <div className="member__img">
                  <img src={m.img} alt={m.name} loading="lazy" />
                </div>
                <h3>{m.name}</h3>
                <span>{m.role}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  )
}
