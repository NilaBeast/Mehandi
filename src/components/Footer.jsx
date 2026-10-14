import { PHONE, PHONE_DISPLAY, WHATSAPP, LOCATION, TIMING } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-pattern" aria-hidden="true" />
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-logo-row">
            <img src="/images/logo.jpeg" alt="Harsh Mehandi logo" />
            <div>
              <h3>Harsh Mehandi</h3>
              <p className="gold-text">MUZAFFARPUR</p>
            </div>
          </div>
          <p>
            Muzaffarpur's premium bridal mehndi studio. Intricate, long-stay,
            100% organic henna — from minimal engagement jaal to royal
            dulha-dulhan portraits.
          </p>
          <div className="socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="M10.5 9.5v5l4.5-2.5z" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14 8h2V5h-2c-2 0-3.5 1.5-3.5 3.5V11H8v3h2.5v5h3v-5H16l.5-3h-3V8.7c0-.4.3-.7.5-.7z"/></svg>
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3z"/><path d="M9 9.5c.5 2.5 3 5 5.5 5.5l1-1.5 2 1c-.5 1.5-1.5 2-3 1.5-3-1-6-4-7-7-.5-1.5 0-2.5 1.5-3l1 2z" fill="currentColor" stroke="none"/></svg>
            </a>
          </div>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Artist</a></li>
            <li><a href="#designs">Design Gallery</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Book Appointment</a></li>
          </ul>
        </div>

        <div>
          <h4>Our Services</h4>
          <ul className="footer-links">
            <li><a href="#services">Royal Bridal Mehndi</a></li>
            <li><a href="#services">Engagement Mehndi</a></li>
            <li><a href="#services">Portrait Mehndi</a></li>
            <li><a href="#services">Party / Siders</a></li>
            <li><a href="#services">Groom Mehndi</a></li>
            <li><a href="#services">Festival Mehndi</a></li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul className="footer-contact">
            <li>📞 <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a></li>
            <li>💬 <a href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp Booking</a></li>
            <li>📍 {LOCATION}</li>
            <li>⏰ {TIMING}</li>
          </ul>
          <a className="btn btn-gold btn-sm footer-book" href="#contact">Book Your Date →</a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {new Date().getFullYear()} Harsh Mehandi Muzaffarpur. All rights reserved.</span>
          <span className="footer-made">✦ Crafted with henna & love in Bihar ✦</span>
        </div>
      </div>
    </footer>
  )
}
