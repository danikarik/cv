export const langs = ["ru", "en"] as const

export type Lang = (typeof langs)[number]

/** Text in every supported language. A missing translation is a type error. */
export type Text = Record<Lang, string>

/** Year and month, e.g. "2025-08". */
export type YearMonth = `${number}-${number}`

export interface Contact {
  label: Text
  text: string
  href: string
}

export interface SkillGroup {
  title: Text
  /** Product names stay as plain strings; descriptive items carry translations. */
  items: (string | Text)[]
}

export interface Project {
  name?: string
  about: Text
  highlights: Text[]
  stack: string[]
}

export interface Job {
  /** Company names stay as plain strings; descriptive labels carry translations. */
  company: string | Text
  role: Text
  start: YearMonth
  /** Omitted for the current position. */
  end?: YearMonth
  projects: Project[]
}

export interface Education {
  degree: Text
  school: Text
}

export interface CV {
  name: Text
  title: Text
  location: Text
  contacts: Contact[]
  summary: Text[]
  skills: SkillGroup[]
  leadership: Text[]
  experience: Job[]
  education: Education[]
}
