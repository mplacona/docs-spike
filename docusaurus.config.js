// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/vsLight');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Circle Docs',
  tagline: 'Build with Circle’s Guides & APIs',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://circle-docs.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'jheron-circle', // Usually your GitHub org/user name.
  projectName: 'docs-spike', // Usually your repo name.

  // Adding these based on docs: https://docusaurus.io/docs/deployment#deploying-to-github-pages
  trailingSlash: false,

  // Apparently, these can't go here. Not going to add them to a customFields dictionary just yet.
  // USE_SSH: true,
  // GIT_PASS: true,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs/common',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./commonsidebar.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/jheron-circle/docs-spike',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom-circle.css'),
        },
      }),
    ],
    [
      'redocusaurus',
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          // SPIKE comment: looks like I can add another object for multiple specs -- JH
          {
            spec: 'static/api/pw-swagger-may.yaml',
            route: '/api/web3s/programmable-wallets/',
          },
          // SPIKE comment: Going to try that here -- JH
          {
            spec: 'static/api/petstore.yaml',
            route: '/api/pets/',
          },

        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: '#51e3a3',
        },
      },
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'stablecoins',
        path: 'docs/stablecoins',
        routeBasePath: 'stablecoins',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'circle-research',
        path: 'docs/circle-research',
        routeBasePath: 'circle-research',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          // /docs/oldDoc -> /docs/newDoc
          {
            to: '/stablecoins/overview',
            from: '/stablecoins/docs',
          },
          // Redirect from multiple old paths to the new path
          {
            to: '/circle-research/overview',
            from: '/circle-research/docs',
          },
        ],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/circle-logo.jpg',
      navbar: {
        logo: {
          alt: 'Developer Documentation',
          src: 'img/circle-logo.png',
        },
        items: [
          {
            label: 'Stablecoins',
            position: 'left',
            type: 'doc',
            docId: 'index',
            docsPluginId: 'stablecoins',
          },
          {
            label: 'Web3 Services',
            position: 'left',
            to: '/',
          },
          {
            label: 'Circle Mint',
            position: 'left',
            to: '/',
          },
          {
            label: 'Circle Research',
            position: 'left',
            type: 'doc',
            docId: 'index',
            docsPluginId: 'circle-research',
          },
        ],
      },
      // footer: {
      //   // logo: {
      //   //   alt: 'Circle Logo',
      //   //   src: 'img/circle-logo.png',
      //   //   href: 'https://circle.com'
      //   // },
      //   style: 'dark',
      //   links: [
      //     {
      //       title: 'Docs',
      //       items: [
      //         {
      //           label: 'Tutorial',
      //           to: '/docs/index',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Community',
      //       items: [
      //         {
      //           label: 'Circle',
      //           href: 'https://www.circle.com',
      //         },
      //         {
      //           label: 'Discord',
      //           href: 'https://discordapp.com',
      //         },
      //         {
      //           label: 'Twitter',
      //           href: 'https://twitter.com/BuildOnCircle',
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `© ${new Date().getFullYear()} Circle Internet Financial Limited`,
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell'],
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: { start: 'highlight-start', end: 'highlight-end' },
          },
          {
            className: 'code-block-error-line',
            line: 'This will error',
          },
        ],
      },
    }),
};

module.exports = config;
