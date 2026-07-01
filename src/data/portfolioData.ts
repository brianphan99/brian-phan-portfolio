import type { Project, EducationInfo, Job } from '../types'

export const personalInfo = {
  fullName: 'Brian (Nguyen) Phan',
  title: 'SOFTWARE DEVELOPER',
  subtitle: 'MIT Grad & CSE Academic',
  bio: 'Building robust full-stack applications and intelligent AI solutions.',
  email: 'brian.ngphan@gmail.com',
  phone: '(+61) 466984642',
  linkedin: 'https://linkedin.com/in/brian-phan-455a81307',
  github: 'https://github.com/brianphan99'
}

export const education: EducationInfo = {
  degree: 'Master of Information Technology',
  school: 'University of New South Wales (UNSW)',
  period: 'Feb 2024 - Dec 2025',
  wam: '84.50',
  courses: [
    { name: 'Principles of Prog.', score: '95%' },
    { name: 'Algorithms Design', score: '93%' },
    { name: 'Web Frontend Prog.', score: '93%' },
    { name: 'Info Tech Project', score: '90%' }
  ]
}

export const experiences: Job[] = [
  {
    title: 'CSE Academic',
    company: 'UNSW Computer Science & Engineering',
    period: 'Feb 2026 - Present',
    bullets: [
      'Directed Foundations of CS sessions in discrete math & algorithms for 20+ students.',
      'Resolved 100+ technical inquiries across digital forums to reduce resolution times.'
    ]
  },
  {
    title: 'Software Engineer Intern',
    company: 'FPT Software',
    period: 'Sep 2023 - Jan 2024',
    bullets: [
      'Built React/TypeScript workforce management UI modules for a 50-employee company.',
      'Optimized rendering pipelines & lazy-loading to slash page load latency by 15%.',
      'Executed Agile feature delivery and GitLab code integration with zero defects.'
    ]
  },
  {
    title: 'Embedded Engineer Intern',
    company: 'Viethas Ltd',
    period: 'Jul 2021 - Sep 2021',
    bullets: [
      'Prototyped STM-microcontroller (C++) IR transmission telemetry over a 5-meter range.',
      'Documented complex SCADA infrastructure to accelerate new-hire onboarding by 20%.'
    ]
  }
]

export const projects: Project[] = [
  {
    title: 'FYDD RSS News Reader',
    tags: ['React', 'Django', 'PostgreSQL', 'AWS'],
    description: 'A full-stack, cloud-native RSS feed reader that automates the ingestion and organization of decentralized feeds.',
    link: 'https://github.com/brianphan99/Fydd'
  },
  {
    title: 'SDG Knowledge Chatbot',
    tags: ['React', 'Python', 'RAG AI', 'Docker'],
    description: 'A stateful conversational AI chatbot with retrieval-augmented generation to answer database queries.',
    link: ''
  },
  {
    title: 'Real-time Bottle Defects Detection',
    tags: ['Python', 'YOLO', 'OpenCV'],
    description: 'A high-throughput computer vision inference engine for real-time manufacturing QA inspection at 30 FPS.',
    link: 'https://github.com/brianphan99/realtime-bottle-defect-detection'
  }
]
