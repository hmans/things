import { useEffect } from "react"

export const useAnimationFrame = (
  callback: FrameRequestCallback,
  deps?: any[]
) => {
  useEffect(() => {
    let id: number
    let lastTime: number

    const tick = (time: number) => {
      id = requestAnimationFrame(tick)

      /* Initialize lastTime if it doesn't exist. */
      if (!lastTime) lastTime = time

      /* Determine delta time, clamped to 1 second max. */
      const diff = time - lastTime
      const dt = clamp01(diff / 1000)
      lastTime = time

      /* Invoke callback. */
      callback(dt)
    }

    id = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(id)
    }
  }, deps)
}

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max)

const clamp01 = (value: number) => clamp(value, 0, 1)
