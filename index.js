
{
 type: "REMOVE_TODO",
 id: 0
}

{
  type: "TOGGLE_TODO",
  id: 0
 }

 {
   type: 'ADD_GOAL',
   goal: {
     id: 0,
     name: 'Run a marathon',
   }
 }

 {
   type: 'REMOVE_GOAL',
   id: 0
 }

 function todos (state = [], action) {
   if (action.type === 'ADD_TODO'){
     return state.concat([action.todo])
   }

   return state
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

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener())

  }

  return {
    getState,
    subscribe,
    dispatch
  };
}

const store = createStore(todos);
store.dispatch({
  type: 'ADD_TODO',
  todo: {
    id:0,
    name: 'Learn Redux',
    complete: false
  }
})
