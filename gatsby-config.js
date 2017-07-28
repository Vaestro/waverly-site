module.exports = {
    siteMetadata: {
        title: `Waverly Studios`
    },
    plugins: [
        `gatsby-plugin-react-helmet`, {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: `UA-101328929-1`
            }
        }
    ]
}
