var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={}>
            
        </Route>
    </Router>, 
    document.getElementById("react-container")
);