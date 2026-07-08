import { Link } from 'react-router-dom'
import Icon from '../components/Icon'

export default function NotFound() {
  return (
    <section
      className="section"
      style={{
        minHeight: '78vh',
        display: 'grid',
        placeItems: 'center',
        textAlign: 'center',
        paddingTop: '8rem',
      }}
    >
      <div className="container" style={{ maxWidth: 560 }}>
        <span
          style={{
            display: 'grid',
            placeItems: 'center',
            width: 72,
            height: 72,
            margin: '0 auto 1.5rem',
            borderRadius: 20,
            background: 'var(--pine-800)',
            color: 'var(--clay-400)',
          }}
        >
          <Icon name="compass" size={34} />
        </span>
        <p className="eyebrow" style={{ justifyContent: 'center' }}>
          Off the trail
        </p>
        <h1 className="display" style={{ fontSize: 'clamp(3rem,10vw,6rem)' }}>
          404
        </h1>
        <p className="lead mx-auto mt-2">
          Looks like this path leads nowhere. Let's get you back to the
          mountains.
        </p>
        <div
          className="mt-3"
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}
        >
          <Link to="/" className="btn btn--primary">
            Back home
          </Link>
          <Link to="/stays" className="btn btn--ghost">
            Browse stays
          </Link>
        </div>
      </div>
    </section>
  )
}
