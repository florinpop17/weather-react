var React = require('react');

var WeatherMessage = (props) => {
    var {temp, location} = props
    return (
       <p className="text-center">It is {temp}&deg;C in {location}.</p>
    );
};

module.exports = WeatherMessage;