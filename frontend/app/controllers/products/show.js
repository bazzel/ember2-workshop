import Ember from 'ember';

export default Ember.Controller.extend({
  categories: Ember.computed(function() {
    return this.store.peekAll('category');
  }),
  actions: {
    toggleEditing() {
      this.toggleProperty('isEditing');
      this.model.rollbackAttributes();
    },
    submit() {
      this.model.save().then(() => {
        this.set('isEditing', false);
      });
    },
    removeImage() {
      this.model.set('image', null);
    },
    selectCategory(value) {
      this.model.set('category', this.store.peekRecord('category', value));
    }
  }
});
