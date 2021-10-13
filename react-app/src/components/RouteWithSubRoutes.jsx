import { Route } from 'react-router-dom';

export function RouteWithSubRoutes(route) {
  const { path, component: Component, routes } = route;

  return (
    <Route
      path={path}
      render={(props) => <Component {...props} routes={routes} />}
    />
  );
}
