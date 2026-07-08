import { useState } from 'react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { faqs, stays } from '../data/content'
import { supabase } from '../lib/supabase'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    checkin: '',
    checkout: '',
    stay: stays[0].name,
    guests: '2',
    message: '',
  })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [openFaq, setOpenFaq] = useState(0)

  const update = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError('')

    const { error: insertError } = await supabase
      .from('booking_requests')
      .insert({
        name: form.name,
        email: form.email,
        checkin: form.checkin || null,
        checkout: form.checkout || null,
        stay_type: form.stay,
        guests: form.guests,
        message: form.message || null,
      })

    setSending(false)

    if (insertError) {
      setError(
        "Sorry — we couldn't send your request just now. Please try again or email us at stay@pinewood.in.",
      )
      return
    }

    setSent(true)
  }

  return (
    <div>
      <PageHero
        eyebrow="Reserve your dates"
        title="Let's get you to the mountains"
        sub="Send us your dates and we'll hold your dome or room and reply within a few hours — usually with a chai already brewing."
        image="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="section">
        <div className="container contact-grid">
          {/* Form */}
          <Reveal className="booking">
            {sent ? (
              <div className="booking__success">
                <span className="booking__check">
                  <Icon name="check" size={34} />
                </span>
                <h2>Request received!</h2>
                <p>
                  Thanks, {form.name || 'traveller'}. We've got your enquiry for{' '}
                  <strong>{form.stay}</strong> and will be in touch at{' '}
                  <strong>{form.email || 'your email'}</strong> shortly.
                </p>
                <button
                  className="btn btn--ghost mt-2"
                  onClick={() => setSent(false)}
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form className="booking__form" onSubmit={submit}>
                <h2 className="booking__title">Book a stay</h2>
                <div className="field-row">
                  <label className="field">
                    <span>Full name</span>
                    <input
                      name="name"
                      value={form.name}
                      onChange={update}
                      placeholder="Your name"
                      required
                    />
                  </label>
                  <label className="field">
                    <span>Email</span>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={update}
                      placeholder="you@email.com"
                      required
                    />
                  </label>
                </div>

                <div className="field-row">
                  <label className="field">
                    <span>Check in</span>
                    <input
                      type="date"
                      name="checkin"
                      value={form.checkin}
                      onChange={update}
                      required
                    />
                  </label>
                  <label className="field">
                    <span>Check out</span>
                    <input
                      type="date"
                      name="checkout"
                      value={form.checkout}
                      onChange={update}
                      required
                    />
                  </label>
                </div>

                <div className="field-row">
                  <label className="field">
                    <span>Stay type</span>
                    <select name="stay" value={form.stay} onChange={update}>
                      {stays.map((s) => (
                        <option key={s.id}>{s.name}</option>
                      ))}
                    </select>
                  </label>
                  <label className="field">
                    <span>Guests</span>
                    <select name="guests" value={form.guests} onChange={update}>
                      {['1', '2', '3', '4', '5+'].map((g) => (
                        <option key={g}>{g}</option>
                      ))}
                    </select>
                  </label>
                </div>

                <label className="field">
                  <span>Anything we should know?</span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={update}
                    rows="4"
                    placeholder="Arrival time, dietary needs, trek interests…"
                  />
                </label>

                <button
                  type="submit"
                  className="btn btn--primary booking__submit"
                  disabled={sending}
                >
                  {sending ? 'Sending…' : 'Send booking request'}
                </button>
                {error && <p className="booking__error">{error}</p>}
                <p className="booking__note">
                  No payment now — we'll confirm availability first. Free
                  cancellation up to 7 days before arrival.
                </p>
              </form>
            )}
          </Reveal>

          {/* Aside */}
          <Reveal className="contact-aside" delay={0.12}>
            <div className="info-card">
              <h3>Reach us directly</h3>
              <a href="tel:+919876543210" className="info-line">
                <span className="info-line__icon">
                  <Icon name="phone" size={18} />
                </span>
                +91 98765 43210
              </a>
              <a href="mailto:stay@pinewood.in" className="info-line">
                <span className="info-line__icon">
                  <Icon name="mail" size={18} />
                </span>
                stay@pinewood.in
              </a>
              <div className="info-line">
                <span className="info-line__icon">
                  <Icon name="pin" size={18} />
                </span>
                Dharamkot Ridge, Kangra
                <br />
                Himachal Pradesh 176219
              </div>
              <div className="info-line">
                <span className="info-line__icon">
                  <Icon name="clock" size={18} />
                </span>
                Reception open 7:00 – 22:00 IST
              </div>
            </div>

            <div className="map-card">
              <iframe
                title="Pinewood location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=76.30%2C32.22%2C76.35%2C32.27&layer=mapnik&marker=32.245,76.325"
                loading="lazy"
              />
              <div className="map-card__foot">
                <Icon name="mountain" size={18} />
                <span>Dharamkot, above Dharamshala</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-alt">
        <div className="container faq-wrap">
          <Reveal className="faq-head">
            <p className="eyebrow">Good to know</p>
            <h2 className="section-title">Frequently asked</h2>
            <p className="lead mt-2">
              Still curious? Message us on WhatsApp any time — we love talking
              about the mountains.
            </p>
          </Reveal>

          <div className="faq-list">
            {faqs.map((f, i) => (
              <Reveal
                className={`faq ${openFaq === i ? 'is-open' : ''}`}
                key={f.q}
                delay={i * 0.04}
              >
                <button
                  className="faq__q"
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  aria-expanded={openFaq === i}
                >
                  {f.q}
                  <span className="faq__icon">
                    <Icon name={openFaq === i ? 'close' : 'plus'} size={18} />
                  </span>
                </button>
                <div className="faq__a">
                  <p>{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
