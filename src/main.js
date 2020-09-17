/* For sites that can be accessed via multiple domains */
// Function to redirect user to the preferred domain instead of the default firebase hosting domains if they land there.
// IIFE to prevent polluting the global namespace accidentally
(function () {
  // Short circuiting undefined inputs
  const redirect = (URL) => URL && window.location.replace(URL);
  const location = window.location.hostname;

  console.log(`Window location: ${location}`);
  redirect(
    {
      // Mapping of links to redirect
      // Add as needed
      // "ekd-solutions.web.app": "https://solutions.enkeldigital.com",
      // "ekd-solutions.firebaseapp.com": "https://solutions.enkeldigital.com",
    }[location]
  );
})();

import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";

// @todo Does not use the router by default
// import router from "./router";

Vue.config.productionTip = false;

new Vue({
  // router,
  render: (h) => h(App),

  // UNCOMMENT THIS IF PRE-RENDERING PLUGIN IS USED
  // This is needed for "prerender-spa-plugin"'s renderAfterDocumentEvent to take snapshot of static content once everything is rendered.
  // mounted() {
  //   document.dispatchEvent(new Event("vue-render-complete"));
  // },
}).$mount("#app");
