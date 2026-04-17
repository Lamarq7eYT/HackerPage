import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import BreachRoomFooterCTA from "./BreachRoomFooterCTA"
import BreachRoomHero from "./BreachRoomHero"
import BreachRoomLessons from "./BreachRoomLessons"
import BreachRoomScene from "./BreachRoomScene"
import BreachRoomTechStack from "./BreachRoomTechStack"
import { heroContent } from "./breachroomCopy"
import { BreachRoomStyleMount } from "./breachroomPrimitives"
import { createBreachRoomTheme, themeVars } from "./breachroomTheme"

type Props = {
    splineUrl: string
    githubUrl: string
    accentColor: string
    eyebrow: string
    primaryCta: string
    secondaryCta: string
}

export default function BreachRoomLanding(props: Partial<Props>) {
    const {
        splineUrl = "",
        githubUrl = "https://github.com/your-handle/breachroom-framer",
        accentColor = "#58F2FF",
        eyebrow = "Cinematic cyber incident room",
        primaryCta = "Entrar no monitor",
        secondaryCta = "Ver casos",
    } = props

    const theme = createBreachRoomTheme(accentColor)
    const sceneRef = React.useRef<HTMLDivElement>(null)
    const lessonsRef = React.useRef<HTMLDivElement>(null)

    return (
        <div className="br-root" style={themeVars(theme)}>
            <BreachRoomStyleMount />
            <BreachRoomHero
                injectStyles={false}
                accentColor={accentColor}
                eyebrow={eyebrow}
                title={heroContent.title}
                description={heroContent.description}
                primaryCta={primaryCta}
                secondaryCta={secondaryCta}
                onPrimaryClick={() => sceneRef.current?.scrollIntoView({ behavior: "smooth" })}
                onSecondaryClick={() => lessonsRef.current?.scrollIntoView({ behavior: "smooth" })}
            />
            <div ref={sceneRef}>
                <BreachRoomScene
                    injectStyles={false}
                    splineUrl={splineUrl}
                    accentColor={accentColor}
                />
            </div>
            <div ref={lessonsRef}>
                <BreachRoomLessons injectStyles={false} accentColor={accentColor} />
            </div>
            <BreachRoomTechStack injectStyles={false} accentColor={accentColor} />
            <BreachRoomFooterCTA
                injectStyles={false}
                accentColor={accentColor}
                githubUrl={githubUrl}
                onPrimaryClick={() => sceneRef.current?.scrollIntoView({ behavior: "smooth" })}
            />
        </div>
    )
}

addPropertyControls(BreachRoomLanding, {
    splineUrl: {
        title: "Spline URL",
        type: ControlType.String,
        placeholder: "https://my.spline.design/...",
    },
    githubUrl: {
        title: "GitHub URL",
        type: ControlType.String,
        placeholder: "https://github.com/...",
    },
    accentColor: { title: "Accent", type: ControlType.Color, defaultValue: "#58F2FF" },
    eyebrow: {
        title: "Eyebrow",
        type: ControlType.String,
        defaultValue: "Cinematic cyber incident room",
    },
    primaryCta: { title: "CTA 1", type: ControlType.String, defaultValue: "Entrar no monitor" },
    secondaryCta: { title: "CTA 2", type: ControlType.String, defaultValue: "Ver casos" },
})
