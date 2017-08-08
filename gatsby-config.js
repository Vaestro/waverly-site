module.exports = {
    siteMetadata: {
        title: `Waverly & Co`
    },
    plugins: [
        `gatsby-plugin-react-helmet`, {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: `UA-104158176-1`
            }
        }
    ]
}
