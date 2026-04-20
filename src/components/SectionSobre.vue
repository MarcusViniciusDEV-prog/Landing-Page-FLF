<template>
  <section class="sobre" id="sobre">
    <div class="sobre__inner">
      <div class="sobre__topo reveal">
        <span class="label-secao">Por que a FLF?</span>
        <h2>Qualidade que o MEC comprova.<br class="br-desk" /> Futuro que você constrói.</h2>
        <p>Nota 5 no MEC, FIES em todos os cursos, presencial e EAD. Vem ser grande.</p>
      </div>

      <div class="sobre__grid">
        <div
          class="card reveal"
          v-for="(item, i) in diferenciais"
          :key="i"
          :class="`d-${(i + 1) * 100}`"
        >
          <div class="card__icone"><i :class="item.icone"></i></div>
          <span class="card__tag">{{ item.tag }}</span>
          <h3>{{ item.titulo }}</h3>
          <p>{{ item.desc }}</p>
        </div>
      </div>

      <div class="sobre__numeros reveal d-200">
        <div class="numero" v-for="n in numeros" :key="n.valor">
          <strong>{{ n.valor }}</strong>
          <span>{{ n.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useReveal } from '../useReveal.js'
export default {
  name: 'SeçãoSobre',
  mounted() { useReveal().init() },
  data() {
    return {
      diferenciais: [
        { icone: 'fa fa-star', tag: 'Nota 5', titulo: 'Nota Máxima no MEC', desc: 'Reconhecimento máximo do MEC, garantindo diploma valorizado em todo o Brasil.' },
        { icone: 'fa fa-laptop', tag: 'Presencial & EAD', titulo: 'Modalidades Flexíveis', desc: 'Cursos presenciais em Sobral-CE e EAD. Você escolhe como quer estudar.' },
        { icone: 'fa fa-hand-holding-usd', tag: 'FIES & FIES Social', titulo: 'Financiamento Disponível', desc: 'Todos os cursos são elegíveis. Basta nota acima de 450 no ENEM.' },
        { icone: 'fa fa-map-marker-alt', tag: 'Sobral — CE', titulo: 'Estrutura Completa', desc: 'Campus moderno com laboratórios equipados e ambiente pensado para aprender.' },
      ],
      numeros: [
        { valor: 'Nota 5', label: 'Conceito MEC' },
        { valor: '13', label: 'Cursos disponíveis' },
        { valor: '20+', label: 'Anos formando' },
        { valor: 'FIES', label: 'Todos os cursos' },
      ]
    }
  }
}
</script>

<style scoped>
.sobre { background: var(--cinza-fundo); padding: var(--padding-secao); }

.sobre__inner { max-width: var(--max); margin: 0 auto; }

.sobre__topo {
  text-align: center; margin-bottom: clamp(2rem, 5vw, 3.5rem);
}
.sobre__topo h2 {
  font-family: var(--fonte-titulo); font-weight: 800;
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  color: var(--azul-escuro); line-height: 1.25; margin: 0.6rem 0;
}
.sobre__topo p { color: var(--cinza-texto); font-size: 1rem; max-width: 500px; margin: 0 auto; }

.sobre__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--gap);
  margin-bottom: clamp(2rem, 4vw, 3rem);
}

.card {
  background: white; border-radius: var(--raio);
  padding: clamp(1.2rem, 3vw, 1.8rem);
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  transition: transform 0.3s, box-shadow 0.3s;
}
.card:hover { transform: translateY(-6px); box-shadow: 0 14px 36px rgba(26,63,168,0.12); }

.card__icone {
  width: 48px; height: 48px; background: var(--azul);
  border-radius: 12px; display: flex; align-items: center;
  justify-content: center; font-size: 1.15rem; color: white; margin-bottom: 0.9rem;
}
.card__tag {
  font-family: var(--fonte-titulo); font-weight: 700; font-size: 0.68rem;
  color: var(--azul); letter-spacing: 1.2px; text-transform: uppercase;
  margin-bottom: 0.4rem; display: block;
}
.card h3 {
  font-family: var(--fonte-titulo); font-weight: 700;
  font-size: 0.92rem; color: #111; margin-bottom: 0.5rem;
}
.card p { font-size: 0.82rem; color: var(--cinza-texto); line-height: 1.55; }

.sobre__numeros {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--gap);
  background: var(--azul); border-radius: var(--raio);
  padding: clamp(1.5rem, 4vw, 2rem) clamp(1rem, 4vw, 3rem);
}

.numero { display: flex; flex-direction: column; align-items: center; gap: 0.3rem; }
.numero strong {
  font-family: var(--fonte-titulo); font-weight: 900;
  font-size: clamp(1.4rem, 3vw, 1.9rem); color: var(--amarelo);
}
.numero span {
  font-family: var(--fonte-titulo); font-size: 0.75rem;
  color: rgba(255,255,255,0.65); text-align: center;
}

@media (max-width: 900px) {
  .sobre__grid { grid-template-columns: repeat(2, 1fr); }
  .sobre__numeros { grid-template-columns: repeat(2, 1fr); }
  .br-desk { display: none; }
}
@media (max-width: 480px) {
  .sobre__grid { grid-template-columns: 1fr; }
  .sobre__numeros { grid-template-columns: repeat(2, 1fr); }
}
</style>
