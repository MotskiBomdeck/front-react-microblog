var MessageCard = React.createClass({
  render: function() {
    var date = this.props.date;
  
    var message = this.props.message;

    return <div><span>{date}</span><br/><span>{message}</span></div>;
  }
});

var MessageList = React.createClass({
  render: function() {
    var messages = this.props.messages;
    var count = messages.length;
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

var messageList = [{
  date:'2014-12-12',
  message: 'Vai mané!'
},
{
  date:'2014-12-12',
  message: 'Vai mané!'
},
{
  date:'2014-12-12',
  message: 'Vai mané!'
}];

React.render(
  <MessageList messages={messageList} />, 
  document.getElementById('container')
);

