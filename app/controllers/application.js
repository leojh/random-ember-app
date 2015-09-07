import Ember from 'ember';

export default Ember.Controller.extend({
  contacts: Ember.computed.alias('model')
});
