import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import { techStackContent } from "./breachroomCopy"
import { techStack } from "./incidents"
import { BreachRoomStyleMount, SectionHeader } from "./breachroomPrimitives"
import { createBreachRoomTheme, themeVars } from "./breachroomTheme"

type Props = {
    accentColor: string
    sectionTag: string
    title: string
    description: string
    injectStyles?: boolean
}

export default function BreachRoomTechStack(props: Partial<Props>) {
    const {
        accentColor = "#58F2FF",
        sectionTag = techStackContent.tag,
        title = techStackContent.title,
        description = techStackContent.description,
        injectStyles = true,
    } = props

    const theme = createBreachRoomTheme(accentColor)
    const rootClassName = injectStyles ? "br-root" : undefined

    return (
        <div className={rootClassName} style={themeVars(theme)}>
            <BreachRoomStyleMount enabled={injectStyles} />
            <section className="br-section">
                <div className="br-wrap">
                    <SectionHeader tag={sectionTag} title={title} description={description} />
                    <div className="br-stack-row" style={{ marginTop: 22 }}>
                        {techStack.map((item) => (
                            <span className="br-stack" key={item}>
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

addPropertyControls(BreachRoomTechStack, {
    accentColor: { title: "Accent", type: ControlType.Color, defaultValue: "#58F2FF" },
    sectionTag: { title: "Tag", type: ControlType.String, defaultValue: techStackContent.tag },
    title: { title: "Title", type: ControlType.String, defaultValue: techStackContent.title },
    description: {
        title: "Description",
        type: ControlType.String,
        defaultValue: techStackContent.description,
        displayTextArea: true,
    },
})
