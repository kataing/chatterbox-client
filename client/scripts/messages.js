var Messages = {
  
  newMessage: function() {
    var obj = {
      username: window.location.search.substr(10),
      text: $('#message').val()
    };

    return MessageView.render(obj)
  }
};


// need code that creates 1 messages
// format this object to mimick the format of other objects aka app