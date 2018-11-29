import ReactGA from 'react-ga';

import React, { Component } from 'react';

import NavBar from './components/NavBar';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
// import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Routes from './routes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choices: ["Decaf", "Caffeinated"],
      info: ["Description of decaf", "Description of Caffeine"],
      text: {
        question1: "Looking to cozy up and chill, or want to get your blood pumping? Ehem, we mean, do you want decaf or caffeinated coffee?!",
        question2: "Now then, do you prefer something casual, or perhaps a bit more adventurous? For real, get your mind out of the gutter.",
        question3: "Great, now that your mind's back on coffee, which of these flavors do you find most appealing?",
        result: "Yay! Here are your potential SoulMates. Enjoy your first date ;) "
      },
      caffeine: "caffeine",
      collectionHandle: "none",
      tag: "none"
    }
    ReactGA.initialize('UA-129570756-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  setCaffeine = (caffeineToSet) => {
    console.log(`setCaffeine(${caffeineToSet})`);
    this.setState({ caffeine: caffeineToSet});
  }

  setCollection = (collectionHandleToSet) => {
    console.log(`setCollection(${collectionHandleToSet})`);
    this.setState({ collectionHandle: collectionHandleToSet});
  }

  setTag = (tagToSet) => {
    console.log(`setTag(${tagToSet})`);
    this.setState({ tag: tagToSet});
  }


  render() {
    return (
      <div>
        <Router>
          <div>
        <NavBar />
        <Route 
            exact path='/login' component={Login} />
        <Route 
            exact path='/register' component={Register} />
        <Route 
            exact path='/profile' component={Profile} />

        <Routes
          choices={this.state.choices}
          info={this.state.choices}
          text={this.state.text}
          caffeine={this.state.caffeine}
          setCaffeine={this.setCaffeine}
          collection={this.state.collectionHandle}
          setCollection={this.setCollection}
          tag={this.state.tag}
          setTag={this.setTag}
        />
            </div>
        </Router>
     
        {/* <Footer /> */}
       
        
      </div>
  
    );
  }
}

export default App;