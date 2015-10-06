import Ember from 'ember';

export default Ember.Controller.extend({
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
    }
  }
});
