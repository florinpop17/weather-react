var React = require('react');

var WeatherMessage = React.createClass({
   render: function() {
       return (
           <p>It is {this.props.temp} in {this.props.location}</p>
       );
   } 
});

module.exports = WeatherMessage;