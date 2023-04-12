import { ReactNode } from "react"

export type SkillGroupType = { 
    name: string,
    image: ReactNode,
    categories: Array<{
        name: string,
        accent: string,
        skills: Array<{
            name: string,
            image: ReactNode,
            description: string
        }>
    }>
}