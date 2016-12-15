var React = require('react');

var WeatherMessage = (props) => {
    var {temp, location} = props
    return (
       <p>It is {temp}&deg;C in {location}.</p>
    );
};

module.exports = WeatherMessage;