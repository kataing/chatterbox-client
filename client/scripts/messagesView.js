var MessagesView = {

  $chats: $('#chats'),
  html: '',
  count: 0,

  initialize: function() {
  },

  render: function(arr) {
    console.log('render?');
    for(var i = 0; i < arr.length; i++) {
      MessagesView.renderMessage(arr[i]);
    }
  },

  renderMessage: function(obj) {
    MessagesView.count ++;
    console.log('are you in the html?')
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