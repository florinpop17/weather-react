var React = require('react');

var About = React.createClass({
   render: function() {
       return (
           <h3>About Component</h3>
       );
   } 
});

var About = () => (
    <div className="text-center">
        <h1>About</h1>
        <p>This is a simple react app that shows the weather in different locations.</p>
        <p>Built after <a href="https://www.udemy.com/the-complete-react-web-app-developer-course/">this</a> udemy course.</p>
        <p>Some tools used:</p>
        <ol>
            <li>Reactjs</li>
            <li>Nodejs</li>
            <li>Foundation</li>
            <li>OpenWeatherMap</li>
            <li>Webpack</li>
            <li>Babel</li>
            <li>Express</li>
        </ol>
    </div>
);

module.exports = About;