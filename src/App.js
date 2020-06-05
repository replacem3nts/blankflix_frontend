import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom'
import { SiteHeader } from './components/persistent/SiteHeader'
import { SiteNav } from './components/persistent/SiteNav'
import { About } from './components/persistent/About'
import { AuthForm } from './components/loggedout/AuthForm'

class App extends Component {
  
  renderAuthForm = (routerProps) => {
    let {pathname} = routerProps.location
    if(pathname === '/signin'){
      return <AuthForm formName='Sign In'/>
    } else if(pathname === '/signup') {
      return <AuthForm formName='Sign Up'/>
    }
  }

  renderHome = () => {

  }

  renderProfile = () => {

  }

  renderAddMovie = () => {

  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <SiteHeader/>
        </header>
        <main className="App-main">
          <Switch>
            <Route path='/' exact render={this.renderHome}/>
            <Route path='/about' exact component={About}/>
            <Route path='/signin' exact component={this.renderAuthForm}/>
            <Route path='/signup' exact component={this.renderAuthForm}/>
            <Route path='/profile' exact component={this.renderProfile}/>
            <Route path='/addmovie' exact component={this.renderAddMovie}/>
          </Switch>
        </main>
        <nav>
          <SiteNav/>
        </nav>
      </div>
    );
  }
}

export default withRouter(App);
