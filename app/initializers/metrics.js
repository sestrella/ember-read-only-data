export function initialize(container, app) {
  app.inject('route', 'metrics', 'service:metrics');
}

export default {
  name: 'metrics',
  initialize: initialize
};
