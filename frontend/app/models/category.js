import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  products: DS.hasMany('product')
});
