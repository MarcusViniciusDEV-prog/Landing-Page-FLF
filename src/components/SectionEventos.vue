<template>
  <section class="eventos" id="eventos">
    <div class="eventos__inner">
      <div class="eventos__topo reveal">
        <div>
          <span class="label-secao">Agenda FLF · 2026</span>
          <h2>Eventos que marcam sua trajetória</h2>
        </div>
        <a href="#contato" class="btn-participar">Quero participar</a>
      </div>

      <div class="eventos__grid">
        <div
          class="card reveal"
          v-for="(ev, i) in eventos"
          :key="ev.titulo"
          :class="`d-${(i + 1) * 100}`"
        >
          <div class="card__thumb" :style="{ background: ev.cor }">
            <i :class="ev.icone"></i>
            <div class="card__data">
              <span class="dia">{{ ev.dia }}</span>
              <span class="mes">{{ ev.mes }}</span>
            </div>
          </div>
          <div class="card__body">
            <span class="tag" :style="{ background: ev.tagCor }">{{ ev.area }}</span>
            <h3>{{ ev.titulo }}</h3>
            <p>{{ ev.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useReveal } from '../useReveal.js'
export default {
  name: 'SeçãoEventos',
  mounted() { useReveal().init() },
  data() {
    return {
      eventos: [
        { titulo: 'VII Semana de Enfermagem', desc: 'Ética, Técnica, Inovação e Política na Enfermagem', dia: 'Em breve', mes: '2026', area: 'Saúde', icone: 'fa fa-heartbeat', cor: 'linear-gradient(135deg,#1a3fa8,#2354c7)', tagCor: '#e91e8c' },
        { titulo: 'III SEPRIS', desc: 'Seminário de Propriedade Intelectual e Inovação de Sobral', dia: '24', mes: 'Abril', area: 'Inovação', icone: 'fa fa-lightbulb', cor: 'linear-gradient(135deg,#2354c7,#3a6ee8)', tagCor: '#f5a623' },
        { titulo: 'XII SEMIC', desc: 'O Futuro do Trabalho na Sociedade Algorítmica', dia: '26–27', mes: 'Maio', area: 'Científico', icone: 'fa fa-flask', cor: 'linear-gradient(135deg,#0d2d7a,#1a3fa8)', tagCor: '#3a6ee8' },
        { titulo: 'Aula Magna', desc: 'Mediação e as Novas Competências Jurídicas', dia: '11', mes: 'Março', area: 'Direito', icone: 'fa fa-balance-scale', cor: 'linear-gradient(135deg,#2550c0,#1a3fa8)', tagCor: '#1a3fa8' },
      ]
    }
  }
}
</script>

<style scoped>
.eventos { background: var(--cinza-fundo); padding: var(--padding-secao); }

.eventos__inner { max-width: var(--max); margin: 0 auto; }

.eventos__topo {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: flex-end;
  gap: 1rem;
  margin-bottom: clamp(1.5rem, 3vw, 2.5rem);
}

.eventos__topo h2 {
  font-family: var(--fonte-titulo); font-weight: 800;
  font-size: clamp(1.3rem, 2.5vw, 2rem); color: var(--azul-escuro);
  margin-top: 0.4rem;
}

.btn-participar {
  background: var(--azul); color: white;
  font-family: var(--fonte-titulo); font-weight: 700; font-size: 0.85rem;
  padding: 0.7rem 1.6rem; border-radius: 10px; transition: all 0.2s;
  white-space: nowrap;
}
.btn-participar:hover { background: var(--rosa); transform: translateY(-2px); }

.eventos__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--gap);
}

.card {
  background: white; border-radius: var(--raio); overflow: hidden;
  box-shadow: 0 2px 14px rgba(0,0,0,0.07);
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex; flex-direction: column;
}
.card:hover { transform: translateY(-6px); box-shadow: 0 14px 36px rgba(26,63,168,0.13); }

.card__thumb {
  height: 110px;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.8rem; color: rgba(255,255,255,0.88);
  position: relative;
}

.card__data {
  position: absolute; top: 10px; right: 10px;
  background: white; border-radius: 8px;
  padding: 0.3rem 0.55rem; text-align: center;
}
.dia {
  display: block; font-family: var(--fonte-titulo); font-weight: 900;
  font-size: 0.82rem; color: var(--azul-escuro); line-height: 1;
}
.mes {
  display: block; font-size: 0.58rem; color: var(--cinza-texto);
  text-transform: uppercase; letter-spacing: 0.5px;
}

.card__body { padding: 1rem; display: flex; flex-direction: column; gap: 0.4rem; flex: 1; }

.tag {
  display: inline-block; color: white;
  font-family: var(--fonte-titulo); font-weight: 700; font-size: 0.65rem;
  padding: 0.18rem 0.65rem; border-radius: 20px; width: fit-content;
}

.card__body h3 {
  font-family: var(--fonte-titulo); font-weight: 700;
  font-size: 0.88rem; color: #111; line-height: 1.3;
}
.card__body p { font-size: 0.77rem; color: var(--cinza-texto); line-height: 1.45; }

@media (max-width: 900px) {
  .eventos__grid { grid-template-columns: repeat(2, 1fr); }
  .eventos__topo { grid-template-columns: 1fr; }
  .btn-participar { width: fit-content; }
}
@media (max-width: 480px) {
  .eventos__grid { grid-template-columns: 1fr; }
}
</style>
