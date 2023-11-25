import React from 'react';
import ReactDOM from 'react-dom';
import { store } from '../app/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../stylesheets/styles.scss';

import Home from '../pages/Home';
import Problem from '../pages/Problem';
import AddProblem from '../pages/AddProblem';
import AddSolution from '../pages/AddSolution';
import Header from '../components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <div className='container'>
        <Header />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/problem/1' element={<Problem />} />
          <Route path='/add-problem' element={<AddProblem />} />
          <Route path='/add-solution' element={<AddSolution />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
