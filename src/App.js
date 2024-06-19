import logo from './logo.svg';
import './App.css';
import React from 'react'
import { data } from './data.js';
import Recipe from './pages/Recipe/index.jsx';

class  App extends React.Component {
  state = {
    recipeData: data
  }

  render(){
    const {recipeData} = this.state
    return (
      <div>
        <Recipe recipeData={recipeData} />
      </div>
    );
  }
}

export default App;
