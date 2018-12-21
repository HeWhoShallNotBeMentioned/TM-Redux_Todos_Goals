class Goals extends React.Component {
  addItem = e => {
    e.preventDefault();
    const name = this.input.value;
    this.input.value = '';

    this.props.store.dispatch(
      addGoalAction({
        id: generateId(),
        name,
      })
    );
  };

  removeItem = goal => {
    this.props.store.dispatch(removeGoalAction(goal.id));

    return API.deleteGoal(goal.id).catch(() => {
      this.props.store.dispatch(addGoalAction(goal));
      alert('An error occurred. Try again.');
    });
  };

  toggleItem = id => {
    this.props.store.dispatch(toggleTodoAction(id));
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
