import { BackendDynamicPluginInstaller } from '@backstage/backend-dynamic-feature-service';
import { createRouter } from '@aws/aws-proton-backend-plugin-for-backstage';

export const dynamicPluginInstaller: BackendDynamicPluginInstaller = {
  kind: 'legacy',

  // Contributions of the plugin to the application.
  // Here optional fields allow embedding the code which is usually described in the plugin readme for manual addition.
  // If a contribution is not used, the field should be omitted.

  router: {
    pluginID: 'aws-proton',
    async createPlugin(env) {
      // Return a promise to your router.
      //return Promise.reject(new Error('Not implemented'));
      
      return await createRouter({
        logger: env.logger,
        config: env.config,
      });
    },
  },

  // events(eventsBackend, env) {
  //   // Do something with the events backend (add subscribers or publishers)
  //   // and return a list of HttpPostIngressOptions that will be
  //   // registered with the http event endpoint.
  //   return [];
  // },

  // catalog(builder, env) {
  //   // Add catalog contributions, such as
  //   // entity providers or location analyzers.
  // },

  // scaffolder(env) {
  //   // Return an array of scaffolder actions (TemplateAction)
  //   // that will be registered with the scaffolder.
  //   return [];
  // },

  // search(indexBuilder, schedule, env) {
  //   // Add search contributions, such as
  //   // collators and decorators.
  // },
};