module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://gustavoloi-portfolio.netlify.app/`,
    // Your Name
    name: 'Gustavo Luiz Lói',
    // Main Site Title
    title: `Gustavo Luiz Lói | Software Developer`,
    // Description that goes under your name in main bio
    description: `Software Developer.`,

    // Optional: Twitter account handle
    // author: `@`,

    // Optional: Github account URL
    github: `https://github.com/gustavoloi/`,

    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/gustavo-loi/`,

    // Content of the About Me section
    about: `As a graduate in Software Engineering from Conestoga, I want to show the results of my efforts with my work and I believe I can learn and adapt to any technologies or techniques. From my studies I also got used to learning new technologies in a short period of time, with enough knowledge to be able to attain good grades on my assignments.
    With my previous work experiences, I was able to work with teams, and anything team related would be easy to get used to when working as a Software Engineer. My course also taught me the best practices in this line of work, as well as different work methodologies. My goal is to bring everything I know and all my experience to my future workplace and grow.`,
    
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    // projects: [
    //   {
    //     name: 'Devfolio',
    //     description:
    //       'A zero-config and blazing fast personal site + blog built with GatsbyJs and TailwindCSS',
    //     link: 'https://github.com/RyanFitzgerald/devfolio',
    //   },
    //   {
    //     name: 'ChromeExtensionKit',
    //     description:
    //       'Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates',
    //     link: 'https://chromeextensionkit.com/?ref=devfolio',
    //   },
    //   {
    //     name: 'Another Cool Project',
    //     description:
    //       'Lorem ipsum dolor sit amet consectetur adipisicing elit ducimus perferendis',
    //     link: 'https://github.com/RyanFitzgerald/devfolio',
    //   },
    // ],

    // Optional: List your education history, must have `name` and `description`.
    education: [
      {
        name: 'Software Engineering Technician - Graduated',
        description: 'Conestoga College, 2019 - 2021',
        extraKeywords: 'C/C++, C#, Linux, Javascript, CSS, SDLC',
      },
      {
        name: 'Game Design and Digital Entertainment - Graduated',
        description: 'UNIVALI, 2012 - 2015',
        extraKeywords:'Game Design, Game Development, Unity 3D, Sound Design',
      },
    ],

    experience: [
      {
        name: 'SETI - Internet Security',
        description: 'Full-Stack Developer, November 2018 - February 2019',
        extraKeywords: 'Teamwork, C/C++, Javascript, HTML, Git, Jira',
      },
      {
        name: 'MUNDIALMIX Comércio de Alimentos',
        description: 'Cashier, December 2016 - February 2018',
        extraKeywords: 'Teamwork, Time Management, Customer Support',
      },

    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'C#, C/C++, JavaScript, HTML, CSS',
      },
      {
        name: 'Database',
        description: 'MySQL',
      },
      {
        name: 'Other',
        description:
          'SDLC, Git, Jira, Agile',
      },
      {
        name: 'Languages',
        description:
          'Portuguese(Native), English(Fluent)',
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
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/content/blog`,
    //     name: `blog`,
      // },
    // },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
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
