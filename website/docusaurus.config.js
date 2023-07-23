function getNextVersionName() {
  return 'Canary';
}

const BASE_GH_URL = 'https://github.com/maks1ms/nestjs-telegraf';

module.exports = {
  title: 'NestJS Telegraf',
  tagline: 'Powerful Nest module for easy and fast creation Telegram bots',
  url: 'https://nestjs-telegraf-maks1ms.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'maks1ms',
  projectName: 'nestjs-telegraf',
  themeConfig: {
    navbar: {
      title: 'NestJS Telegraf',
      items: [
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
        {
          href: BASE_GH_URL,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discussions',
              href: `${BASE_GH_URL}/discussions`,
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Issues',
              href: `${BASE_GH_URL}/issues`,
            },
            {
              label: 'Examples',
              to: `${BASE_GH_URL}/tree/master/sample/`,
            },
          ],
        },
      ],
      copyright: `Copyright © 2019 - 2023 <a target="_blank" href="https://hypeer.company">Hypeer</a>, <a target="_blank" href="mailto:arthur.asimov.z0@gmail.com">Arthur Asimov</a> and <a target="_blank" href="https://github.com/hypeertech/nestjs-telegraf/graphs/contributors">Others</a>.<br>
      Copyright 2023 - <a target="_blank" href="https://github.com/Maks1mS">Maks1mS</a> and <a target="_blank" href="${BASE_GH_URL}/graphs/contributors">Others</a>`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: ({ docPath }) => {
            const nextVersionDocsDirPath = 'docs';
            return `${BASE_GH_URL}/edit/main/website/${nextVersionDocsDirPath}/${docPath}`;
          },
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          versions: {
            current: {
              label: `${getNextVersionName()} 🚧`,
            },
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
