import { useEffect, useState } from 'react'

export default function TextFlipper({ words = ['MERN Stack', 'WordPress Plugins', 'REST APIs', 'Full-Stack Apps'], interval = 2800 }) {
  const [index, setIndex] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)

  useEffect(() => {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (isReducedMotion) return

    const timer = setInterval(() => {
      setIsFlipping(true)
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length)
        setIsFlipping(false)
      }, 350)
    }, interval)

    return () => clearInterval(timer)
  }, [words.length, interval])

  return (
    <span className="text-flipper-container d-inline-block">
      <span
        className={`accent text-flipper-word ${isFlipping ? 'flipping-out' : 'flipping-in'}`}
      >
        {words[index]}
      </span>
    </span>
  )
}
