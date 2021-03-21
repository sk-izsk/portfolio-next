export interface Offerings {
  name: string
  offerings: string[]
}

export interface Avatar {
  avatarOne: string
  avatarTwo: string
}

export interface Information {
  nameOfOrganization: string
  startYear: string
  endYear: string
  details: string
  link?: string
  demoLink?: string
}

export interface Photo {
  url: string
}

export type Technology = 'BACKEND' | 'FRONTEND' | 'MISC'

export interface SkillsInformation {
  name: string
  progress: number
  backgroundColor: string
  technology?: Technology
}

export interface MyOffers {
  frontEnd: Offerings
  backEnd: Offerings
}

export interface Informations {
  avatar: Avatar
  educationInformations: Information[]
  experienceInformations: Information[]
  photos: Photo[]
  skillsInformation: SkillsInformation[]
  myOffers: MyOffers
}
