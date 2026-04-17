import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import { sceneSectionContent } from "./breachroomCopy"
import { incidents } from "./incidents"
import { BreachRoomStyleMount, SectionHeader } from "./breachroomPrimitives"
import { createBreachRoomTheme, themeVars } from "./breachroomTheme"
import {
    BootOverlay,
    CaseMenu,
    IncidentView,
    MenuView,
    MonitorViewport,
    SelectedCasePanel,
    type ExperienceMode,
} from "./BreachRoomSceneParts"

type Props = {
    splineUrl: string
    accentColor: string
    sectionTag: string
    title: string
    description: string
    injectStyles?: boolean
}

export default function BreachRoomScene(props: Partial<Props>) {
    const {
        splineUrl = "",
        accentColor = "#58F2FF",
        sectionTag = sceneSectionContent.tag,
        title = sceneSectionContent.title,
        description = sceneSectionContent.description,
        injectStyles = true,
    } = props

    const theme = createBreachRoomTheme(accentColor)
    const rootClassName = injectStyles ? "br-root" : undefined
    const [selectedId, setSelectedId] = React.useState(incidents[0].id)
    const [mode, setMode] = React.useState<ExperienceMode>("menu")
    const [sceneIndex, setSceneIndex] = React.useState(0)
    const [captions, setCaptions] = React.useState(true)
    const [narration, setNarration] = React.useState(false)
    const [progress, setProgress] = React.useState(0)

    const active = incidents.find((item) => item.id === selectedId) ?? incidents[0]
    const scene = active.scenes[sceneIndex]

    React.useEffect(() => {
        if (mode !== "boot") return

        setProgress(0)
        const start = Date.now()
        const tick = window.setInterval(() => {
            setProgress(Math.min(100, ((Date.now() - start) / 2000) * 100))
        }, 80)

        const done = window.setTimeout(() => {
            window.clearInterval(tick)
            setProgress(100)
            setMode("incident")
        }, 2000)

        return () => {
            window.clearInterval(tick)
            window.clearTimeout(done)
        }
    }, [mode])

    React.useEffect(() => {
        if (!narration || mode !== "incident" || !("speechSynthesis" in window)) return

        const utterance = new SpeechSynthesisUtterance(
            `${active.company}. ${scene.title}. ${scene.narration}`
        )
        utterance.lang = "pt-BR"
        utterance.rate = 0.96
        utterance.pitch = 0.86

        window.speechSynthesis.cancel()
        window.speechSynthesis.speak(utterance)

        return () => window.speechSynthesis.cancel()
    }, [active.company, mode, narration, scene.narration, scene.title])

    const openCase = (id: string) => {
        setSelectedId(id)
        setSceneIndex(0)
        setMode("boot")
    }

    const go = (delta: number) => {
        setSceneIndex((current) => Math.max(0, Math.min(active.scenes.length - 1, current + delta)))
    }

    return (
        <div className={rootClassName} style={themeVars(theme)}>
            <BreachRoomStyleMount enabled={injectStyles} />
            <section className="br-section">
                <div className="br-wrap">
                    <SectionHeader tag={sectionTag} title={title} description={description} />
                    <div className="br-stage" style={{ marginTop: 28 }}>
                        <div className="br-desk" />
                        <div className="br-cable br-cable-left" />
                        <div className="br-cable br-cable-right" />
                        <div className="br-layout">
                            <div className="br-monitor">
                                <MonitorViewport
                                    splineUrl={splineUrl}
                                    mode={mode}
                                    themeColor={accentColor}
                                />
                                <div className="br-overlay">
                                    {mode === "boot" ? (
                                        <BootOverlay progress={progress} accentColor={accentColor} />
                                    ) : mode === "incident" ? (
                                        <IncidentView
                                            scene={scene}
                                            activeName={active.company}
                                            accentColor={active.accentColor}
                                            captions={captions}
                                            narration={narration}
                                            onCaptions={() => setCaptions(!captions)}
                                            onNarration={() => setNarration(!narration)}
                                            onBack={() => {
                                                setMode("menu")
                                                setSceneIndex(0)
                                            }}
                                            onPrev={() => go(-1)}
                                            onNext={() => go(1)}
                                            onRestart={() => setSceneIndex(0)}
                                            canPrev={sceneIndex > 0}
                                            canNext={sceneIndex < active.scenes.length - 1}
                                        />
                                    ) : (
                                        <MenuView
                                            company={active.company}
                                            scenes={active.scenes.map((item) => item.title)}
                                            accentColor={accentColor}
                                        />
                                    )}
                                </div>
                            </div>
                            <div>
                                <SelectedCasePanel incident={active} />
                                <CaseMenu incidents={incidents} activeId={active.id} onSelect={openCase} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

addPropertyControls(BreachRoomScene, {
    splineUrl: {
        title: "Spline URL",
        type: ControlType.String,
        placeholder: "https://my.spline.design/...",
    },
    accentColor: { title: "Accent", type: ControlType.Color, defaultValue: "#58F2FF" },
    sectionTag: {
        title: "Tag",
        type: ControlType.String,
        defaultValue: sceneSectionContent.tag,
    },
    title: { title: "Title", type: ControlType.String, defaultValue: sceneSectionContent.title },
    description: {
        title: "Description",
        type: ControlType.String,
        defaultValue: sceneSectionContent.description,
        displayTextArea: true,
    },
})
