function createStore() {
  //4 parts of the store
  //1 - State
  //2 - way to get State
  //3 - way to listen for changes to State
  //4 - way to update State

  let state;

  const getState = () => state;

  return {
    getState,
  };
}
