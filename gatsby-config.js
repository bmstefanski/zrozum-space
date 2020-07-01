module.exports = {
  siteMetadata: {
    title: 'Zrozum Space',
    description: 'Klarowne odpowiedzi na nurtujące pytania o otaczającym nas świecie',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        gfm: true,
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: { name: 'uploads' },
          },
          {
            resolve: 'gatsby-remark-images',
            options: { maxWidth: 2048 },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: { destinationDir: 'static' },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-purgecss',
    //   options: {
    //     develop: true,
    //     purgeOnly: ['/all.sass'],
    //   },
    // },
    'gatsby-plugin-netlify',
  ],
}
