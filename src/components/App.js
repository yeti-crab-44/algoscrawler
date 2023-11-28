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
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/problem/:id" element={<Problem />} />
          <Route path="/add-problem" element={<AddProblem />} />
          <Route path="/problem/:id/add-solution" element={<AddSolution />} />
        </Routes>
    <footer>
      <div id="yetiCrabs">
        <a><img src="https://static.wikia.nocookie.net/octonauts/images/0/00/Yeti_crab.png" class="crabE"/></a>
        <a><img src="https://static.wikia.nocookie.net/octonauts/images/0/00/Yeti_crab.png" class="crab"/></a>
        <a><img src="https://static.wikia.nocookie.net/octonauts/images/0/00/Yeti_crab.png" class="crabE"/></a>
        <a><img src="https://static.wikia.nocookie.net/octonauts/images/0/00/Yeti_crab.png" class="crab"/></a>
      </div> 
    </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
