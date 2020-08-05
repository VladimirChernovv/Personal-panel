import "./assets/styles/main.scss";
import './assets/icons/icons';
import common from './assets/js/common';
import header from './blocks/header/header';

if (document.querySelector('[data-page="avatar"]')) {
}

new common();
new header();

//*****************************************************************
//               remove comment to support pwa

// import runtime from 'serviceworker-webpack-plugin/lib/runtime';
//
// if ('serviceWorker' in navigator) {
//     const registration = runtime.register();
// }

//*****************************************************************

