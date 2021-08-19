import React from 'react';
import Home from './components/Home';
import ProjectPage from './components/ProjectPage';
import Header from './components/Header';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path='/' component={Home} />
          <Route path='/portfolio' component={ProjectPage} />
        </div>
      </BrowserRouter>
  );
}

export default App;
