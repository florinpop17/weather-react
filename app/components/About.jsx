var React = require('react');

var About = React.createClass({
   render: function() {
       return (
           <h3>About Component</h3>
       );
   } 
});

var About = () => (
    <div>
        <h3>About</h3>
        <p>This is a simple react app that shows the weather in different locations.</p>
    </div>
);

module.exports = About;