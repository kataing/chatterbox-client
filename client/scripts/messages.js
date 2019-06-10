var Messages = {

  $text: $('#message'),
  
  newMessage: function() {

    var obj = {
      username: App.username.replace('username=', ''),
      roomname: RoomsView.$select.val(),
      text: Messages.$text.val()
    };
    return obj;
  }
};
