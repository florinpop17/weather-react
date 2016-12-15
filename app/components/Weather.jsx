var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
   handleSearch : function (location) {
       alert(location);
   },
   render: function() {
       return (
           <div>
               <h3>Weather Component</h3>
               <WeatherForm onSearch={this.handleSearch}/>
               <WeatherMessage/>
           </div>
       );
   } 
});

module.exports = Weather;