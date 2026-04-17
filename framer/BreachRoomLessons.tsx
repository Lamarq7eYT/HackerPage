import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import { lessonsContent } from "./breachroomCopy"
import { lessons } from "./incidents"
import { BreachRoomStyleMount, SectionHeader } from "./breachroomPrimitives"
import { createBreachRoomTheme, themeVars } from "./breachroomTheme"

type Props = {
    accentColor: string
    sectionTag: string
    title: string
    description: string
    injectStyles?: boolean
}

export default function BreachRoomLessons(props: Partial<Props>) {
    const {
        accentColor = "#58F2FF",
        sectionTag = lessonsContent.tag,
        title = lessonsContent.title,
        description = lessonsContent.description,
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
                    <div className="br-lessons" style={{ marginTop: 24 }}>
                        {lessons.map((item) => (
                            <div className="br-lesson" key={item}>
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

addPropertyControls(BreachRoomLessons, {
    accentColor: { title: "Accent", type: ControlType.Color, defaultValue: "#58F2FF" },
    sectionTag: { title: "Tag", type: ControlType.String, defaultValue: lessonsContent.tag },
    title: { title: "Title", type: ControlType.String, defaultValue: lessonsContent.title },
    description: {
        title: "Description",
        type: ControlType.String,
        defaultValue: lessonsContent.description,
        displayTextArea: true,
    },
})
