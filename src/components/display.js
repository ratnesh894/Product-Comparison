import { Component } from "react";
import Navbars from "./Navbar"
import ShowProducts from "./Products";
import {Product} from "./ShowProduct";
import Headers from "./header";

export class ProductDisplay extends Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <div>
                <Headers/>
                <Navbars/>
                
                <Product/>
            </div>
        );
    }
}
