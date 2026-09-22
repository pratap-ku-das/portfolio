export type Project = {
  title: string
  date?: string
  stack: string[]
  summary: string
  features: string[]
  accent: string
}

export const identity = {
  name: 'Pratap Kumar Das',
  label: 'Developer · Entrepreneur · Solution Builder',
  headline: 'Building practical software solutions for real-world problems.',
  statement: 'I build software, understand business problems, and turn ideas into practical digital solutions.',
  location: 'Bhubaneswar, Odisha, India',
  phone: '+91 93485 32113',
  phoneHref: 'tel:+919348532113',
  email: 'pratapkudas111@gmail.com',
  emailHref: 'mailto:pratapkudas111@gmail.com',
  linkedin: 'https://www.linkedin.com/in/pratap-kumar-das-08a5a7252',
  github: 'https://github.com/pratap-ku-das/portfolio',
  githubClone: 'https://github.com/pratap-ku-das/portfolio.git',
  resume: '/Pratap-Kumar-Das-Resume.pdf',
}

export const profileCards = [
  { index: '01', title: 'Software Developer', text: 'Building reliable software with a foundation in Java, SQL, modern web technologies, and hands-on development practice.' },
  { index: '02', title: 'Web Application Builder', text: 'Designing responsive interfaces and full-stack web experiences that turn requirements into usable products.' },
  { index: '03', title: 'Digital Transformation', text: 'Connecting operational knowledge with digital workflows, especially across solar operations and ERP thinking.' },
  { index: '04', title: 'Entrepreneur', text: 'Building BalajiOne Enterprises as a focused technology venture for software, web, AI-powered products, and business solutions.' },
]

export const ventureNodes = ['Software', 'Web apps', 'AI-powered products', 'Digital transformation', 'Business technology']

export const experience = [
  {
    period: '2023 — 2024', role: 'Supervisor', company: 'Think Caffe Cultural Pvt. Ltd.',
    detail: 'Managed daily operations, coordinated teams, supported customer satisfaction, and resolved conflicts under pressure.',
    note: 'The professional profile additionally reports a 15% improvement in customer retention and satisfaction.',
  },
  {
    period: 'JUN 2025 — PRESENT', role: 'Head of Operations & Website Coordinator', company: 'SolarBee',
    detail: 'Connects solar business operations with web requirements; maintains service, pricing, contact, and franchise content using HTML, CSS, JavaScript, and Git.',
  },
  {
    period: 'JUL 2025 — APR 2026', role: 'Operation Executive', company: 'Pragati Ecosolar',
    detail: 'Built practical context in solar operations and the business workflows that surround service delivery.',
  },
  {
    period: 'OCT 2025', role: 'Frontend Development Intern', company: 'CodeAlpha',
    detail: 'Practised responsive interface development with HTML, CSS, and JavaScript in a virtual internship.',
  },
  {
    period: 'MAY — AUG 2026', role: 'Software Engineer Intern', company: 'Veteran Ventures & Services Pvt. Ltd.',
    detail: 'Worked in a development team environment across application building, testing, maintenance, and real-world engineering practice.',
  },
  {
    period: 'JUL 2026 — PRESENT', role: 'Founder', company: 'BalajiOne Enterprises',
    detail: 'Building a technology venture focused on innovative software, custom web applications, AI-powered products, and digital transformation services.',
  },
]

export const projects: Project[] = [
  {
    title: 'SolarOps ERP', stack: ['React', 'Node.js', 'PostgreSQL'], accent: '#86e6c4',
    summary: 'A system designed around the operational reality of solar project lifecycles.',
    features: ['Centralizes solar project lifecycles', 'Addresses operational bottlenecks', 'Automates financial tracking'],
  },
  {
    title: 'Invoice Management', stack: ['React', 'Tailwind CSS'], accent: '#a5b4fc',
    summary: 'A responsive workflow for accurate business invoicing and financial tracking.',
    features: ['Streamlined invoicing workflow', 'Responsive interface', 'Financial tracking support'],
  },
  {
    title: 'Age Calculator', date: 'Aug 2025', stack: ['HTML', 'CSS', 'JavaScript'], accent: '#f4ca8b',
    summary: 'An interactive web app that calculates precise age in years, months, and days.',
    features: ['Precise date calculation', 'Responsive UI', 'Clear output states'],
  },
  {
    title: 'Simple Calculator', stack: ['HTML', 'CSS', 'JavaScript'], accent: '#e6a0ba',
    summary: 'A clean calculator experience for everyday arithmetic.',
    features: ['Core arithmetic operations', 'Input validation', 'Clean user interface'],
  },
  {
    title: 'Image Gallery', stack: ['HTML', 'CSS', 'JavaScript'], accent: '#84c7f4',
    summary: 'A responsive image collection with an interactive viewing experience.',
    features: ['Responsive grid layout', 'Interactive image display', 'Device-friendly design'],
  },
  {
    title: 'Personal Portfolio', stack: ['HTML', 'CSS', 'JavaScript'], accent: '#c5a3ff',
    summary: 'A deployed portfolio focused on clear navigation and responsive presentation.',
    features: ['Project and skill showcase', 'Responsive layout', 'User-friendly navigation'],
  },
]

export const skillGroups = [
  { title: 'Core', items: ['Java Core', 'Python', 'SQL', 'HTML5', 'CSS', 'JavaScript'] },
  { title: 'Web', items: ['React', 'Next.js', 'Node.js', 'Express.js', 'Web application development', 'MERN stack development'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'AI tools'] },
  { title: 'Domain', items: ['Solar ERP', 'Digital transformation', 'Business operations', 'UI/UX design'] },
]

export const education = [
  { years: '2024 — AUG 2026', degree: 'Master of Computer Applications', school: 'Regional College of Management', place: 'Bhubaneswar, Odisha', meta: 'GPA 9.1 / 10' },
  { years: '2020 — 2024', degree: 'B.Sc. Mathematics', school: 'Berhampur University', place: 'Berhampur, Odisha', meta: 'GPA 7.0 / 10' },
  { years: '2018 — 2020', degree: '+2 / Higher Secondary', school: 'Khemundi College, Digapahandi', place: 'Odisha' },
]

export const certifications = [
  { name: 'Java OOPS', issuer: 'SkillUp', date: 'June 2025', text: 'Industry-relevant object-oriented programming concepts for software development.' },
  { name: 'Power BI Workshop', issuer: 'SkillUp', date: '', text: 'Listed in the professional profile.' },
]

export const interests = ['Art', 'Chess', 'Travel', 'Dance', 'eSports']

export const sourceReview = {
  reviewed: ['Profile.pdf', 'Pratap Kumar Das V5.pdf', 'PRATAP_KUMAR_DAS_V5.pdf'],
  conflicts: [
    { field: 'MCA GPA', values: ['8.4/10', '9.01/10'], resolution: 'Owner confirmed 9.1/10.' },
    { field: 'MCA completion', values: ['April 2026', 'July 2026', 'Expected August 2026'], resolution: 'Owner confirmed August 2026.' },
    { field: 'Veteran internship end', values: ['August 2026', 'September 2026'], resolution: 'Owner confirmed August 2026.' },
    { field: 'Email', values: ['pratap.kumar.das@rcm.ac', 'pratapkudas111@gmail.com'], resolution: 'Owner confirmed pratapkudas111@gmail.com.' },
    { field: 'LinkedIn slug', values: ['pratapkumar-das-085a67252', 'pratap-kumar-das-08a5a7252'], resolution: 'Owner confirmed pratap-kumar-das-08a5a7252.' },
  ],
}
