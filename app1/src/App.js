import './App.css';
import
	{
		BrowserRouter as Router,
		Switch,
		Route,
		NavLink
	} from "react-router-dom";
import ProductsScreen from './components/screen/products';
import AddProductScreen from './components/screen/add-product';


export default function App()
{
	return (
		<Router>
			<div>
				<nav className="app-one-nav">
					<ul className="nav">
						<li className="nav-item">
							<NavLink className="nav-link" exact to="/products" activeClassName="active_url">Products</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" exact to="/products/add" activeClassName="active_url">Add product</NavLink>
						</li>
					</ul>
				</nav>
				<div className="app-route-wrapper">
					<Switch>
						<Route exact path="/products">
							<ProductsScreen />
						</Route>
						<Route exact path="/products/add">
							<AddProductScreen />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}
