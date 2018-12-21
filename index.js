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
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const ADD_GOAL = 'ADD_GOAL';
const REMOVE_GOAL = 'REMOVE_GOAL';

//action creators
function addTodoAction(todo) {
  return {
    type: ADD_TODO,
    todo: todo,
  };
}

function removeTodoAction(todoId) {
  return {
    type: REMOVE_TODO,
    id: todoId,
  };
}

function toggleTodoAction(todoId) {
  return {
    type: TOGGLE_TODO,
    id: todoId,
  };
}

function addGoalAction(goal) {
  return {
    type: ADD_GOAL,
    goal: goal,
  };
}

function removeGoalAction(goalId) {
  return {
    type: REMOVE_GOAL,
    id: goalId,
  };
}

const checker = store => next => action => {
  if (
    action.type === ADD_TODO &&
    action.todo.name.toLowerCase().indexOf('bitcoin') !== -1
  ) {
    return alert("Nope. That's a bad idea.");
  }
  if (
    action.type === ADD_GOAL &&
    action.goal.name.toLowerCase().indexOf('bitcoin') !== -1
  ) {
    return alert("Nope. That's a bad idea.");
  }
  return next(action);
};

const logger = store => next => action => {
  console.group(action.type);
  console.log('The action: ', action);
  const result = next(action);
  console.log('The new state: ', store.getState());
  console.groupEnd();
  return result;
};

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat([action.todo]);
    case REMOVE_TODO:
      return state.filter(todo => {
        return todo.id !== action.id;
      });
    case TOGGLE_TODO:
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
    case ADD_GOAL:
      return state.concat([action.goal]);
    case REMOVE_GOAL:
      return state.filter(goal => {
        return goal.id !== action.id;
      });
    default:
      return state;
  }
}

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
  }),
  Redux.applyMiddleware(checker, logger)
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
