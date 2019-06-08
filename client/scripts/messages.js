var Messages = {

  $text: $('#message'),
  
  newMessage: function() {

    var obj = {
      username: App.username.replace('username=', ''),
      text: Messages.$text.val()
    };
    return obj;
  }
};


// need code that creates 1 messages
// format this object to mimick the format of other objects aka app