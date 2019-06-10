var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', RoomsView.handleSubmit);
  },

  handleSubmit: function(event) {
    // NOT WORKING
    // event.preventDefault()
    console.log('adding room');
    // RoomsView.$select.val('New Room');
    console.log('still adding');

  },

  // creates an array of unique roomnames and calls RoomsView.renderRoom()
  render: function(obj) {
    var options = [];

    for(var message in obj) {
      var roomname = obj[message].roomname || '';
      roomname.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
      roomname.trim();

      if(!options.includes(roomname)){
        options.push(roomname);
      }
    }
    options.forEach(RoomsView.renderRoom);
  },

  // creates an html option for the room dropdown and appends it to <select>
  renderRoom: function(str) {
    console.log(str);
    var option = '<option id="' + str + '">' + str+ '</option>'
    RoomsView.$select.append(option);
  }


};
