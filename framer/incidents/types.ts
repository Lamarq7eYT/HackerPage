export type IncidentScene = {
    id: string
    title: string
    subtitle: string
    narration: string
    visualCue: string
    defensiveLesson: string
}

export type IncidentCase = {
    id: string
    company: string
    title: string
    year: string
    attackType: string
    severityLabel: string
    accentColor: string
    shortDescription: string
    scenes: IncidentScene[]
}
