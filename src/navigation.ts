import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Privacy Impact Assessments',
      href: '/pia',
    },
    {
      text: 'About',
      href: '/about',
    },
  ],

};

export const footerData = {
  links: [
    {
      title: 'SERVICES',
      links: [
        { text: 'PIA Training & Tools', href: '/pia' },
        { text: 'Privacy Consulting', href: '/about#services' },
        //{ text: 'Keynote Speaker', href: '/about#lauren' },
      ],
    },
    {
      title: 'ABOUT',
      links: [
        { text: 'About The Privacy Pro', href: '/about' },
        //{ text: 'Events', href: '#' },
        //{ text: 'Blog', href: '#' },
        { text: 'Values', href: '/about#values' },
        { text: 'FAQ', href: '/about#faq' },
        { text: 'Contact', href: '/contact' },
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
