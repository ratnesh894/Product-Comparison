import React from "react";
import Navbar from "react-bootstrap/Navbar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import ProdService from "../services/prodService";
import {Button} from 'react-bootstrap';
class Navbars extends React.Component {
  state = {
    query: "",
    data: [],
    filteredData: []
  };
  handleInputChange = event => {
    const query = event.target.value;

    this.setState(prevState => {
      const filteredData = prevState.data.filter(element => {
        return element.name.toLowerCase().includes(query.toLowerCase());
      });

      return {
        query,
        filteredData
      };
    });
  };

  getData=()=>{
   fetch(`http://localhost:3001/product/get`).then(response => response.json()).then(data=>{
      const {query}=this.state;
      const filteredData = data.filter(element => {
        return element.name.toLowerCase().includes(query.toLowerCase());
      });

      this.setState({
        data,
        filteredData
      });
    });
};

componentWillMount() {
  this.getData();
}
  
  
  render() {
    return (
        <>
    

<nav className="navbar navbar-danger bg-light navbar-expand-lg">
  <div className="collpase navbar-collapse">
    <ul className="navbar-nav mr-auto">

      <li className="navbar-item">
        <Link to="/" className="nav-link">Home</Link>
      </li>
      
        <li className="navbar-item">
          <Link to="/product" className="nav-link">Products</Link>
        </li>
      
    </ul>
    
  </div>
  {/* <form style={{paddingRight:'20px'}}>
          <input
            placeholder="Search for..."
             value={this.state.query}
            onChange={this.handleInputChange} 
          />
        </form> */}
         {/* <div>{this.state.filteredData.map(i =><div> <p>{i.name}</p>
        <p>{i.ram}</p>
        
        </div>
        )}</div>  */}
      <p color="success">
           <Link to="/compare"> <Button>Comparison View</Button></Link></p>
      </nav>
      
      
   </>
    )
    }
}  


export default Navbars;