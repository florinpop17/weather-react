var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false
        }  
    },
    handleSearch : function (location) {
        var that = this;
        
        this.setState({
            isLoading : true 
        });
        
        openWeatherMap.getTemp(location).then(function (temp) {
            that.setState({
                location : location,
                temp: temp,
                isLoading: false
            });
        }, function (err) {
            that.setState({isLoading: false});
            alert(err);
        });
    },
    render: function() {
        var {isLoading, temp, location} = this.state;
        
        function renderMessage() {
            if(isLoading) {
                return <p>Fetching weather...</p>;
            } else if(temp && location) {
                return <WeatherMessage location={location} temp={temp}/>;
            }
        }
        
        return (
           <div>
               <h3>Weather Component</h3>
               <WeatherForm onSearch={this.handleSearch}/>
               {renderMessage()}
           </div>
        );
    } 
});

module.exports = Weather;