var MessageInput = React.createClass({
  
  handleSubmit: function(e){
    e.preventDefault();
    var message = this.refs.message.getDOMNode().value.trim();

    var request = {
      message: {
        username: 'Motski',
        text: message  
      }
    }  

    messageRepository.send(request).done(function(data){
      // CLEAR TEXT AREA
    });
  },
  render: function() {

    return (
            <form onSubmit={this.handleSubmit}>
              <textarea ref="message"></textarea>
              <input type="submit"></input>
            </form>
    )
  }
});

React.render(
  <MessageInput />, 
  document.getElementById('sidebar')
);

