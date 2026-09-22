import { useEffect, useRef, useState } from 'react'

export function useInView<T extends HTMLElement>(margin = '200px') {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { rootMargin: margin })
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [margin])
  return { ref, visible }
}
