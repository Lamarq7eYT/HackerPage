# BreachRoom Spline Blueprint

Este documento traduz o briefing para uma cena 3D que pode ser publicada no Spline e embutida no Framer sem deixar decisao aberta para o implementador.

## Papel do Spline

- vender profundidade, reflexos, poeira e camera;
- fazer o monitor dominar a composicao;
- sustentar o tom cyber-horror premium;
- deixar o Framer livre para copy, timeline, CTA e controles.

## Papel do Framer

- hero, headlines e CTA;
- menu dos casos;
- loading bar, legendas e narracao;
- overlays editoriais e timeline;
- dono do embed da cena 3D no componente `BreachRoomScene`.

## Scene Graph Naming Fechado

Use estes nomes exatamente:

### Sala

- `room_shell`
- `room_back_wall`
- `room_side_panels`
- `room_ceiling_haze`

### Mesa e perifericos

- `desk_top`
- `desk_shadow_plane`
- `desk_reflection_plane`
- `keyboard_lowpoly`
- `mouse_lowpoly`
- `cable_bundle_left`
- `cable_bundle_right`

### Monitor

- `monitor_group`
- `monitor_body`
- `monitor_stand`
- `monitor_bezel`
- `monitor_glass`
- `monitor_emissive_plane`
- `monitor_reflection_plane`
- `monitor_frame_overlay_plane`

### Atmosfera

- `floating_dust_system`
- `alert_particle_stream`
- `data_orb_cluster_main`
- `data_orb_cluster_secondary`
- `noise_plane`

### Camera e estados

- `camera_idle`
- `camera_invite`
- `camera_zoom`
- `camera_boot`
- `camera_playback`
- `camera_exit`

### Helpers

- `safe_area_center`
- `safe_area_lower_third`
- `ui_occlusion_guard`

## Estados recomendados

1. `00_idle_room`
   Camera em `camera_idle`. Monitor respirando em ciano. Poeira lenta. Parallax minimo.
2. `01_monitor_invite`
   Camera em `camera_invite`. Hover leve no monitor, aumento pequeno de emissive e tilt discreto.
3. `02_zoom_in`
   Camera em `camera_zoom`. Avanco rapido para dentro do monitor em cerca de `0.6s`.
4. `03_boot_sequence`
   Camera em `camera_boot`. Preto, scanlines, flicker e picos vermelhos por `2s`.
5. `04_incident_playback`
   Camera em `camera_playback`. Movimento minimo, sala virando halo e reflexo.
6. `05_exit_room`
   Camera em `camera_exit`. Recuo elegante para devolver o usuario ao menu.

## Direcao de arte

- preto azulado profundo, grafite e metal escovado;
- ciano frio como luz principal;
- vermelho de alerta so em momentos de impacto;
- roxo eletrico apenas como recorte;
- sem look gamer exagerado;
- reflexo de vidro controlado, nunca espelhado demais;
- poeira e nevoa quase invisiveis.

## Mapeamento visual por objeto

- `monitor_emissive_plane`: respiracao leve em `idle`, ganho de intensidade em `invite`, quase apagado em `boot`, glow controlado em `playback`.
- `monitor_glass`: reflexo vivo em `idle`, distorcao leve em `zoom`, leitura limpa em `playback`.
- `alert_particle_stream`: desligado em `idle`, breve ativacao em `boot`, pequenos pulsos em cenas de impacto.
- `data_orb_cluster_main`: loop lento em `idle`, acompanha tensao em `playback`.
- `noise_plane`: aparece apenas em `boot` e em alguns beats de impacto.
- `desk_reflection_plane`: sempre ativo, com intensidade baixa.

## Safe Areas para overlays do Framer

- centro horizontal entre `22%` e `78%` da largura do monitor: reservado para titulos e copy curta;
- faixa inferior entre `72%` e `88%` da altura: reservada para legendas;
- canto superior direito: reservado para meta curta ou pill;
- nao posicionar luzes muito fortes nesses blocos.

## Interacoes no Spline

- hover no monitor:
  elevar emissive em `10%` a `12%`, inclinar entre `2` e `4` graus, empurrar a camera alguns pixels.
- clique no monitor:
  disparar `02_zoom_in` e cair automaticamente em `03_boot_sequence`.
- mouse move:
  parallax leve, sem comportamento gamer.
- loop idle:
  poeira, glow e data orbs em velocidades diferentes.

## Assets desta pasta

Use os SVGs em `assets/spline/` como decal, plano ou textura:

- `breachroom-wordmark.svg`
- `monitor-ui-grid.svg`
- `alarm-ring.svg`
- `data-stream.svg`
- `monitor-frame-overlay.svg`
- `boot-signal.svg`
- `noise-plane.svg`

## Embed final

1. publique a cena no Spline;
2. copie a URL publica do viewer;
3. cole a URL na prop `Spline URL` do componente `BreachRoomScene` ou `BreachRoomLanding`;
4. sem URL, o Framer mostra placeholder cinematico;
5. com URL, o Framer continua dono da narrativa e o Spline vira a camada viva da experiencia.
