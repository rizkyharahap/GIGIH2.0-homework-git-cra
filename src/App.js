import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './component/page-route/private';
import PublicRoute from './component/page-route/public';
import { store } from './redux/store';
import routes from './routes';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          {routes.map(({ type, ...route }) => {
            switch (type) {
              case 'public':
                return <PublicRoute key={route.path} {...route} />;
              case 'private':
                return <PrivateRoute key={route.path} {...route} />;
              default:
                return <Route key={route.path} {...route} />;
            }
          })}
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
