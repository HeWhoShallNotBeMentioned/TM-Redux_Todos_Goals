class Todos extends React.Component {
  addItem = e => {
    e.preventDefault();
    this.props.store.dispatch(
      handleAddTodo(this.input.value, () => (this.input.value = ''))
    );
  };
  removeItem = todo => {
    this.props.store.dispatch(handleDeleteTodo(todo));
  };

  toggleItem = id => {
    this.props.store.dispatch(handleToggle(id));
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
