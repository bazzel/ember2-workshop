import Ember from 'ember';

export default Ember.Controller.extend({
  application: Ember.inject.controller(),
  search: Ember.computed.alias('application.search'),
  filteredContent: Ember.computed('model', 'search', 'model.@each.title', 'model.@each.description', function() {
  var products = this.model,
      search = new RegExp(this.get('search'), 'i');

    products = products.filter(function(product) {
      var str = product.get('title') + product.get('description');
      return search.test(str);
    });
    return products;
  })
});
