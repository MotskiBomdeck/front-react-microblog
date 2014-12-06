var MessageCard = React.createClass({
  render: function() {
    var date = this.props.date;
  
    var message = this.props.message;

    return <div><span>{date}</span><br/><span>{message}</span></div>;
  }
});

React.render(<MessageCard  date="21/12/2004" message="booooo" />, document.getElementById('container'));

