export const breachroomCss = `
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Space+Grotesk:wght@400;500;700&display=swap");

*{box-sizing:border-box}
html,body{margin:0;padding:0;background:#02040b}

.br-root{
    --br-accent:#58F2FF;
    --br-accent-soft:rgba(88,242,255,.16);
    --br-accent-strong:rgba(88,242,255,.48);
    --br-accent-shadow:rgba(88,242,255,.24);
    font-family:"Space Grotesk","Avenir Next","Segoe UI",sans-serif;
    color:#f4f8ff;
    background:radial-gradient(circle at top,rgba(17,51,77,.62),rgba(4,7,16,1) 38%,rgba(2,4,11,1) 100%);
}

.br-wrap{max-width:1200px;margin:0 auto;padding:0 24px}
.br-hero{position:relative;overflow:hidden;padding:96px 0 56px}
.br-glow{position:absolute;left:10%;top:-10%;width:520px;height:520px;border-radius:50%;filter:blur(24px);pointer-events:none}
.br-grid{
    position:absolute;inset:0;
    background-image:linear-gradient(rgba(88,242,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(88,242,255,.08) 1px,transparent 1px);
    background-size:56px 56px;
    mask-image:linear-gradient(to bottom,rgba(0,0,0,.9),transparent)
}

.br-kicker,.br-tag,.br-chip,.br-toggle,.br-small,.br-pill,.br-stack,.br-case-year{
    font-family:"IBM Plex Mono","SFMono-Regular",Consolas,monospace
}

.br-kicker,.br-tag{
    display:inline-flex;width:fit-content;padding:8px 12px;border-radius:999px;border:1px solid rgba(255,255,255,.14);
    background:rgba(10,14,26,.6);font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:#9dc9d8
}

.br-tag{padding:0;border:none;background:none;color:#7ad8f2}

.br-title{
    margin:18px 0 0;max-width:920px;font-size:clamp(48px,7vw,92px);line-height:.94;letter-spacing:-.05em
}

.br-copy,.br-section-copy,.br-panel-copy,.br-scene-copy,.br-footer-copy{
    margin:0;color:rgba(232,242,255,.78);line-height:1.65;font-size:17px;max-width:760px
}

.br-actions,.br-controls,.br-toggles,.br-stack-row{display:flex;gap:12px;flex-wrap:wrap}

.br-btn,.br-link,.br-small,.br-toggle,.br-case{
    cursor:pointer;transition:transform .18s ease,background .18s ease,border-color .18s ease,box-shadow .18s ease
}

.br-btn:hover,.br-link:hover,.br-small:hover,.br-toggle:hover,.br-case:hover{transform:translateY(-1px)}

.br-btn{
    padding:15px 22px;border-radius:18px;color:#031018;font-weight:700;border:none;
    box-shadow:0 18px 36px var(--br-accent-shadow)
}

.br-link{
    display:inline-flex;align-items:center;justify-content:center;padding:15px 22px;border-radius:18px;
    text-decoration:none;border:1px solid rgba(255,255,255,.16);background:rgba(255,255,255,.03);color:#f4f8ff;font-weight:600
}

button.br-link{font:inherit}

.br-metrics,.br-lessons{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:16px}

.br-metric,.br-panel,.br-lesson,.br-preview,.br-cue,.br-subtitle,.br-footer-card,.br-stage,.br-monitor,.br-boot{
    border:1px solid rgba(255,255,255,.08);background:rgba(8,13,24,.72)
}

.br-metric,.br-panel,.br-lesson,.br-footer-card{border-radius:24px}
.br-metric{padding:18px}
.br-metric strong{display:block;margin-top:8px;font-size:18px}

.br-section{padding:12px 0 40px}
.br-section h2,.br-footer-title,.br-scene-title{margin:10px 0 0;line-height:1;letter-spacing:-.05em}
.br-section h2{font-size:clamp(32px,4vw,54px)}
.br-footer-title{font-size:clamp(30px,4vw,54px)}
.br-scene-title{font-size:clamp(24px,2.6vw,38px)}

.br-stage{
    position:relative;overflow:hidden;border-radius:36px;padding:24px;
    background:linear-gradient(180deg,rgba(5,10,20,.96),rgba(8,8,13,.98));
    box-shadow:0 30px 80px rgba(0,0,0,.42)
}

.br-desk{
    position:absolute;left:4%;right:4%;bottom:-2%;height:24%;border-radius:38px;
    background:linear-gradient(180deg,rgba(18,22,36,.3),rgba(14,11,19,.96) 62%);
    transform:perspective(1200px) rotateX(72deg)
}

.br-cable{
    position:absolute;height:2px;border-radius:999px;filter:blur(1px);
    background:linear-gradient(90deg,transparent,var(--br-accent-soft),transparent)
}
.br-cable-left{left:9%;top:63%;width:26%;transform:rotate(-12deg)}
.br-cable-right{right:8%;top:61%;width:18%;transform:rotate(8deg)}

.br-layout{
    position:relative;z-index:1;display:grid;grid-template-columns:minmax(0,1.55fr) minmax(320px,.85fr);
    gap:24px;align-items:center
}

.br-monitor{
    position:relative;min-height:520px;border-radius:32px;overflow:hidden;background:rgba(2,7,14,.84);
    box-shadow:0 8px 0 rgba(255,255,255,.03),0 50px 90px rgba(0,0,0,.45),inset 0 0 0 2px rgba(255,255,255,.04)
}

.br-view{
    position:absolute;inset:0;overflow:hidden;
    background:radial-gradient(circle at top,rgba(88,242,255,.12),transparent 36%),rgba(2,7,14,.86)
}

.br-view iframe,.br-placeholder{
    width:100%;height:100%;border:none;transition:transform .6s ease,filter .5s ease
}

.br-placeholder{
    position:relative;display:grid;place-items:end center;padding:28px;
    background:radial-gradient(circle at top,rgba(22,40,54,.88),rgba(3,6,11,1) 55%)
}

.br-placeholder-grid{
    position:absolute;inset:0;
    background-image:linear-gradient(rgba(88,242,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(88,242,255,.08) 1px,transparent 1px);
    background-size:52px 52px;opacity:.7
}

.br-placeholder-orb{
    position:absolute;border-radius:50%;filter:blur(4px);opacity:.92
}

.br-placeholder-orb-a{
    left:16%;top:16%;width:160px;height:160px;background:radial-gradient(circle,rgba(88,242,255,.36),transparent 70%)
}

.br-placeholder-orb-b{
    right:20%;top:30%;width:120px;height:120px;background:radial-gradient(circle,rgba(255,93,158,.32),transparent 70%)
}

.br-note{
    position:relative;z-index:1;width:min(90%,520px);padding:14px 18px;border-radius:18px;
    background:rgba(5,9,16,.65);text-align:center;color:rgba(232,242,255,.72);font-size:13px
}

.br-monitor-halo{
    position:absolute;left:50%;top:18%;width:70%;height:70%;transform:translateX(-50%);
    filter:blur(24px);pointer-events:none
}

.br-scanlines{
    position:absolute;inset:0;
    background:repeating-linear-gradient(to bottom,rgba(255,255,255,.05),rgba(255,255,255,.05) 1px,transparent 1px,transparent 4px);
    opacity:.08;pointer-events:none
}

.br-noise{
    position:absolute;inset:0;
    background-image:radial-gradient(circle,rgba(255,255,255,.05) .8px,transparent .8px),radial-gradient(circle,rgba(255,255,255,.04) .8px,transparent .8px);
    background-size:24px 24px,40px 40px;background-position:0 0,8px 10px;opacity:.08;pointer-events:none
}

.br-overlay{
    position:relative;z-index:2;height:100%;padding:24px;
    background:linear-gradient(180deg,rgba(4,8,15,.28),rgba(4,8,15,.44) 42%,rgba(4,8,15,.82))
}

.br-boot{display:grid;gap:18px;padding:24px;border-radius:24px;background:rgba(4,8,16,.82)}
.br-progress{height:10px;border-radius:999px;background:rgba(255,255,255,.08);overflow:hidden}
.br-progress>span{display:block;height:100%}

.br-top,.br-player-top,.br-panel-top{
    display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;align-items:center
}

.br-chip,.br-toggle,.br-small,.br-pill,.br-stack{font-size:12px;letter-spacing:.08em;text-transform:uppercase}
.br-chip,.br-toggle,.br-small,.br-pill,.br-stack,.br-case{border-radius:999px}
.br-chip,.br-pill{display:inline-flex;align-items:center}
.br-chip,.br-small,.br-toggle{
    padding:10px 14px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.12);color:#f4f8ff
}

.br-scene{display:grid;gap:14px;margin-top:16px}
.br-cue,.br-subtitle,.br-preview{padding:14px 16px;border-radius:18px}

.br-case-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin-top:16px}

.br-case{
    padding:14px 12px;text-align:left;background:rgba(255,255,255,.03);color:#f4f8ff;border:1px solid rgba(255,255,255,.08)
}

.br-case-year{font-size:11px;color:#7ad8f2;letter-spacing:.08em;text-transform:uppercase}
.br-case strong{display:block;margin-top:8px;font-size:16px}
.br-case span{display:block;margin-top:8px;color:rgba(232,242,255,.62);font-size:13px;line-height:1.4}

.br-lessons{grid-template-columns:repeat(auto-fit,minmax(220px,1fr))}
.br-lesson{position:relative;padding:22px 20px;min-height:126px;overflow:hidden}
.br-lesson:before{
    content:"";position:absolute;left:0;top:0;width:4px;height:100%;
    background:linear-gradient(180deg,var(--br-accent),#FF5D9E)
}

.br-stack{
    padding:12px 16px;border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.04)
}

.br-footer{position:relative;padding:12px 0 88px}
.br-footer-card{
    position:relative;padding:32px 28px;border-radius:34px;
    background:linear-gradient(180deg,rgba(8,13,24,.86),rgba(5,8,16,.96))
}

.br-footer-copy{margin:16px 0 24px}

button,button.br-link{font:inherit}
button:focus-visible,a:focus-visible{outline:2px solid rgba(88,242,255,.8);outline-offset:2px}
button:disabled{opacity:.45;cursor:not-allowed;transform:none}

@media (max-width: 980px){
    .br-layout{grid-template-columns:1fr}
    .br-monitor{min-height:420px}
}

@media (max-width: 767px){
    .br-wrap{padding:0 16px}
    .br-hero{padding:72px 0 40px}
    .br-stage{padding:16px}
    .br-monitor{min-height:560px}
    .br-footer-card{padding:26px 20px}
}

@media (prefers-reduced-motion: reduce){
    *{scroll-behavior:auto!important;animation:none!important;transition:none!important}
}
`
