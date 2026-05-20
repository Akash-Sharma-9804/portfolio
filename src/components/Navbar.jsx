import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks } from './config/data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = './cv/Akash_Sharma_fullStack_dev_resume.pdf'
    link.download = 'Akash_Sharma_fullStack_dev_resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-background/80 backdrop-blur-xl border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="container-content flex justify-between items-center h-20">
          {/* Logo */}
          <button
            onClick={() => scrollTo('#home')}
            className="font-display text-headline-md font-bold text-beige"
          >
            AKASH SHARMA
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="font-body text-body-md tracking-tight text-on-surface-variant hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right */}
          <div className="flex items-center gap-3">
            <button
              onClick={downloadResume}
              className="hidden md:flex bg-primary-container text-on-primary-container px-6 py-2 label-code hover:opacity-80 transition-opacity active:scale-95"
            >
              Resume
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px]"
              aria-label="Menu"
            >
              <span
                className={`block w-[18px] h-px bg-white transition-all duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-[3px]' : ''
                }`}
              />
              <span
                className={`block w-[18px] h-px bg-white transition-all duration-300 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-[18px] h-px bg-white transition-all duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-[3px]' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-40 glass-panel rounded-lg p-4 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="w-full text-left px-4 py-3 rounded-md text-on-surface-variant hover:text-white hover:bg-white/[0.04] transition-all text-body-md font-body"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-3 pt-3 border-t border-white/[0.06]">
              <button
                onClick={downloadResume}
                className="w-full btn-primary justify-center text-[12px] py-3"
              >
                Download Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
