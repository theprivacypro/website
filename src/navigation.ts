import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Privacy Impact Assessments',
      href: '/pia',
    },
    {
      text: 'About',
      links: [
        {
          text: 'Subscribe',
          href: '/subscribe',
        },
        {
          text: 'Philosophy',
          href: '/philosophy',
        },
        {
          text: 'Approach',
          href: '/philosophy#approach',
        },
      ],
    },
  ],




};

export const footerData = {
  links: [
    {
      title: 'SERVICES',
      links: [
        { text: 'PIA Toolkit', href: '/pia' },
        { text: 'Executive Consulting', href: '#' },
        { text: 'Keynote Speaker', href: '#' },
      ],
    },
    {
      title: 'ABOUT',
      links: [
        { text: 'About The Privacy Pro', href: '#' },
        //{ text: 'Events', href: '#' },
        //{ text: 'Blog', href: '#' },
        { text: 'Values', href: '#' },
        //{ text: 'FAQ', href: '#' },
        { text: 'Contact', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Privacy Notice', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/the-privacy-pro/' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@theprivacypro' },
    { ariaLabel: 'EventBrite', icon: 'tabler:calendar-event', href: 'https://www.eventbrite.com/o/the-privacy-pro-45532329733' },
  ],
  footNote: `
    © Copyright 2025 · The Privacy Pro LLC · All Rights Reserved.
  `,
};
