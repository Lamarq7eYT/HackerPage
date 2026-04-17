import { type IncidentCase } from "./types"

export const equifax: IncidentCase = {
    id: "equifax",
    company: "Equifax",
    title: "Equifax Breach",
    year: "2017",
    attackType: "Vulnerabilidade web sem patch",
    severityLabel: "Dados sensiveis expostos",
    accentColor: "#FF6B7A",
    shortDescription: "Patch atrasado em ativo critico virou crise global de confianca.",
    scenes: [
        { id: "eq-1", title: "Rotina corporativa", subtitle: "Uma operacao de dados sensiveis parecia estavel do lado de fora.", narration: "A empresa lidava com informacoes de alto impacto enquanto o risco crescia.", visualCue: "Predio corporativo, operadores-palito e paines de score flutuando.", defensiveLesson: "Ativo critico pede visibilidade continua." },
        { id: "eq-2", title: "Abertura nao corrigida", subtitle: "Uma vulnerabilidade conhecida entrou no centro do caso.", narration: "Saber do risco nao basta quando a correcao nao acontece a tempo.", visualCue: "Porta digital vermelha com aviso de patch atrasado.", defensiveLesson: "Patch management precisa de dono e prazo." },
        { id: "eq-3", title: "Dados em fuga", subtitle: "Informacoes pessoais sensiveis ampliaram o dano por anos.", narration: "O impacto de vazamento desse tipo continua muito alem do incidente inicial.", visualCue: "Cartoes de dados deixando o servidor como particulas.", defensiveLesson: "Segmentacao e minima exposicao importam." },
        { id: "eq-4", title: "Crise publica", subtitle: "Tecnologia, juridico e reputacao colidiram no mesmo palco.", narration: "A falha virou crise institucional e nao apenas tecnica.", visualCue: "Telas de noticia e ondas vermelhas cruzando o cenario.", defensiveLesson: "Resposta precisa envolver tecnologia, juridico e PR." },
        { id: "eq-5", title: "Licao defensiva", subtitle: "Inventario e disciplina operacional nao sao burocracia.", narration: "O caso virou simbolo do custo real de patching atrasado.", visualCue: "Checklist em ciano e vermelho conectando ativos e alertas.", defensiveLesson: "Patch atrasado vira risco estrategico." },
    ],
}
