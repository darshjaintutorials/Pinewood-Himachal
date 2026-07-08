# Pinewood — Mountain Hostel in Himachal 🏔️

A clean, modern, premium marketing website for **Pinewood**, a fictional hostel
in Himachal Pradesh offering geodesic domes, private rooms, dorms and curated
mountain experiences.

Built with **React + Vite**, **React Router** and **Framer Motion**.

## ✨ Features

- **6 fully designed pages** — Home, Stays, Experiences, Gallery, About, Contact
- Cinematic hero sections with parallax-style zoom and scroll-reveal animations
- Filterable accommodation listings (Domes / Private Rooms / Dorm)
- Interactive image gallery with a keyboard-navigable lightbox
- Working booking-enquiry form with a success state
- Animated FAQ accordion + embedded location map
- Custom design system (CSS variables), responsive down to mobile
- Hand-built inline SVG icon set — no icon library dependency
- Accessible: reduced-motion support, semantic markup, keyboard support

## 🎨 Design system

- **Typography:** Fraunces (display serif) + Inter (body)
- **Palette:** deep pine green, warm clay/terracotta accent, cream backgrounds
- All tokens live in `src/styles/global.css`

## 🚀 Getting started

```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build → /dist
npm run preview  # preview the production build
```

## 📁 Structure

```
src/
├── components/   # Navbar, Footer, StayCard, PageHero, CTA, Icon, Reveal …
├── pages/        # Home, Stays, Experiences, Gallery, About, Contact, NotFound
├── data/         # content.js — all copy, stays, services, FAQs
└── styles/       # global design system
```

## 📝 Notes

- Images are loaded from Unsplash via URL for the demo. Swap them for the
  hostel's own photography before launch.
- The booking form is front-end only — wire it to your backend, email service
  or a tool like Formspree to receive real enquiries.

Made in the mountains. 🌲
