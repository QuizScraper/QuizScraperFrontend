import React, {Component} from 'react';
import {render} from 'react-dom';

import NavbarTop from './Navbar'

class App extends Component {
  render() {
    return (
      <div id="app">
        <NavbarTop />

        <div class="jumbotron" id="home-jumbotron">
          <div class="container" id="home-jumbotron-container">
            <h2>Welcome to QuizScraper!</h2>
            <p>An online platform for turning informational websites into quizzes.</p>
            <br/>
            <div class="input-group" id="subject-select-home">
              <span class="input-group-addon" id="subject-addon1">Quiz me on: </span>
              <input type="text" class="form-control" placeholder="Subject" aria-describedby="subject-addon1" id="searchfield"/>
            </div>
            <div class="list-group" id="search-suggest"></div>
          </div>
        </div>

        <div class="container" id="topic-container"> </div>
        
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
