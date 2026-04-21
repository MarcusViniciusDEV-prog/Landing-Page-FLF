<template>
  <section class="hero" id="hero">
    <img :src="v1" alt="" class="hero__deco hero__deco--azul" aria-hidden="true" />

    <div class="hero__grid">
      <div class="hero__conteudo">
        <div class="hero__badge">✦ PROCESSO SELETIVO 2026.2</div>

        <h1 class="hero__titulo">
          Agora é<br />
          <em>SUA VEZ!</em>
        </h1>

        <p class="hero__sub">vem ser <span>GRANDE</span></p>

        <div class="hero__acoes">
          <a href="#contato" class="btn-principal">
            <i class="fa fa-pencil-alt"></i> Inscrições Abertas
          </a>
          <a href="#cursos-presenciais" class="btn-secundario">Ver Cursos ↓</a>
        </div>

        <div class="hero__stats">
          <div class="stat">
            <strong>20+</strong><span>anos formando</span>
          </div>
          <div class="divisor"></div>
          <div class="stat">
            <strong>13</strong><span>cursos</span>
          </div>
          <div class="divisor"></div>
          <div class="stat">
            <strong>FIES</strong><span>todos os cursos</span>
          </div>
        </div>
      </div>

      <div class="hero__imagem">
        <img :src="mec" alt="Nota Máxima MEC 5" class="hero__mec" />
        <img :src="modelo" alt="Estudante da FLF" class="hero__modelo" />
      </div>
    </div>
  </section>
</template>

<script>
import modelo from '../assets/model.png'
import mec from '../assets/logo_mec_1.png'
import v1 from '../assets/Vector_1.png'
export default {
  name: 'HeroSection',
  data() { return { modelo, mec, v1 } }
}
</script>

<style scoped>
.hero {
  min-height: 100svh;
  background: linear-gradient(145deg, var(--azul-escuro) 0%, var(--azul) 55%, var(--azul-medio) 100%);
  padding-top: 70px;
  position: relative;
  overflow: hidden;
  display: flex; align-items: stretch;
}

.hero__deco {
  position: absolute; pointer-events: none; z-index: 1;
}
.hero__deco--azul {
  width: clamp(240px, 38vw, 520px);
  top: -5%; right: -4%;
  opacity: 0.45; mix-blend-mode: screen;
}
.hero__deco--organico {
  width: clamp(160px, 22vw, 300px);
  bottom: -3%; left: -2%;
  opacity: 0.09;
}

.hero__grid {
  position: relative; z-index: 2;
  width: 100%; max-width: var(--max);
  margin: 0 auto;
  padding: 0 clamp(1.5rem, 5vw, 5rem);
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: flex-end;
  gap: 2rem;
}

.hero__conteudo {
  align-self: center;
  padding: clamp(2rem, 5vh, 4rem) 0;
}

.hero__badge {
  display: inline-flex; align-items: center; gap: 0.5rem;
  background: rgba(255,255,255,0.11);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 30px; padding: 0.38rem 1rem;
  color: var(--amarelo); font-family: var(--fonte-titulo);
  font-weight: 700; font-size: 0.7rem; letter-spacing: 1.8px;
  margin-bottom: 1.5rem;
}

.hero__titulo {
  font-family: var(--fonte-titulo); font-weight: 800;
  font-size: clamp(2.4rem, 5.5vw, 4rem);
  color: white; line-height: 1.1; margin-bottom: 0.5rem;
}
.hero__titulo em {
  font-style: normal; display: block;
  color: var(--amarelo);
  font-size: clamp(3rem, 7.5vw, 5.5rem);
  font-weight: 900; line-height: 1;
}

.hero__sub {
  font-family: var(--fonte-titulo); font-size: clamp(1.1rem, 2vw, 1.4rem);
  font-weight: 700; color: white; margin-bottom: 2.2rem;
}
.hero__sub span {
  text-decoration: underline;
  text-decoration-color: var(--rosa);
  text-underline-offset: 5px;
  text-decoration-thickness: 3px;
}

.hero__acoes {
  display: flex; align-items: center; flex-wrap: wrap;
  gap: 1rem; margin-bottom: 2.5rem;
}

.btn-principal {
  display: inline-flex; align-items: center; gap: 0.55rem;
  border: 2.5px solid white; color: white;
  font-family: var(--fonte-titulo); font-weight: 700; font-size: 0.9rem;
  padding: 0.82rem 1.8rem; border-radius: 8px; transition: all 0.3s;
  animation: pulsar 2.5s infinite;
}
.btn-principal:hover { background: white; color: var(--azul); }

@keyframes pulsar {
  0%, 100% { box-shadow: 0 0 0 0 rgba(255,255,255,0.3); }
  50% { box-shadow: 0 0 0 14px rgba(255,255,255,0); }
}

.btn-secundario {
  color: rgba(255,255,255,0.72); font-family: var(--fonte-titulo);
  font-weight: 600; font-size: 0.88rem; transition: color 0.2s;
}
.btn-secundario:hover { color: var(--amarelo); }

.hero__stats {
  display: inline-flex; align-items: center; gap: 1.2rem;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 12px; padding: 0.9rem 1.4rem;
}
.stat { display: flex; flex-direction: column; align-items: center; gap: 0.1rem; }
.stat strong {
  font-family: var(--fonte-titulo); font-weight: 900;
  font-size: 1.2rem; color: var(--amarelo);
}
.stat span { font-size: 0.68rem; color: rgba(255,255,255,0.6); text-align: center; }
.divisor { width: 1px; height: 34px; background: rgba(255,255,255,0.2); }

.hero__imagem {
  position: relative; align-self: flex-end; flex-shrink: 0;
}

.hero__mec {
  position: absolute;
  top: 30px;
  right: -20px;
  width: clamp(90px, 10vw, 130px);
  z-index: 3;
  filter: drop-shadow(0 4px 14px rgba(0,0,0,0.3));
}

.hero__modelo {
  height: clamp(490px, 55vh, 620px);
  width: auto;
  object-fit: contain;
  object-position: bottom;
  filter: drop-shadow(0 0 40px rgba(26,63,168,0.4));
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .hero__grid {
    grid-template-columns: 1fr;
    align-items: center;
    text-align: center;
    padding-bottom: 0;
  }
  .hero__acoes { justify-content: center; }
  .hero__stats { margin: 0 auto; }
  .hero__imagem { margin: 0 auto; }
  .hero__mec { right: 0; top: 100px; }
  .hero__deco--azul { opacity: 0.3; }
  .hero__modelo { height: clamp(420px, 50vh, 550px); }
}
</style>
