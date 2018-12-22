class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;

    store.dispatch(handleInitialData());

    store.subscribe(() => this.forceUpdate());
  }
  render() {
    const { store } = this.props;
    const { loading } = store.getState();

    if (loading === true) {
      return <h3>Loading</h3>;
    }
    return (
      <div>
        <ConnectedTodos />
        <ConnectedGoals />
      </div>
    );
  }
}

class ConnectedApp extends React.Component {
  render() {
    return (
      <Context.Consumer>{store => <App store={store} />}</Context.Consumer>
    );
  }
}

const Context = React.createContext();

class Provider extends React.Component {
  render() {
    return (
      <Context.Provider value={this.props.store}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('app')
);
