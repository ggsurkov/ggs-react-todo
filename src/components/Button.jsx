import React from 'react';

function Button(props) {
    return(
        <button className={props.className}>
            <i className="material-icon">{props.icon}</i>
        </button>
    );
}

Button.propTypes = {
    className: React.PropTypes.string,
    icon: React.PropTypes.string
};
export default Button;