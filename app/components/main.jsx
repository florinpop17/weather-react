var React = require('react');
var Nav = require('Nav');
var Weather = require('Weather');

//var Main = React.createClass({
//    render: function() {
//        return (
//            <div>
//                <Nav></Nav>
//                <h2>The main Component</h2>
//                {this.props.children}
//            </div>
//        );
//    }
//});

var Main = (props) => (
        <div>
            <Nav></Nav>
            <h2>The component</h2>
            {props.children}
        </div>
    );

module.exports = Main;