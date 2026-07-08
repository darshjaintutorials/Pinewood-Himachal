import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Icon from './Icon'
import './Navbar.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/stays', label: 'Stays' },
  { to: '/experiences', label: 'Experiences' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => (document.body.style.overflow = '')
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <Link to="/" className="nav__brand" aria-label="Pinewood home">
          <span className="nav__mark">
            <Icon name="mountain" size={20} stroke={2} />
          </span>
          <span className="nav__word">
            Pinewood
            <em>Himachal</em>
          </span>
        </Link>

        <nav className="nav__links">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `nav__link ${isActive ? 'is-active' : ''}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav__cta">
          <Link to="/contact" className="btn btn--primary nav__book">
            Book a stay
          </Link>
          <button
            className="nav__burger"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <Icon name={open ? 'close' : 'menu'} size={24} />
          </button>
        </div>
      </div>

      <div className={`nav__drawer ${open ? 'is-open' : ''}`}>
        <nav className="nav__drawer-links">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `nav__drawer-link ${isActive ? 'is-active' : ''}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <Link to="/contact" className="btn btn--primary" style={{ width: '100%' }}>
          Book a stay
        </Link>
      </div>
    </header>
  )
}
