class App extends React.Component {
  render() {
    return (
      <div>
        <Todos store={this.props.store} />
        <Goals />
      </div>
    );
  }
}

ReactDOM.render(<App store={store} />, document.getElementById('app'));
