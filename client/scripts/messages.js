var Messages = {
  // username: window.location.search.substr(10),
  // roomname: 'halp',
  // text: 'me',

  $text: $('#message'),

  newMessage: function() {
    console.log('asdfjasldfjsdf');
    var obj = {
      username: App.username,
      text: 'Messages.$text.text()' //FIX THIS!!! CHANGE SYNTAX
    }; // store username, roomname. & text

    return MessageView.render(obj) // {username: ----, }
  }  // create a new message
};

  // x: function () {
  //   App.fetch()
  // }

// need code that creates 1 message
// Messages.x()
// format this object to mimick the format of other objects aka app