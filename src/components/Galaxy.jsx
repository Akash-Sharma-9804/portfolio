import { useRef, useEffect, useCallback } from 'react'

/**
 * Galaxy.jsx
 * Full-screen WebGL galaxy background rendered with raw Three.js.
 * Uses circular soft particles to avoid square artifacts.
 */

function createCircleTexture() {
  const size = 32
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')

  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  gradient.addColorStop(0, 'rgba(255,255,255,1)')
  gradient.addColorStop(0.4, 'rgba(255,255,255,0.3)')
  gradient.addColorStop(1, 'rgba(255,255,255,0)')

  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, size, size)
  return canvas
}

export default function Galaxy() {
  const canvasRef = useRef(null)
  const mouseRef  = useRef({ x: 0, y: 0 })
  const rafRef    = useRef(null)

  const handleMouseMove = useCallback((e) => {
    mouseRef.current = {
      x: (e.clientX / window.innerWidth)  - 0.5,
      y: (e.clientY / window.innerHeight) - 0.5,
    }
  }, [])

  useEffect(() => {
    let THREE, scene, camera, renderer, points, geometry, material, texture
    let mounted = true

    const init = async () => {
      THREE = (await import('three')).default || await import('three')

      if (!mounted || !canvasRef.current) return

      const canvas = canvasRef.current
      const W = canvas.offsetWidth || window.innerWidth
      const H = canvas.offsetHeight || window.innerHeight

      renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setSize(W, H)
      renderer.setClearColor(0x000000, 0)

      scene  = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(75, W / H, 0.1, 1000)
      camera.position.z = 2.5

      const PARTICLES  = 6000
      const ARMS       = 3
      const ARM_SPREAD = 0.3
      const positions  = new Float32Array(PARTICLES * 3)
      const colors     = new Float32Array(PARTICLES * 3)
      const sizes      = new Float32Array(PARTICLES)

      const colorInner = new THREE.Color('#CAAFA1')
      const colorMid   = new THREE.Color('#9B8E88')
      const colorOuter = new THREE.Color('#353535')

      for (let i = 0; i < PARTICLES; i++) {
        const i3     = i * 3
        const radius = Math.random() * 4 + 0.5
        const spin   = radius * 1.2
        const arm    = (i % ARMS) * ((Math.PI * 2) / ARMS)
        const angle  = arm + spin

        const rx = (Math.random() - 0.5) * ARM_SPREAD * radius
        const ry = (Math.random() - 0.5) * ARM_SPREAD * radius * 0.25
        const rz = (Math.random() - 0.5) * ARM_SPREAD * radius

        positions[i3]     = Math.cos(angle) * radius + rx
        positions[i3 + 1] = ry
        positions[i3 + 2] = Math.sin(angle) * radius + rz

        const t = radius / 4.5
        const c = t < 0.4
          ? colorInner.clone().lerp(colorMid,   t / 0.4)
          : colorMid.clone().lerp(colorOuter, (t - 0.4) / 0.6)

        colors[i3]     = c.r
        colors[i3 + 1] = c.g
        colors[i3 + 2] = c.b

        // Varying particle sizes — smaller = more stars, larger = fewer
        sizes[i] = Math.random() * 2.5 + 0.5
      }

      geometry = new THREE.BufferGeometry()
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      geometry.setAttribute('color',    new THREE.BufferAttribute(colors, 3))
      geometry.setAttribute('size',     new THREE.BufferAttribute(sizes, 1))

      texture = new THREE.CanvasTexture(createCircleTexture())
      texture.needsUpdate = true

      material = new THREE.PointsMaterial({
        size:         1.5,
        vertexColors: true,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.85,
        depthWrite: false,
        map: texture,
        alphaTest: 0.01,
        blending: THREE.AdditiveBlending,
      })

      points = new THREE.Points(geometry, material)
      scene.add(points)

      const onResize = () => {
        if (!canvasRef.current) return
        const w = canvasRef.current.offsetWidth || window.innerWidth
        const h = canvasRef.current.offsetHeight || window.innerHeight
        camera.aspect = w / h
        camera.updateProjectionMatrix()
        renderer.setSize(w, h)
      }
      window.addEventListener('resize', onResize)

      const tick = () => {
        if (!mounted) return
        rafRef.current = requestAnimationFrame(tick)

        const elapsed = performance.now() * 0.0001
        points.rotation.y = elapsed * 0.08

        camera.position.x += (mouseRef.current.x * 0.4 - camera.position.x) * 0.02
        camera.position.y += (-mouseRef.current.y * 0.4 - camera.position.y) * 0.02
        camera.lookAt(scene.position)

        renderer.render(scene, camera)
      }
      tick()

      return () => {
        window.removeEventListener('resize', onResize)
        geometry.dispose()
        material.dispose()
        texture.dispose()
        renderer.dispose()
      }
    }

    init()

    return () => {
      mounted = false
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      <canvas
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 0 }}
      />
      {/* Soft radial vignette so text remains perfectly readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 55% at 50% 50%, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 60%, #000000 100%)',
          zIndex: 1,
        }}
      />
    </>
  )
}
