export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  ssr: true,
  app: {
    head: {
      title: 'Agora — Governance for the Age of AI',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'A three-layer governance model: resource management AI, liquid democracy, and personal sovereignty. Open-source research into what democracy could look like.',
        },
        { property: 'og:title', content: 'Agora — Governance for the Age of AI' },
        {
          property: 'og:description',
          content:
            'A three-layer governance model: resource management AI, liquid democracy, and personal sovereignty.',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://agora.razbakov.com' },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
        },
      ],
    },
  },
})
