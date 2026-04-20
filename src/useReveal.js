export function useReveal() {
  function init() {
    const els = document.querySelectorAll('.reveal, .reveal-esq, .reveal-dir')
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visivel')
          obs.unobserve(e.target)
        }
      })
    }, { threshold: 0.12 })
    els.forEach(el => obs.observe(el))
  }
  return { init }
}
