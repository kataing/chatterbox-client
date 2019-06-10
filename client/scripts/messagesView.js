var MessagesView = {

  $chats: $('#chats'),
  html: '',

  initialize: function() {
  },

  // takes in an array of messages and calls MessagesView.renderMessages
  render: function(arr) {
    for(var i = 0; i < arr.length; i++) {
      MessagesView.renderMessage(arr[i]);
    }
  },

  // takes in a message object, creates a <div> template and appends it to #chats
  renderMessage: function(obj) {
    if(!obj.username) {
      obj.username = '';
    }
    if(!obj.text) {
      obj.text = '';
    }
    MessagesView.html = MessageView.render(obj);
    MessagesView.$chats.append(MessagesView.html);
  }

};