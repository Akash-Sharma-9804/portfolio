import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const terminalLines = [
  { text: 'init_portfolio --user=akash', type: 'command' },
  { text: 'loading modules...', type: 'info' },
  { text: '[OK] React.js        v18.2', type: 'ok' },
  { text: '[OK] Node.js         v20.1', type: 'ok' },
  { text: '[OK] MongoDB Atlas   v6.x', type: 'ok' },
  { text: '[OK] AWS Lambda      active', type: 'ok' },
  { text: '[OK] GraphQL API     v16.8', type: 'ok' },
  { text: '[OK] Docker          v24.0', type: 'ok' },
  { text: '[OK] TypeScript      v5.4', type: 'ok' },
  { text: '[OK] Tailwind CSS    v3.4', type: 'ok' },
  { text: '[OK] Three.js        r163', type: 'ok' },
  { text: '[OK] Framer Motion   v11.0', type: 'ok' },
  { text: '...', type: 'dim' },
  { text: 'connection_established', type: 'success' },
  { text: '', type: 'blank' },
]

function TerminalLine({ line, isCurrent, currentChar, cursorVisible }) {
  const text = isCurrent ? line.text.slice(0, currentChar) : line.text

  const renderColoredText = () => {
    if (line.type === 'ok') {
      // [OK] React.js        v18.2
      const okMatch = text.match(/^(\[OK\])(\s+)(\S+)(\s+)(v[\d.r]+|active)$/)
      if (okMatch && text === line.text) {
        return (
          <span className="whitespace-pre">
            <span className="text-green-400 font-bold">{okMatch[1]}</span>
            {okMatch[2]}
            <span className="text-white">{okMatch[3]}</span>
            {okMatch[4]}
            <span className="text-gray-500">{okMatch[5]}</span>
          </span>
        )
      }
      // Partial typing — fall back to green [OK] prefix
      if (text.startsWith('[')) {
        const okEnd = text.indexOf(']') + 1
        const beforeName = text.slice(okEnd).match(/^(\s+)/)
        if (beforeName) {
          const nameStart = okEnd + beforeName[1].length
          const rest = text.slice(nameStart)
          const versionMatch = rest.match(/^(\S+)(\s+)(v[\d.r]+|active)$/)
          if (versionMatch && text === line.text) {
            return (
              <span className="whitespace-pre">
                <span className="text-green-400 font-bold">{text.slice(0, okEnd)}</span>
                {beforeName[1]}
                <span className="text-white">{versionMatch[1]}</span>
                {versionMatch[2]}
                <span className="text-gray-500">{versionMatch[3]}</span>
              </span>
            )
          }
        }
        return (
          <span className="whitespace-pre">
            <span className="text-green-400 font-bold">{text.slice(0, okEnd)}</span>
            <span className="text-white">{text.slice(okEnd)}</span>
          </span>
        )
      }
    }

    if (line.type === 'command') {
      const parts = text.split(' --')
      if (parts.length > 1) {
        return (
          <span className="whitespace-pre">
            <span className="text-white">{parts[0]}</span>
            <span className="text-yellow-300">{' --' + parts.slice(1).join(' --')}</span>
          </span>
        )
      }
    }

    if (line.type === 'success') {
      return <span className="text-green-400 font-bold whitespace-pre">{text}</span>
    }

    if (line.type === 'dim') {
      return <span className="text-gray-500 whitespace-pre">{text}</span>
    }

    return <span className="text-white/90 whitespace-pre">{text}</span>
  }

  return (
    <div className="flex">
      <span className="text-primary/40 mr-2 select-none">{'>'}</span>
      {renderColoredText()}
      {isCurrent && (
        <span
          className="inline-block w-[7px] h-[15px] bg-primary/70 ml-[1px] align-middle"
          style={{ opacity: cursorVisible ? 1 : 0 }}
        />
      )}
    </div>
  )
}

function TypingTerminal() {
  const [visibleLines, setVisibleLines] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    if (visibleLines >= terminalLines.length) {
      const blink = setInterval(() => setCursorVisible(v => !v), 530)
      // Restart loop after 4 seconds of blinking
      const restart = setTimeout(() => {
        setVisibleLines(0)
        setCurrentChar(0)
        setCursorVisible(true)
      }, 4000)
      return () => {
        clearInterval(blink)
        clearTimeout(restart)
      }
    }

    const line = terminalLines[visibleLines].text
    if (currentChar < line.length) {
      const timeout = setTimeout(() => setCurrentChar(c => c + 1), 32)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setVisibleLines(v => v + 1)
        setCurrentChar(0)
      }, 200)
      return () => clearTimeout(timeout)
    }
  }, [visibleLines, currentChar])

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="w-full lg:w-[540px] glass-panel overflow-hidden flex flex-col"
    >
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-code text-[10px] text-on-surface-variant opacity-40 uppercase tracking-wider">
          akash@portfolio ~ main
        </span>
      </div>

      {/* Terminal body */}
      <div className="p-5 font-mono text-[13px] leading-[1.7] min-h-[360px]">
        {terminalLines.slice(0, visibleLines + 1).map((line, i) => (
          <TerminalLine
            key={i}
            line={line}
            isCurrent={i === visibleLines}
            currentChar={currentChar}
            cursorVisible={cursorVisible}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default function Hero() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 container-content relative overflow-hidden"
    >
      {/* Subtle glow */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center w-full">
        {/* Left — Text */}
        <div className="max-w-xl">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-code text-label-sm text-on-surface-variant uppercase tracking-widest mb-6"
          >
            Hi, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-display-lg mb-8 leading-none"
          >
            Akash Sharma.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="font-body text-body-lg text-on-surface-variant max-w-xl mb-10"
          >
            Bridging the gap between conceptual elegance and industrial-grade performance.
            I build resilient, scalable web applications that define the modern digital experience.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="flex gap-4"
          >
            <button
              onClick={() => scrollTo('#projects')}
              className="bg-primary-container text-on-primary-container px-8 py-4 label-code hover:opacity-90 transition-all active:scale-[0.98]"
            >
              View Work
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="border border-white/20 text-on-surface px-8 py-4 label-code hover:bg-white/5 transition-all active:scale-[0.98]"
            >
              Hire Me
            </button>
          </motion.div>
        </div>

        {/* Right — Terminal */}
        <div className="hidden lg:flex justify-end">
          <TypingTerminal />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-0 flex items-center gap-4 opacity-30"
      >
        <span className="font-code text-xs uppercase tracking-[0.3em]">Scroll to inspect</span>
        <div className="w-px h-12 bg-on-surface-variant" />
      </motion.div>
    </section>
  )
}
