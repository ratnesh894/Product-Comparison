import { Component } from "react";
import {Link} from "react-router-dom";
import {Jumbotron,Button} from "react-bootstrap";
class Header extends Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
           /*  <div className="container"> 
            <header role="menubar">
            <div className="row">
              <div className="col-md-4 col-md-12" id="header" tabIndex={1}>
                
                  <h1 className="logo" role="log"><i className="glyphicon glyphicon-tag" /> Mobile <span className="primary">Store</span></h1>
                  
                
                <Link to = "/compare"> <button type="button" className="btn btn-light" id="cart" data-toggle="modal" data-target="#exampleModal">
                                    <span className="glyphicon glyphicon-shopping-cart"></span>Comparison View
                                </button></Link>
              </div>
              
            </div>
            
            </header>
           
            </div> */
            
            <Jumbotron className="jumbo">
            <h1 className="display-3">Mobile Store</h1>
           
          </Jumbotron>
           
             
        );
    }
}
export default Header;