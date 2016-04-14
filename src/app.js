import React from 'react';
import ReactDOM from 'react-dom';

console.log(React);

let Hello = React.createClass({
    render(){
        return(
            <div>
                <h1>Hello,boy!</h1>
            </div>
        )
    }
});
ReactDOM.render(
 (<Hello />),
  document.getElementById('react')
);
