import React from 'react';
import ReactDOM from 'react-dom';
import { store } from '../app/store';
import { Provider } from 'react-redux';
import '../stylesheets/styles.scss';

const App = () => {
  return <div>I am inside App.js!Rose!!</div>;

};
// previous 3 lines replaced by ReactDOM.render block

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

export default App;
