export default defineNuxtConfig({
  css: ['@/assets/css/main.css'],
  app: {
    head: {
      title: 'Portfólio - Devair Ap. Restani Jr',
      meta: [
        { name: 'description', content: 'Portfólio de Devair Ap. Restani Jr, Desenvolvedor Web Sênior com experiência em Vue.js, React, Angular, Node.js e arquitetura de microsserviços.' }
      ],
      htmlAttrs: {
        lang: 'pt'
      }
    }
  }
})
