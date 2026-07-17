import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'

const lines = [
  { type: 'prompt', text: 'visitor@mehdi:~$' },
  { type: 'command', text: 'whoami', delay: 800 },
  { type: 'output', text: 'MERN Stack Developer | Building scalable web apps', delay: 1200 },
  { type: 'blank' },
  { type: 'prompt', text: 'visitor@mehdi:~$' },
  { type: 'command', text: 'cat status.txt', delay: 2000 },
  { type: 'output', text: '> Building MERN applications...', delay: 600 },
  { type: 'output', text: '> Learning every day...', delay: 500 },
  { type: 'output', text: '> Solving real-world problems...', delay: 500 },
  { type: 'output', text: '> Ready for freelance opportunities...', delay: 500 },
  { type: 'blank' },
  { type: 'prompt', text: 'visitor@mehdi:~$' },
  { type: 'command', text: 'echo $MISSION', delay: 2500 },
  { type: 'output', text: 'Create products that make a difference.', delay: 800 },
]

function useTypingLines() {
  const [visibleLines, setVisibleLines] = useState([])
  const [currentLine, setCurrentLine] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const indexRef = useRef(0)

  useEffect(() => {
    if (indexRef.current >= lines.length) return

    const line = lines[indexRef.current]

    if (line.type === 'blank') {
      setVisibleLines((prev) => [...prev, { ...line, id: indexRef.current }])
      indexRef.current++
      const timer = setTimeout(() => {
        setCurrentLine((p) => p + 1)
      }, 100)
      return () => clearTimeout(timer)
    }

    if (line.type === 'prompt') {
      setVisibleLines((prev) => [...prev, { ...line, id: indexRef.current }])
      indexRef.current++
      const timer = setTimeout(() => {
        setCurrentLine((p) => p + 1)
      }, 200)
      return () => clearTimeout(timer)
    }

    if (line.type === 'command') {
      setIsTyping(true)
      let charIndex = 0
      const typeTimer = setInterval(() => {
        if (charIndex <= line.text.length) {
          setCurrentText(line.text.slice(0, charIndex))
          charIndex++
        } else {
          clearInterval(typeTimer)
          setIsTyping(false)
          setVisibleLines((prev) => [...prev, { ...line, id: indexRef.current }])
          setCurrentText('')
          indexRef.current++
          setTimeout(() => setCurrentLine((p) => p + 1), line.delay || 500)
        }
      }, 50)
      return () => clearInterval(typeTimer)
    }

    if (line.type === 'output') {
      const timer = setTimeout(() => {
        setVisibleLines((prev) => [...prev, { ...line, id: indexRef.current }])
        indexRef.current++
        setCurrentLine((p) => p + 1)
      }, line.delay || 500)
      return () => clearTimeout(timer)
    }
  }, [currentLine])

  return { visibleLines, currentText, isTyping }
}

export default function Terminal() {
  const { visibleLines, currentText, isTyping } = useTypingLines()

  return (
    <section id="terminal" className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Interface"
          title="Terminal"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl overflow-hidden"
        >
          <div className="flex items-center gap-2 px-5 py-3 border-b border-white/[0.05]">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="text-[11px] text-surface-200/30 font-mono ml-2">
              visitor@mehdi &mdash; bash
            </span>
          </div>

          <div className="p-5 font-mono text-sm leading-7 min-h-[320px]">
            {visibleLines.map((line) => {
              if (line.type === 'blank') {
                return <div key={line.id} className="h-4" />
              }
              if (line.type === 'prompt') {
                return (
                  <div key={line.id} className="flex items-center gap-2">
                    <span className="text-emerald-400">{line.text}</span>
                  </div>
                )
              }
              if (line.type === 'command') {
                return (
                  <div key={line.id} className="text-white pl-0">
                    {line.text}
                  </div>
                )
              }
              if (line.type === 'output') {
                return (
                  <div key={line.id} className="text-surface-200/50">
                    {line.text}
                  </div>
                )
              }
              return null
            })}

            {isTyping && (
              <div className="text-white">
                {currentText}
                <span className="inline-block w-[2px] h-4 bg-primary-400 animate-blink ml-0.5 align-middle" />
              </div>
            )}

            {!isTyping && visibleLines.length > 0 && visibleLines.length < lines.length && (
              <div className="flex items-center gap-2 mt-1">
                <span className="text-emerald-400">visitor@mehdi:~$</span>
                <span className="inline-block w-[2px] h-4 bg-primary-400 animate-blink" />
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
