var React = require('react');

var WeatherForm = React.createClass({
   renter: function() {
       return (
           <div>
               <form>
                   <input type="text"/>
                   <button>Get Weather</button>
               </form>
           </div>
       );
   } 
});

module.exports = WeatherForm;