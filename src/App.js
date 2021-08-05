import React from 'react';
import { Provider } from "react-redux";
import store from './store';
import Main from './components/main';

function App(props) {
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

export default App;