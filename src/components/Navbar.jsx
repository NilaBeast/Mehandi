import { useEffect, useState } from 'react'
import { PHONE, WHATSAPP } from '../data.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1020) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#designs', label: 'Designs' },
    { href: '#services', label: 'Services' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#reviews', label: 'Reviews' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>📍 Muzaffarpur, Bihar — Home Service Available</span>
          <span className="topbar-right">
            <a href={`tel:${PHONE}`}>📞 {PHONE}</a>
            <span className="dot">•</span>
            <span>⏰ 7 AM – 9 PM All Days</span>
          </span>
        </div>
      </div>

      <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <a href="#home" className="brand" aria-label="Harsh Mehandi home">
            <img src="/images/logo.jpeg" alt="Harsh Mehandi logo" className="brand-logo" />
            <span className="brand-text">
              <strong>Harsh Mehandi</strong>
              <small>MUZAFFARPUR • HM</small>
            </span>
          </a>

          <nav className="nav-links" aria-label="Primary">
            {links.map(l => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </nav>

          <div className="nav-cta">
            <a className="btn btn-gold btn-sm" href={WHATSAPP} target="_blank" rel="noreferrer">
              ✦ Book Now
            </a>
            <button className={`hamburger ${open ? 'active' : ''}`} onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
              <span /><span /><span />
            </button>
          </div>
        </div>

        <div className={`mobile-menu ${open ? 'open' : ''}`}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a className="btn btn-gold" href={WHATSAPP} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
            ✦ Book on WhatsApp
          </a>
          <a className="btn btn-outline-light" href={`tel:${PHONE}`} onClick={() => setOpen(false)}>
            📞 Call {PHONE}
          </a>
        </div>
      </header>
    </>
  )
}
