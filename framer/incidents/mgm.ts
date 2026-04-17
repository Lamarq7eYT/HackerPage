import { type IncidentCase } from "./types"

export const mgm: IncidentCase = {
    id: "mgm",
    company: "MGM Resorts",
    title: "MGM Resorts Cyberattack",
    year: "2023",
    attackType: "Engenharia social + interrupcao",
    severityLabel: "Marca inteira afetada",
    accentColor: "#A3FF7A",
    shortDescription: "Um caso recente que recolocou identidade humana e continuidade no centro da conversa.",
    scenes: [
        { id: "mgm-1", title: "Hospitalidade conectada", subtitle: "Hotel, cassino e servicos digitais dependiam da mesma malha.", narration: "Quando a operacao e integrada, cada falha ecoa em varios pontos.", visualCue: "Fachada neon com fluxos de check-in sincronizados.", defensiveLesson: "Operacao conectada exige redundancia." },
        { id: "mgm-2", title: "Identidade sob pressao", subtitle: "A discussao publica destacou engenharia social e processos humanos.", narration: "Nem toda crise nasce de exploit sofisticado; processo tambem falha.", visualCue: "Telefone simbolico e credenciais holograficas mudando de cor.", defensiveLesson: "Verificacao humana tambem e defesa." },
        { id: "mgm-3", title: "Interrupcao visivel", subtitle: "O ataque saiu do bastidor tecnico para a experiencia do cliente.", narration: "Quando sistemas centrais param, a marca sente na linha de frente.", visualCue: "Painel de quartos e quiosques sofrendo glitches verdes.", defensiveLesson: "Mapear dependencias ajuda a isolar impacto." },
        { id: "mgm-4", title: "Marca em evidencia", subtitle: "A visibilidade da empresa acelerou a pressao publica.", narration: "Resposta tecnica e transparencia precisam correr no mesmo ritmo.", visualCue: "Fachadas neon piscando e mapa de servicos em ondas vermelhas.", defensiveLesson: "Tempo de comunicacao importa." },
        { id: "mgm-5", title: "Licao defensiva", subtitle: "Help desk, MFA e continuidade fazem parte da mesma historia.", narration: "Engenharia social continua poderosa quando processo humano falha.", visualCue: "Fluxo de autenticacao endurecido com checklist de help desk.", defensiveLesson: "Seguranca humana precisa ser treinada como produto." },
    ],
}
