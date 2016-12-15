var React = require('react');

var WeatherForm = React.createClass({
   renter: function() {
       return (
           <div>
               <input type="text"/>
               <button>Get Weather</button>
           </div>
       );
   } 
});

module.exports = WeatherForm;