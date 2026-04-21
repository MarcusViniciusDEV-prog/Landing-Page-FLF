<template>
  <section class="videos">
    <div class="videos__inner">
      <div class="videos__topo reveal">
        <h2>Descubra Nossa Faculdade na Prática</h2>
        <p>Veja como é estudar conosco</p>
      </div>

      <div class="videos__grid">
        <div
          class="card reveal"
          v-for="(v, i) in videos"
          :key="v.titulo"
          :class="`d-${(i + 1) * 100}`"
          @click="abrir(v)"
        >
          <div class="card__thumb" :style="{ background: v.cor }">
            <div class="onda"></div>
            <button class="play" aria-label="Reproduzir"><i class="fa fa-play"></i></button>
          </div>
          <div class="card__label">{{ v.titulo }}</div>
        </div>
      </div>
    </div>

    <transition name="fade">
      <div v-if="ativo" class="modal" @click.self="fechar">
        <div class="modal__caixa">
          <button class="modal__fechar" @click="fechar" aria-label="Fechar"><i class="fa fa-times"></i></button>
          <div class="modal__video">
            <template v-if="ativo.url">
              <iframe :src="embedUrl(ativo.url)" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </template>
            <template v-else>
              <div class="sem-video">
                <i class="fa fa-film"></i>
                <p>Vídeo em breve</p>
                <span>Insira o link no campo <code>url</code> em <code>SeçãoVideos.vue</code></span>
              </div>
            </template>
          </div>
          <div class="modal__titulo">{{ ativo.titulo }}</div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
import { useReveal } from '../useReveal.js'
export default {
  name: 'SeçãoVideos',
  mounted() { useReveal().init() },
  data() {
    return {
      ativo: null,
      videos: [
         {
          titulo: 'Conheça a FLF',
          cor: 'linear-gradient(135deg, #1a3fa8, #2354c7)',
          url: 'https://www.youtube.com/watch?v=H_DRnaMUgcQ'
        },
        {
          titulo: 'Como funciona o EAD? Descubra agora!',
          cor: 'linear-gradient(135deg, #2354c7, #3a6ee8)',
          url: 'https://www.youtube.com/watch?v=-Rj5R7TUQ34'
        },
        {
          titulo: 'Colação de Grau 2025.1',
          cor: 'linear-gradient(135deg, #0d2d7a, #1a3fa8)',
          url: 'https://youtu.be/NpDTUQn7So0?si=rc0u4q_s7W3F1ek3'
        }
      ]
    }
  },
  methods: {
    abrir(v) { this.ativo = v; document.body.style.overflow = 'hidden' },
    fechar() { this.ativo = null; document.body.style.overflow = '' },
    embedUrl(url) {
      const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/)
      if (yt) return `https://www.youtube.com/embed/${yt[1]}?autoplay=1`
      const vi = url.match(/vimeo\.com\/(\d+)/)
      if (vi) return `https://player.vimeo.com/video/${vi[1]}?autoplay=1`
      return url
    }
  }
}
</script>

<style scoped>
.videos { background: white; padding: var(--padding-secao); }

.videos__inner { max-width: var(--max); margin: 0 auto; }

.videos__topo { text-align: center; margin-bottom: clamp(2rem, 4vw, 3rem); }
.videos__topo h2 {
  font-family: var(--fonte-titulo); font-weight: 800;
  font-size: clamp(1.4rem, 2.5vw, 1.9rem); color: #111; margin-bottom: 0.4rem;
}
.videos__topo p { color: var(--cinza-texto); font-size: 0.95rem; }

.videos__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--gap);
}

.card {
  border-radius: var(--raio); overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1); cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}
.card:hover { transform: translateY(-8px); box-shadow: 0 20px 44px rgba(26,63,168,0.2); }
.card:hover .play { transform: scale(1.12); background: rgba(255,255,255,0.32); }
.card:hover .onda { animation: onda 1s infinite; }

.card__thumb {
  height: clamp(150px, 20vw, 210px);
  display: flex; align-items: center; justify-content: center;
  position: relative; overflow: hidden;
}

.onda {
  position: absolute; width: 74px; height: 74px;
  border-radius: 50%; border: 2px solid rgba(255,255,255,0.38);
}
@keyframes onda {
  0% { transform: scale(1); opacity: 0.7; }
  100% { transform: scale(2.4); opacity: 0; }
}

.play {
  width: 58px; height: 58px; border-radius: 50%;
  background: rgba(255,255,255,0.18); border: 3px solid white;
  color: white; font-size: 1rem; z-index: 1;
  display: flex; align-items: center; justify-content: center;
  padding-left: 4px; transition: all 0.3s;
}

.card__label {
  background: var(--azul); color: white;
  font-family: var(--fonte-titulo); font-weight: 700;
  font-size: 0.85rem; padding: 0.85rem 1rem; text-align: center;
}

.modal {
  position: fixed; inset: 0; z-index: 9999;
  background: rgba(0,0,0,0.88);
  display: flex; align-items: center; justify-content: center; padding: 1.5rem;
}
.modal__caixa {
  background: #0d2d7a; border-radius: 18px;
  width: 100%; max-width: 860px; overflow: hidden; position: relative;
  box-shadow: 0 32px 80px rgba(0,0,0,0.5);
}
.modal__fechar {
  position: absolute; top: 12px; right: 12px; z-index: 10;
  width: 34px; height: 34px; border-radius: 50%;
  background: rgba(255,255,255,0.14); border: none;
  color: white; font-size: 0.95rem; cursor: pointer;
  display: flex; align-items: center; justify-content: center; transition: background 0.2s;
}
.modal__fechar:hover { background: var(--rosa); }
.modal__video { position: relative; width: 100%; padding-top: 56.25%; }
.modal__video iframe { position: absolute; inset: 0; width: 100%; height: 100%; }
.sem-video {
  position: absolute; inset: 0;
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.8rem;
}
.sem-video i { font-size: 2.8rem; color: rgba(255,255,255,0.45); }
.sem-video p { font-family: var(--fonte-titulo); font-weight: 700; font-size: 1.1rem; color: white; }
.sem-video span { font-size: 0.8rem; color: rgba(255,255,255,0.45); text-align: center; padding: 0 1rem; }
.sem-video code { color: var(--amarelo); }
.modal__titulo { padding: 0.9rem 1.4rem; color: white; font-family: var(--fonte-titulo); font-weight: 700; font-size: 0.95rem; }

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@media (max-width: 768px) {
  .videos__grid { grid-template-columns: 1fr; }
}
</style>
