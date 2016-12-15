var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
    return (
        <div>
            <h3 className="text-center">Examples</h3>
            <p>Here are a few example locations to try out:</p>
            <ol>
                <li>
                    <Link to='/?location=Bucuresti'>Bucuresti, Romania</Link>
                </li>
                <li>
                    <Link to='/?location=Paris'>Paris, France</Link>                    
                </li>
                <li>
                    <Link to='/?location=Madrid'>Madrid, Spain</Link>                    
                </li>
            </ol>
        </div>
    );
}

module.exports = Examples;