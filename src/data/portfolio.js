
export const profile = {
  name: 'Hailemichael Tamirat',
  role: 'Junior Software Developer',
  intro:
    'I build React interfaces and I am growing into full-stack development with Python. I am looking for an internship or junior role where I can ship real features and learn from a team.',
  email: 'hailemichaeltamirat21@gmail.com',
  location: 'Addis Ababa, Ethiopia', 
  github: 'https://github.com/henomi', 
  linkedin: 'https://www.linkedin.com/in/hailemichael-tamirat-5a7836372', 
  cvUrl: '/Hailemichael Tamirat_CV.pdf',
  cvFileName: 'Hailemichael Tamirat-CV.pdf',
}

export const now = [
  { label: 'Building', value: 'Adis Eatery, a restaurant menu and ordering app' },
  { label: 'Learning', value: 'Python backends and REST APIs to go with my React frontend skills' },
  { label: 'Looking for', value: 'Internships and junior developer roles' },
]

export const about = [
  'I am a software developer who enjoys turning an idea into a screen someone can actually use. My strongest side today is the frontend: component-based UIs with React, styled with Tailwind CSS.', // EDIT
  'I am now learning the other half of the stack. My plan is a Python backend feeding a React frontend, so I can own a feature from the database to the button.', // EDIT
  'I learn by building complete projects, and I like working with people who give honest code review.', // EDIT
]

export const skills = [
  {
    group: 'Comfortable with',
    items: ['Nextjs', 'React', 'JavaScript', 'HTML & CSS', 'Tailwind CSS','REST APIs', 'Git & GitHub'],
  },
  {
    group: 'Learning now',
    items: ['golang(go)', 'nodejs', 'Databases', 'Full-stack architecture'],
  },
]


export const projects = [
  {
    id: 'adis-eatery',
    title: 'Adis Eatery',
    kind: 'Restaurant menu and ordering app',
    visual: 'eatery',
    summary:
      'A Nextjs frontend for a restaurant. Customers browse the menu, add dishes to a cart and place an order, Track order, with Admin Dashboard to manage dishes and orders.',
    highlights: [
      'Menu data loaded from a backend API instead of local JSON',
      'Cart and ordering flow, not just a read-only menu',
      'Tracking Map',
    ],
    stack: ['Nextjs', 'Tailwind CSS', 'REST API'],
    repo: 'https://github.com/henomi/IBT---Canada---Projects/tree/main/module-03-react-nextjs/next/my-next-app',
    live: 'https://ibt-canada-projects-als7.vercel.app/',
  },
  {
    id: 'employee-management-system',
    title: 'Employee Management System',
    kind: 'Staff records application',
    visual: 'ems',
    summary:
      'An application for keeping employee records in one place. Add new staff, update their details and find anyone quickly.', // EDIT
    highlights: [
      'Create, view, edit and delete employee records', 
      'Search and filter the employee list', 
      'Form validation so bad data never reaches the database',
    ],
    stack: ['HTML','CSS','JavaScript', 'PHP', 'MySql'],
    repo: '', 
    live: '',
  },
]
