import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom'
import { SiteHeader } from './components/persistent/SiteHeader'
import { About } from './components/persistent/About'
import { AuthForm } from './components/loggedout/AuthForm'
import { Welcome } from './components/loggedout/Welcome'
import { Home } from './components/loggedin/Home'
import { Profile } from './components/loggedin/Profile';
import { AddMovie } from './components/loggedin/AddMovie';
import { DisplayMovie } from './components/loggedin/DisplayMovie';
import { Channel } from './components/loggedin/Channel';
import { fetchPersistLogin } from './services/Utils'
import { addUser } from './actions/users'
import { connect } from 'react-redux'
import { NavContainer } from './containers/NavContainer';
import { ManageChannels } from './containers/ManageChannels';

class App extends Component {

  componentDidMount() {
    if(localStorage.token){
      fetchPersistLogin(localStorage.token)
        .then(user => {
          if(!user.message){
              this.props.dispatch(addUser(user))
            } else {
              localStorage.clear()
            }
            this.props.history.push('/')
          })
      } else {
        this.props.history.push('/')
    }
  }
  
  renderAuthForm = (routerProps) => {
    let {pathname} = routerProps.location
    if(pathname === '/signin'){
      return <AuthForm formName='Sign In'/>
    } else if(pathname === '/signup') {
      return <AuthForm formName='Sign Up'/>
    }
  }

  renderHome = () => {
    if(localStorage.token){
      return <Home/>
    } else {
      return <Welcome/>
    }
  }

  renderProfile = () => {
    if(localStorage.token){
      return <Profile/>
    }
  }

  renderMngChannels = () => {
    if(localStorage.token){
      return <ManageChannels/>
    }
  }

  renderChannels = (routerProps) => {
    let {slug} = routerProps.match.params
    let foundChannel = this.props.movie_channels.find(channel => channel.id === parseInt(slug, 10))
    if(foundChannel && localStorage.token){
      return <Channel {...foundChannel}/>
    }
  }

  renderAddMovie = () => {
    if(localStorage.token){
      return <AddMovie/>
    }
  }

  renderMovie = (routerProps) => {
    let {slug} = routerProps.match.params
    let foundMovie = this.props.movies.find(movie => movie.id === parseInt(slug, 10))
    if(foundMovie && localStorage.token){
      return <DisplayMovie {...foundMovie}/>
    }
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
            <Route path='/signin' exact render={this.renderAuthForm}/>
            <Route path='/signup' exact render={this.renderAuthForm}/>
            <Route path='/profile' exact render={this.renderProfile}/>
            <Route path='/channels' exact render={this.renderMngChannels}/>
            <Route path='/channel/:slug' exact render={this.renderChannels}/>
            <Route path='/addmovie' exact render={this.renderAddMovie}/>
            <Route path='/movie/:slug' render={this.renderMovie}/>
          </Switch>
        </main>
        <nav className="App-footer">
          <NavContainer/>
        </nav>
      </div>
    );
  }
}

export default connect(state => state)(withRouter(App));
