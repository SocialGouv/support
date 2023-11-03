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
      collapsed: false,
      items: [
        "standards/developpement",
        "standards/accessibilite",
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
      collapsed: false,
      items: [
        {
          type: "link",
          label: "OnBoarding Fabrique",
          href: "https://docs.google.com/presentation/d/1E4A8UekFjCDS8WOLpD1wyos6IkTQ09shHDsdoiLofHA",
        },
        {
          type: "link",
          label: "Initiation GitHub",
          href: "https://docs.google.com/presentation/d/1Sv_1c3tP0VfoCLQilNsu-KwuBHT_GaQO9ipUtdbrPYI/edit?usp=sharing",
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
          href: "https://socialgouv.github.io/kontinuous",
        },
        {
          type: "link",
          label: "Metabase",
          href: "https://docs.google.com/presentation/d/1ov0sU89iiVtebNPplolaNwYU8JWIaXc1M6Z7mfn1nKA",
        },
        {
          type: "link",
          label: "ChatGPT",
          href: "https://socialgouv.github.io/support/presentation-ChatGPT.pptx",
        },
        {
          type: "link",
          label: "Chiffrement e2e",
          href: "https://docs.google.com/presentation/d/1K_yrQOZpc3qykPfR8U0-98OAecUYmT0kGYDo2GSC604/edit?usp=sharing",
        },
        {
          type: "link",
          label: "Présentation DashLord",
          href: "https://docs.google.com/presentation/d/1dSQBmjENaVcCFrJEinFp5OzzduUSH5k_nOMROyG8wX0/edit?usp=sharing",
        },
      ],
    },
  ],
};

module.exports = sidebars;
