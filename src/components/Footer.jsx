import { Link } from 'react-router-dom'
import Icon from './Icon'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand-col">
            <Link to="/" className="footer__brand">
              <span className="footer__mark">
                <Icon name="mountain" size={22} stroke={2} />
              </span>
              <span>
                Pinewood
                <em>Himachal</em>
              </span>
            </Link>
            <p className="footer__tag">
              A mountain hostel for travellers, dreamers and slow mornings —
              tucked into the deodar forests above the Kangra valley.
            </p>
            <div className="footer__socials">
              {['Instagram', 'YouTube', 'WhatsApp'].map((s) => (
                <a key={s} href="#" className="footer__social">
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div className="footer__links">
            <div>
              <h4>Explore</h4>
              <Link to="/stays">Stays & Domes</Link>
              <Link to="/experiences">Experiences</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/about">Our Story</Link>
            </div>
            <div>
              <h4>Visit</h4>
              <Link to="/contact">Book a stay</Link>
              <Link to="/contact">Getting here</Link>
              <Link to="/contact">FAQs</Link>
              <a href="#">House rules</a>
            </div>
            <div>
              <h4>Reach us</h4>
              <a href="tel:+919876543210">
                <Icon name="phone" size={16} /> +91 98765 43210
              </a>
              <a href="mailto:stay@pinewood.in">
                <Icon name="mail" size={16} /> stay@pinewood.in
              </a>
              <span>
                <Icon name="pin" size={16} /> Dharamkot Ridge, Kangra, HP 176219
              </span>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Pinewood Hostel. Made in the mountains.</p>
          <div className="footer__bottom-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cancellation</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
