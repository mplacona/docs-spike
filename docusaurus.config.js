// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Circle Web3 Services',
  tagline: 'Programmable Wallets ßeta',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://jheron-circle.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs-spike/',

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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/jheron-circle/docs-spike',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/jheron-circle/docs-spike',
        },
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

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/circle-logo.jpg',
      navbar: {
        title: 'Developer Documentation',
        logo: {
          alt: 'Developer Documentation',
          src: 'img/circle-logo.png',
        },
        items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Guides',
        },
        {
          type: 'dropdown',
          label: 'APIs',
          position: 'right',
          items: [
                    { 
                      label: 'Programmable Wallets',
                      to: '/api/web3s/programmable-wallets/',
                    },
                    { 
                      label: 'Circle Pets',
                      to: '/api/pets/'
                    }
                  ]
        }
                ]
  
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
      },
      footer: {
        style: 'dark',
        links: [
        {
          title: 'Docs',
          items: [
          {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Circle',
                href: 'https://www.circle.com',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/BuildOnCircle',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/circlefin',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Web3 Services - Programmable Wallets ßeta`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
