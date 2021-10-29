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
    about: `I’m a recently graduated Software Engineer looking for a position in the technology field. While creating well designed, robust code is a must nowadays, I also like to read and understand unknown code. There are several ways to reach the same solution and figuring out how each part of it fits together in the bigger picture will neve cease to amaze me! I’m also bringing teamwork and my experience with customer service to the workplace, because I believe good communication is key in any company, on any field.
    What stories a code will tell? What new thing will I learn from reading these lines? I want to answer those and more while making good use of my knowledge and experience!.`,
    
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'The Zoo Project - PHP/CGI',
        description:
          'A project built to show the capabilities of CGI and PHP as serverside technologies.',
        link: 'https://github.com/gustavoloi/gustavo-l-jerry-g-wdd-a03-cgi-php',
      },
      {
        name: 'Data Structures - The Difference',
        description:
          'A code designed to compare te difference between the two types of data structure',
        link: 'https://github.com/gustavoloi/dataStructures-A2',
      },
      {
        name: 'WPF Chat Application',
        description:
          'A chat application using a service in the background as a server. Also makes a good use of logs to keep track of work.',
        link: 'https://github.com/gustavoloi/wmp-a06',
      },
    ],

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
