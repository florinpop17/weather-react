var React = require('react');

var WeatherMessage = React.createClass({
   render: function() {
       return (
           <p>It is {this.props.temp}C in {this.props.location}.</p>
       );
   } 
});

module.exports = WeatherMessage;