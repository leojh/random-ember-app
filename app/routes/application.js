import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [{
        id: 1,
        name: "Leo Hernandez",
        twitter: "leojh",
        github: "leojh"
      }, {
          id: 2,
          name: "Rob Scaduto",
          twitter: "scardeto",
          github: "scardeto"
        }, {
          id: 3,
          name: "Frank Barbato",
          twitter: "frankjbarbato"
        }];
  }
});
