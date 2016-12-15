var React = require('react');

var WeatherMessage = React.createClass({
   render: function() {
       return (
           <p>It is 40 in Philadelphia</p>
       );
   } 
});

module.exports = WeatherMessage;