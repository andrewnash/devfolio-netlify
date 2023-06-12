module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Andrew Nash',
    // Main Site Title
    title: `Andrew Nash | ML Developer`,
    // Description that goes under your name in main bio
    description: `MSc Computer Science Graduate`,
    // Optional: Twitter account handle
    // author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/andrewnash`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/andrewnashnl/`,
    // Content of the About Me section
    about: `Graduating with an MSc in Computer Science from Memorial University of Newfoundland, I bring a unique blend of academic and industry experience gained from companies such as Nasdaq, RBC, IBM, and BlackBerry QNX. Demonstrating proficiency in Transformer models, I achieved tangible results in the Intelligent Ground Vehicle Competition with a second place finish internationally. This accomplishment, along with my recognized publication 'Herds Eye View', signals my dedication to innovation in machine learning. Equipped with skills in computer vision, transformer models, natural language processing, anomaly detection, and data visualization, I am ready to make substantial contributions in the realm of Data Science and AI`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'MSc Computer Science [Thesis]',
        description:
          'Memorial University of Newfoundland, 2021 - 2023',
        link: '',
      },
      {
        name: 'BSc Computer Engineering [Co-Op]',
        description:
          'Memorial University of Newfoundland, 2016 - 2021',
        link: '',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Nasdaq (Verafin)',
        description: 'Data Science Developer, May 2021 - Aug 2021',
        link: '',
      },
      {
        name: 'Bank of Canada',
        description: 'Data Science Developer Student, Sept 2020 - Apr 2021',
        link: '',
      },
      {
        name: 'IBM',
        description: 'Natural Language Processing Student, Jan 2020 - Apr 2020',
        link: '',
      },
      {
        name: 'Royal Bank of Canada (RBC)',
        description: 'Full-Stack Data Science Student, May 2019 - Aug 2019',
        link: '',
      },
      {
        name: 'BlackBerry QNX',
        description: 'NLP Developer Student, Sept 2018 - Dec 2018',
        link: '',
      },
      {
        name: 'Nalcor Energy',
        description: 'Electrial Engineeering Student, May 2017 - Apr 2018',
        link: '',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Python, Java, C++, C#, JavaScript (ES6+), Node.js, Flask',
      },
      {
        name: 'AI',
        description: 'PyTorch, Scikit-Learn, Keras, Tensorflow, NumPy, XGBoost, LightGBM',
      },
      {
        name: 'Other',
        description:
          'Unreal Engine, Unity, Docker, Amazon Web Services (AWS), MongoDB, MySQL, Kubernetes',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-gifs`,
          `gatsby-remark-embed-video`,
          `gatsby-remark-images`,
          `gatsby-remark-responsive-iframe`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `G-FZTZSJTXKR`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
