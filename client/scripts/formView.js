var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
    // FormView.$form.on('submit', FormView.reload);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    Parse.create(Messages.newMessage(), () => console.log('success!'))
    console.log('click!');
    // FormView.$form.on('submit', location.reload(true));
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

  // reload: function() {
  //   event.preventDefault();
  //   FormView.$form.on('submit', location.reload(true));
  // }

};