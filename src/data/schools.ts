import schoolsData from './schools.json'

export interface School {
  name: string
  slug: string
  city: string
  type: string
  enrollment: number
  website: string
  locale: string
  isHBCU: boolean
  hasMedical: boolean
  carnegie: string
  description: string
}

export interface StateData {
  name: string
  slug: string
  abbreviation: string
  schools: School[]
}

export const states: StateData[] = schoolsData as StateData[]

export function getStateBySlug(slug: string): StateData | undefined {
  return states.find(s => s.slug === slug)
}

export function getSchoolBySlug(stateSlug: string, schoolSlug: string): { state: StateData; school: School } | undefined {
  const state = getStateBySlug(stateSlug)
  if (!state) return undefined
  const school = state.schools.find(s => s.slug === schoolSlug)
  if (!school) return undefined
  return { state, school }
}

export function getTotalSchoolCount(): number {
  return states.reduce((sum, state) => sum + state.schools.length, 0)
}

export function formatEnrollment(enrollment: number): string {
  if (enrollment >= 1000) {
    return (enrollment / 1000).toFixed(1).replace(/\.0$/, '') + 'k'
  }
  return enrollment.toLocaleString()
}

export function getAllSchools(): { school: School; state: StateData }[] {
  return states.flatMap(state =>
    state.schools.map(school => ({ school, state }))
  )
}

export function getHBCUs(): { school: School; state: StateData }[] {
  return getAllSchools().filter(({ school }) => school.isHBCU)
}

export function getCommunityColleges(): { school: School; state: StateData }[] {
  return getAllSchools().filter(({ school }) => school.type === 'Public Community College')
}
