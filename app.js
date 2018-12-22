class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }
  render() {
    const { loading } = this.props;
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
const ConnectedApp = ReactRedux.connect(state => ({
  loading: state.loading,
}))(App);
// const Context = React.createContext();
// function connect(mapStateToProps) {
//   return Component => {
//     class Receiver extends React.Component {
//       componentDidMount() {
//         const { subscribe } = this.props.store;
//         this.unsubcribe = subscribe(() => this.forceUpdate());
//       }
//       componentWillUnmount() {
//         this.unsubcribe();
//       }
//       render() {
//         const { dispatch, getState } = this.props.store;
//         const state = getState();
//         const stateNeeded = mapStateToProps(state);
//         return <Component {...stateNeeded} dispatch={dispatch} />;
//       }
//     }
//     class ConnectedComponent extends React.Component {
//       render() {
//         return (
//           <Context.Consumer>
//             {store => <Receiver store={store} />}
//           </Context.Consumer>
//         );
//       }
//     }
//     return ConnectedComponent;
//   };
// }
// class Provider extends React.Component {
//   render() {
//     return (
//       <Context.Provider value={this.props.store}>
//         {this.props.children}
//       </Context.Provider>
//     );
//   }
// }
ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <ConnectedApp />
  </ReactRedux.Provider>,
  document.getElementById('app')
);
