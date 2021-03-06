function generateId() {
  return (
    Math.random()
      .toString(36)
      .substring(2) + new Date().getTime().toString(36)
  );
}

//download via NPM
// function createStore(reducer) {
//   //4 parts of the store
//   //1 - State
//   //2 - way to get State
//   //3 - way to listen for changes to State
//   //4 - way to update State

//   let state;
//   let listeners = [];

//   const getState = () => state;

//   const subscribe = listener => {
//     listeners.push(listener);
//     return () => {
//       listeners = listeners.filter(l => l !== listener);
//     };
//   };

//   const dispatch = action => {
//     state = reducer(state, action);
//     listeners.forEach(listener => listener());
//   };

//   return {
//     getState,
//     subscribe,
//     dispatch,
//   };
//}
//application code we write
//constants

//action creators

// const thunk = store => next => action => {
//   if (typeof action === 'function') {
//     return action(store.dispatch);
//   }

//   return next(action);
// };

// function rootReducer(state = {}, action) {
//   return {
//     todos: todos(state.todos, action),
//     goals: goals(state.goals, action),
//   };
// }

const store = Redux.createStore(
  Redux.combineReducers({
    todos,
    goals,
    loading,
  }),
  Redux.applyMiddleware(ReduxThunk.default, checker, logger)
);

// store.subscribe(() => {
//   const { goals, todos } = store.getState();

//   document.getElementById('goals').innerHTML = '';
//   document.getElementById('todos').innerHTML = '';

//   goals.forEach(addGoalToDOM);
//   todos.forEach(addTodoToDOM);
// });

// function addTodo() {
//   const input = document.getElementById('todo');
//   const name = input.value;
//   input.value = '';

//   store.dispatch(
//     addTodoAction({
//       id: generateId(),
//       name: name,
//       complete: false,
//     })
//   );
// }

// function addGoal() {
//   const input = document.getElementById('goal');
//   const name = input.value;
//   input.value = '';

//   store.dispatch(
//     addGoalAction({
//       id: generateId(),
//       name: name,
//     })
//   );
// }

// function createRemoveButton(onClick) {
//   const removeBtn = document.createElement('button');
//   removeBtn.innerHTML = 'X';
//   removeBtn.addEventListener('click', onClick);
//   return removeBtn;
// }

// function addTodoToDOM(todo) {
//   const node = document.createElement('li');
//   const text = document.createTextNode(todo.name);

//   const removeBtn = createRemoveButton(() => {
//     store.dispatch(removeTodoAction(todo.id));
//   });

//   node.appendChild(text);
//   node.appendChild(removeBtn);

//   node.style.textDecoration = todo.complete ? 'line-through' : 'none';
//   node.addEventListener('click', () => {
//     store.dispatch(toggleTodoAction(todo.id));
//   });

//   document.getElementById('todos').appendChild(node);
// }

// function addGoalToDOM(goal) {
//   const node = document.createElement('li');
//   const text = document.createTextNode(goal.name);
//   const removeBtn = createRemoveButton(() => {
//     store.dispatch(removeGoalAction(goal.id));
//   });

//   node.appendChild(text);
//   node.appendChild(removeBtn);

//   document.getElementById('goals').appendChild(node);
// }

// document.getElementById('todoBtn').addEventListener('click', addTodo);
// document.getElementById('goalBtn').addEventListener('click', addGoal);
