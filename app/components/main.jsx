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
            <div className="row">
                <div className="columns medium-6 large-4 small-centered">
                    {props.children}
                </div>
            </div>
        </div>
    );

module.exports = Main;