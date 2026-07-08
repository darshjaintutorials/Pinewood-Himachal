import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import './CtaBanner.css'

export default function CtaBanner() {
  return (
    <section className="cta">
      <div className="container">
        <Reveal className="cta__inner">
          <div className="cta__glow" aria-hidden="true" />
          <p className="eyebrow" style={{ color: 'var(--clay-400)' }}>
            Your mountain awaits
          </p>
          <h2 className="cta__title">
            The pines are calling.
            <br />
            <span className="serif-italic">Come stay a while.</span>
          </h2>
          <p className="cta__text">
            Domes, private rooms and a community of travellers — all waiting on a
            quiet ridge in Himachal. Reserve your dates before the season fills up.
          </p>
          <div className="cta__actions">
            <Link to="/contact" className="btn btn--primary">
              Book your stay
            </Link>
            <Link to="/stays" className="btn btn--outline-light">
              Browse all stays
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
