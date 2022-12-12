import Home from './pages/Home.js';
import About from './pages/About.js';
import Layout from './layout/Layout.js';

import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact >
          <Home />
        </Route>
        <Route path='/about' >
          <About />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
