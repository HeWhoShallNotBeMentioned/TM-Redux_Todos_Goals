// {
//  type: "REMOVE_TODO",
//  id: 0
// }

// {
//   type: "TOGGLE_TODO",
//   id: 0
//  }

//  {
//    type: 'ADD_GOAL',
//    goal: {
//      id: 0,
//      name: 'Run a marathon',
//    }
//  }

//  {
//    type: 'REMOVE_GOAL',
//    id: 0
//  }

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.todo]);
    case 'REMOVE_TODO':
      return state.filter(todo => {
        return todo.id !== action.id;
      });
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id !== action.id
          ? todo
          : Object.assign({}, todo, { complete: !todo.complete })));
    default:
      return state;
  }
}

function goals(state = [], action) {
  switch (action.type) {
    case 'ADD_GOAL':
      return state.concat([action.todo]);
    case 'REMOVE_GOAL':
      return state.filter(goal => {
        return goal.id !== action.id;
      });
    default:
      return state;
  }
}

function createStore(reducer) {
  //4 parts of the store
  //1 - State
  //2 - way to get State
  //3 - way to listen for changes to State
  //4 - way to update State

  let state;
  let listeners = [];

  const getState = () => state;
  const subscribe = listener => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  };

  const dispatch = action => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  return {
    getState,
    subscribe,
    dispatch,
  };
}

const store = createStore(todos);
store.subscribe(() => {
  console.log('the new state is: ', store.getState());
});
store.dispatch({
  type: 'ADD_TODO',
  todo: {
    id: 0,
    name: 'Learn Redux',
    complete: false,
  },
});
