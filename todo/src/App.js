import Home from './pages/Home.js';
import Completed from './pages/Completed.js';
import Layout from './layout/Layout.js';

import { Route, Switch } from 'react-router-dom'
import Deleted from './pages/Deleted.js';
import AddTicket from './pages/AddTicket.js';
import Todo from './pages/Todo.js';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact >
          <Home />
        </Route>
        <Route path='/add-new-ticket'>
          <AddTicket />
        </Route>
        <Route path='/todo'>
          <Todo />
        </Route>
        <Route path='/completed' >
          <Completed />
        </Route>
        <Route path='/deleted' >
          <Deleted />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
