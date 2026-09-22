import { lazy, Suspense, useCallback, useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import {
  ArrowDown, ArrowUpRight, Atom, BriefcaseBusiness, Check, ChevronRight, Code2,
  Database, Download, Github, GraduationCap, Linkedin, Mail, MapPin, Menu, Phone,
  Sparkles, X, Zap,
} from 'lucide-react'
import {
  certifications, education, experience, identity, interests, profileCards, projects,
  skillGroups, ventureNodes, type Project,
} from './data/portfolio'
import { useInView } from './hooks/useInView'
import ProjectModal from './components/ProjectModal'
import avatarImage from './assets/pratap-profile-original.png'

const Scene = lazy(() => import('./components/Scene'))

const navItems = [
  ['Story', '#about'], ['Venture', '#venture'], ['Journey', '#journey'],
  ['Work', '#projects'], ['Stack', '#stack'], ['Contact', '#contact'],
]

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
  const reduced = useReducedMotion()
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: .65, delay, ease: [.22, 1, .36, 1] }}>{children}</motion.div>
}

function SceneViewport({ variant, className = '' }: { variant: 'workspace' | 'timeline' | 'lab', className?: string }) {
  const { ref, visible } = useInView<HTMLDivElement>()
  const reduced = useReducedMotion()
  return <div ref={ref} className={`scene ${className}`} aria-hidden="true">
    {visible && !reduced && <Suspense fallback={<div className="scene-loader" /> }><Scene variant={variant} /></Suspense>}
    {reduced && <div className={`scene-fallback fallback-${variant}`} />}
  </div>
}

function Cursor() {
  const dot = useRef<HTMLDivElement>(null)
  const [label, setLabel] = useState('')
  useEffect(() => {
    if (!matchMedia('(pointer:fine)').matches) return
    const move = (e: MouseEvent) => {
      dot.current?.style.setProperty('--cursor-x', `${e.clientX}px`)
      dot.current?.style.setProperty('--cursor-y', `${e.clientY}px`)
      const target = (e.target as HTMLElement).closest<HTMLElement>('[data-cursor],a,button')
      setLabel(target?.dataset.cursor ?? (target?.matches('a') ? 'OPEN' : ''))
    }
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [])
  return <div ref={dot} className={`cursor ${label ? 'cursor-active' : ''}`}><span>{label}</span></div>
}

function Navbar() {
  const [open, setOpen] = useState(false)
  return <header className="nav-wrap">
    <a className="brand" href="#top" aria-label="Pratap Kumar Das, home"><span>PKD</span><i /></a>
    <nav className={open ? 'nav-open' : ''} aria-label="Main navigation">
      {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      <a className="nav-resume" href={identity.resume} download data-cursor="SAVE">Résumé <Download size={14} /></a>
    </nav>
    <button className="menu-button" onClick={() => setOpen(v => !v)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button>
  </header>
}

function SectionHead({ kicker, title, copy }: { kicker: string, title: React.ReactNode, copy?: string }) {
  return <Reveal className="section-head"><span className="eyebrow">{kicker}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</Reveal>
}

function Hero() {
  return <section className="hero" id="top">
    <div className="hero-grid-bg" />
    <div className="hero-copy">
      <motion.div className="status-pill" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .2 }}><i /> Bhubaneswar · India</motion.div>
      <motion.p className="hero-overline" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .25 }}>FOUNDER @ BALAJIONE ENTERPRISES</motion.p>
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, delay: .35, ease: [.22, 1, .36, 1] }}>
        PRATAP<br /><span>KUMAR DAS</span>
      </motion.h1>
      <motion.p className="hero-statement" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .65, duration: .7 }}>{identity.headline}</motion.p>
      <motion.div className="hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .85 }}>
        <a className="button button-primary" href="#projects" data-cursor="VIEW">Explore my work <ArrowDown size={17} /></a>
        <a className="button button-ghost" href="#contact">Let’s talk <ArrowUpRight size={17} /></a>
      </motion.div>
      <motion.div className="hero-links" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        <a href={identity.github} target="_blank" rel="noreferrer"><Github /> GitHub</a>
        <a href={identity.linkedin} target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>
        <a href={identity.resume} download><Download /> Résumé</a>
      </motion.div>
    </div>
    <div className="hero-visual">
      <SceneViewport variant="workspace" />
      <motion.div className="hero-avatar" initial={{ opacity: 0, x: 45 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: .65, ease: [.22, 1, .36, 1] }}>
        <div className="avatar-orbit" aria-hidden="true" />
        <div className="avatar-frame"><img src={avatarImage} alt="Portrait photograph of Pratap Kumar Das" /></div>
        <div className="avatar-status"><i /><span>PRATAP.DIGITAL</span><small>AVAILABLE TO BUILD</small></div>
      </motion.div>
      <div className="visual-caption"><span>01 / DIGITAL WORKSPACE</span><span>WEB · SOFTWARE · BUSINESS</span></div>
    </div>
    <div className="scroll-cue"><span>SCROLL TO DISCOVER</span><ArrowDown size={15} /></div>
  </section>
}

function About() {
  return <section className="section about" id="about">
    <div className="container">
      <SectionHead kicker="01 · THE PERSON" title={<>Who is <em>Pratap?</em></>} copy="A developer’s mindset shaped by real operations, business ownership, and a bias toward useful outcomes." />
      <Reveal className="brand-quote"><span>“</span><p>{identity.statement}</p></Reveal>
      <div className="profile-grid">{profileCards.map((card, i) => <Reveal key={card.index} delay={i * .08} className="profile-card">
        <div className="card-top"><span>{card.index}</span><ArrowUpRight /></div><h3>{card.title}</h3><p>{card.text}</p>
      </Reveal>)}</div>
      <div className="storyline" aria-label="Professional story">
        {['Learning', 'Development', 'Operations', 'Solar ERP', 'Entrepreneurship'].map((item, i) => <Reveal key={item} delay={i * .07} className="story-step"><span>0{i + 1}</span><strong>{item}</strong>{i < 4 && <ChevronRight />}</Reveal>)}
      </div>
    </div>
  </section>
}

function Venture() {
  return <section className="section venture" id="venture">
    <div className="container venture-layout">
      <div><SectionHead kicker="02 · THE VENTURE" title={<>Building <em>BalajiOne.</em></>} copy="A focused technology venture started in Bhubaneswar in July 2026—built around practical digital solutions for businesses." />
        <Reveal className="venture-meta"><span>FOUNDER</span><span>JUL 2026 — PRESENT</span><span>BHUBANESWAR</span></Reveal>
      </div>
      <Reveal className="ecosystem">
        <div className="orbit orbit-a" /><div className="orbit orbit-b" />
        <div className="ecosystem-core"><small>TECH VENTURE</small><strong>BALAJI<br />ONE</strong><i /></div>
        {ventureNodes.map((node, i) => <div key={node} className={`eco-node node-${i + 1}`}><span>{String(i + 1).padStart(2, '0')}</span>{node}</div>)}
      </Reveal>
    </div>
  </section>
}

function Journey() {
  return <section className="section journey" id="journey">
    <div className="container">
      <SectionHead kicker="03 · EXPERIENCE" title={<>From operations to <em>engineering.</em></>} copy="A career path where customer-facing operations, solar business context, and software development converge." />
      <div className="journey-layout">
        <div className="journey-scene"><SceneViewport variant="timeline" /><span className="vertical-label">CAREER SIGNAL / 2023—NOW</span></div>
        <div className="timeline">{experience.map((item, i) => <Reveal className="timeline-item" key={`${item.company}-${item.role}`}>
          <div className="timeline-index">{String(i + 1).padStart(2, '0')}</div>
          <div><span className="timeline-period">{item.period}</span><h3>{item.role}</h3><h4>{item.company}</h4><p>{item.detail}</p>{item.note && <small>{item.note}</small>}</div>
        </Reveal>)}</div>
      </div>
    </div>
  </section>
}

function SolarERP() {
  const flow = ['Solar operations', 'Business process', 'Digital workflow', 'ERP', 'Automation']
  return <section className="section solar" id="solar-erp">
    <div className="container">
      <SectionHead kicker="04 · SOLAR ERP" title={<>Solving real <em>business problems.</em></>} copy="Technical knowledge becomes more valuable when it understands the operation underneath." />
      <div className="solar-layout">
        <Reveal className="solar-visual"><SceneViewport variant="lab" /><div className="lab-tag"><Zap size={15} /> DIGITAL PRODUCT LAB</div></Reveal>
        <div className="flow-list">{flow.map((item, i) => <Reveal className="flow-item" key={item} delay={i * .07}><span>{String(i + 1).padStart(2, '0')}</span><strong>{item}</strong>{i < flow.length - 1 ? <ArrowDown /> : <Check />}</Reveal>)}</div>
      </div>
      <Reveal className="equation"><div><BriefcaseBusiness /><span>Operational<br />experience</span></div><b>+</b><div><Code2 /><span>Technical<br />knowledge</span></div><b>=</b><div className="equation-result"><Sparkles /><span>Practical digital<br />solutions</span></div></Reveal>
    </div>
  </section>
}

function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)
  const close = useCallback(() => setSelected(null), [])
  return <section className="section projects" id="projects">
    <div className="container">
      <SectionHead kicker="05 · SELECTED WORK" title={<>Interfaces for ideas.<br /><em>Systems for reality.</em></>} copy="A project archive spanning business systems and focused frontend explorations. Select a screen to inspect it." />
      <div className="project-desk">{projects.map((project, i) => <Reveal className={`project-position project-pos-${i + 1}`} key={project.title} delay={i * .06}>
        <button className="project-window" onClick={() => setSelected(project)} data-cursor="VIEW" style={{ '--accent': project.accent } as React.CSSProperties}>
          <span className="window-bar"><i /><i /><i /><small>{String(i + 1).padStart(2, '0')} / PKD.LAB</small></span>
          <span className="window-content"><small>{project.date || 'SELECTED PROJECT'}</small><strong>{project.title}</strong><span className="window-tags">{project.stack.slice(0, 3).join(' · ')}</span><i className="project-arrow"><ArrowUpRight /></i></span>
        </button>
      </Reveal>)}</div>
    </div>
    <ProjectModal project={selected} close={close} />
  </section>
}

function Stack() {
  return <section className="section stack" id="stack">
    <div className="container">
      <SectionHead kicker="06 · CAPABILITIES" title={<>Developer <em>stack.</em></>} copy="A category view of the tools and domains represented across the source documents—without artificial proficiency scores." />
      <div className="skill-grid">{skillGroups.map((group, i) => <Reveal className="skill-group" key={group.title} delay={i * .08}><div className="skill-heading"><span>0{i + 1}</span><h3>{group.title}</h3></div><div>{group.items.map(item => <span className="skill-pill" key={item}>{item}</span>)}</div></Reveal>)}</div>
      <div className="beyond-code">
        <Reveal><span className="eyebrow">BEYOND CODE</span><h3>Technology is only half<br />of the equation.</h3></Reveal>
        {[['DATA', 'Exploratory data analysis', Database], ['BUSINESS', 'Business ownership', BriefcaseBusiness], ['VENTURES', 'Start-up experience', Atom]].map(([title, text, Icon], i) => {
          const I = Icon as typeof Database
          return <Reveal className="beyond-card" key={title as string} delay={i * .08}><I /><span>{title as string}</span><p>{text as string}</p></Reveal>
        })}
      </div>
    </div>
  </section>
}

function Education() {
  return <section className="section education" id="education">
    <div className="container education-layout">
      <div><SectionHead kicker="07 · FOUNDATION" title={<>Education &<br /><em>milestones.</em></>} />
        <Reveal className="achievement"><Zap /><div><span>ACHIEVEMENT</span><strong>CODA-THON</strong><p>Participated in a competitive coding and development event.</p></div></Reveal>
      </div>
      <div className="education-list">{education.map((item, i) => <Reveal className="education-item" key={item.degree} delay={i * .08}><div className="edu-icon"><GraduationCap /></div><div><span>{item.years}</span><h3>{item.degree}</h3><p>{item.school}</p><small>{item.place}{item.meta ? ` · ${item.meta}` : ''}</small></div></Reveal>)}
        <div className="certificate-grid">{certifications.map(item => <Reveal className="certificate" key={item.name}><span>CERTIFICATE</span><h4>{item.name}</h4><p>{item.issuer}{item.date ? ` · ${item.date}` : ''}</p></Reveal>)}</div>
      </div>
    </div>
  </section>
}

function Interests() {
  const glyphs = ['✦', '♟', '↗', '♪', '◈']
  return <section className="interests"><div className="container interests-inner"><span className="eyebrow">08 · BEYOND TECHNOLOGY</span><div className="interest-row">{interests.map((item, i) => <Reveal className="interest" key={item} delay={i * .05}><i>{glyphs[i]}</i><span>{item}</span></Reveal>)}</div></div></section>
}

function Contact() {
  return <footer className="contact" id="contact"><div className="contact-glow" /><div className="container">
    <Reveal><span className="eyebrow">09 · START A CONVERSATION</span><h2>Let’s build<br /><em>something real.</em></h2><p className="contact-lead">Have an idea, business problem, or software requirement?<br />Let’s turn it into a digital solution.</p></Reveal>
    <Reveal className="contact-actions"><a className="button button-primary button-large" href={identity.emailHref} data-cursor="MAIL">Start a project <ArrowUpRight /></a><a className="button button-ghost button-large" href={identity.resume} download>Download résumé <Download /></a></Reveal>
    <div className="contact-grid">
      <a href={identity.emailHref}><Mail /><div><span>EMAIL</span><strong>{identity.email}</strong></div></a>
      <a href={identity.phoneHref}><Phone /><div><span>PHONE</span><strong>{identity.phone}</strong></div></a>
      <div><MapPin /><div><span>LOCATION</span><strong>{identity.location}</strong></div></div>
    </div>
    <div className="footer-line"><span>© {new Date().getFullYear()} PRATAP KUMAR DAS</span><span>DESIGNED FOR REAL-WORLD IMPACT</span><div><a href={identity.github} target="_blank" rel="noreferrer">GITHUB ↗</a><a href={identity.linkedin} target="_blank" rel="noreferrer">LINKEDIN ↗</a></div></div>
  </div></footer>
}

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 25, restDelta: .001 })
  return <>
    <motion.div className="progress" style={{ scaleX }} />
    <Cursor /><Navbar />
    <main id="main"><Hero /><About /><Venture /><Journey /><SolarERP /><Projects /><Stack /><Education /><Interests /></main>
    <Contact />
  </>
}
