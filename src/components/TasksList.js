import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

const TasksList = ({tasks, onTaskClick}) => {
    return (
        <ul>
            {
                tasks.map((task, index) => (
                    <Task key={index} {...task} onClick={() => onTaskClick(index)} />
                ))
            }
        </ul>
    )
};

TasksList.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            completed: PropTypes.bool
        })
    ),
    onTaskClick: PropTypes.func.isRequired
};

TasksList.defaultProps = {
    tasks: [],
    onTaskClick: () => {}
};

export default TasksList;
