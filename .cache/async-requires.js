// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./../../dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-professionals-js": () => import("./../../../src/pages/professionals.js" /* webpackChunkName: "component---src-pages-professionals-js" */),
  "component---src-pages-startup-js": () => import("./../../../src/pages/startup.js" /* webpackChunkName: "component---src-pages-startup-js" */)
}

