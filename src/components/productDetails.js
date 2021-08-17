import React , { Component } from "react";
import Navbars from './Navbar'
import prodService from "../services/prodService";
import ShowProducts from "./Products";
import {Carousel} from "react-bootstrap";

class ProductDetails extends Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            id:this.props.match.params.id,
            name:'',
            image:'',
            price:'',
            battery:'',
            ram:'',
            storage:'',
            ReleaseDate:'',
            DualSim:''
        }
    }
        componentDidMount()
        {
       
         /*  console.log("hello" ,this.state.id); */
         prodService.getProductDetails(this.state.id).then((res) => 
          {
                let prod = res.data;
                console.log(prod);
                this.setState(
                  {
                    name:prod[0].name,
                    image:prod[0].image,
                    price:prod[0].price,
                    battery:prod[0].battery,
                    ram:prod[0].ram,
                    storage:prod[0].storage,
                    ReleaseDate:prod[0].ReleaseDate,
                    DualSim:prod[0].DualSim

                  })
                  console.log("Product "+JSON.stringify(prod));
          })
        }
    

    render(){
        return(
            <div>
                <Navbars/>
                <br/>
                {/* <section>
                    <div className="row">
                   
                     <div className="col-md-8">
                     <div className="row">
                      <div className="col-md-4">
                      <p style={{marginTop:'50px'}} id="imageDetail" />
                            <img src={`../../${this.state.image}`} alt={this.state.name} class="img-responsive"></img>
                            <br/>
                            <p style={{ textAlign:'center', fontSize: '30px'}}><b>{this.state.name}</b></p>
                      </div>
                      <div className="col-md-8">
                          <p>Battery:{this.state.battery}</p>
                      </div>
                      </div>
                      </div>
                          </div>
                    
                </section> */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-50"
      src={`../../${this.state.image}`}
      alt="First slide"
    />
   {/*  <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
 {/*  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item> */}
</Carousel>
                        </div>
                        <div className="col-md-7">
                            <p className="newarrival text-center">New</p>
                        <h2 style={{float:'left'}}>{this.state.name}</h2>
                        <br/>
                        <br/>
                        <img src='../../images/stars.png' className="stars"></img>
                        <br/><br/>
                        
                        <p style={{float:'left'}}><b>Price-</b>{this.state.price}</p>
                        <br/><br/>
                        <p style={{float:'left'}}><b>Battery-</b>{this.state.battery}</p>
                        <br/><br/>
                        <p style={{float:'left'}}><b>Ram Size-</b>{this.state.ram}</p>
                        <br/><br/>
                        <p style={{float:'left'}}><b>Storage-</b>{this.state.storage}</p>
                        <br/><br/>
                        <p style={{float:'left'}}><b>Dual Sim-</b>{this.state.DualSim}</p>
                        <br/><br/>
                        <p style={{float:'left'}}><b>Release Date-</b>{this.state.ReleaseDate}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductDetails;