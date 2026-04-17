import type { CSSProperties } from "react"

export type BreachRoomTheme = {
    accentColor: string
    accentSoft: string
    accentStrong: string
    accentShadow: string
    primaryGradient: string
    heroGlow: string
}

export function hexToRgba(hex: string, alpha: number) {
    const raw = hex.replace("#", "")
    const full = raw.length === 3 ? raw.split("").map((char) => char + char).join("") : raw
    const numeric = Number.parseInt(full, 16)
    const r = (numeric >> 16) & 255
    const g = (numeric >> 8) & 255
    const b = numeric & 255

    return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export function createBreachRoomTheme(accentColor: string): BreachRoomTheme {
    return {
        accentColor,
        accentSoft: hexToRgba(accentColor, 0.16),
        accentStrong: hexToRgba(accentColor, 0.48),
        accentShadow: hexToRgba(accentColor, 0.24),
        primaryGradient: `linear-gradient(135deg, ${accentColor}, #d7faff)`,
        heroGlow: `radial-gradient(circle, ${hexToRgba(accentColor, 0.24)}, transparent 70%)`,
    }
}

export function themeVars(theme: BreachRoomTheme): CSSProperties {
    return {
        ["--br-accent" as string]: theme.accentColor,
        ["--br-accent-soft" as string]: theme.accentSoft,
        ["--br-accent-strong" as string]: theme.accentStrong,
        ["--br-accent-shadow" as string]: theme.accentShadow,
    }
}
