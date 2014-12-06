var MessageCard = React.createClass({
  render: function() {
    var date = this.props.date;
  
    var message = this.props.message;

    return <div><span>{date}</span><br/><span>{message}</span></div>;
  }
});

var MessageList = React.createClass({
  getInitialState : function(){
    return {
      messageList : []
    }
  },
  componentDidMount: function(){
    var that = this;
    messageRepository.get().done(function(data){
        that.setState({messageList : data.messageList });        
    });
  },
  render: function() {
    var messages = this.state.messageList;
    var count = this.state.messageList.length;
    var messageCards = [];

    messages.forEach(function(msg){
      messageCards.push(<MessageCard message={msg.message} date={msg.date} />);
    });

    return (
      <div>
        <p>{count}</p>
        {messageCards}
      </div>
    );
  }
});

React.render(
  <MessageList />, 
  document.getElementById('container')
);

