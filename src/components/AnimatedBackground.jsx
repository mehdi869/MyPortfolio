import { useEffect, useState } from 'react'

const orbs = [
  { size: 400, x: '15%', y: '20%', color: 'rgba(59,130,246,0.04)', duration: 25 },
  { size: 350, x: '75%', y: '15%', color: 'rgba(139,92,246,0.03)', duration: 30 },
  { size: 300, x: '55%', y: '65%', color: 'rgba(59,130,246,0.025)', duration: 28 },
  { size: 450, x: '25%', y: '80%', color: 'rgba(139,92,246,0.025)', duration: 32 },
]

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {orbs.map((orb, i) => (
        <div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: orb.color,
            animation: `float ${orb.duration}s ease-in-out infinite`,
            animationDelay: `${i * 3}s`,
          }}
        />
      ))}
    </div>
  )
}
