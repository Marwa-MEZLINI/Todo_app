import { Route, Switch } from 'react';

import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Switch>
      <Route path='/' exact >
        <Home />
      </Route>
      <Route path='/about' >
        <About />
      </Route>
    </Switch>
  );
}

export default App;
