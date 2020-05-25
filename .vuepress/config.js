const path = require("path");

module.exports = {
  dest: '../docs',
  plugins: [
    // ['@vuepress/active-header-links', {
    //     sidebarLinkSelector: '.sidebar-link',
    //     headerAnchorSelector: '.header-anchor'
    //   }],
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-96060534-1"
      },
    ],
  ],
  title: "Maisnam Raju",
  description: "Jack of many trades, master of some",
  theme: "canvas",
  themeConfig: {
    // Assumes GitHub. Can also be a full GitLab url.
    repo: "whoan/vuepress-theme-canvas",

    // Optional options for generating "Edit this page" link

    // if your docs are in a different repo from your main project:
    docsRepo: "your_user/your_docs_repo",
    // defaults to true, set to false to disable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: "Edit this page!",

    // custom property to show links about you
    usefulLinks: [
      {
        href: "https://twitter.com/maisnamr",
        cssIcon: "fa fa-fw fa-twitter",
      },
      {
        href: "https://github.com/maisnamraju",
        cssIcon: "fa fa-fw fa-github",
      },
      {
        href: "https://www.linkedin.com/in/raju-maisnam-29831331",
        cssIcon: "fa fa-fw fa-linkedin",
      },
    ],
    headerMenu: [{
      title: 'Projects',
      href: "/projects"
    },
    {
      title: "Contact",
      href: "/contact"
    },
    {
      title: "About",
      href: "/about"
    }
  ]
  },
};
