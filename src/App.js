import Login from './Login';
import Register from './Register'
import './App.css';
import { Router, Route,browserHistory } from 'react-router';
import FoodApp from './Component/FoodApp'
import FoodItems from './Component/FoodItems';
import Checkout from './Component/Checkout';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router history={browserHistory}>  
 
    <Route path="/" component={Login} />
    <Route path={"Login"} component={Login} />
    <Route path={"Register"} component={Register}/>
    <Route path="/Component/FoodApp" component={FoodApp}/>
    <Route path="/Component/FoodItems" component={FoodItems}/> 
    <Route path="/Component/Checkout" component={Checkout} />    
    </Router>    
     
    </div>
  );
}

export default App;
