import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Brochure from './containers/brochure/Brochure';
import Navigation from './components/common/navigation/Navigation';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {

  render() {
    return (
        <div>
            <Navigation brand={({href: "/brochure", text: "Brochure"})}/>
            <BrowserRouter>
                <Switch>
                    <Route path="/brochure" exact={true} component={Brochure}/>
                    <Route path="/brochure/:id" component={Brochure}/>
                    <Redirect from="/" to="/brochure"/>
                </Switch>
            </BrowserRouter>
        </div>
    );
  }
}

export default App;
