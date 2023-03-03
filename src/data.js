import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
        text: '职业画像',
        href: getPermalink('/careerprofile'),
    },
    {
        text: 'AI求职助手',
        href: getPermalink('/aijobhelper'),
    },
    {
        text: '多数据源',
        href: getPermalink('/multisource'),
    },
    {
        text: '精品课程',
        href: getPermalink('/courses'),
    },
    {
        text: '博客',
        href: getBlogPermalink(),
    },
  ],
  actions: [
    { type: 'button', text: '登录', href: '#' }
  ],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#features' },
        { text: 'Team', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Electron', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '/blog' },
        { text: 'Careers', href: '#' },
        { text: 'Social Impact', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/kangvcar/JobFlowAI' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    2020-2023 ·<a class="text-blue-600 hover:underline dark:text-gray-200" href="https://github.com/kangvcar/JobFlowAI"> JobFlow AI</a> · All rights reserved.
  `,
};
