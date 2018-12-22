class Goals extends React.Component {
  addItem = e => {
    e.preventDefault();
    this.props.dispatch(
      handleAddGoal(this.input.value, () => (this.input.value = ''))
    );
  };
  removeItem = goal => {
    this.props.dispatch(handleDeleteGoal(goal));
  };

  toggleItem = id => {
    this.props.dispatch(toggleTodoAction(id));
  };

  render() {
    return (
      <div>
        <h1>Goal List</h1>
        <input
          type="text"
          placeholder="Add Goal"
          ref={input => (this.input = input)}
        />
        <button onClick={this.addItem}>Add Goal</button>
        <List
          items={this.props.goals}
          remove={this.removeItem}
          toggle={this.toggleItem}
        />
      </div>
    );
  }
}

class ConnectedGoals extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {store => {
          const { goals } = store.getState();

          return <Goals goals={goals} dispatch={store.dispatch} />;
        }}
      </Context.Consumer>
    );
  }
}
