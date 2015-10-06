import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    toggleEditing: function() {
      this.toggleProperty('isEditing');
      this.model.rollbackAttributes();
    },
    submit: function() {
      this.model.save().then(() => {
        this.set('isEditing', false);
      });
    }
  }
});
