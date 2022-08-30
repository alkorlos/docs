import { defineConfig } from 'vitepress'

const ogDescription = 'Fast prototyping with template engines and integrated frontend tools'
const ogImage = 'https://vituum.dev/og-image.png'
const ogTitle = 'Vituum'
const ogUrl = 'https://vituum.dev'

export default defineConfig({
  title: `Vituum`,
  description: 'Fast prototyping with template engines and integrated frontend tools',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: ogTitle }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:description', content: ogDescription }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@newlogicdigital' }],
    ['meta', { name: 'theme-color', content: '#2d55ff' }],
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-JFTXYZ6Q63' }],
    ['script', {}, "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('consent', 'default', { 'ad_storage': 'denied', 'analytics_storage': 'denied' });\ngtag('config', 'G-JFTXYZ6Q63');"]
  ],

  vue: {
    reactivityTransform: true
  },

  themeConfig: {
    logo: '/logo.svg',

    editLink: {
      pattern: 'https://github.com/vituum/docs/edit/main/docs/:path',
      text: 'Suggest changes to this page'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vituum/vituum' },
      { icon: 'twitter', link: 'https://twitter.com/vituum_dev' }
    ],

    algolia: {
      appId: 'VB79JXJIAA',
      apiKey: 'a7c609cdca4e22d1249ab92a68d1d5ed',
      indexName: 'vituum'
    },

    footer: {
      message: `Released under the MIT License.`,
      copyright: 'Copyright © 2022-present lubomirblazek.cz, newlogic.cz & Vituum Contributors'
    },

    nav: [
      { text: 'Guide', link: '/guide/', activeMatch: '/guide/' },
      { text: 'Config', link: '/config/', activeMatch: '/config/' },
      {
        text: 'Resources',
        items: [
          {
            items: [
              {
                text: 'Vite',
                link: 'https://vitejs.dev'
              },
              {
                text: 'Changelog',
                link: 'https://github.com/vituum/vituum/blob/main/CHANGELOG.md'
              }
            ]
          }
        ]
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            {
              text: 'Getting Started',
              link: '/guide/'
            },
            {
              text: 'Features',
              link: '/guide/features'
            },
            {
              text: 'Template engines',
              link: '/guide/template-engines'
            },
            {
              text: 'Integrations',
              link: '/guide/integrations'
            }
          ]
        }
      ],
      '/config/': [
        {
          text: 'Config',
          items: [
            {
              text: 'Configuring Vituum',
              link: '/config/'
            },
            {
              text: 'Main',
              link: '/config/main-options'
            },
            {
              text: 'Integrations',
              link: '/config/integrations-options'
            }
          ]
        }
      ]
    }
  }
})
