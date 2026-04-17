import { type IncidentCase } from "./types"

export const marriott: IncidentCase = {
    id: "marriott",
    company: "Marriott",
    title: "Marriott Data Breach",
    year: "2018",
    attackType: "Acesso prolongado",
    severityLabel: "Hospitalidade em escala",
    accentColor: "#5EEAD4",
    shortDescription: "O caso reforcou o risco de permanencia longa sem deteccao em dados de clientes.",
    scenes: [
        { id: "mar-1", title: "Hospitalidade e cadastro", subtitle: "Perfis, reservas e historicos sustentavam a operacao global.", narration: "Dados pessoais e servico distribuidos conviviam em grande escala.", visualCue: "Torre de hotel futurista e tags de bagagem flutuando.", defensiveLesson: "Governanca de dados precisa acompanhar escala." },
        { id: "mar-2", title: "Presenca prolongada", subtitle: "O tempo de acesso indevido virou um dos pontos centrais.", narration: "Permanencia silenciosa costuma revelar lacunas de visibilidade.", visualCue: "Silhueta simbolica refletida no vidro por varios ciclos de luz.", defensiveLesson: "Tempo de permanencia e indicador critico." },
        { id: "mar-3", title: "Dados em escala", subtitle: "O alcance global ampliou a pressao sobre a marca.", narration: "Cada registro representa relacao e confianca, nao apenas volume.", visualCue: "Cartoes de reserva abrindo em nuvem turquesa.", defensiveLesson: "Minimizacao e criptografia reduzem dano." },
        { id: "mar-4", title: "Reputacao em jornada", subtitle: "Privacidade passou a afetar a experiencia de marca.", narration: "Empresas de relacionamento continuo sentem o dano por mais tempo.", visualCue: "Sagao abstrato escurecendo com avisos de privacidade.", defensiveLesson: "Privacidade precisa aparecer no desenho do servico." },
        { id: "mar-5", title: "Licao defensiva", subtitle: "Legados, visibilidade e retencao definem parte do risco.", narration: "Quanto mais tempo o acesso fica invisivel, maior o custo final.", visualCue: "Timeline com pontos apagando e radar acendendo.", defensiveLesson: "Visibilidade de longo prazo vale muito." },
    ],
}
