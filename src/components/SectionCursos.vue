<template>
  <section class="cursos">

    <!-- PRESENCIAL -->
    <div class="bloco bloco--claro" id="cursos-presenciais">
      <div class="bloco__cabecalho reveal">
        <div>
          <span class="label-secao">Presencial · Sobral-CE</span>
          <h2>Cursos Presenciais </h2>
          <p>Professores ativos no mercado, labs modernos e networking desde o 1º dia.</p>
        </div>
        <div class="setas">
          <button @click="deslizar('p', -1)" :disabled="idxP === 0" aria-label="Anterior"><i class="fa fa-chevron-left"></i></button>
          <button @click="deslizar('p', 1)" :disabled="idxP >= maxP" aria-label="Próximo"><i class="fa fa-chevron-right"></i></button>
        </div>
      </div>

      <div class="carrossel" ref="trilhaP">
        <div class="trilha" :style="{ transform: `translateX(-${idxP * passo}px)` }">
          <div class="card" v-for="c in presencial" :key="c.nome">
            <div class="card__thumb" :style="{ background: c.cor }"><i :class="c.icone"></i></div>
            <div class="card__body">
              <h3>{{ c.nome }}</h3>
              <p>{{ c.desc }}</p>
              <div class="card__foot">
                <span class="tag">Presencial</span>
                <a href="#contato">Inscrever-se →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- EAD -->
    <div class="bloco bloco--escuro" id="cursos-ead">
      <div class="bloco__cabecalho bloco__cabecalho--inv reveal">
        <div class="setas setas--claro">
          <button @click="deslizar('e', -1)" :disabled="idxE === 0" aria-label="Anterior"><i class="fa fa-chevron-left"></i></button>
          <button @click="deslizar('e', 1)" :disabled="idxE >= maxE" aria-label="Próximo"><i class="fa fa-chevron-right"></i></button>
        </div>
        <div style="text-align:right">
          <span class="label-secao label-secao--claro">100% Online</span>
          <h2 style="color:white">Cursos EAD</h2>
          <p style="color:rgba(255,255,255,0.65)">Mesma qualidade FLF com a flexibilidade que você precisa.</p>
        </div>
      </div>

      <div class="carrossel" ref="trilhaE">
        <div class="trilha" :style="{ transform: `translateX(-${idxE * passo}px)` }">
          <div class="card card--ead" v-for="c in ead" :key="c.nome">
            <div class="card__thumb" :style="{ background: c.cor }"><i :class="c.icone"></i></div>
            <div class="card__body">
              <h3>{{ c.nome }}</h3>
              <p>{{ c.desc }}</p>
              <div class="card__foot">
                <span class="tag tag--ead">EAD · Nota 5 MEC</span>
                <a href="#contato" class="link--ead">Inscrever-se →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import { useReveal } from '../useReveal.js'
export default {
  name: 'SeçãoCursos',
  data() {
    return {
      idxP: 0, idxE: 0,
      visiveis: 4, passo: 0,
      presencial: [
        { nome: 'Medicina', desc: 'Forme-se médico com excelência e infraestrutura completa.', icone: 'fa fa-user-md', cor: 'linear-gradient(135deg,#1a3fa8,#2354c7)' },
        { nome: 'Direito', desc: 'Base sólida e preparo completo para o mercado jurídico.', icone: 'fa fa-balance-scale', cor: 'linear-gradient(135deg,#0d2d7a,#1a3fa8)' },
        { nome: 'Enfermagem', desc: 'Cuide da saúde com competência e humanização.', icone: 'fa fa-heartbeat', cor: 'linear-gradient(135deg,#2354c7,#3a6ee8)' },
        { nome: 'Odontologia', desc: 'Transforme sorrisos com tecnologia de ponta.', icone: 'fa fa-tooth', cor: 'linear-gradient(135deg,#1a3fa8,#2550c0)' },
        { nome: 'Psicologia', desc: 'Compreenda a mente humana e transforme vidas.', icone: 'fa fa-brain', cor: 'linear-gradient(135deg,#2550c0,#3a6ee8)' },
        { nome: 'Administração', desc: 'Gerencie negócios com visão estratégica e liderança.', icone: 'fa fa-chart-line', cor: 'linear-gradient(135deg,#0d2d7a,#2354c7)' },
        { nome: 'Arquitetura e Urbanismo', desc: 'Projete espaços que transformam vidas e cidades.', icone: 'fa fa-drafting-compass', cor: 'linear-gradient(135deg,#1a3fa8,#3a6ee8)' },
        { nome: 'Engenharia Civil', desc: 'Construa o futuro com projetos de grande impacto.', icone: 'fa fa-hard-hat', cor: 'linear-gradient(135deg,#2354c7,#0d2d7a)' },
      ],
      ead: [
        { nome: 'Administração', desc: 'Estude gestão com flexibilidade total de horário.', icone: 'fa fa-briefcase', cor: 'linear-gradient(135deg,#2053b8,#3a6ee8)' },
        { nome: 'Educação Física', desc: 'Promova saúde e qualidade de vida com excelência.', icone: 'fa fa-running', cor: 'linear-gradient(135deg,#1a3fa8,#2550c0)' },
        { nome: 'Pedagogia', desc: 'Forme educadores prontos para o futuro.', icone: 'fa fa-chalkboard-teacher', cor: 'linear-gradient(135deg,#0d2d7a,#1a3fa8)' },
        { nome: 'Recursos Humanos', desc: 'Gerencie talentos e desenvolva pessoas com propósito.', icone: 'fa fa-users', cor: 'linear-gradient(135deg,#2354c7,#2053b8)' },
        { nome: 'Serviço Social', desc: 'Transforme vidas e comunidades com impacto real.', icone: 'fa fa-hands-helping', cor: 'linear-gradient(135deg,#1a3fa8,#2354c7)' },
      ]
    }
  },
  computed: {
    maxP() { return Math.max(0, this.presencial.length - this.visiveis) },
    maxE() { return Math.max(0, this.ead.length - this.visiveis) }
  },
  mounted() {
    useReveal().init()
    this.calcPasso()
    window.addEventListener('resize', this.calcPasso)
  },
  beforeUnmount() { window.removeEventListener('resize', this.calcPasso) },
  methods: {
    calcPasso() {
      const ref = this.$refs.trilhaP
      if (!ref) return
      const w = ref.offsetWidth
      const vw = window.innerWidth
      if (vw <= 480) { this.visiveis = 1; this.passo = w + 16 }
      else if (vw <= 768) { this.visiveis = 2; this.passo = w / 2 + 8 }
      else if (vw <= 1100) { this.visiveis = 3; this.passo = w / 3 + 6 }
      else { this.visiveis = 4; this.passo = w / 4 + 4 }
    },
    deslizar(tipo, dir) {
      if (tipo === 'p') {
        const n = this.idxP + dir
        if (n >= 0 && n <= this.maxP) this.idxP = n
      } else {
        const n = this.idxE + dir
        if (n >= 0 && n <= this.maxE) this.idxE = n
      }
    }
  }
}
</script>

<style scoped>
.bloco { padding: var(--padding-secao); }
.bloco--claro { background: var(--cinza-fundo); }
.bloco--escuro { background: var(--azul); }

.bloco__cabecalho {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: flex-end;
  gap: 1rem;
  margin-bottom: clamp(1.5rem, 3vw, 2rem);
}
.bloco__cabecalho--inv { grid-template-columns: auto 1fr; }

.bloco__cabecalho h2 {
  font-family: var(--fonte-titulo); font-weight: 800;
  font-size: clamp(1.3rem, 2.5vw, 1.7rem); color: var(--azul-escuro);
  margin: 0.3rem 0;
}
.bloco__cabecalho p { color: var(--cinza-texto); font-size: 0.86rem; max-width: 420px; }

.setas { display: flex; gap: 0.5rem; align-items: center; }
.setas button {
  width: 36px; height: 36px; border-radius: 50%;
  background: var(--azul); color: white; border: none;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.75rem; cursor: pointer; transition: all 0.2s;
}
.setas--claro button { background: rgba(255,255,255,0.2); }
.setas button:hover:not(:disabled) { background: var(--rosa); transform: scale(1.08); }
.setas button:disabled { opacity: 0.3; cursor: not-allowed; }

.carrossel { overflow: hidden; }
.trilha {
  display: grid;
  grid-template-columns: repeat(8, calc(25% - 12px));
  gap: 16px;
  transition: transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.card {
  background: white; border-radius: var(--raio); overflow: hidden;
  box-shadow: 0 2px 14px rgba(0,0,0,0.07);
  display: flex; flex-direction: column;
  transition: transform 0.3s, box-shadow 0.3s;
}
.card:hover { transform: translateY(-6px) scale(1.02); box-shadow: 0 16px 40px rgba(26,63,168,0.16); }
.card--ead { background: #1e4bbf; }

.card__thumb {
  height: 110px; display: flex; align-items: center;
  justify-content: center; font-size: 2rem; color: rgba(255,255,255,0.88);
}

.card__body { padding: 1.1rem; display: flex; flex-direction: column; flex: 1; gap: 0.4rem; }

.card h3 {
  font-family: var(--fonte-titulo); font-weight: 700;
  font-size: 0.9rem; color: #111;
}
.card--ead h3 { color: white; }

.card p { font-size: 0.78rem; color: var(--cinza-texto); line-height: 1.5; flex: 1; }
.card--ead p { color: rgba(255,255,255,0.7); }

.card__foot {
  display: flex; align-items: center;
  justify-content: space-between; flex-wrap: wrap; gap: 0.4rem; margin-top: 0.5rem;
}

.tag {
  font-family: var(--fonte-titulo); font-weight: 700; font-size: 0.66rem;
  background: #eef2fc; color: var(--azul);
  padding: 0.18rem 0.6rem; border-radius: 20px;
}
.tag--ead { background: rgba(255,255,255,0.15); color: white; }

.card__foot a {
  font-family: var(--fonte-titulo); font-weight: 700; font-size: 0.72rem;
  color: var(--azul); transition: color 0.2s;
}
.card__foot a:hover { color: var(--rosa); }
.link--ead { color: var(--amarelo) !important; }
.link--ead:hover { color: white !important; }

@media (max-width: 1100px) {
  .trilha { grid-template-columns: repeat(8, calc(33.33% - 11px)); }
}
@media (max-width: 768px) {
  .trilha { grid-template-columns: repeat(8, calc(50% - 8px)); }
  .bloco__cabecalho { grid-template-columns: 1fr; }
  .bloco__cabecalho--inv { grid-template-columns: 1fr; text-align: left !important; }
  .bloco__cabecalho--inv > div:last-child { text-align: left !important; }
  .setas { order: -1; }
}
@media (max-width: 480px) {
  .trilha { grid-template-columns: repeat(8, 82vw); }
}
</style>
