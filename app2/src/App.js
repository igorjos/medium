import './App.css';
import
	{
		BrowserRouter as Router,
		Switch,
		Route,
		NavLink
	} from "react-router-dom";
import OrdersScreen from './components/screen/orders';
import SingleOrderScreen from './components/screen/single-order';

export default function App()
  {
    return (
      <Router>
        <div>
          <nav className="app-two-nav">
            <ul className="nav">
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/orders" activeClassName="active_url">Orders</NavLink>
              </li>
            </ul>
          </nav>
          <div className="app-route-wrapper">
            <Switch>
              <Route exact path="/orders">
                <OrdersScreen />
              </Route>
              <Route exact path="/order/:id">
                <SingleOrderScreen />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }