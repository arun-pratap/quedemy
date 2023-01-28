const React = require("react");
const Layout = require("./src/components/Layout").default;
require("bootstrap/dist/css/bootstrap.min.css");
require("./src/style/custom.css");
require("./src/style/light.css");
// require( "./src/style/dark.css");

const Prism = require("prismjs");
require("prismjs/themes/prism-tomorrow.css")
// require( "prismjs/themes/prism-okaidia.css")
// require( "prismjs/themes/prism-twilight.css")

require("prismjs/components/prism-json.js")
require("prismjs/components/prism-bash.js")
require("prismjs/components/prism-pug.js")
require("prismjs/components/prism-sql.js")

exports.wrapPageElement = ({ element, props }) => (
    // props provide same data to Layout as Page element will get
    // including location, data, etc - you don't need to pass it
    < Layout {...props}> {element}</Layout >
)


/** TIP >> https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v1-to-v2/#convert-to-either-pure-commonjs-or-pure-es6
 * Never mix es6 and commonJS module
 * Use all es6 module syntax
 * Or Use all commonJS module
 */ 