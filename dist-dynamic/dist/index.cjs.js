'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const dynamicPluginInstaller = {
  kind: "legacy",
  // Contributions of the plugin to the application.
  // Here optional fields allow embedding the code which is usually described in the plugin readme for manual addition.
  // If a contribution is not used, the field should be omitted.
  router: {
    pluginID: "router plugin ID, used as REST endpoint suffix",
    createPlugin(env) {
      return Promise.reject(new Error("Not implemented"));
    }
  },
  events(eventsBackend, env) {
    return [];
  },
  catalog(builder, env) {
  },
  scaffolder(env) {
    return [];
  },
  search(indexBuilder, schedule, env) {
  }
};

exports.dynamicPluginInstaller = dynamicPluginInstaller;
//# sourceMappingURL=index.cjs.js.map
