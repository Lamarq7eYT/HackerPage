import { type IncidentCase } from "./types"

export const yahoo: IncidentCase = {
    id: "yahoo",
    company: "Yahoo",
    title: "Yahoo Data Breach",
    year: "2013-2014 / divulgado em 2016",
    attackType: "Comprometimento de contas",
    severityLabel: "Exposicao massiva",
    accentColor: "#58F2FF",
    shortDescription: "Escala, identidade e deteccao tardia viraram a marca do caso.",
    scenes: [
        { id: "yah-1", title: "Escala silenciosa", subtitle: "A plataforma parecia normal enquanto o risco crescia em segundo plano.", narration: "O problema ganhou escala antes da visibilidade publica.", visualCue: "Cidade noturna, malha de identidades e luz ciano respirando.", defensiveLesson: "Telemetria madura precisa acompanhar identidade em escala." },
        { id: "yah-2", title: "Sinais ignorados", subtitle: "Controles de sessao e resposta ficaram em evidencia.", narration: "O caso reforcou a necessidade de rigor em autenticacao e investigacao.", visualCue: "Porta digital rachando com alertas vermelhos discretos.", defensiveLesson: "Sessao e correlacao de eventos merecem prioridade executiva." },
        { id: "yah-3", title: "Efeito em cadeia", subtitle: "Contas expostas ampliam risco para outros servicos.", narration: "Credenciais reutilizadas espalham impacto muito alem da plataforma original.", visualCue: "Cartoes de perfil vazando do servidor como particulas.", defensiveLesson: "Proteja identidade considerando reutilizacao e recuperacao segura." },
        { id: "yah-4", title: "Queda de confianca", subtitle: "Reputacao e valor corporativo tambem entraram na equacao.", narration: "Seguranca passou a influenciar diretamente marca e negociacao.", visualCue: "Noticias simbolicas e graficos em queda refletidos no vidro.", defensiveLesson: "Tempo de resposta altera dano reputacional." },
        { id: "yah-5", title: "Licao defensiva", subtitle: "Criptografia, monitoramento e governanca precisam andar juntos.", narration: "O legado e claro: identidade sem observabilidade vira ponto cego caro.", visualCue: "Checklist holografico com selos de sessao e rotacao de credenciais.", defensiveLesson: "Identidade sem observabilidade vira ponto cego." },
    ],
}
