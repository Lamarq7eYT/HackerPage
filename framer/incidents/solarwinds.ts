import { type IncidentCase } from "./types"

export const solarwinds: IncidentCase = {
    id: "solarwinds",
    company: "SolarWinds",
    title: "SolarWinds Supply-Chain Attack",
    year: "2020",
    attackType: "Supply chain compromise",
    severityLabel: "Confianca virou vetor",
    accentColor: "#9D7DFF",
    shortDescription: "O caso reposicionou a conversa sobre software confiavel e cadeia de fornecimento.",
    scenes: [
        { id: "sw-1", title: "Fornecedor confiavel", subtitle: "Atualizacoes eram parte natural da rotina operacional.", narration: "O proprio canal confiavel virou o ponto mais sensivel.", visualCue: "Rede de empresas conectadas a um unico hub luminoso.", defensiveLesson: "Confianca de fornecedor precisa ser validada." },
        { id: "sw-2", title: "Atualizacao contaminada", subtitle: "A cadeia de software passou a carregar risco invisivel.", narration: "Quando a supply chain e atingida, manutencao e risco se confundem.", visualCue: "Pacote de update limpo adquirindo aura vermelha no trajeto.", defensiveLesson: "Assinatura e revisao de pipeline sao essenciais." },
        { id: "sw-3", title: "Movimento discreto", subtitle: "Sutileza valeu mais do que ruido visual.", narration: "Sofisticacao, aqui, significou parecer legitimo e permanecer invisivel.", visualCue: "Linhas vermelhas finas atravessando multiplos ambientes.", defensiveLesson: "Deteccao comportamental importa." },
        { id: "sw-4", title: "Abalo sistemico", subtitle: "O debate deixou de ser sobre uma empresa so.", narration: "O incidente virou discussao ampla sobre ecossistema e dependencia tecnologica.", visualCue: "Mapas abstratos de organizacoes piscando em cascata.", defensiveLesson: "Terceiros criticos entram no modelo de risco." },
        { id: "sw-5", title: "Licao defensiva", subtitle: "Supply chain tambem e superficie de ataque.", narration: "Zero trust precisa valer inclusive para software confiavel demais.", visualCue: "Anel de verificacao com hashes e checklists girando.", defensiveLesson: "Nao existe confianca cega madura." },
    ],
}
