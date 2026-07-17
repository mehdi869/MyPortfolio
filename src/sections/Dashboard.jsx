import { motion } from 'framer-motion'
import { Activity, Clock, TrendingUp } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import { dashboardCards, stats } from '../data/portfolioData'

function DashboardCard({ card, index }) {
  const Icon = card.icon

  const colorMap = {
    primary: {
      bg: 'from-primary-500/15 to-primary-500/5',
      icon: 'text-primary-400',
      border: 'hover:border-primary-500/20',
      dot: 'bg-primary-400',
    },
    accent: {
      bg: 'from-accent-500/15 to-accent-500/5',
      icon: 'text-accent-400',
      border: 'hover:border-accent-500/20',
      dot: 'bg-accent-400',
    },
    emerald: {
      bg: 'from-emerald-500/15 to-emerald-500/5',
      icon: 'text-emerald-400',
      border: 'hover:border-emerald-500/20',
      dot: 'bg-emerald-400',
    },
    amber: {
      bg: 'from-amber-500/15 to-amber-500/5',
      icon: 'text-amber-400',
      border: 'hover:border-amber-500/20',
      dot: 'bg-amber-400',
    },
  }

  const colors = colorMap[card.color] || colorMap.primary

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`glass-card rounded-2xl p-5 ${colors.border} transition-all duration-300 group`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colors.bg} flex items-center justify-center ${colors.icon}`}>
          <Icon size={20} />
        </div>
        <div className="flex items-center gap-1.5">
          <div className={`w-1.5 h-1.5 rounded-full ${colors.dot} animate-pulse`} />
          <span className="text-[10px] font-medium text-surface-200/40 uppercase tracking-wider">
            Live
          </span>
        </div>
      </div>
      <div className="text-[11px] font-medium text-surface-200/40 uppercase tracking-wider mb-1">
        {card.label}
      </div>
      <div className="text-lg font-bold text-white mb-1 group-hover:text-primary-300 transition-colors">
        {card.value}
      </div>
      <div className="text-xs text-surface-200/50 leading-relaxed">
        {card.description}
      </div>
    </motion.div>
  )
}

export default function Dashboard() {
  return (
    <section id="dashboard" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Control Panel"
          title="Developer Dashboard"
          description="A snapshot of where I am right now."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {dashboardCards.map((card, i) => (
            <DashboardCard key={card.label} card={card} index={i} />
          ))}
        </div>

        <div className="glass-card rounded-2xl p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <Activity size={18} className="text-primary-400" />
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Activity Overview
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="text-center p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]"
              >
                <div className="text-2xl md:text-3xl font-bold gradient-text-static mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-surface-200/50">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-white/[0.04] flex flex-wrap items-center gap-4 text-xs text-surface-200/40">
            <div className="flex items-center gap-2">
              <Clock size={12} />
              <span>Last updated: Just now</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp size={12} />
              <span>Productivity: +23% this month</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
