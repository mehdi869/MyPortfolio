import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import { journeyTimeline } from '../data/portfolioData'

const typeColors = {
  milestone: 'bg-primary-400',
  learning: 'bg-accent-400',
  project: 'bg-emerald-400',
}

export default function Journey() {
  return (
    <section id="journey" className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Growth"
          title="Development Journey"
          description="Every milestone on the path to becoming a better developer."
        />

        <div className="relative">
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/40 via-accent-500/30 to-transparent md:-translate-x-px" />

          {journeyTimeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`relative flex items-start mb-8 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div
                className={`w-full md:w-1/2 ${
                  i % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10'
                } pl-12 md:pl-0`}
              >
                <div className="glass-card rounded-xl p-4 hover:border-primary-500/15 transition-all duration-300">
                  <span className="text-primary-400 font-mono text-xs font-semibold">
                    {item.year}
                  </span>
                  <p className="text-surface-200/70 text-sm mt-1 leading-relaxed">
                    {item.event}
                  </p>
                </div>
              </div>

              <div className="absolute left-[14px] md:left-1/2 md:-translate-x-1/2">
                <div className={`w-[10px] h-[10px] rounded-full ${typeColors[item.type]} border-2 border-surface-950 ring-2 ring-surface-950/50`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
