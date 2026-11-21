import { useEffect, useRef } from 'react'

export default function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    let width = (canvas.width = canvas.parentElement.offsetWidth || window.innerWidth)
    let height = (canvas.height = canvas.parentElement.offsetHeight || 600)

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (isReducedMotion) return

    // Particle count scaled to screen size
    const particleCount = Math.min(Math.floor((width * height) / 18000), 55)
    const particles = []

    const mouse = {
      x: null,
      y: null,
      radius: 120,
    }

    class Particle {
      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.vx = (Math.random() - 0.5) * 0.7
        this.vy = (Math.random() - 0.5) * 0.7
        this.radius = Math.random() * 2 + 1.2
        this.baseColor = Math.random() > 0.4 ? 'rgba(86, 204, 242, ' : 'rgba(47, 128, 237, '
        this.opacity = Math.random() * 0.5 + 0.25
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        // Bounce on boundary
        if (this.x < 0 || this.x > width) this.vx *= -1
        if (this.y < 0 || this.y > height) this.vy *= -1

        // Mouse interaction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x
          const dy = mouse.y - this.y
          const distance = Math.hypot(dx, dy)
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius
            const angle = Math.atan2(dy, dx)
            this.x -= Math.cos(angle) * force * 1.5
            this.y -= Math.sin(angle) * force * 1.5
          }
        }
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.baseColor + this.opacity + ')'
        ctx.shadowColor = '#56ccf2'
        ctx.shadowBlur = 8
        ctx.fill()
        ctx.shadowBlur = 0
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    const connect = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x
          const dy = particles[a].y - particles[b].y
          const distance = Math.hypot(dx, dy)

          if (distance < 110) {
            const opacity = 1 - distance / 110
            ctx.strokeStyle = `rgba(86, 204, 242, ${opacity * 0.22})`
            ctx.lineWidth = 0.8
            ctx.beginPath()
            ctx.moveTo(particles[a].x, particles[a].y)
            ctx.lineTo(particles[b].x, particles[b].y)
            ctx.stroke()
          }
        }

        // Connect to mouse if near
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - particles[a].x
          const dy = mouse.y - particles[a].y
          const distMouse = Math.hypot(dx, dy)
          if (distMouse < 130) {
            const opacity = 1 - distMouse / 130
            ctx.strokeStyle = `rgba(86, 204, 242, ${opacity * 0.45})`
            ctx.lineWidth = 1.2
            ctx.beginPath()
            ctx.moveTo(particles[a].x, particles[a].y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.stroke()
          }
        }
      }
    }

    let isVisible = true
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting
    })
    observer.observe(canvas)

    const animate = () => {
      if (isVisible) {
        ctx.clearRect(0, 0, width, height)
        for (let i = 0; i < particles.length; i++) {
          particles[i].update()
          particles[i].draw()
        }
        connect()
      }
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      if (!canvas.parentElement) return
      width = canvas.width = canvas.parentElement.offsetWidth
      height = canvas.height = canvas.parentElement.offsetHeight
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    const handleMouseLeave = () => {
      mouse.x = null
      mouse.y = null
    }

    window.addEventListener('resize', handleResize)
    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
      observer.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="hero-particle-canvas"
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'auto',
        zIndex: 0,
      }}
    />
  )
}
