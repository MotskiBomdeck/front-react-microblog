var messageRepository = {
  get: function () {
    return $.ajax({
      type: 'GET',
      url: 'https://node-microblog.herokuapp.com/messages',
      dataType: 'json'
    }).fail(function(err, status) {
      console.log(err, status);
    });
  },
  send: function(data) {
    return $.post('https://node-microblog.herokuapp.com/message', data);  
  }
}
