var MessagesView = {

  $chats: $('#chats'),
  html: '',

  initialize: function() {
  },

  render: function(arr) {
    for(var i = 0; i < arr.length; i++) {
      MessagesView.renderMessage(arr[i]);
    }
    
  },

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