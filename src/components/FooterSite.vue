<template>
  <footer class="rodape">
    <div class="rodape__inner">

      <div class="col col--marca reveal">
        <img :src="logo" alt="Faculdade Luciano Feijão" class="rodape__logo" />
        <p>Transformando vidas pela educação de qualidade em Sobral, CE. Nota 5 no MEC. FIES disponível.</p>
        <div class="selos">
          <span>Nota 5 MEC</span>
          <span>FIES & FIES Social</span>
        </div>
        <div class="idioma">
          <button :class="{ ativo: lang === 'pt' }" @click="lang = 'pt'">🇧🇷 PT</button>
          <button :class="{ ativo: lang === 'en' }" @click="lang = 'en'">🇺🇸 EN</button>
        </div>
      </div>

      <div class="col reveal d-100">
        <h4>Navegação</h4>
        <ul>
          <li><a href="#sobre">Sobre a FLF</a></li>
          <li><a href="#cursos-presenciais">Cursos Presenciais</a></li>
          <li><a href="#cursos-ead">Cursos EAD</a></li>
          <li><a href="#fies">FIES</a></li>
          <li><a href="#eventos">Eventos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </div>

      <div class="col reveal d-200">
        <h4>Contato</h4>
        <ul class="contato-lista">
          <li><i class="fa fa-phone"></i><div><a href="tel:883112-1001">88 3112-1001</a><span>Central de Atendimento</span></div></li>
          <li><i class="fa fa-envelope"></i><div><a href="mailto:contato@flucianofeijao.com.br">contato@flucianofeijao.com.br</a><span>Secretaria</span></div></li>
          <li><i class="fa fa-map-marker-alt"></i><div><span>Rua José Lopes Ponte, 400</span><span>Dom Expedito — Sobral, CE</span></div></li>
          <li><i class="fa fa-clock"></i><div><span>Seg–Sex: 7h às 22h</span><span>Sáb: 8h às 17h</span></div></li>
        </ul>
      </div>

      <div class="col reveal d-300">
        <h4>Redes Sociais</h4>
        <ul class="redes-lista">
          <li><a href="https://instagram.com/flfeijao" target="_blank"><i class="fab fa-instagram"></i>Instagram — @flfeijao</a></li>
          <li><a href="https://facebook.com/flfeijao" target="_blank"><i class="fab fa-facebook-f"></i>Facebook — /flfeijao</a></li>
          <li><a href="https://twitter.com/flfeijao" target="_blank"><i class="fab fa-twitter"></i>Twitter — @flfeijao</a></li>
        </ul>
        <a href="https://wa.me/558831121001" target="_blank" class="btn-wpp">
          <i class="fab fa-whatsapp"></i> WhatsApp
        </a>
      </div>

    </div>

    <div class="rodape__base">
      <p>© 2026 Faculdade Luciano Feijão. Todos os direitos reservados.</p>
      <div class="legais">
        <a href="#">Política de Privacidade</a>
        <a href="#">Termos de Uso</a>
      </div>
    </div>
  </footer>
</template>

<script>
import { useReveal } from '../useReveal.js'
import logo from '../assets/logo_flf.png'
export default {
  name: 'RodapéSite',
  mounted() { useReveal().init() },
  data() { return { logo, lang: 'pt' } }
}
</script>

<style scoped>
.rodape {
  background: white; color: #111;
  padding: var(--padding-secao) var(--padding-secao);
  padding-bottom: 0;
  border-top: 1px solid var(--cinza-borda);
}

.rodape__inner {
  max-width: var(--max); margin: 0 auto;
  display: grid;
  grid-template-columns: 1.6fr 1fr 1.4fr 1.3fr;
  gap: clamp(1.5rem, 4vw, 2.5rem);
  padding-bottom: clamp(2rem, 5vw, 3rem);
  border-bottom: 1px solid var(--cinza-borda);
}

.rodape__logo { height: 42px; width: auto; object-fit: contain; margin-bottom: 0.9rem; }

.col--marca p { font-size: 0.83rem; color: var(--cinza-texto); line-height: 1.6; margin-bottom: 1rem; }

.selos { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem; }
.selos span {
  background: var(--cinza-fundo); color: var(--azul-escuro);
  font-family: var(--fonte-titulo); font-weight: 700; font-size: 0.7rem;
  padding: 0.24rem 0.7rem; border-radius: 20px;
}

.idioma { display: flex; gap: 0.4rem; }
.idioma button {
  background: var(--cinza-fundo); color: var(--cinza-texto); border: none; cursor: pointer;
  border-radius: 20px; padding: 0.26rem 0.75rem; font-size: 0.75rem;
  font-family: var(--fonte-titulo); font-weight: 600; transition: all 0.2s;
}
.idioma button.ativo, .idioma button:hover { background: var(--azul); color: white; }

.col h4 {
  font-family: var(--fonte-titulo); font-weight: 700;
  font-size: 0.88rem; color: var(--azul-escuro); margin-bottom: 1.1rem;
}

.col > ul { display: flex; flex-direction: column; gap: 0.55rem; }
.col > ul a { color: var(--cinza-texto); font-size: 0.83rem; transition: color 0.2s; }
.col > ul a:hover { color: var(--azul); }

.contato-lista { gap: 0.85rem !important; }
.contato-lista li { display: flex; gap: 0.65rem; align-items: flex-start; }
.contato-lista i { color: var(--azul); font-size: 0.82rem; margin-top: 3px; width: 14px; flex-shrink: 0; }
.contato-lista div { display: flex; flex-direction: column; gap: 0.05rem; }
.contato-lista a { color: var(--cinza-texto); font-size: 0.8rem; transition: color 0.2s; }
.contato-lista a:hover { color: var(--azul); }
.contato-lista span { color: var(--cinza-texto); font-size: 0.78rem; }

.redes-lista { gap: 0.65rem !important; margin-bottom: 1rem; }
.redes-lista a { display: flex; align-items: center; gap: 0.5rem; color: var(--cinza-texto); font-size: 0.81rem; transition: color 0.2s; }
.redes-lista a i { color: var(--azul); width: 14px; }
.redes-lista a:hover { color: var(--azul); }

.btn-wpp {
  display: inline-flex; align-items: center; gap: 0.5rem;
  background: #25d366; color: white;
  font-family: var(--fonte-titulo); font-weight: 700; font-size: 0.8rem;
  padding: 0.5rem 1rem; border-radius: 20px; transition: all 0.2s;
}
.btn-wpp:hover { background: #1dba58; transform: translateY(-2px); }

.rodape__base {
  display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap;
  gap: 0.5rem;
  padding: 1.2rem 0; max-width: var(--max); margin: 0 auto;
}
.rodape__base p { font-size: 0.76rem; color: #aaa; }
.legais { display: flex; gap: 1.2rem; }
.legais a { font-size: 0.76rem; color: #aaa; transition: color 0.2s; }
.legais a:hover { color: var(--azul); }

@media (max-width: 1024px) { .rodape__inner { grid-template-columns: 1fr 1fr; } }
@media (max-width: 480px) {
  .rodape__inner { grid-template-columns: 1fr; }
  .rodape__base { flex-direction: column; text-align: center; }
}
</style>
