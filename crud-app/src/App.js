import AllUsers from './Component/AllUsers';
import AddUser from './Component/AddUser';
import NavBar from './Component/NavBar';
import NotFound from './Component/NotFound'; 
import SearchUser from './Component/SearchUser';
import Home from './Component/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/all" component={AllUsers} />
        <Route exact path="/add" component={AddUser} />
        <Route exact path="/search" component={SearchUser} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
