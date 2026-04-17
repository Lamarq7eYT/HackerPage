import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import { footerContent } from "./breachroomCopy"
import { BreachRoomStyleMount } from "./breachroomPrimitives"
import { createBreachRoomTheme, themeVars } from "./breachroomTheme"

type Props = {
    accentColor: string
    githubUrl: string
    sectionTag: string
    title: string
    description: string
    primaryCta: string
    secondaryCta: string
    injectStyles?: boolean
    onPrimaryClick?: () => void
}

export default function BreachRoomFooterCTA(props: Partial<Props>) {
    const {
        accentColor = "#58F2FF",
        githubUrl = "https://github.com/your-handle/breachroom-framer",
        sectionTag = footerContent.tag,
        title = footerContent.title,
        description = footerContent.description,
        primaryCta = "Abrir experiencia",
        secondaryCta = "Ver codigo no GitHub",
        injectStyles = true,
        onPrimaryClick,
    } = props

    const theme = createBreachRoomTheme(accentColor)
    const rootClassName = injectStyles ? "br-root" : undefined

    return (
        <div className={rootClassName} style={themeVars(theme)}>
            <BreachRoomStyleMount enabled={injectStyles} />
            <section className="br-footer">
                <div className="br-wrap">
                    <div className="br-footer-card">
                        <span className="br-tag">{sectionTag}</span>
                        <h2 className="br-footer-title">{title}</h2>
                        <p className="br-footer-copy">{description}</p>
                        <div className="br-actions">
                            <button
                                className="br-btn"
                                style={{ background: theme.primaryGradient }}
                                onClick={onPrimaryClick}
                                type="button"
                                aria-label={primaryCta}
                            >
                                {primaryCta}
                            </button>
                            <a
                                className="br-link"
                                href={githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={secondaryCta}
                            >
                                {secondaryCta}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

addPropertyControls(BreachRoomFooterCTA, {
    accentColor: { title: "Accent", type: ControlType.Color, defaultValue: "#58F2FF" },
    githubUrl: {
        title: "GitHub URL",
        type: ControlType.String,
        placeholder: "https://github.com/...",
    },
    sectionTag: { title: "Tag", type: ControlType.String, defaultValue: footerContent.tag },
    title: { title: "Title", type: ControlType.String, defaultValue: footerContent.title },
    description: {
        title: "Description",
        type: ControlType.String,
        defaultValue: footerContent.description,
        displayTextArea: true,
    },
    primaryCta: { title: "CTA 1", type: ControlType.String, defaultValue: "Abrir experiencia" },
    secondaryCta: {
        title: "CTA 2",
        type: ControlType.String,
        defaultValue: "Ver codigo no GitHub",
    },
})
