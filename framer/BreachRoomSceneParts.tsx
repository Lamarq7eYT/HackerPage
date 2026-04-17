import * as React from "react"
import type { IncidentCase, IncidentScene } from "./incidents"
import { hexToRgba } from "./breachroomTheme"

export type ExperienceMode = "menu" | "boot" | "incident"

export function MonitorViewport(props: {
    splineUrl: string
    mode: ExperienceMode
    themeColor: string
}) {
    const frameStyle =
        props.mode === "boot"
            ? { transform: "scale(1.08)", filter: "contrast(1.14) saturate(1.12)" }
            : props.mode === "incident"
              ? { transform: "scale(1.04)", filter: "contrast(1.06)" }
              : undefined

    return (
        <div className="br-view">
            {props.splineUrl ? (
                <iframe
                    src={props.splineUrl}
                    title="Spline scene"
                    allow="autoplay; fullscreen"
                    style={frameStyle}
                />
            ) : (
                <div className="br-placeholder">
                    <div className="br-placeholder-orb br-placeholder-orb-a" />
                    <div className="br-placeholder-orb br-placeholder-orb-b" />
                    <div className="br-placeholder-grid" />
                    <div className="br-note">
                        Cole a URL publicada do Spline aqui para trocar o placeholder pela cena 3D.
                    </div>
                </div>
            )}
            <div className="br-scanlines" />
            <div className="br-noise" />
            <div
                className="br-monitor-halo"
                style={{ background: `radial-gradient(circle, ${hexToRgba(props.themeColor, 0.12)}, transparent 72%)` }}
            />
        </div>
    )
}

export function BootOverlay(props: { progress: number; accentColor: string }) {
    return (
        <div className="br-boot">
            <div className="br-top">
                <span className="br-chip">loading incident file</span>
                <span className="br-chip">{Math.round(props.progress)}%</span>
            </div>
            <div className="br-progress">
                <span
                    style={{
                        width: `${props.progress}%`,
                        background: `linear-gradient(90deg, ${props.accentColor}, #fff)`,
                    }}
                />
            </div>
            <div className="br-preview">
                decrypting archive / syncing subtitles / standby para narracao / calibrando overlays
            </div>
        </div>
    )
}

export function MenuView(props: { company: string; scenes: string[]; accentColor: string }) {
    return (
        <div>
            <div className="br-player-top">
                <div>
                    <span className="br-tag">Incident menu</span>
                    <h3 className="br-scene-title">Escolha um caso no rail lateral</h3>
                </div>
                <span className="br-pill" style={pillStyle(props.accentColor)}>
                    Idle room
                </span>
            </div>
            <p className="br-scene-copy" style={{ marginTop: 14 }}>
                A tela principal fica livre para o Spline vender profundidade, reflexos, poeira e glow.
                O Framer sobe em cima com a narrativa.
            </p>
            <div className="br-scene" style={{ marginTop: 16 }}>
                {props.scenes.map((item, index) => (
                    <div className="br-preview" key={item}>
                        <strong>{String(index + 1).padStart(2, "0")}</strong> {item}
                    </div>
                ))}
            </div>
        </div>
    )
}

export function IncidentView(props: {
    scene: IncidentScene
    activeName: string
    accentColor: string
    captions: boolean
    narration: boolean
    onCaptions: () => void
    onNarration: () => void
    onBack: () => void
    onPrev: () => void
    onNext: () => void
    onRestart: () => void
    canPrev: boolean
    canNext: boolean
}) {
    return (
        <div>
            <div className="br-player-top">
                <span className="br-pill" style={pillStyle(props.accentColor)}>
                    {props.activeName}
                </span>
                <span className="br-chip">scene playback</span>
            </div>
            <div className="br-scene">
                <h3 className="br-scene-title">{props.scene.title}</h3>
                <p className="br-scene-copy">{props.scene.narration}</p>
                <div className="br-cue">
                    <span className="br-tag">Visual cue</span>
                    <p style={{ margin: "8px 0 0" }}>{props.scene.visualCue}</p>
                </div>
                {props.captions ? (
                    <div className="br-subtitle">
                        <span className="br-tag">Legenda</span>
                        <p style={{ margin: "8px 0 0" }}>{props.scene.subtitle}</p>
                    </div>
                ) : null}
                <div className="br-controls">
                    <button
                        className="br-small"
                        onClick={props.onPrev}
                        disabled={!props.canPrev}
                        type="button"
                    >
                        Voltar
                    </button>
                    <button className="br-small" onClick={props.onRestart} type="button">
                        Reiniciar
                    </button>
                    <button
                        className="br-small"
                        onClick={props.onNext}
                        disabled={!props.canNext}
                        type="button"
                    >
                        Avancar
                    </button>
                </div>
                <div className="br-toggles">
                    <button className="br-toggle" onClick={props.onCaptions} type="button">
                        {props.captions ? "Legendas on" : "Legendas off"}
                    </button>
                    <button className="br-toggle" onClick={props.onNarration} type="button">
                        {props.narration ? "Narracao on" : "Narracao off"}
                    </button>
                    <button className="br-toggle" onClick={props.onBack} type="button">
                        Voltar ao menu
                    </button>
                </div>
                <div className="br-cue">
                    <span className="br-tag">Licao defensiva</span>
                    <p style={{ margin: "8px 0 0" }}>{props.scene.defensiveLesson}</p>
                </div>
            </div>
        </div>
    )
}

export function SelectedCasePanel(props: { incident: IncidentCase }) {
    return (
        <div className="br-panel">
            <div className="br-panel-top">
                <div>
                    <span className="br-tag">Selected case</span>
                    <h3 className="br-scene-title">{props.incident.company}</h3>
                </div>
                <span className="br-pill" style={pillStyle(props.incident.accentColor)}>
                    {props.incident.severityLabel}
                </span>
            </div>
            <p className="br-panel-copy" style={{ marginTop: 10 }}>
                {props.incident.year} / {props.incident.attackType}
                <br />
                {props.incident.shortDescription}
            </p>
        </div>
    )
}

export function CaseMenu(props: {
    incidents: IncidentCase[]
    activeId: string
    onSelect: (id: string) => void
}) {
    return (
        <div className="br-panel" style={{ marginTop: 16 }}>
            <span className="br-tag">Case menu</span>
            <div className="br-case-grid">
                {props.incidents.map((incident) => {
                    const isActive = incident.id === props.activeId
                    return (
                        <button
                            key={incident.id}
                            className="br-case"
                            style={
                                isActive
                                    ? {
                                          borderColor: hexToRgba(incident.accentColor, 0.48),
                                          background: `linear-gradient(180deg, ${hexToRgba(incident.accentColor, 0.16)}, rgba(255,255,255,.04))`,
                                      }
                                    : undefined
                            }
                            onClick={() => props.onSelect(incident.id)}
                            aria-label={`Abrir caso ${incident.company}`}
                            type="button"
                        >
                            <span className="br-case-year">{incident.year}</span>
                            <strong>{incident.company}</strong>
                            <span>{incident.attackType}</span>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

function pillStyle(color: string) {
    return {
        padding: "8px 12px",
        background: hexToRgba(color, 0.15),
        border: `1px solid ${hexToRgba(color, 0.3)}`,
        color: "#F7FDFF",
    }
}
