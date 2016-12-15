var React = require('react');
var WeatherForm = require('WeatherForm');

var Weather = React.createClass({
   render: function() {
       return (
           <h3>Weather Component</h3>
           <WeatherForm/>
       );
   } 
});

module.exports = Weather;