export interface Project {
  title: string
  tags: string[]
  description: string
  link: string
}

export interface Course {
  name: string
  score: string
}

export interface EducationInfo {
  degree: string
  school: string
  period: string
  wam: string
  courses: Course[]
}

export interface Job {
  title: string
  company: string
  period: string
  bullets: string[]
}
