<template>
  <div id="app">
    <NavBar />
    <HeroSection />
    <SectionSobre />
    <SectionCursos />
    <SectionFies />
    <SectionEventos />
    <SectionVideos />
    <SectionContato />
    <FooterSite />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import SectionSobre from './components/SectionSobre.vue'
import SectionCursos from './components/SectionCursos.vue'
import SectionFies from './components/SectionFies.vue'
import SectionEventos from './components/SectionEventos.vue'
import SectionVideos from './components/SectionVideos.vue'
import SectionContato from './components/SectionContato.vue'
import FooterSite from './components/FooterSite.vue'

export default {
  name: 'App',
  components: {
    NavBar, HeroSection, SectionSobre, SectionCursos,
    SectionFies, SectionEventos, SectionVideos, SectionContato, FooterSite
  }
}
</script>
