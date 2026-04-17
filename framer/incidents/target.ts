import { type IncidentCase } from "./types"

export const target: IncidentCase = {
    id: "target",
    company: "Target",
    title: "Target Breach",
    year: "2013",
    attackType: "Terceiro + POS",
    severityLabel: "Varejo sob impacto",
    accentColor: "#FF8B5D",
    shortDescription: "Acesso lateral e operacao de varejo mostraram como parceiros ampliam dano.",
    scenes: [
        { id: "tar-1", title: "Varejo em movimento", subtitle: "Loja, caixa e logistica rodavam em alto ritmo.", narration: "No varejo, dados e operacao circulam sem pausa.", visualCue: "Corredores simbolicos e caixas luminosos em grade.", defensiveLesson: "Ambientes dinamicos pedem segmentacao dedicada." },
        { id: "tar-2", title: "Porta lateral", subtitle: "Acesso de terceiro ganhou protagonismo no caso.", narration: "Nem sempre o caminho passa pelo ponto mais obvio do perimetro.", visualCue: "Cracha de fornecedor ativando uma lateral do cenario.", defensiveLesson: "Terceiros precisam de minimo privilegio." },
        { id: "tar-3", title: "Impacto no caixa", subtitle: "Pagamento e experiencia do consumidor viraram o foco.", narration: "Quando o varejo e atingido, a transacao sente primeiro.", visualCue: "Terminais de pagamento cruzados por linhas vermelhas.", defensiveLesson: "POS exige isolamento real." },
        { id: "tar-4", title: "Resposta sob pressao", subtitle: "Calendario comercial e confianca pesaram na crise.", narration: "Em varejo, percepcao publica acelera o custo do incidente.", visualCue: "Fluxo de pessoas desacelerando com manchetes no fundo.", defensiveLesson: "Plano de resposta precisa considerar o negocio." },
        { id: "tar-5", title: "Licao defensiva", subtitle: "Parceiros e rede interna contam a mesma historia de risco.", narration: "O elo lateral menos protegido pode virar a crise principal.", visualCue: "Mapa de rede se reorganizando em zonas seguras.", defensiveLesson: "Segmentacao e gestao de terceiros evitam desastre." },
    ],
}
