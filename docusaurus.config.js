// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');


async function createConfig() {
  const mdxMermaid = await import('mdx-mermaid')

  /** @type {import('@docusaurus/types').Config} */
  return {
    title: "SocialGouv SRE documentation",
    tagline: 'Support tech aux startups de la fabrique des Ministères sociaux',
    url: 'https://socialgouv.github.io/',
    baseUrl: '/support/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'SocialGouv', // Usually your GitHub org/user name.
    projectName: 'support', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
      defaultLocale: 'fr',
      locales: ['fr'],
    },

    presets: [
      [
        'classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            remarkPlugins: [mdxMermaid.default],
            editUrl:
              'https://github.com/socialgouv/support/tree/master/',
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: 'SocialGouv SRE',
          logo: {
            alt: 'SocialGouv SRE Logo',
            src: 'img/marianne.jpeg',
          },
          items: [
            {
              type: 'doc',
              docId: 'init/presentation',
              position: 'left',
              label: 'Documentation',
            },
            {
              href: 'https://github.com/facebook/socialgouv',
              label: 'GitHub',
              position: 'right',
            },
          ],
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'Liens utiles',
              items: [
                {
                  label: 'Site de la fabrique',
                  href: 'https://www.fabrique.social.gouv.fr/',
                },
                {
                  label: 'GitHub',
                  href: 'https://github.com/SocialGouv',
                },
                {
                  label: 'Mattermost',
                  href: 'https://mattermost.fabrique.social.gouv.fr/'
                },
                {
                  label: 'Nextcloud',
                  href: 'https://nextcloud.fabrique.social.gouv.fr/'
                }, 
                {
                  label: 'GitLab',
                  href: 'https://gitlab.fabrique.social.gouv.fr/'
                },
                {
                  label: 'Matomo',
                  href: 'https://matomo.fabrique.social.gouv.fr/i'
                },
                {
                  label: 'HedgeDoc',
                  href: 'https://pad.incubateur.net/'
                }, 
                {
                  label: 'Rancher',
                  href: 'https://rancher.fabrique.social.gouv.fr/',
                },
                {
                  label: 'Sentry',
                  href: 'https://sentry.fabrique.social.gouv.fr/'
                },
              ],
            },
            {
              title: 'Projet',
              items: [
                {
                  label: 'Template',
                  href: 'https://github.com/SocialGouv/template',
                },
                {
                  label: 'Github Actions',
                  href: 'https://github.com/SocialGouv/actions',
                },
                {
                  label: 'Image Docker',
                  href: 'https://github.com/SocialGouv/docker',
                },
                {
                  label: 'Linters',
                  href: 'https://github.com/SocialGouv/linters',
                },
                {
                  label: 'Renovate',
                  href: 'https://github.com/SocialGouv/renovate-config',
                },
              ],
            },
            {
              title: 'Outils',
              items: [
                {
                  label: 'DashLord',
                  href: 'https://socialgouv.github.io/dashlord-fabrique/',
                },
                {
                  label: 'Sre Tools',
                  href: 'https://socialgouv.github.io/sre-tools/',
                },
                {
                  label: 'Kontinuous',
                  href: 'https://socialgouv.github.io/kontinuous/',
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} La Fabrique des Ministères Sociaux 🇫🇷`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),

      themes: [
        [
          require.resolve("@easyops-cn/docusaurus-search-local"),
          {
            hashed: true,
            language: ["en", "fr"],
          },
        ],
      ],
  };

}

module.exports = createConfig();
