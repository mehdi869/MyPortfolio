import { motion } from 'framer-motion'
import { CheckCircle2, Circle } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import { buildLog } from '../data/portfolioData'

export default function BuildLog() {
  return (
    <section id="build-log" className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Milestones"
          title="Build Log"
          description="A record of progress and achievements along the way."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-6 md:p-8"
        >
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/[0.05]">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono text-surface-200/40 uppercase tracking-wider">
              Build Status: Active
            </span>
          </div>

          <div className="space-y-1">
            {buildLog.map((item, i) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-white/[0.02] transition-colors"
              >
                {item.done ? (
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                ) : (
                  <Circle size={16} className="text-surface-200/30 shrink-0" />
                )}
                <span className={`text-sm font-mono ${
                  item.done ? 'text-surface-200/70' : 'text-surface-200/35'
                }`}>
                  {item.text}
                </span>
                {item.done && (
                  <span className="ml-auto text-[10px] font-mono text-emerald-400/60">
                    done
                  </span>
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center gap-2">
            <div className="w-1.5 h-4 bg-primary-400/60 animate-blink" />
            <span className="text-xs font-mono text-surface-200/30">
              Next: {buildLog.find((l) => !l.done)?.text || 'All tasks complete'}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
