import React from 'react';
import {connect} from "react-redux";
import TasksList from './TasksList';
import {toggle} from "../containers/actions";

const getVisibleTasks = (tasks, filter) => {
    switch (filter) {
        case 'SHOW_FINISHED':
            return tasks.filter(task => task.finished);

        case 'SHOW_ACTIVE':
            return tasks.filter(task => !task.finished);

        case 'SHOW_ALL':
        default:
            return tasks;
    }
};

const mapStateToProps = state => {
    return {
        tasks: getVisibleTasks(state.tasks, state.visibilityFilter)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onTaskClick: id => {
            dispatch(toggle(id));
        }
    }
};

const VisibleTasksList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TasksList);

export default VisibleTasksList;