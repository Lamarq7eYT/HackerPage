import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import { heroContent, heroMetrics } from "./breachroomCopy"
import { BreachRoomStyleMount, MetricCard } from "./breachroomPrimitives"
import { createBreachRoomTheme, themeVars } from "./breachroomTheme"

type Props = {
    accentColor: string
    eyebrow: string
    title: string
    description: string
    primaryCta: string
    secondaryCta: string
    injectStyles?: boolean
    onPrimaryClick?: () => void
    onSecondaryClick?: () => void
}

export default function BreachRoomHero(props: Partial<Props>) {
    const {
        accentColor = "#58F2FF",
        eyebrow = "Cinematic cyber incident room",
        title = heroContent.title,
        description = heroContent.description,
        primaryCta = "Entrar no monitor",
        secondaryCta = "Ver casos",
        injectStyles = true,
        onPrimaryClick,
        onSecondaryClick,
    } = props

    const theme = createBreachRoomTheme(accentColor)
    const rootClassName = injectStyles ? "br-root" : undefined

    return (
        <div className={rootClassName} style={themeVars(theme)}>
            <BreachRoomStyleMount enabled={injectStyles} />
            <section className="br-hero">
                <div className="br-glow" style={{ background: theme.heroGlow }} />
                <div className="br-grid" />
                <div className="br-wrap">
                    <span className="br-kicker">{eyebrow}</span>
                    <h1 className="br-title">{title}</h1>
                    <p className="br-copy">{description}</p>
                    <div className="br-actions" style={{ marginTop: 24 }}>
                        <button
                            className="br-btn"
                            style={{ background: theme.primaryGradient }}
                            onClick={onPrimaryClick}
                            type="button"
                            aria-label={primaryCta}
                        >
                            {primaryCta}
                        </button>
                        <button
                            className="br-link"
                            onClick={onSecondaryClick}
                            type="button"
                            aria-label={secondaryCta}
                        >
                            {secondaryCta}
                        </button>
                    </div>
                    <div className="br-metrics" style={{ marginTop: 24 }}>
                        {heroMetrics.map((metric) => (
                            <MetricCard key={metric.label} label={metric.label} value={metric.value} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

addPropertyControls(BreachRoomHero, {
    accentColor: { title: "Accent", type: ControlType.Color, defaultValue: "#58F2FF" },
    eyebrow: {
        title: "Eyebrow",
        type: ControlType.String,
        defaultValue: "Cinematic cyber incident room",
    },
    title: { title: "Title", type: ControlType.String, defaultValue: heroContent.title },
    description: {
        title: "Description",
        type: ControlType.String,
        defaultValue: heroContent.description,
        displayTextArea: true,
    },
    primaryCta: { title: "CTA 1", type: ControlType.String, defaultValue: "Entrar no monitor" },
    secondaryCta: { title: "CTA 2", type: ControlType.String, defaultValue: "Ver casos" },
})
