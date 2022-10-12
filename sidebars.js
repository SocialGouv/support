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
      type: 'category',
      label: 'Démarrage',
      items: ['init/presentation', 'init/fonctionnement', 'init/accueil-produits'],
      collapsed: false,
      collapsible: true
    },
    {
      type: 'category',
      label: 'Standards',
      items: ['standards/developpement', 'standards/databases', 'standards/securite', 'standards/kubernetes', 'standards/tests', 'standards/mobile'],
    },
    {
      type: 'category',
      label: 'Infrastructure',
      items: ['infrastructure/presentation', 'infrastructure/disaster-recovery', 'infrastructure/pra', 'infrastructure/emails'],
    },
    {
      type: 'category',
      label: 'Workshops',
      items: ['workshops/production', 'workshops/kubernetes'],
    },
    'faq'
  ],
};

module.exports = sidebars;
