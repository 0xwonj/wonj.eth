// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// eslint-disable-next-line @typescript-eslint/no-var-requires
const lightCodeTheme = require("prism-react-renderer/themes/github");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Wonj",
  tagline:
    "Blockchain Engineer focused on personal growth and staying abreast of emerging trends in decentralized technologies.",
  url: "https://wonj.me",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config
  organizationName: "wonj1012",
  projectName: "wonj1012.github.io",

  customFields: {
    newsletter: {
      action:
        "https://dev.us14.list-manage.com/subscribe/post?u=4ed0fd1909674fddee53ac3e7&amp;id=dfdcae99f5&amp;f_id=004887e0f0",
      method: "post",
      emailFieldName: "EMAIL",
      firstNameFieldName: "FNAME",
      submitButtonName: "subscribe",
      tosURL: "https://mailchimp.com/legal/terms/",
      privacyPolicyURL: "https://www.intuit.com/privacy/statement/",
      serviceName: "Mailchimp",
    },
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: [
    "docusaurus-plugin-sass",
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 85,
        max: 2000,
        min: 500,
        steps: 4,
        disableInDev: false,
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "private-blog",
        routeBasePath: "blog/private",
        path: "./private-blog",
      },
    ],
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          blogTitle: "Wonj's Blog",
          blogDescription: "Personal blog by Wonjae Choi.",
          postsPerPage: 10,
          showReadingTime: true,
          feedOptions: {
            type: "all",
            copyright: `Copyright © ${new Date().getFullYear()} Wonjae Choi.`,
          },
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.scss")],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/logo-small.png",
      metadata: [
        {
          name: "description",
          content: "I am a software developer interested in blockchain.",
        },
        {
          name: "keywords",
          content:
            "blockchain,web3,backend,developer,engineer,python,rust,solidity,smart contract,xrpl,ethereum",
        },
        {
          name: "twitter:card",
          content: "summary",
        },
      ],
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        hideOnScroll: true,
        title: "Wonj",
        logo: {
          alt: "Wonjae Choi Logo",
          src: "img/logo.svg",
          srcDark: "img/logo-white.svg",
        },
        items: [
          { to: "/about", label: "About", position: "left" },
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/projects", label: "Projects", position: "left" },
          { to: "/talks", label: "Talks", position: "left" },
          {
            label: "Docs",
            position: "left",
            items: [
              {
                label: "Research",
                to: "/docs/category/research",
              },
              {
                label: "Projects",
                to: "/docs/category/projects",
              },
            ],
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Connect",
            items: [
              {
                label: "Email",
                href: "mailto:choi@wonj.me",
              },
              {
                label: "GitHub",
                href: "https://github.com/wonj1012",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/wonj",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/0xwonj",
              },
            ],
          },
          {
            title: "Docs",
            items: [
              {
                label: "Research",
                to: "/docs/category/research",
              },
            ],
          },
          {
            title: "Discover",
            items: [
              {
                label: "About me",
                to: "/",
              },
              {
                label: "Projects",
                to: "/projects",
              },
              {
                label: "Talks",
                to: "/talks",
              },
            ],
          },
          {
            title: "Blog feed",
            items: [
              {
                label: "RSS",
                to: "/blog/rss.xml",
              },
              {
                label: "Atom",
                to: "/blog/atom.xml",
              },
              {
                label: "JSON",
                to: "/blog/feed.json",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Wonjae Choi.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: "CB335PXNDZ",
        apiKey: "1fbb5b8b42a34c502bec7ca518d55a89",
        indexName: "wonj",
      },
    }),
};

module.exports = config;
