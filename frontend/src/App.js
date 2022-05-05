import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './components/Header'
import BaseRouter from './Routes';

class App extends React.Component {
    render() {
      return (
        <div >
          <Router>
            <Header/>
            <BaseRouter />
            
          </Router>
        </div>
      );
    }
  }
  
  export default App;
  
