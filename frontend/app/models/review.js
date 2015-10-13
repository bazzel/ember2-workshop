import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr(),
  rating: DS.attr(),
  user: DS.attr(),
  createdAt: DS.attr()
});
