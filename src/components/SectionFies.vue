<template>
  <section class="fies" id="fies">
    <div class="fies__inner">
      <div class="fies__texto reveal-esq">
        <span class="label-secao">Financiamento estudantil</span>
        <h2>Realize sua graduação com o FIES</h2>
        <ul class="checklist">
          <li v-for="item in itens" :key="item.titulo">
            <span class="check"><i class="fa fa-check"></i></span>
            <div>
              <strong>{{ item.titulo }}</strong>
              <p>{{ item.desc }}</p>
            </div>
          </li>
        </ul>
        <a href="tel:883112-1001" class="btn-fies">
          <i class="fa fa-phone"></i> 88 3112-1001 — Saiba mais
        </a>
      </div>

      <div class="fies__celular reveal-dir">
        <div class="celular">
          <div class="cel__barra">
            <span>9:41</span><span class="cel__nome">FLF</span>
          </div>
          <div class="cel__stories">
            <div class="story s1"><i class="fa fa-graduation-cap"></i><span>FIES disponível</span></div>
            <div class="story s2"><i class="fa fa-check-circle"></i><span>Todos os cursos elegíveis</span></div>
            <div class="story s3"><i class="fa fa-star"></i><span>Nota 450+ no ENEM</span></div>
          </div>
          <div class="cel__handle">@flfeijaoagora</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useReveal } from '../useReveal.js'
export default {
  name: 'SeçãoFies',
  mounted() { useReveal().init() },
  data() {
    return {
      itens: [
        { titulo: 'Todos os cursos da FLF são elegíveis', desc: 'FIES e FIES Social disponível para todos os estudantes.' },
        { titulo: 'O FIES atende a todos sem distinção', desc: 'Basta fazer o ENEM com nota acima de 450 e não zerar a redação.' },
        { titulo: 'Processo seletivo simplificado', desc: 'Nossa equipe te orienta em cada etapa do processo.' },
      ]
    }
  }
}
</script>

<style scoped>
.fies { background: white; padding: var(--padding-secao); }

.fies__inner {
  max-width: var(--max); margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(2rem, 6vw, 5rem);
  align-items: center;
}

.fies__texto h2 {
  font-family: var(--fonte-titulo); font-weight: 800;
  font-size: clamp(1.4rem, 2.5vw, 2rem);
  color: var(--azul-escuro); margin: 0.6rem 0 1.8rem; line-height: 1.25;
}

.checklist { display: flex; flex-direction: column; gap: 1.3rem; margin-bottom: 2rem; }
.checklist li { display: flex; gap: 0.9rem; align-items: flex-start; }

.check {
  width: 26px; height: 26px; border-radius: 50%;
  background: var(--azul); color: white;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.7rem; flex-shrink: 0; margin-top: 2px;
}

.checklist strong {
  font-family: var(--fonte-titulo); font-weight: 700;
  font-size: 0.9rem; color: #111; display: block; margin-bottom: 0.2rem;
}
.checklist p { font-size: 0.82rem; color: var(--cinza-texto); line-height: 1.5; }

.btn-fies {
  display: inline-flex; align-items: center; gap: 0.6rem;
  background: var(--azul); color: white;
  font-family: var(--fonte-titulo); font-weight: 700; font-size: 0.85rem;
  padding: 0.85rem 1.6rem; border-radius: 10px; transition: all 0.2s;
}
.btn-fies:hover { background: var(--rosa); transform: translateY(-2px); }

.celular {
  background: var(--azul-escuro); border-radius: 24px;
  padding: clamp(1rem, 3vw, 1.5rem);
  max-width: 320px; margin: 0 auto;
  box-shadow: 0 24px 64px rgba(13,45,122,0.28);
}

.cel__barra {
  display: flex; justify-content: space-between;
  color: rgba(255,255,255,0.55); font-size: 0.75rem;
  font-family: var(--fonte-titulo); font-weight: 600; margin-bottom: 1rem;
}
.cel__nome { font-weight: 800; color: rgba(255,255,255,0.8); }

.cel__stories { display: flex; flex-direction: column; gap: 0.75rem; }

.story {
  border-radius: 12px; padding: 1rem 1.2rem;
  display: flex; align-items: center; gap: 0.8rem;
  color: white; font-family: var(--fonte-titulo); font-weight: 700; font-size: 0.88rem;
}
.s1 { background: linear-gradient(135deg,#1a3fa8,#2354c7); }
.s2 { background: linear-gradient(135deg,#2354c7,#3a6ee8); }
.s3 { background: linear-gradient(135deg,#0d2d7a,#1a3fa8); }
.story i { font-size: 1.1rem; flex-shrink: 0; }

.cel__handle {
  text-align: center; color: rgba(255,255,255,0.35);
  font-size: 0.73rem; margin-top: 1rem; font-family: var(--fonte-titulo);
}

@media (max-width: 768px) {
  .fies__inner { grid-template-columns: 1fr; }
  .fies__celular { order: -1; }
}
</style>
