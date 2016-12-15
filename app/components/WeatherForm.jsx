var React = require('react');
var Nav = require('Nav');

var WeatherForm = React.createClass({
   render: function() {
       return (
           <div>
               <input type="text"/>
               <button>Get Weather</button>
           </div>
       );
   } 
});

module.exports = WeatherForm;