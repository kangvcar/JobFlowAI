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
        { text: '产品功能', href: '#features' },
        { text: '创始团队', href: '#' },
        { text: '产品价格', href: '#' },
        { text: '用户评价', href: '#features2' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: '支持平台', href: '#' },
        { text: '合作伙伴', href: '#' },
        { text: '平台优势', href: '#advantage' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: '常见问题', href: '#faqs' },
        { text: '使用步骤', href: '#steps' },
        { text: '专业服务', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: '关于我们', href: '#' },
        { text: '博客', href: '/blog' },
        { text: '项目发展', href: '#' },
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
