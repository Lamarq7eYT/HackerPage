import { type IncidentCase } from "./types"

export const sony: IncidentCase = {
    id: "sony",
    company: "Sony Pictures",
    title: "Sony Pictures Hack",
    year: "2014",
    attackType: "Intrusao destrutiva + vazamento",
    severityLabel: "Dano tecnico e reputacional",
    accentColor: "#FF5D9E",
    shortDescription: "Vazamento, interrupcao e constrangimento publico colidiram no mesmo caso.",
    scenes: [
        { id: "son-1", title: "Estudio em producao", subtitle: "Projetos, contratos e comunicacoes circulavam normalmente.", narration: "Ambientes criativos tambem concentram ativos sensiveis.", visualCue: "Claquetes abstratas, telas brancas e luz magenta.", defensiveLesson: "Criatividade nao elimina disciplina de seguranca." },
        { id: "son-2", title: "Intrusao agressiva", subtitle: "O caso chamou atencao pela combinacao de dano e vazamento.", narration: "Nem todo ataque busca silencio; alguns buscam choque e exposicao.", visualCue: "Tipografia quebrada e telas apagando em bloco.", defensiveLesson: "Backups e segregacao ajudam contra impacto destrutivo." },
        { id: "son-3", title: "Dados viram manchete", subtitle: "Informacoes internas expostas ampliaram a crise.", narration: "Quando comunicacoes vazam, tecnologia e cultura se misturam.", visualCue: "Envelopes e documentos explodindo em particulas.", defensiveLesson: "Classificacao e retencao minima reduzem superficie." },
        { id: "son-4", title: "Crise cultural", subtitle: "A repercussao ultrapassou a camada tecnica.", narration: "Reputacao, lideranca e narrativa externa passaram a correr juntas.", visualCue: "Flashs de imprensa e ondas vermelhas sobre o estudio.", defensiveLesson: "Tecnologia e comunicacao de crise precisam estar alinhadas." },
        { id: "son-5", title: "Licao defensiva", subtitle: "Disponibilidade, confidencialidade e preparo de crise contam juntas.", narration: "O dano cresce quando operacao e dados caem ao mesmo tempo.", visualCue: "Painel de resiliencia com blocos de backup e resposta.", defensiveLesson: "Resiliencia vale tanto quanto impedir a entrada." },
    ],
}
