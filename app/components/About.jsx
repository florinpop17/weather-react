var React = require('react');

var About = React.createClass({
   render: function() {
       return (
           <h3>About Component</h3>
       );
   } 
});

var About = () => <h3>About component</h3>;

module.exports = About;