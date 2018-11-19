module.exports = {
  siteTitle: "Julius Vering", // Site title.
  siteTitleShort: "JVering", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Julius Vering Personal Website", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://www.juliusvering.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "Julius Vering's personal website.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  siteGATrackingID: "UA-47311644-4", // Tracking code ID for google analytics.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Julius Vering", // Username to display in the author segment.
  userLocation: "Berkeley CA", // User location to display in the author segment.
  userAvatar: "https://lh3.googleusercontent.com/V_dV3-w81wqXvL1WCvVtVGWvsW1j1iEUe8p7Z5qTFYYDkb5sC7GDFd5zCRpqdxOApaZjkMWi4GC0-6a_3dqc-zUZKL6cLsoET8BRV3IYETjuf0zL0WnBxG3rmlEkaHxUVmzwOozM6L1n_0l27niIewC0JDoNmgyI0jkWO-aq0iQzqVhfZ24ykLkbfTl8KoaFtLhLHHKrtsluhOSfsBr7Gij1Mt_wBz5Nhcz4MruyNCK40kdJuJthRZcfHPhyFeU7ThtYqGI6b9Wf3ROguKMShgdR6sAilFerBQ63tyuFhU3VKJp7g-c9uVy9Bi8NvkbG4GVBhP8x9od0Y_Zz_DihY22CJVv135ievQi2qH5iBvGN_ptNEnYrsw1e-lxdQFTVl3kR7XLDZIWcihsbwIAdQUPtXdzeDGMr7DgyGLTy0wYurXWNAZYl6UEpqoa2oRuzmcJxQ9rXFjrrRG46EkZYRcc693qG6aSIJsBpAuV_b0SVkPU0cDCLOOZETRsurOpaSTt17z1A-BxkYvnqZN1a9iObWZUj89woVq0XUr7OkBqB2JRq2vagunrI9LsINpEgWRaa8HYrROci6ECuuRv5iC5uVFpuvMj37Nuf3H_K_x3vNRRxcWCcPne0J778do0tilLuZuM6HvocAhT4fuwwdDnumCJWC0Mt-pJ9kK4-cMJ3aQk-PydQhqWE9QFVo0WqSPpBhHV3wy6mArbkNA=s1504-no", // User avatar to display in the author segment.
  userDescription:
    "I'm a EECS and Business Administration student at UC Berkeley.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/juliusvering",
      iconClassName: "fa fa-github"
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/julius-vering",
      iconClassName: "fa fa-linkedin"
    },
    {
      label: "Email",
      url: "mailto:jrvering@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2018. Julius Vering" // Copyright string for the footer of the website and RSS feed.
};
