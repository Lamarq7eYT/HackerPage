import * as React from "react"
import { breachroomCss } from "./breachroomCss"

export function BreachRoomStyleMount(props: { enabled?: boolean }) {
    if (props.enabled === false) return null
    return <style>{breachroomCss}</style>
}

export function SectionHeader(props: { tag: string; title: string; description: string }) {
    return (
        <>
            <span className="br-tag">{props.tag}</span>
            <h2>{props.title}</h2>
            <p className="br-section-copy">{props.description}</p>
        </>
    )
}

export function MetricCard(props: { label: string; value: string }) {
    return (
        <div className="br-metric">
            <span className="br-tag">{props.label}</span>
            <strong>{props.value}</strong>
        </div>
    )
}
