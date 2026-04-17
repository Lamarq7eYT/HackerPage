# BreachRoom

Kit de landing page pensado para **Framer** com camada 3D em **Spline**. O briefing original esta em `prompt_landing_page_breachroom.pdf`, mas a entrega final foi organizada como handoff real: componentes modulares para o Framer e pacote fechado de direcao/execucao para o Spline.

## O que esta pronto

- entrypoint completo em [framer/BreachRoomLanding.tsx](./framer/BreachRoomLanding.tsx)
- componentes modulares em [framer](./framer)
- dados editoriais dos incidentes em [framer/incidents.ts](./framer/incidents.ts)
- blueprint da cena em [spline/BREACHROOM_SPLINE_BLUEPRINT.md](./spline/BREACHROOM_SPLINE_BLUEPRINT.md)
- storyboard com estados e matriz por incidente em [spline/BREACHROOM_SPLINE_STORYBOARD.md](./spline/BREACHROOM_SPLINE_STORYBOARD.md)
- prompts visuais em [spline/BREACHROOM_SCENE_PROMPTS.md](./spline/BREACHROOM_SCENE_PROMPTS.md)
- overlays e decals em [assets/spline](./assets/spline)

## Estrutura recomendada no Framer

Copie os arquivos da pasta `framer/` para a pasta `code/` do seu projeto Framer.

Arquivos principais:

- `BreachRoomLanding.tsx`
- `BreachRoomHero.tsx`
- `BreachRoomScene.tsx`
- `BreachRoomLessons.tsx`
- `BreachRoomTechStack.tsx`
- `BreachRoomFooterCTA.tsx`

### Uso rapido

Se quiser a pagina toda de uma vez, use apenas:

- `BreachRoomLanding`

Props principais:

- `Spline URL`
- `GitHub URL`
- `Accent`
- `Eyebrow`
- `CTA 1`
- `CTA 2`

### Uso modular

Se quiser montar no canvas por blocos:

1. `BreachRoomHero`
2. `BreachRoomScene`
3. `BreachRoomLessons`
4. `BreachRoomTechStack`
5. `BreachRoomFooterCTA`

Cada bloco foi preparado para renderizar isoladamente no Framer.

## Montagem recomendada no Framer

1. adicione `BreachRoomHero`;
2. adicione `BreachRoomScene`;
3. adicione `BreachRoomLessons`;
4. adicione `BreachRoomTechStack`;
5. adicione `BreachRoomFooterCTA`;
6. ou use `BreachRoomLanding` para a composicao inteira.

## Montagem recomendada no Spline

1. crie a cena base usando o naming de [BREACHROOM_SPLINE_BLUEPRINT.md](./spline/BREACHROOM_SPLINE_BLUEPRINT.md);
2. configure os estados `idle`, `invite`, `zoom`, `boot`, `playback` e `exit`;
3. aplique os decals e overlays de `assets/spline/`;
4. valide as safe areas com o storyboard;
5. publique a cena;
6. cole a URL na prop `Spline URL` no Framer.

## Separacao de responsabilidades

### Framer

- hero, CTA e narrativa;
- menu dos casos;
- player de cenas;
- legendas e narracao opcional via Web Speech API;
- responsividade e iteracao comercial.

### Spline

- sala 3D;
- monitor, vidro, glow, poeira e camera;
- hover, zoom e boot sequence;
- profundidade cinematografica e atmosfera surreal.

## Assets do Spline

Inclui:

- `breachroom-wordmark.svg`
- `monitor-ui-grid.svg`
- `alarm-ring.svg`
- `data-stream.svg`
- `monitor-frame-overlay.svg`
- `boot-signal.svg`
- `noise-plane.svg`

## Observacao honesta

Esta entrega deixa o projeto **Framer-ready** e cria o pacote de handoff do **Spline**, mas o arquivo `.spline` em si ainda precisa ser montado/publicado dentro do Spline com base nesses docs.
