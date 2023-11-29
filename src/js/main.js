// Import our custom CSS
import "../scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

import CopyToClipboard from "./copy-to-clipboard";
import HeaderStickyTop from "./header-sticky-top";

new CopyToClipboard().enable();
new HeaderStickyTop().enable();
