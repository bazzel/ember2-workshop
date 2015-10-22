import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr(),
    description: DS.attr(),
    price: DS.attr(),
    image: DS.attr(),
    reviews: DS.hasMany('review'),
    category: DS.belongsTo('category', { async: false }),
    categoryName: Ember.computed('category', function() {
      return this.get('category.name');
    })
});
