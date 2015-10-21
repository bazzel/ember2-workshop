import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['category'],
  application: Ember.inject.controller(),
  search: Ember.computed.alias('application.search'),
  filteredContent: Ember.computed('model', 'search', 'model.@each.title', 'model.@each.description', 'category', function() {
  var products = this.model,
      search = new RegExp(this.get('search'), 'i'),
      category = this.get('category');;

    products = products.filter(function(product) {
      var str = product.get('title') + product.get('description');
      return search.test(str);
    });

    if (category) {
      products =  products.filterBy('category.name', category);
    }

    return products;
  }),
  categories: Ember.computed.mapBy('model', 'category.content'),
  uniqCategories: Ember.computed.uniq('categories')
});
