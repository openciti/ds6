import React, { Component } from 'react'
import { Link, Switch, Route, Redirect } from 'react-router-dom'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Breadcrumb from '../components/Breadcrumb'
import Aside from '../components/Aside'
import Footer from '../components/Footer'
import TwitterView from '../views/twitter'
import SourceCode from '../views/sourcecode'
import Licences from '../views/licences'
import Dashboard from '../views/Dashboard'

export default class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumb />
            <div className="container-fluid">
              <Switch>
                <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
                <Route path="/about/source" name="SourceCode" component={SourceCode}/>
                <Route path="/about/licences" name="Licences" component={Licences}/>
                <Route path="/social/twitter" name="Dashboard" component={TwitterView}/>
                <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
                <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
                <Redirect from="/" to="/dashboard"/>
              </Switch>
            </div>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}
