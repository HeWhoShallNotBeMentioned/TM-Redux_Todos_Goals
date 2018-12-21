class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;

    store.subscribe(() => this.forceUpdate());
  }
  render() {
    const { store } = this.props;
    const { todos, goals } = store.getState();
    return (
      <div>
        <Todos todos={todos} store={this.props.store} />
        <Goals goals={goals} store={this.props.store} />
      </div>
    );
  }
}

ReactDOM.render(<App store={store} />, document.getElementById('app'));
