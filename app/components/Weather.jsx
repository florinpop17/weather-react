var React = require('react');
var WeatherForm = require('WeatherForm');

var Weather = React.createClass({
   render: function() {
       return (
           <div>
               <h3>Weather Component</h3>
               <WeatherForm/>
           </div>
       );
   } 
});

module.exports = Weather;