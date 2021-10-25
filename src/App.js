import './App.scss';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import AdminPanel from './pages/admin/login';
const App =()=> {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
    <Route path="/" exact component={AdminPanel} />
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
