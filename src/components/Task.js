import React from 'react';
import PropTypes from 'prop-types';

const Task = ({text, finished, onClick}) => {
    return (
        <li style={{textDecoration: finished ? 'line-through' : 'none'}}>
            <input type="checkbox" value={text} checked={finished} onChange={onClick}/>
            {text}
        </li>
    )
};

Task.propTypes = {
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool,
    onClick: PropTypes.func.isRequired
};

Task.defaultProps = {
    text: '',
    completed: false,
    onClick: () => {}
};

export default Task;