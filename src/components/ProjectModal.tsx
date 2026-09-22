import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect } from 'react'
import type { Project } from '../data/portfolio'

export default function ProjectModal({ project, close }: { project: Project | null, close: () => void }) {
  useEffect(() => {
    if (!project) return
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && close()
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey) }
  }, [project, close])

  return <AnimatePresence>{project && <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={close}>
    <motion.div className="modal" role="dialog" aria-modal="true" aria-labelledby="project-title" initial={{ opacity: 0, y: 40, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20 }} onMouseDown={e => e.stopPropagation()}>
      <button className="icon-button modal-close" onClick={close} aria-label="Close project details"><X /></button>
      <span className="eyebrow">Selected project</span>
      <h2 id="project-title">{project.title}</h2>
      <p className="modal-summary">{project.summary}</p>
      <div className="tag-row">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
      <div className="modal-rule" />
      <p className="mini-label">SUPPORTED FEATURES</p>
      <ul className="feature-list">{project.features.map(item => <li key={item}>{item}</li>)}</ul>
      <p className="source-note">Project details are limited to information provided in the source résumé.</p>
    </motion.div>
  </motion.div>}</AnimatePresence>
}
