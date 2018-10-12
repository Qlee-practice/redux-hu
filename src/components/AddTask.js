import React from 'react';
import {add} from '../containers/actions';
import {connect} from "react-redux";

let AddTask = ({dispatch}) => {
    let input;
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                const value = input.value.trim();
                if(!value) {
                    return;
                }

                dispatch(add(value));
                input.value = '';
            }}>
                <input ref={node => {input = node}}/>
                <button type="submit">Add Task</button>
            </form>
        </div>
    )
};

AddTask = connect()(AddTask);

export default AddTask;
