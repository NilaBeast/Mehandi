import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { PHONE, WHATSAPP, galleryItems, services, pricing, testimonials } from './data.js'

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

export default function App() {
  const [filter, setFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)
  const [form, setForm] = useState({ name: '', phone: '', date: '', service: 'Royal Bridal Mehndi', message: '' })

  useReveal()

  useEffect(() => {
    // re-observe after filter changes
    const els = document.querySelectorAll('.reveal:not(.visible)')
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [filter])

  const categories = ['All', 'Bridal', 'Portrait', 'Engagement', 'Party']
  const filtered = filter === 'All' ? galleryItems : galleryItems.filter((g) => g.category === filter)

  const handleBooking = (e) => {
    e.preventDefault()
    const text = `Namaste Harsh Mehandi!%0A%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0ADate: ${encodeURIComponent(form.date)}%0AService: ${encodeURIComponent(form.service)}%0AMessage: ${encodeURIComponent(form.message)}`
    window.open(`https://wa.me/919741587334?text=${text}`, '_blank')
  }

  return (
    <>
      <Navbar />

      {/* ============ HERO ============ */}
      <section className="hero" id="home">
        <div className="hero-bg" aria-hidden="true">
          <div className="mandala mandala-1" />
          <div className="mandala mandala-2" />
          <div className="hero-glow" />
        </div>
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="badge reveal">
              <span className="pulse" /> ✦ Muzaffarpur's Premium Bridal Mehndi Artist
            </div>
            <h1 className="reveal">
              Heirlooms in Henna,
              <br />
              <span className="gold-gradient">Crafted for Your</span>
              <br />
              Big Day
            </h1>
            <p className="hero-sub reveal">
              From royal full-arm bridal with couple initials to lifelike
              dulha-dulhan portraits — 100% organic henna, deep maroon stain,
              and home service across Muzaffarpur.
            </p>
            <div className="hero-btns reveal">
              <a className="btn btn-gold" href={WHATSAPP} target="_blank" rel="noreferrer">
                💬 Book on WhatsApp
              </a>
              <a className="btn btn-outline" href="#designs">
                View Designs ↓
              </a>
            </div>
            <div className="hero-stats reveal">
              <div><strong>10+</strong><span>Years Artistry</span></div>
              <div><strong>5000+</strong><span>Happy Brides</span></div>
              <div><strong>4.9★</strong><span>Google Rating</span></div>
            </div>
            <div className="hero-contact reveal">
              📞 Prefer to talk? <a href={`tel:${PHONE}`}>Call {PHONE}</a>
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="arch-frame">
              <img src="/images/design-1.jpeg" alt="Royal bridal mehndi with initials by Harsh Mehandi" />
              <div className="arch-overlay" />
            </div>
            <div className="float-card float-1">
              <img src="/images/logo.jpeg" alt="HM logo" />
              <div><strong>Harsh Mehandi</strong><span>Verified Artist • HM</span></div>
              <span className="tick">✓</span>
            </div>
            <div className="float-card float-2">
              <span className="leaf">🌿</span>
              <div><strong>100% Organic</strong><span>Deep stain • No chemicals</span></div>
            </div>
            <div className="stamp">★ BRIDAL<br />SPECIALIST ★</div>
          </div>
        </div>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {Array(2).fill('✦ BRIDAL ✦ ENGAGEMENT ✦ PORTRAIT ✦ PARTY ✦ GROOM ✦ FESTIVAL ✦ HOME SERVICE ✦ MUZAFFARPUR ').join('').split('✦').map((t, i) => (
              <span key={i}>✦ {t.trim()} </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TRUST BAR ============ */}
      <section className="trust">
        <div className="container trust-grid reveal">
          <div>🌿 <strong>Organic Cones</strong><span>Homemade, skin-safe</span></div>
          <div>🏠 <strong>Home Service</strong><span>All over Muzaffarpur</span></div>
          <div>🎨 <strong>Custom Portraits</strong><span>Faces, names & dates</span></div>
          <div>⏰ <strong>On-Time Slots</strong><span>Festival rush ready</span></div>
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section className="section about" id="about">
        <div className="container about-grid">
          <div className="about-images reveal">
            <img className="about-main" src="/images/design-2.jpeg" alt="Dulha dulhan portrait mehndi" />
            <img className="about-small" src="/images/logo.jpeg" alt="Harsh Mehandi logo HM" />
            <div className="exp-badge"><strong>10+</strong><span>years of<br />henna art</span></div>
          </div>
          <div className="about-copy">
            <p className="eyebrow reveal">✦ About the Artist</p>
            <h2 className="reveal">The Hands Behind <span className="gold-gradient">Muzaffarpur's Finest Stain</span></h2>
            <p className="reveal">
              <strong>Harsh Mehandi</strong> is Muzaffarpur's go-to name for luxury bridal henna.
              Known for razor-fine lines, symmetrical jaal, and storytelling bands — peacocks,
              temple domes, doli scenes and lifelike portraits woven into classic dulhan layouts.
            </p>
            <ul className="check-list reveal">
              <li><span>✓</span> Personalised initials, wedding date & couple hashtags in every bridal</li>
              <li><span>✓</span> Freshly-rolled organic cones — deep maroon colour in 24 hrs</li>
              <li><span>✓</span> Trial sessions, bridal team for siders & on-day touch-ups</li>
              <li><span>✓</span> Transparent pricing, token advance, WhatsApp booking</li>
            </ul>
            <div className="about-btns reveal">
              <a className="btn btn-dark" href="#contact">Check Date Availability →</a>
              <a className="btn btn-outline" href={`tel:${PHONE}`}>📞 {PHONE}</a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ GALLERY ============ */}
      <section className="section gallery-sec" id="designs">
        <div className="container">
          <div className="sec-head reveal">
            <p className="eyebrow">✦ Signature Collection</p>
            <h2>Exact Work by <span className="gold-gradient">Harsh Mehandi</span></h2>
            <p className="sec-sub">Every photo below is real work — the same hands that will adorn yours. Tap any design to view full detail.</p>
          </div>

          <div className="filters reveal">
            {categories.map((c) => (
              <button key={c} className={`chip ${filter === c ? 'active' : ''}`} onClick={() => setFilter(c)}>{c}</button>
            ))}
          </div>

          <div className="gallery-grid">
            {filtered.map((g, i) => (
              <article key={g.id + '-' + i} className="g-card reveal" onClick={() => setLightbox(g)}>
                <div className="g-img">
                  <img src={g.src} alt={g.title} loading="lazy" />
                  <span className="g-tag">{g.tag}</span>
                  <div className="g-hover"><span>⤢ View Detail</span></div>
                </div>
                <div className="g-body">
                  <span className="g-cat">{g.category}</span>
                  <h3>{g.title}</h3>
                  <p>{g.desc}</p>
                  <span className="g-link">Book this design →</span>
                </div>
              </article>
            ))}
          </div>

          <p className="gallery-note reveal">
            💡 Love a design? Screenshot it & send on <a href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp</a> — Harsh will recreate it with your names & date.
          </p>
        </div>

        {lightbox && (
          <div className="lightbox" onClick={() => setLightbox(null)}>
            <div className="lightbox-box" onClick={(e) => e.stopPropagation()}>
              <button className="lb-close" onClick={() => setLightbox(null)}>✕</button>
              <img src={lightbox.src} alt={lightbox.title} />
              <div className="lb-info">
                <h3>{lightbox.title}</h3>
                <p>{lightbox.desc}</p>
                <div className="lb-btns">
                  <a className="btn btn-gold btn-sm" href={WHATSAPP} target="_blank" rel="noreferrer">Book This Design</a>
                  <button className="btn btn-outline btn-sm" onClick={() => setLightbox(null)}>Close</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ============ SERVICES ============ */}
      <section className="section services-sec" id="services">
        <div className="container">
          <div className="sec-head reveal">
            <p className="eyebrow">✦ What We Do</p>
            <h2>Services for <span className="gold-gradient">Every Celebration</span></h2>
            <p className="sec-sub">Bridal to baby shower — one artist, one standard: flawless.</p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <article key={i} className="s-card reveal">
                <div className="s-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul>{s.points.map((p, j) => <li key={j}>✦ {p}</li>)}</ul>
                <div className="s-foot">
                  <strong>{s.price}</strong>
                  <a href="#contact">Book →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="process">
        <div className="container">
          <div className="sec-head reveal">
            <p className="eyebrow light">✦ Easy Booking</p>
            <h2 className="light">Your Bridal Journey in <span className="gold-gradient">4 Steps</span></h2>
          </div>
          <div className="steps">
            {[
              { n: '01', t: 'Say Hello', d: 'Call or WhatsApp 9741587334 with your function date.' },
              { n: '02', t: 'Pick Design', d: 'Choose from gallery or send reference + names/date.' },
              { n: '03', t: 'Lock Date', d: 'Small token advance. Slot reserved. Trial if bridal.' },
              { n: '04', t: 'Adorn & Glow', d: 'Home service, after-care guidance, deep stain!' },
            ].map((s, i) => (
              <div key={i} className="step reveal">
                <span className="step-n">{s.n}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PRICING ============ */}
      <section className="section" id="pricing">
        <div className="container">
          <div className="sec-head reveal">
            <p className="eyebrow">✦ Honest Pricing</p>
            <h2>Bridal Packages, <span className="gold-gradient">No Hidden Costs</span></h2>
            <p className="sec-sub">Final quote depends on length & portrait work. Home service included in Muzaffarpur city.</p>
          </div>
          <div className="pricing-grid">
            {pricing.map((p, i) => (
              <article key={i} className={`p-card reveal ${p.popular ? 'popular' : ''}`}>
                {p.popular && <span className="p-ribbon">★ Most Booked</span>}
                <h3>{p.name}</h3>
                <div className="p-price">{p.price}<small> {p.unit}</small></div>
                <ul>{p.features.map((f, j) => <li key={j}><span>✓</span> {f}</li>)}</ul>
                <a className={p.popular ? 'btn btn-gold' : 'btn btn-outline'} href={WHATSAPP} target="_blank" rel="noreferrer">Book {p.name}</a>
              </article>
            ))}
          </div>
          <p className="pricing-note reveal">Need siders for 5+ guests? <a href={WHATSAPP} target="_blank" rel="noreferrer">Ask for family combo discount →</a></p>
        </div>
      </section>

      {/* ============ SHOWCASE BANNER ============ */}
      <section className="banner">
        <div className="container banner-box reveal">
          <img src="/images/design-3.jpeg" alt="Full length bridal mehndi" />
          <div className="banner-copy">
            <p className="eyebrow light">✦ The Harsh Promise</p>
            <h2>Deep Maroon Stain in 24 Hours —<br />Or Your Touch-Up Is Free.</h2>
            <p>Fresh organic cones, proper after-care, and lines so fine they photograph like jewellery.</p>
            <div className="banner-btns">
              <a className="btn btn-gold" href="#contact">Reserve My Date →</a>
              <a className="btn btn-outline-light" href={`tel:${PHONE}`}>📞 {PHONE}</a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ REVIEWS ============ */}
      <section className="section" id="reviews">
        <div className="container">
          <div className="sec-head reveal">
            <p className="eyebrow">✦ Love Notes</p>
            <h2>Brides <span className="gold-gradient">Adore the Stain</span></h2>
            <div className="rating-line">★★★★★ <strong>4.9 / 5</strong> from 800+ Google & WhatsApp reviews</div>
          </div>
          <div className="reviews-grid">
            {testimonials.map((t, i) => (
              <article key={i} className="r-card reveal">
                <div className="stars">{'★'.repeat(t.stars)}</div>
                <p>"{t.text}"</p>
                <div className="r-foot">
                  <span className="avatar">{t.name[0]}</span>
                  <div><strong>{t.name}</strong><span>{t.area} • {t.service}</span></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONTACT / BOOKING ============ */}
      <section className="section contact-sec" id="contact">
        <div className="container contact-grid">
          <div className="contact-info reveal">
            <p className="eyebrow">✦ Book Your Slot</p>
            <h2>Dates Fill Fast in <span className="gold-gradient">Wedding Season</span></h2>
            <p>Share your details — we'll confirm on WhatsApp within 30 minutes (7 AM – 9 PM).</p>
            <div className="info-cards">
              <a href={`tel:${PHONE}`} className="info-card"><span>📞</span><div><strong>Call Direct</strong><small>{PHONE} — Harsh</small></div></a>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="info-card"><span>💬</span><div><strong>WhatsApp</strong><small>Fastest reply + photos</small></div></a>
              <div className="info-card"><span>📍</span><div><strong>Service Area</strong><small>Muzaffarpur + Motihari, Samastipur, Hajipur</small></div></div>
              <div className="info-card"><span>⏰</span><div><strong>Timing</strong><small>7:00 AM – 9:00 PM, all days</small></div></div>
            </div>
          </div>

          <form className="book-form reveal" onSubmit={handleBooking}>
            <h3>✦ Check Availability</h3>
            <label>Your Name<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="e.g. Priya Sharma" /></label>
            <div className="row2">
              <label>Phone<input required pattern="[0-9+ ]{10,15}" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="10-digit mobile" /></label>
              <label>Function Date<input required type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} /></label>
            </div>
            <label>Service
              <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
                <option>Royal Bridal Mehndi</option>
                <option>Classic Dulhan Bridal</option>
                <option>Engagement Mehndi</option>
                <option>Party / Siders Mehndi</option>
                <option>Groom Mehndi</option>
                <option>Festival Mehndi</option>
              </select>
            </label>
            <label>Message / Design Link<textarea rows="3" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Venue, both-side or single-side, reference photo..." /></label>
            <button className="btn btn-gold" type="submit">Send Booking on WhatsApp →</button>
            <small className="form-note">No advance online — token only after we confirm your slot on call.</small>
          </form>
        </div>
      </section>

      <Footer />

      {/* floating buttons */}
      <div className="float-btns">
        <a href={WHATSAPP} target="_blank" rel="noreferrer" className="wa" aria-label="WhatsApp">💬</a>
        <a href={`tel:${PHONE}`} className="call" aria-label="Call">📞</a>
      </div>
    </>
  )
}
