class Todos extends React.Component {
  addItem = e => {
    e.preventDefault();
    this.props.dispatch(
      handleAddTodo(this.input.value, () => (this.input.value = ''))
    );
  };
  removeItem = todo => {
    this.props.dispatch(handleDeleteTodo(todo));
  };

  toggleItem = id => {
    this.props.dispatch(handleToggle(id));
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
        <List
          toggle={this.toggleItem}
          items={this.props.todos}
          remove={this.removeItem}
        />
      </div>
    );
  }
}

class ConnectedTodos extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {store => {
          const { todos } = store.getState();

          return <Todos todos={todos} dispatch={store.dispatch} />;
        }}
      </Context.Consumer>
    );
  }
}
