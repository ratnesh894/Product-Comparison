import React, { Component } from "react";
import ProdService from '../services/prodService';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Button } from 'react-bootstrap';
export class Product extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [], compItems: [], filteredData: [], Samsung: false, Oppo: false
    }
    /* this.getProductById = this.getProductById.bind(this); */
    this.addToCompare = this.addToCompare.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this); 
    
  }

  componentDidMount() {
    ProdService.getProduct().then((res) => {
      this.setState({ products: res.data, filteredData: res.data })
    });
    if (localStorage.getItem('cart')) {
      this.setState({ compItems: JSON.parse(localStorage.getItem('cart')) })
    }
  }


  getProductById = (id) => {

    this.props.history.push(`/productdetail/${id}`);
  }
  addToCompare = async (p) => {
    await this.setState({ compItems: [...this.state.compItems, p] })
    localStorage.setItem('cart', JSON.stringify(this.state.compItems))
  }
  searchBar = async (e) => {
    // console.log(this.state.products)
    const a = this.state.products.filter(d => d.name.toLowerCase().includes(e.target.value))
    this.setState({ filteredData: a })
    console.log(a)
  }
  handleInputChange(e) {
    const x = this.state.products.filter(b => b.name.includes(e.target.name ))
     this.setState({ filteredData: x}) 
    /* this.state.filteredData.push(x); */
    console.log(x)
  }
 


  render() {

    return (
      <div>

        <div className="row" >
        
          <div className="col-md-2">
          <p><b>Search Product:</b>
            <input type="text" className="form-control" placeholder="Search..." onChange={e => this.searchBar(e)} tabIndex={3} /> </p></div>
           
        </div>
        <br/>
        <form style={{float:'left',backgroundColor:'lightseagreen'}} className='vl'>
        
          <h4><b>Filter by brand:</b></h4>
          <label>
            Samsung
            <input
              name="Samsung"
              type="checkbox"
              /* checked={this.state.Samsung} */
              onClick={e => this.handleInputChange(e)} />
          </label>
          <br />
          <label>
            Oppo
            <input
              name="Oppo"
              type="checkbox"
               /* checked={this.state.Oppo}  */
              onClick={e => this.handleInputChange(e)} />
          </label>
          <br/>
          <label>
            One Plus
            <input
              name="One Plus"
              type="checkbox"
               /* checked={this.state.Oppo}  */
              onClick={e => this.handleInputChange(e)} />
          </label>
        </form>
        
        <br />
       
        <section id="products" role="region">
       
          <div className="row">
            {this.state.filteredData.map(
              (prod) =>

                <div className="col-md-4">
                  <div className="thumbnail" tabIndex={8}>
                    <div className="productImage">
                      <button id="image" value={1}>
                        <img src={prod.image} alt="Galaxy_M12" role="img" title="Samsung Galaxy M12" data-toggle="tooltip" data-placement="left" /></button>
                    </div>
                    <div className="caption">
                      <h4><Link to={`productdetail/${prod.id}`}><button id="product" value={1} tabIndex={8}></button>{prod.name}</Link></h4>
                      {/* {/<h4><a href="product1.html" tabindex="8" value="1">Samsung Galaxy S5</a></h4>/} */}
                      <h5 id="product" value={1} tabIndex={8}>Rs {prod.price}</h5>
                      <p tabIndex={8}>Release: {prod.ReleaseDate}</p>
                    </div>
                    <div className="ratings">
                      <p className="pull-right">15 Reviews</p>
                      <p> <span className="glyphicon glyphicon-star" /> <span className="glyphicon glyphicon-star" /> <span className="glyphicon glyphicon-star" /> <span className="glyphicon glyphicon-star" /> <span className="glyphicon glyphicon-star" /> </p>
                      <p><button onClick={() => this.addToCompare(prod)} class="btn btn-primary add-to-cart" data-toggle="modal" data-target="#exampleModal" data-name="Microsoft Surface" data-price="399.99">Compare</button></p>
                    </div>
                  </div>
                </div>



            )}


          </div>


        </section>
      </div>
    );
  }
}
