import { AppShell } from '@mantine/core';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Header from './component/header';
import Navbar from './component/navbar';
import PrivateRoute from './component/page-route/private';
import PublicRoute from './component/page-route/public';
import routes from './routes';

const App = () => {
  const accessToken = useSelector((state) => state.global.accessToken);

  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      header={<Header />}
      {...(accessToken && {
        navbar: <Navbar />,
      })}
    >
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
    </AppShell>
  );
};

export default App;
