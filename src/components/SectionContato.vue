<template>
  <section class="contato" id="contato">
    <div class="contato__inner">
      <div class="contato__texto reveal-esq">
        <span class="label-secao label-secao--claro">Inscrições abertas — 2026.2</span>
        <h2>O semestre 2026.2 começa em breve.</h2>
        <p>As vagas são limitadas. Preencha o formulário e nossa equipe entra em contato em até 24h.</p>

        <ul class="beneficios">
          <li v-for="b in beneficios" :key="b"><i class="fa fa-check"></i>{{ b }}</li>
        </ul>

        <div class="info-lista">
          <a href="tel:883112-1001" class="info">
            <div class="info__icone"><i class="fa fa-phone"></i></div>
            <div><strong>88 3112-1001</strong><span>Central de Atendimento</span></div>
          </a>
          <div class="info">
            <div class="info__icone"><i class="fa fa-map-marker-alt"></i></div>
            <div><strong>Rua José Lopes Ponte, 400</strong><span>Dom Expedito — Sobral, CE</span></div>
          </div>
          <div class="info">
            <div class="info__icone"><i class="fa fa-clock"></i></div>
            <div><strong>Seg–Sex: 7h às 22h · Sáb: 8h às 17h</strong><span>Horário de atendimento</span></div>
          </div>
        </div>
      </div>

      <div class="contato__form reveal-dir">
        <h3>Garantir minha vaga</h3>
        <p class="form-sub">Preencha os dados para iniciar seu processo seletivo.</p>

        <div class="form">
          <div class="campo">
            <label>Nome completo *</label>
            <input v-model="form.nome" type="text" placeholder="Seu nome completo" />
          </div>
          <div class="campo">
            <label>E-mail *</label>
            <input v-model="form.email" type="email" placeholder="seu@email.com" />
          </div>
          <div class="campo">
            <label>WhatsApp *</label>
            <input v-model="form.whatsapp" type="tel" placeholder="(88) 99999-9999" />
          </div>
          <div class="campo">
            <label>Curso de interesse *</label>
            <select v-model="form.curso">
              <option value="">Selecione seu curso...</option>
              <optgroup label="Presencial">
                <option v-for="c in cursosP" :key="c" :value="c">{{ c }}</option>
              </optgroup>
              <optgroup label="EAD">
                <option v-for="c in cursosE" :key="c" :value="c">{{ c }} — EAD</option>
              </optgroup>
            </select>
          </div>
          <button @click="enviar" class="btn-enviar" :disabled="enviando">
            {{ enviando ? 'Enviando...' : 'Quero garantir minha vaga →' }}
          </button>
          <p v-if="enviado" class="sucesso">Inscrição recebida! Retornaremos em até 24h.</p>
          <p class="aviso">Ao se inscrever, você concorda com nossa política de privacidade.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useReveal } from '../useReveal.js'
export default {
  name: 'SeçãoContato',
  mounted() { useReveal().init() },
  data() {
    return {
      form: { nome: '', email: '', whatsapp: '', curso: '' },
      enviando: false, enviado: false,
      beneficios: ['Sem taxa de inscrição', 'Processo seletivo simplificado', 'FIES e FIES Social disponíveis', 'Resposta em até 24 horas'],
      cursosP: ['Administração', 'Arquitetura e Urbanismo', 'Direito', 'Enfermagem', 'Engenharia Civil', 'Medicina', 'Odontologia', 'Psicologia'],
      cursosE: ['Administração', 'Educação Física', 'Pedagogia', 'Recursos Humanos', 'Serviço Social'],
    }
  },
  methods: {
    enviar() {
      if (!this.form.nome || !this.form.email || !this.form.curso) return
      this.enviando = true
      setTimeout(() => {
        this.enviando = false; this.enviado = true
        this.form = { nome: '', email: '', whatsapp: '', curso: '' }
        setTimeout(() => { this.enviado = false }, 5000)
      }, 1200)
    }
  }
}
</script>

<style scoped>
.contato { background: var(--azul-escuro); padding: var(--padding-secao); }

.contato__inner {
  max-width: var(--max); margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(2rem, 6vw, 5rem);
  align-items: start;
}

.contato__texto h2 {
  font-family: var(--fonte-titulo); font-weight: 800;
  font-size: clamp(1.4rem, 2.5vw, 2rem); color: white;
  margin: 0.6rem 0 0.8rem; line-height: 1.25;
}
.contato__texto > p { color: rgba(255,255,255,0.65); font-size: 0.92rem; margin-bottom: 1.8rem; line-height: 1.6; }

.beneficios { display: flex; flex-direction: column; gap: 0.65rem; margin-bottom: 2rem; }
.beneficios li {
  display: flex; align-items: center; gap: 0.6rem;
  color: rgba(255,255,255,0.82); font-size: 0.87rem;
}
.beneficios li i { color: var(--amarelo); font-size: 0.75rem; }

.info-lista { display: flex; flex-direction: column; gap: 1rem; }
.info {
  display: flex; align-items: center; gap: 0.9rem;
  color: rgba(255,255,255,0.7); transition: color 0.2s;
}
a.info:hover { color: var(--amarelo); }
.info__icone {
  width: 36px; height: 36px; border-radius: 50%;
  background: rgba(255,255,255,0.1);
  display: flex; align-items: center; justify-content: center;
  font-size: 0.82rem; flex-shrink: 0;
}
.info strong { display: block; color: white; font-family: var(--fonte-titulo); font-weight: 700; font-size: 0.86rem; }
.info span { font-size: 0.76rem; color: rgba(255,255,255,0.48); }

.contato__form {
  background: white; border-radius: 20px;
  padding: clamp(1.5rem, 4vw, 2.5rem);
  box-shadow: 0 24px 64px rgba(0,0,0,0.28);
}

.contato__form h3 {
  font-family: var(--fonte-titulo); font-weight: 800;
  font-size: 1.25rem; color: var(--azul-escuro); margin-bottom: 0.3rem;
}
.form-sub { color: var(--cinza-texto); font-size: 0.84rem; margin-bottom: 1.4rem; }

.form { display: flex; flex-direction: column; gap: 0.9rem; }

.campo { display: flex; flex-direction: column; gap: 0.32rem; }
.campo label { font-family: var(--fonte-titulo); font-weight: 700; font-size: 0.78rem; color: #333; }

.campo input, .campo select {
  background: var(--cinza-fundo); border: 1.5px solid var(--cinza-borda);
  border-radius: 8px; padding: 0.72rem 1rem; color: #111;
  font-family: var(--fonte-corpo); font-size: 0.87rem; outline: none;
  transition: border-color 0.2s;
}
.campo input:focus, .campo select:focus { border-color: var(--azul); }
.campo input::placeholder { color: #bbb; }

.btn-enviar {
  background: var(--azul); color: white; border-radius: 10px; padding: 0.95rem;
  font-family: var(--fonte-titulo); font-weight: 800; font-size: 0.9rem;
  border: none; cursor: pointer; transition: all 0.2s; margin-top: 0.3rem;
}
.btn-enviar:hover:not(:disabled) { background: var(--rosa); transform: translateY(-2px); }
.btn-enviar:disabled { opacity: 0.6; cursor: not-allowed; }

.sucesso { color: #16a34a; font-size: 0.84rem; text-align: center; font-weight: 700; }
.aviso { font-size: 0.7rem; color: #bbb; text-align: center; }

@media (max-width: 900px) {
  .contato__inner { grid-template-columns: 1fr; }
}
</style>
