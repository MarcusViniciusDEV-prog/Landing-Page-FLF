<template>
  <nav class="nav">
    <div class="nav__logo">
      <img :src="logo" alt="Faculdade Luciano Feijão" />
    </div>

    <ul class="nav__links" :class="{ 'nav__links--aberto': aberto }">
      <li><a href="#sobre" @click="fechar">Sobre</a></li>
      <li><a href="#cursos-presenciais" @click="fechar">Presencial</a></li>
      <li><a href="#cursos-ead" @click="fechar">EAD</a></li>
      <li><a href="#fies" @click="fechar">FIES</a></li>
      <li><a href="#eventos" @click="fechar">Eventos</a></li>
      <li><a href="#contato" @click="fechar">Contato</a></li>
    </ul>

    <div class="nav__direita">
      <div class="nav__busca">
        <i class="fa fa-search"></i>
        <input type="text" placeholder="Pesquisar" />
      </div>

      <div class="nav__redes">
        <a href="https://instagram.com/flfeijao" target="_blank"><i class="fab fa-instagram"></i></a>
        <a href="https://facebook.com/flfeijao" target="_blank"><i class="fab fa-facebook-f"></i></a>
        <a href="https://wa.me/558831121001" target="_blank"><i class="fab fa-whatsapp"></i></a>
      </div>

      <a href="#contato" class="nav__cta">Garantir vaga</a>
    </div>

    <button class="nav__menu" @click="aberto = !aberto" aria-label="Menu">
      <i :class="aberto ? 'fa fa-times' : 'fa fa-bars'"></i>
    </button>
  </nav>
</template>

<script>
import logo from '../assets/logo_flf.png'

export default {
  name: 'NavBar',
  data() {
    return {
      logo,
      aberto: false
    }
  },
  methods: {
    fechar() {
      this.aberto = false
    }
  }
}
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  display: grid;
  grid-template-columns: auto 1fr auto auto;
  align-items: center;
  gap: 1rem;

  padding: 0.8rem clamp(1rem, 4vw, 3rem);

  background: #fff;
  box-shadow: 0 2px 20px rgba(0,0,0,0.08);

  backdrop-filter: blur(10px);
}

/* LOGO */
.nav__logo img {
  height: 38px;
}

/* LINKS */
.nav__links {
  display: flex;
  gap: clamp(1rem, 2vw, 2rem);
  justify-content: center;
  align-items: center;
}

.nav__links a {
  font-family: var(--fonte-titulo);
  font-weight: 600;
  font-size: 0.82rem;
  color: var(--azul-escuro);
  transition: color 0.2s;
}

.nav__links a:hover {
  color: var(--amarelo);
}

/* DIREITA */
.nav__direita {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

/* BUSCA */
.nav__busca {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: var(--cinza-fundo);
  border-radius: 20px;
  padding: 0.3rem 0.9rem;
}

.nav__busca i {
  color: #999;
  font-size: 0.75rem;
}

.nav__busca input {
  background: none;
  border: none;
  outline: none;
  color: var(--azul-escuro);
  font-size: 0.78rem;
  width: 100px;
}

.nav__busca input::placeholder {
  color: #bbb;
}

/* REDES */
.nav__redes {
  display: flex;
  gap: 0.4rem;
}

.nav__redes a {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--cinza-fundo);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--azul);
  font-size: 0.7rem;
  transition: all 0.2s;
}

.nav__redes a:hover {
  background: var(--rosa);
  color: white;
}

/* BOTÃO CTA */
.nav__cta {
  background: var(--amarelo);
  color: var(--azul-escuro);
  font-family: var(--fonte-titulo);
  font-weight: 800;
  font-size: 0.75rem;
  padding: 0.45rem 1.1rem;
  border-radius: 20px;
  transition: all 0.2s;
}

.nav__cta:hover {
  background: var(--rosa);
  color: white;
}

/* MENU MOBILE */
.nav__menu {
  display: none;
  background: none;
  border: none;
  color: var(--azul-escuro);
  font-size: 1.2rem;
}

/* RESPONSIVO */
@media (max-width: 1024px) {
  .nav {
    grid-template-columns: auto 1fr auto;
  }

  .nav__links {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background: white;
    padding: 1.5rem;
    gap: 1rem;
    box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  }

  .nav__links--aberto {
    display: flex;
  }

  .nav__menu {
    display: block;
  }

  .nav__cta {
    display: none;
  }
}

@media (max-width: 640px) {
  .nav__busca {
    display: none;
  }
}
</style>