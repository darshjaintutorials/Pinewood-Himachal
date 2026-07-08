import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import CtaBanner from '../components/CtaBanner'
import { gallery } from '../data/content'
import './Gallery.css'

export default function Gallery() {
  const [open, setOpen] = useState(null)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(null)
      if (open !== null && e.key === 'ArrowRight')
        setOpen((i) => (i + 1) % gallery.length)
      if (open !== null && e.key === 'ArrowLeft')
        setOpen((i) => (i - 1 + gallery.length) % gallery.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <div>
      <PageHero
        eyebrow="The Pinewood look"
        title="Mornings, mountains & quiet corners"
        sub="A peek into life on the ridge — the domes, the forest light, the long tables and the faces that make Pinewood feel like home."
        image="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="section">
        <div className="container">
          <div className="masonry">
            {gallery.map((src, i) => (
              <Reveal
                className={`masonry__item ${i % 3 === 0 ? 'is-tall' : ''}`}
                key={src}
                delay={(i % 4) * 0.05}
              >
                <button className="masonry__btn" onClick={() => setOpen(i)}>
                  <img src={src} alt={`Pinewood gallery ${i + 1}`} loading="lazy" />
                  <span className="masonry__zoom">
                    <Icon name="plus" size={20} />
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />

      <AnimatePresence>
        {open !== null && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <button className="lightbox__close" aria-label="Close">
              <Icon name="close" size={26} />
            </button>
            <button
              className="lightbox__nav lightbox__nav--prev"
              aria-label="Previous"
              onClick={(e) => {
                e.stopPropagation()
                setOpen((i) => (i - 1 + gallery.length) % gallery.length)
              }}
            >
              <Icon name="arrow" size={24} style={{ transform: 'rotate(180deg)' }} />
            </button>
            <motion.img
              key={open}
              src={gallery[open]}
              alt="Expanded view"
              className="lightbox__img"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="lightbox__nav lightbox__nav--next"
              aria-label="Next"
              onClick={(e) => {
                e.stopPropagation()
                setOpen((i) => (i + 1) % gallery.length)
              }}
            >
              <Icon name="arrow" size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
