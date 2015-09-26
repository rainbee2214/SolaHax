import Houses from '../services/houses';

export function initialize(container, application) {
  application.register('houses:main', Houses, { singleton: true });
  application.inject('route', 'Houses', 'service:houses');
  application.inject('controller:explore', 'Houses', 'service:houses');
  application.inject('component:google-map', 'Houses', 'service:houses');
}

export default {
  name: 'houses-service',
  initialize: initialize
};
