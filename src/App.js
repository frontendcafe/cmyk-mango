import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { routes } from './routes/routes';
import { RouteWithSubRoutes } from './components/RouteWithSubRoutes';
import './App.css';

function App() {
  return (
    <Router>
      <main>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </main>
    </Router>
  );
}

export default App;
