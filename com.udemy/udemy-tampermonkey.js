'use strict';

// ==UserScript==
// @name         Make Udemy Quiz Printable
// @namespace    licn
// @version      0.9
// @description  Hide other components like sidebar to make all questions in a Udemy quiz printable
// @author       Chen Li
// @match        https://*.udemy.com/course/*/learn/quiz/*/result/*
// @grant        none
// ==/UserScript==

const styleSheet = `

/*  
div[class*="app--header--"] {
    display: none;
}
*/
div[class*="app--content-column--"] {
    min-width: 100%;
    width: 100%;
}

div[class*="app--sidebar-column"] {
    display: none;
}

div[class*="app--body-container"] {
    background-color: white
}

.curriculum-item-view--aspect-ratio-container--2tJ-p {
    padding-top: 0;
}

.curriculum-item-view--content-container--2MIL1 {
    /* to do */
    position: static;
}

div[class*="curriculum-item-view--scaled-height-limiter"] {
    position: static;
    height: auto;
    overflow: visible;
    max-height: none;
}

div[class*="curriculum-item-footer--footer"] {
   position: static;
}

div[class*="app--dashboard"] {
    display: none;
}

.footer-v6 {
    display: none;
    width: 100%;
}

/* Make the option text copyable */
.toggle-control-label {
    cursor: auto;
    -webkit-touch-callout: initial;
    -webkit-user-select: initial;
    -khtml-user-select: initial;
    -moz-user-select: initial;
    -ms-user-select: initial;
    user-select: initial;
}

`;

(function() {
    const s = document.createElement('style');
    s.type = "text/css";
    s.innerHTML = styleSheet;
    (document.head || document.documentElement).appendChild(s);

})();