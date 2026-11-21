import heroImg from './assets/hero.png'
import resumePdf from './assets/resume.pdf'

export const contact = {
  email: 'ankit.p6384@gmail.com',
  phone: '+91 7080706384',
  location: 'Malad west, Mumbai, Maharashtra, India',
  resume: resumePdf,
  github: 'https://github.com/FYCS27ANKIT',
  linkedin: 'https://www.linkedin.com/in/ankit-pandey-633533284/',
  instagram: 'https://www.instagram.com/__ankitup44__/',
}

export const summary =
  'Software Developer with 1 year of experience building web applications and custom WordPress plugins. Skilled in MERN stack development with PHP and MySQL, and experienced in APIs, authentication systems, and scalable web features.'

export const experiences = [
  {
    role: 'PHP Developer',
    company: 'Softaculous Pvt. Ltd',
    date: 'June 2025 – Present',
    bullets: [
      'Build and maintain custom WordPress plugins to extend website functionality.',
      'Implement hooks, filters, and REST API integrations for scalable features.',
      'Debug and optimize plugin performance and database interactions.',
      'Collaborate with development teams to design secure, maintainable solutions.',
    ],
  },
]

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Mumbai University',
    date: '2025 – Present',
  },
  {
    degree: 'Bachelor of Science in Computer Science (B.Sc CS)',
    institution: 'Mumbai University',
    date: '2021 – 2024',
    details: 'CGPA 8.33',
  },
]

export const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 88 },
  { name: 'Node.js', level: 85 },
  { name: 'PHP', level: 82 },
  { name: 'Laravel', level: 78 },
  { name: 'Bootstrap 5', level: 84 },
  { name: 'MySQL', level: 83 },
  { name: 'MongoDB', level: 80 },
  { name: 'Git', level: 88 },
  { name: 'GitHub', level: 86 },
  { name: 'REST APIs', level: 87 },
  { name: 'MERN', level: 85 },
  { name: 'WordPress', level: 80 },
  { name: 'OOP', level: 82 },
]
export const projects = [
  {
    name: 'Real-Time Chat Application',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    description:
      'Full-stack real-time messaging app built with MERN and Socket.io for instant sub-50ms message delivery.',
    points: [
      'Bi-directional WebSocket communication architecture with sub-50ms message latency.',
      'Secure JWT authentication with encrypted private and multi-user chat rooms.',
      'Live presence indicators, real-time typing status, and read receipt tracking.',
      'Responsive dark glassmorphic UI with local message history persistence.'
    ],
    tags: ['MERN', 'Socket.io', 'Realtime', 'WebSockets', 'JWT'],
    demo: 'https://fyc527ankit.github.io/realtime-chat-app',
    github: 'https://github.com/FYCS27ANKIT',
  },
  {
    name: 'SkillSwap Platform',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    description:
      'Peer-to-peer knowledge exchange and mentoring platform connecting developers and creators worldwide.',
    points: [
      'Interactive skill matchmaking algorithms pairing mentors and learners by expertise.',
      'Comprehensive user profiles with portfolio showcases and community endorsements.',
      'Automated session scheduling with timezone conversion and email notifications.',
      'RESTful API architecture secured with role-based access control and MongoDB aggregations.'
    ],
    tags: ['MERN', 'REST API', 'Profiles', 'MongoDB', 'Authentication'],
    demo: 'https://fyc527ankit.github.io/skillswap-platform',
    github: 'https://github.com/FYCS27ANKIT',
  },
  {
    name: 'Real Estate Management System',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    description:
      'Property listing and client inquiry portal featuring dynamic search filtering and admin control panels.',
    points: [
      'Modular PHP MVC backend with relational MySQL schema and prepared statements.',
      'Multi-tier administrative dashboards for property CRUD, booking, and lead tracking.',
      'Dynamic multi-parameter property filtering by price range, square footage, and amenities.',
      'Responsive Bootstrap 5 interface optimized for mobile buyers and real estate agents.'
    ],
    tags: ['PHP', 'MySQL', 'CRUD', 'Bootstrap 5', 'MVC'],
    demo: 'https://fyc527ankit.github.io/real-estate-management-system',
    github: 'https://github.com/FYCS27ANKIT',
  },
  {
    name: 'Job-Hunt-OS',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    description:
      'Developer job search operating system with Kanban application tracking, resume matching, and follow-up analytics.',
    points: [
      'Interactive drag-and-drop Kanban board managing stages from Wishlist to Interview and Offer.',
      'Analytics suite calculating application conversion velocity, response rates, and salary metrics.',
      'Resume version tracking matching specific submitted CV versions against job descriptions.',
      'Automated email notification scheduler reminding developers of upcoming technical interview rounds.'
    ],
    tags: ['React', 'Node.js', 'Kanban', 'Analytics', 'Productivity'],
    demo: 'https://fyc527ankit.github.io/realtime-chat-app',
    github: 'https://github.com/FYCS27ANKIT',
  },
]

export const social = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ankit-pandey-633533284/', icon: 'bi-linkedin', short: 'IN' },
  { label: 'GitHub', href: 'https://github.com/FYCS27ANKIT', icon: 'bi-github', short: 'GH' },
  { label: 'Instagram', href: 'https://www.instagram.com/__ankitup44__/', icon: 'bi-instagram', short: 'IG' },
  { label: 'Email', href: `mailto:${contact.email}`, icon: 'bi-envelope-fill', short: 'EM' },
]

export const heroImgSrc = heroImg
