import React from 'react';
import Home from './component/page/Home';
import Createblog from './component/page/Createblog';
import {Route,Switch} from 'react-router-dom';
const App = () => {
  return (
    <Switch >
        <Route exact path = '/' component = {Home} />
        <Route exact path = '/createblog' component = {Createblog} />
    </Switch>
  );
}

export default App;
