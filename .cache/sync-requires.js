const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/Nenad/Web Development/project/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/Nenad/Web Development/project/src/pages/index.js"))),
  "component---src-pages-professionals-js": hot(preferDefault(require("/Users/Nenad/Web Development/project/src/pages/professionals.js"))),
  "component---src-pages-startup-js": hot(preferDefault(require("/Users/Nenad/Web Development/project/src/pages/startup.js")))
}
