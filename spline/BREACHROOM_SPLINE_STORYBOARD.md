# BreachRoom Spline Storyboard

Este storyboard fecha a implementacao da cena no Spline: estados, camera, comportamento de objetos e relacao com os overlays do Framer.

## Tabela de estados

| Estado | Trigger | Camera | Objetivo visual | Objetos ativos | UI do Framer |
| --- | --- | --- | --- | --- | --- |
| `00_idle_room` | pagina carregada | `camera_idle` | vender a sala e deixar o monitor como convite | glow ciano, poeira lenta, reflexo de vidro | hero/entrada visual |
| `01_monitor_invite` | hover no monitor | `camera_invite` | sugerir clique sem exagero | emissive + tilt leve + reflexo mais vivo | CTA ainda legivel |
| `02_zoom_in` | clique no monitor | `camera_zoom` | puxar o usuario para dentro da experiencia | streaks de luz, leve distorcao no vidro | overlay minimo |
| `03_boot_sequence` | fim do zoom | `camera_boot` | criar tensao antes da narrativa | scanlines, flicker, ruido e alerta vermelho | loading bar, progresso e status |
| `04_incident_playback` | fim do boot | `camera_playback` | sustentar profundidade e deixar espaco para a historia | halo de sala, data orbs, particulas controladas | titulos, legendas e controles |
| `05_exit_room` | voltar ao menu | `camera_exit` | devolver contexto espacial | recuo elegante e queda dos alertas | menu e rail de casos |

## Beats visuais por estado

### `00_idle_room`

- monitor central ocupa cerca de `58%` da largura visual do frame;
- `monitor_emissive_plane` pulsa entre `92%` e `100%`;
- `floating_dust_system` em loop muito lento;
- `desk_reflection_plane` sempre presente.

### `01_monitor_invite`

- `monitor_group` inclina `2` a `4` graus;
- `monitor_glass` ganha highlight lateral;
- `camera_invite` avanca pouco, sem mudar demais o enquadramento.

### `02_zoom_in`

- camera avanca com ease-in rapido e pequeno overshoot;
- `monitor_reflection_plane` pode distorcer por menos de `300ms`;
- nao usar glitch pesado ainda.

### `03_boot_sequence`

- `monitor_emissive_plane` quase preto;
- `noise_plane` e `alert_particle_stream` ativos;
- `boot-signal.svg` como decal/plano na tela;
- duracao alvo: `2s`.

### `04_incident_playback`

- o monitor preenche a maior parte do frame;
- fundo da sala reduzido a halo e reflexo;
- centro do monitor precisa ficar limpo para titulo e copy;
- legenda usa a faixa inferior do safe area.

### `05_exit_room`

- reduzir alertas primeiro;
- recuar camera depois;
- retornar o glow ciano base no fim.

## Matriz por incidente

| Incidente | Mood dominante | Cor secundaria | Cue de ambiente | Movimento sugerido | Overlay esperado |
| --- | --- | --- | --- | --- | --- |
| Yahoo | escala silenciosa | ciano frio | cidade de dados e identidade em malha | drift lateral leve | titulo + timeline curta |
| Equifax | risco institucional | vermelho de alerta | porta digital e cartoes de dados | push frontal seco | loading, legenda e licao |
| SolarWinds | confianca contaminada | roxo eletrico | hub de fornecedor com rede em cascata | orbita curta e controlada | subtitulo + pill |
| Target | varejo sob pressao | laranja quente | caixas, POS e fluxo comercial | tremor leve de impacto | titulo + controles |
| Colonial Pipeline | infraestrutura critica | amarelo de tensao | linhas de fluxo congelando | push e hold | legenda + licao |
| Sony Pictures | constrangimento publico | magenta agressivo | documentos e telas quebradas | cortes secos simulados | titulo + subtitle |
| Marriott | presenca prolongada | turquesa denso | hotelaria, perfil e radar | movimento lento e suspeito | copy + lower third |
| MGM Resorts | operacao hiperconectada | verde de alerta | neon, quiosques e falhas sincronizadas | pan curto com glitch sutil | titulo + controles |

## Overlays do Framer sem conflito

- titulos principais: parte central superior;
- subtitulos e copy: centro medio;
- legendas: lower third;
- botoes e controles: abaixo do bloco de copy;
- rail de casos e painel de incidente ficam fora da superficie 3D, no layout do Framer.

## Estrategia de montagem

1. montar a sala base usando o naming fechado do blueprint;
2. configurar os seis estados de camera;
3. aplicar decals e overlays nos planos utilitarios;
4. revisar safe areas com um screenshot de teste;
5. publicar a cena;
6. colar a URL no Framer.
