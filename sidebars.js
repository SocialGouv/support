/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: "category",
      label: "Démarrage",
      items: [
        "init/presentation",
        "init/fonctionnement",
        "init/accueil-produits",
      ],
      collapsed: false,
      collapsible: true,
    },
    {
      type: "category",
      label: "Standards",
      items: [
        "standards/developpement",
        "standards/databases",
        "standards/securite",
        "standards/kubernetes",
        "standards/tests",
        "standards/mobile",
        "standards/docker",
      ],
    },
    {
      type: "category",
      label: "Infrastructure",
      items: [
        "infrastructure/presentation",
        {
          type: "doc",
          id: "infrastructure/pra",
          label: "PRA/PCA",
        },
        "infrastructure/emails",
      ],
    },
    "faq",
    {
      type: "category",
      label: "Workshops",
      items: ["workshops/production", "workshops/kubernetes"],
    },
    {
      type: "category",
      label: "Présentations",
      items: [
        {
          type: "link",
          label: "OnBoarding Fabrique",
          href: "https://docs.google.com/presentation/d/1E4A8UekFjCDS8WOLpD1wyos6IkTQ09shHDsdoiLofHA",
        },
        {
          type: "link",
          label: "Guide de survie de la PR",
          href: "https://docs.google.com/presentation/d/1x9H2-SHsF6mXuByijX7u3gTC5CeT4nmbpI1z-NOtyUE",
        },
        {
          type: "link",
          label: "Template",
          href: "https://docs.google.com/presentation/d/1DQMVxy87BEQ-VDF1tJ03jpPBbQnZtTfcDucfoMwVSM0",
        },
        {
          type: "link",
          label: "Kontinuous",
          href: "https://docs.google.com/presentation/d/18TUqf4ew2lNp8w02mY7YiaKyWaEVneUA1ME4VzDlhsM",
        },
        {
          type: "link",
          label: "Metabase",
          href: "https://docs.google.com/presentation/d/1ov0sU89iiVtebNPplolaNwYU8JWIaXc1M6Z7mfn1nKA",
        },
        {
          type: "link",
          label: "ChatGPT",
          href: "/static/presentation-ChatGPT.pptx",
        },
      ],
    },
  ],
};

module.exports = sidebars;
