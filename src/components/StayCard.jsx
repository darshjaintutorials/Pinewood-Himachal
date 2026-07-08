import { Link } from 'react-router-dom'
import Icon from './Icon'
import './StayCard.css'

export default function StayCard({ stay }) {
  return (
    <article className="stay-card card">
      <div className="stay-card__media">
        <img src={stay.image} alt={stay.name} loading="lazy" />
        <span className="stay-card__type">{stay.type}</span>
        {stay.badge && <span className="stay-card__badge">{stay.badge}</span>}
      </div>

      <div className="stay-card__body">
        <div className="stay-card__head">
          <h3>{stay.name}</h3>
          <p className="stay-card__tagline">{stay.tagline}</p>
        </div>

        <div className="stay-card__meta">
          <span>
            <Icon name="users" size={16} /> {stay.capacity}
          </span>
          <span>
            <Icon name="ruler" size={16} /> {stay.size}
          </span>
        </div>

        <ul className="stay-card__features">
          {stay.features.slice(0, 4).map((f) => (
            <li key={f}>
              <Icon name="check" size={14} /> {f}
            </li>
          ))}
        </ul>

        <div className="stay-card__foot">
          <div className="stay-card__price">
            <span className="stay-card__amount">₹{stay.price.toLocaleString('en-IN')}</span>
            <span className="stay-card__unit">/ {stay.unit}</span>
          </div>
          <Link to="/contact" className="btn btn--dark stay-card__btn">
            Reserve
          </Link>
        </div>
      </div>
    </article>
  )
}
