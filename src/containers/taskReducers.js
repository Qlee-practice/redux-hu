export const reducers = (prev, action) => {
  switch (action.type) {
    case 'create':
      return {tasks: [{text: action.text, id: action.id, finished: false}, ...prev.tasks]};

    case 'toggle':
      return {
        tasks: prev.tasks.map(task => (
            task.id === action.id ? {...task, finished: !task.finished} : task
        ))
      };

    default:
      return prev;
  }
};