import { colonial } from "./colonial"
import { equifax } from "./equifax"
import { marriott } from "./marriott"
import { mgm } from "./mgm"
import { solarwinds } from "./solarwinds"
import { sony } from "./sony"
import { target } from "./target"
import { yahoo } from "./yahoo"

export * from "./types"

export const incidents = [yahoo, equifax, solarwinds, target, colonial, sony, marriott, mgm]

export const lessons = [
    "Patch management nao e opcional.",
    "Supply chain tambem e superficie de ataque.",
    "Credenciais fracas viram desastre.",
    "Logs sem monitoramento sao decoracao.",
    "Plano de resposta reduz o estrago.",
    "Seguranca e processo, nao plugin magico.",
]

export const techStack = [
    "Framer",
    "Spline",
    "React Code Components",
    "Web Speech API opcional",
    "SVG overlays para monitor e alertas",
]
