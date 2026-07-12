import heroImg from './assets/hero.png'

export const contact = {
  email: 'ankit.p6384@gmail.com',
  phone: '+91 7080706384',
  location: 'Malad west, Mumbai, Maharashtra, India',
  resume: '/resume.pdf',
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
    description:
      'Built a real-time messaging app using MERN and Socket.io with authenticated users, instant updates, and backend API integration.',
    tags: ['MERN', 'Socket.io', 'Realtime'],
    demo: 'https://fyc527ankit.github.io/realtime-chat-app',
    github: 'https://github.com/FYCS27ANKIT',
  },
  {
    name: 'SkillSwap Platform',
    description:
      'Created a skill exchange platform with authentication, user profiles, and interaction features for people to connect and share expertise.',
    tags: ['MERN', 'Profiles', 'Authentication'],
    demo: 'https://fyc527ankit.github.io/skillswap-platform',
    github: 'https://github.com/FYCS27ANKIT',
  },
  {
    name: 'Real Estate Management System',
    description:
      'Developed a responsive property management platform using PHP, MySQL, HTML, CSS, and JavaScript with secure authentication and admin dashboards.',
    tags: ['PHP', 'MySQL', 'CRUD'],
    demo: 'https://fyc527ankit.github.io/real-estate-management-system',
    github: 'https://github.com/FYCS27ANKIT',
  },
]

export const social = [
  { label: 'Email', href: `mailto:${contact.email}`, short: 'EM' },
]

export const heroImgSrc = heroImg
