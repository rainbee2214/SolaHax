import PostalCode from '../services/postal-code'

export function initialize(container, application) {
  application.register('postal-code:main', PostalCode, { singleton: true });
  application.inject('component:google-map', 'PostalCode', 'service:postal-code');
  application.inject('route', 'PostalCode', 'service:postal-code');
  application.inject('controller:explore', 'PostalCode', 'service:postal-code');
}

export default {
  name: 'postal-code-service',
  before: 'store',
  initialize: initialize
};
