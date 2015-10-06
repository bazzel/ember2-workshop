import Ember from 'ember';

export default Ember.TextField.extend({
  type: 'file',
  change(e) {
    var reader = new FileReader();

    reader.onload = (e) => {
      var fileToUpload = e.srcElement.result;

      Ember.run(() => {
        this.set('file', fileToUpload);
      });
    };
    return reader.readAsDataURL(e.target.files[0]);
  }
});
