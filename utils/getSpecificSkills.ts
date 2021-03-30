import { SkillsInformation, Technology } from '../axios'

const getSpecificSkills = (
  skillTechnology: Technology,
  skills: SkillsInformation[],
): SkillsInformation[] =>
  skills.filter((skill: SkillsInformation) => skill.technology === skillTechnology)

export { getSpecificSkills }
