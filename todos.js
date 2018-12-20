class Todos extends React.Component {
  addItem = e => {
    e.preventDefault();
    const name = this.input.value;
    this.input.value = '';

    this.props.store.dispatch(
      addTodoAction({
        id: generateId(),
        name,
        complete: false,
      })
    );
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
        <List />
      </div>
    );
  }
}
