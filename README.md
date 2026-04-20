# 🎓 Faculdade Luciano Feijão — Landing Page

Landing page desenvolvida em **Vue 3 + Vite + JavaScript** fiel ao design Figma.

## 🚀 Como rodar

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 📁 Estrutura do Projeto

```
flf-landing/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.js
    ├── style.css
    ├── App.vue
    └── components/
        ├── NavBar.vue          # Navbar fixa com busca e redes sociais
        ├── HeroSection.vue     # Hero com chamada "Agora é SUA VEZ!"
        ├── CoursesSection.vue  # Cursos Presenciais e EAD com carousel
        ├── ActivitiesSection.vue # Atividades recentes com galeria
        ├── VideoSection.vue    # Seção de vídeos com play interativo
        ├── WhyChooseSection.vue # Diferenciais da FLF
        └── FooterSection.vue   # Footer com formulário de contato
```

## 🎨 Tecnologias

- **Vue 3** (Composition/Options API)
- **Vite** (bundler)
- **JavaScript** puro (sem TypeScript)
- **CSS Scoped** por componente
- **Font Awesome 6** para ícones
- **Google Fonts** — Montserrat + Nunito

## 🎨 Paleta de Cores

| Variável | Valor | Uso |
|---|---|---|
| `--blue-primary` | `#1a3fa8` | Cor principal |
| `--blue-dark` | `#0d2d7a` | Fundos escuros |
| `--pink-accent` | `#e91e8c` | Destaque/hover |
| `--yellow-accent` | `#f5c518` | Badges/logo |
