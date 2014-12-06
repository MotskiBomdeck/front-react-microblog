var messageRepository = {
  get: function () {
    var defer = $.Deferred();
     $.ajax({
      type: 'GET',
      url: 'https://node-microblog.herokuapp.com/messages',
      dataType: 'json'
    }).done(function(data) {
      var orderedData = _.sortBy(data, function(element){
        return -1 * element.date;
      });

      defer.resolve(orderedData);
    }).fail(function(err, status) {
      defer.reject(status);
      console.log(err, status);
    });

    return defer.promise();
  },
  send: function(data) {
    return $.ajax({
      type:'POST',
      url: 'https://node-microblog.herokuapp.com/message',
      contentType: 'application/json',
      data: JSON.stringify(data)
    });  
  }
}
