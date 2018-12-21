class Todos extends React.Component {
  addItem = e => {
    e.preventDefault();
    return API.saveTodo(this.input.value)
      .then(todo => {
        this.props.store.dispatch(addTodoAction(todo));
        this.input.value = '';
      })
      .catch(() => alert('There was an error. Try again.'));
  };
  removeItem = todo => {
    this.props.store.dispatch(handleDeleteTodo(todo));
  };

  toggleItem = id => {
    this.props.store.dispatch(toggleTodoAction(id));
    return API.saveTodoToggle(id).catch(() => {
      this.props.store.dispatch(toggleTodoAction(id));
      alert('An error occurred. Try again.');
    });
  };

  render() {
    // refs is react feature for getting data from an uncontrolled component
    return (
      <div>
        <h1>Todo List</h1>
        <input
          type="text"
          placeholder="Add Todo"
          ref={input => (this.input = input)}
        />
        <button onClick={this.addItem}>Add Todo</button>
        <List items={this.props.todos} remove={this.removeItem} />
      </div>
    );
  }
}
