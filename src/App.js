import logo from './logo.svg';
import './App.css'
import { BrowserRouter as Router, Route, Switch  ,Redirect } from 'react-router-dom';
import Compare from './components/compare';
import Navbar from './components/Navbar';
import {ProductDisplay} from './components/display';
import ProductDetails from './components/productDetails';

function App() {
  return (
    <div className="App">
     {/*  <ShowProducts/> */}
     
     <Router>
    
       <Switch>
       <Route path="/product" component={ProductDisplay}></Route>
       <Route path="/compare" component={Compare}>
              </Route> 
              <Route path="/productdetail/:id" component={ProductDetails}></Route>

       </Switch>
     </Router>

    </div>
  );
}

export default App;
