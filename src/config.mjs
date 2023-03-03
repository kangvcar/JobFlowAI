import defaultImage from './assets/images/default.png';

const CONFIG = {
  name: 'JobFlow AI',

  origin: 'https://astrowind.vercel.app',
  basePathname: '/',
  trailingSlash: false,

  title: 'JobFlow AI - AI-powered career guidance and job recommendation platform with multiple data sources.',
  description:
    '🚀 JobFlow AI is a powerful platform that uses advanced artificial intelligence and machine learning algorithms to help users navigate every stage of their career development. By collecting and analyzing data from multiple sources, including social media, professional networks, and job sites, JobFlow AI provides personalized career guidance and job recommendations based on each user\'s unique skills, interests, and goals. With JobFlow AI, users can stay ahead of the competition, discover new career opportunities, and achieve their full potential in today\'s fast-paced and ever-changing job market.',
  defaultImage: defaultImage,

  defaultTheme: 'system', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  language: 'en',
  textDirection: 'ltr',

  dateFormatter: new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }),

  googleAnalyticsId: false, // or "G-XXXXXXXXXX",
  googleSiteVerificationId: 'orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M',

  blog: {
    disabled: false,
    postsPerPage: 4,

    post: {
      permalink: '/%slug%', // Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
      noindex: false,
      disabled: false,
    },

    list: {
      pathname: 'blog', // Blog main path, you can change this to "articles" (/articles)
      noindex: false,
      disabled: false,
    },

    category: {
      pathname: 'category', // Category main path /category/some-category
      noindex: true,
      disabled: false,
    },

    tag: {
      pathname: 'tag', // Tag main path /tag/some-tag
      noindex: true,
      disabled: false,
    },
  },
};

export const SITE = { ...CONFIG, blog: undefined };
export const BLOG = CONFIG.blog;
export const DATE_FORMATTER = CONFIG.dateFormatter;
