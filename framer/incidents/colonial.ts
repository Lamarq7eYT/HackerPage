import { type IncidentCase } from "./types"

export const colonial: IncidentCase = {
    id: "colonial",
    company: "Colonial Pipeline",
    title: "Colonial Pipeline Ransomware",
    year: "2021",
    attackType: "Ransomware",
    severityLabel: "Parada operacional",
    accentColor: "#FFD166",
    shortDescription: "O caso conectou credenciais, continuidade e impacto direto no mundo fisico.",
    scenes: [
        { id: "col-1", title: "Infraestrutura em fluxo", subtitle: "O digital sustentava operacao critica do mundo real.", narration: "Infra critica nao sente incidente so no datacenter.", visualCue: "Linhas de energia e tubulacoes em mapa escuro.", defensiveLesson: "Continuidade operacional e ciberseguranca precisam andar juntas." },
        { id: "col-2", title: "Acesso e bloqueio", subtitle: "Credenciais e extorsao ganharam destaque no episodio.", narration: "Uma combinacao ruim de acesso e ransomware bastou para escalar a crise.", visualCue: "Portal de login tremendo com cadeado invertido.", defensiveLesson: "MFA e higiene de identidade reduzem extorsao." },
        { id: "col-3", title: "Parada para conter", subtitle: "Conter o dano exigiu decisoes duras para o negocio.", narration: "Preparacao previa e o que separa contenção de improviso.", visualCue: "Fluxo dos dutos congelando sob alerta vermelho.", defensiveLesson: "Tabletop exercises ajudam sob pressao." },
        { id: "col-4", title: "Impacto publico", subtitle: "A repercussao atravessou empresa, economia e cotidiano.", narration: "Poucos casos mostraram tao claramente a ligacao entre cyber e vida real.", visualCue: "Filas simbolicas e ondas de noticia atravessando a sala.", defensiveLesson: "Infra critica precisa de comunicacao e contingencia." },
        { id: "col-5", title: "Licao defensiva", subtitle: "Identidade e continuidade precisam existir antes da crise.", narration: "O caso lembrou que seguranca digital tambem e seguranca operacional.", visualCue: "Checklist operacional sobre mapa restaurado em azul.", defensiveLesson: "Resposta preparada reduz tempo parado." },
    ],
}
