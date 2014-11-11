import Ember from 'ember';

export default Ember.ArrayController.extend({
  queryParams: ['email'],
  email: null,
  emailFilter: Ember.computed.oneWay('email')
});
