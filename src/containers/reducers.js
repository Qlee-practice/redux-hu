import {combineReducers} from 'redux';
import {VisibilityFilters, ADD, TOGGLE, FILTER} from './actions';

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    tasks: []
};

// 代码冗长 不够独立
// const tasksApp = (prev = initialState, action) => {
//     switch (action.type) {
//         case ADD:
//             return Object.assign({}, prev, {
//                 tasks: [
//                     {
//                         text: action.text,
//                         id: action.id,
//                         finished: false
//                     },
//                     ...prev.tasks
//                 ]
//             });
//
//         case toggle:
//             return Object.assign({}, prev, {
//                 tasks: prev.tasks.map(task => (
//                     task.id === action.id ? {...task, finished: !task.finished} : task
//                 ))
//             });
//
//         case FILTER:
//             return Object.assign({}, prev, {
//                 visibilityFilter: action.filter
//             });
//
//         default:
//             prev;
//     }
// };


// 拆分后
const tasks = (prev = [], action) => {
    switch (action.type) {
        case ADD:
            return [
                {
                    text: action.text,
                    finished: false
                },
                ...prev
            ];

        case TOGGLE:
            return prev.map((task, index) => (
                index === action.id ? {...task, finished: !task.finished} : task
            ));

        default:
            return prev;
    }
};

const {SHOW_ALL} = VisibilityFilters;
const visibilityFilter = (prev = SHOW_ALL, action) => {
    switch (action.type) {
        case FILTER:
            return action.filter;

        default:
            return prev;
    }
};

// const tasksApp = (prev = initialState, action) => {
//     return {
//         tasks: tasks(prev.tasks, action),
//         visibilityFilter: visibilityFilter(prev.visibilityFilter, action)
//     };
// };

//可以使用redux提供的combineReducers工具类来实现上述功能
const tasksApp = combineReducers({
    visibilityFilter,
    tasks
});

export default tasksApp;