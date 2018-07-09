import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'normalize.css';
import 'styles/main.styl';

import Landing from './pages/Landing';
import Loader from './pages/Loader';
import BetterYet from './pages/BetterYet';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: true
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ready: true}), 2000);
  }

  render() {
    if(!this.state.ready) return <Loader />;

    return (
      <BrowserRouter>
        <div className="root">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/better-yet" component={BetterYet} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
