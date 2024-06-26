/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    pathPrefix: "/ztb",
    siteMetadata: {
        title: 'ZTB',
        description: 'Zakład Transportowo Budowlany Krzysztof Wach',
        siteUrl: 'https://ztb.com.pl',
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-google-gtag',
            options: {
                trackingIds: [
                    process.env.GA_MEASUREMENT_ID || 'test', // GA Measurement
                ],
                gtagConfig: {
                    optimize_id: 'OPT_CONTAINER_ID',
                    anonymize_ip: true,
                    cookie_expires: 0,
                },
                pluginConfig: {
                    head: true,
                    respectDNT: true,
                    exclude: ['/preview/**', '/do-not-track/me/too/'],
                },
            },
        },
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-source-flotiq',
            options: {
                authToken: process.env.GATSBY_FLOTIQ_API_KEY,
                downloadMediaFile: true,
                forceReload: false,
                includeTypes: [
                    'project',
                    'pages',
                    '_tag',
                    '_media',
                ],
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'placeholder',
                path: `${__dirname}/gatsby-config.js`,
            },
        },
        'gatsby-plugin-image',
        {
            resolve: 'gatsby-plugin-sharp',
            options: {
                defaults: {
                    quality: 80,
                },
                base64Width: 20,
            },
        },
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://flotiqgatsbyportfolio1.gatsbyjs.io',
                sitemap: 'https://flotiqgatsbyportfolio1.gatsbyjs.io/sitemap.xml',
                policy: [{ userAgent: '*', allow: '/' }],
            },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/assets/favicons/favicon-16x16.png',
                icons: [
                    {
                        src: 'src/assets/favicons/favicon-32x32.png',
                        sizes: '32x32',
                        type: 'image/png',
                    },
                    {
                        src: 'src/assets/favicons/favicon-16x16.png',
                        sizes: '16x16',
                        type: 'image/png',
                    },
                ],
            },
        },
        'gatsby-plugin-postcss',
        {
            resolve: 'gatsby-plugin-gatsby-cloud',
            options: {
                headers: {
                    '/*': [
                        'x-frame-options: allow-from https://jamstackthemes.dev/',
                    ],
                },
            },
        },
    ],
};
