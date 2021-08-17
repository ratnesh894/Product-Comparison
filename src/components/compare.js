import React, { Component } from 'react';
import Navbar from './Navbar';

class Compare extends Component {
constructor(props) {
    super(props);
    this.state = { compItems: [] };
    this.removeItemLocal = this.removeItemLocal.bind(this);
  }
  componentDidMount(){
    this.setState({compItems: JSON.parse(localStorage.getItem('cart'))})
  }
  removeItemLocal= async(id)=>{
    
    await  this.setState({compItems:this.state.compItems.filter((Item)=> Item.id !== id)})
      if(this.state.compItems.length ===0)
      {
        localStorage.removeItem('cart');
        return true;
      }
      else
      {
        localStorage.setItem('cart',JSON.stringify(this.state.compItems))
      }
      console.log(this.state.compItems);
    //localStorage.setItem('cart',this.state.cartItems);
      //localStorage.setItem('cart',JSON.stringify(this.state.cartItems))
  }
  render() {
    console.log("Comparison", this.state.compItems);
    if(this.state.compItems ===null)
    {
     return <div className ="text-center text-danger"> <h3>Nothing to Compare!</h3></div>;
    }
    else{
    
        return (
          <div>
             <Navbar/>
          <div className="modal-body">
           
            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th tabIndex={1}><a href="#">Product Name</a></th>
                    {/* <th tabIndex={1}><a href="#">Product Quantity</a></th> */}
                    <th tabIndex={1}>Ram Size</th>
                    <th tabIndex={1}>Battery</th>
                    <th tabIndex={1}>Storage</th>
                    <th tabIndex={1}>Dual Sim</th>
                    <th tabIndex={1}>Card Slot</th>
                    <th tabIndex={1}>Remove</th>
                  </tr>
                </thead>
                <tbody id="show-cart">
                  {
                    
                    this.state.compItems.map(
                      items =>{ return(
                        // {console.log(items)}
                        <tr key={items.id} >
                          <td>{items.name}</td>
                          {/* <td>{items.Quantity}</td> */}
                          <td>{items.ram}</td>
                          <td>{items.battery}</td>
                          <td>{items.storage}</td>
                          <td>{items.DualSim}</td>
                          <td>{items.cardslot}</td>
    
                          <td>
                            <button onClick={()=>{this.removeItemLocal(items.id)}}  className="btn btn-info btn-sm" >Remove</button>
    
                          </td>
                        </tr>
                      
                       ) }
                    )
                    
                  }
                        
    
        
                </tbody>
              </table>
              {/* <p tabIndex={1}>Total Cost:<span id="total-cart" /></p> */}
            </div>
          </div>
          </div>
        );}
      }
    
}
    export default Compare;