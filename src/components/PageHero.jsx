import { motion } from 'framer-motion'
import './PageHero.css'

export default function PageHero({ eyebrow, title, sub, image }) {
  return (
    <header className="page-hero">
      <div
        className="page-hero__bg"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="page-hero__overlay" />
      <div className="container page-hero__inner">
        <motion.p
          className="eyebrow page-hero__eyebrow"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          className="page-hero__title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
        >
          {title}
        </motion.h1>
        {sub && (
          <motion.p
            className="page-hero__sub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
          >
            {sub}
          </motion.p>
        )}
      </div>
    </header>
  )
}
