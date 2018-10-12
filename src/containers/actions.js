export const ADD = 'ADD';
export const TOGGLE = 'TOGGLE';
export const FILTER = 'FILTER';
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_FINISHED: 'SHOW_FINISHED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const add = text => {
    return {
        type: ADD,
        text
    };
};

export const toggle = id => {
    return {
        type: TOGGLE,
        id
    };
};

export const setVisibilityFilter = filter => {
    return {
        type: FILTER,
        filter
    };
};