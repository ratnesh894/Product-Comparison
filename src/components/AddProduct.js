
    

import React from'react';
import {​​​​​​​​ useState }​​​​​​​​ from"react";
import Axios from'axios';
 
function AddProduct() {​​​​​​​​
const [name, setName] = useState("");
const [storage, setStorage] = useState("");

const [RAM, setRAM] = useState("");
const [sim_type, setST] = useState("");
const [card_slot, setCS] = useState("");

const [image, setImage] = useState("");


const [newMessage, setNewMessage] = useState();

const [productList, setProductList] = useState([]);
constaddProd = () => {​​​​​​​​
Axios.post("http://localhost:8081/add", {​​​​​​​​
name:name,
storage:storage,
sim_type:sim_type,
card_slot:card_slot,
RAM:RAM,
image:image

        }​​​​​​​​).then(() => {​​​​​​​​
setProductList([
            ...productList,
            {​​​​​​​​
name:name,
storage:storage,
SimType:SimType,
cardslot:cardslot,
ram:ram,
/* image:image */
            }​​​​​​​​
          ]);
setNewMessage('added successfully')
        }​​​​​​​​);
      }​​​​​​​​;




    

    return (
        <div>
            <div className="information">
        <label>name:</label>
        <input
          type="text"
          onChange={​​​​​​​​​(event) => {​​​​​​​​​
            setName(event.target.value);
          }​​​​​​​​​}​​​​​​​​​
        />
      <br/>
      <br/>
      <label>storage:</label>
        <input
          type="text"
          onChange={​​​​​​​​​(event) => {​​​​​​​​​
            setStorage(event.target.value);
          }​​​​​​​​​}​​​​​​​​​
        />
        <br/>
        <br/>
        <label>sim_type:</label>
        <input
          type="text"
          onChange={​​​​​​​​​(event) => {​​​​​​​​​
            setST(event.target.value);
          }​​​​​​​​​}​​​​​​​​​
        />
        <br/>
        <br/>
        <label>card_slot:</label>
        <input
          type="text"
          onChange={​​​​​​​​​(event) => {​​​​​​​​​
            setCS(event.target.value);
          }​​​​​​​​​}​​​​​​​​​
        />
        <br/>
        <br/>
         <label>RAM:</label>
        <input
          type="text"
          onChange={​​​​​​​​​(event) => {​​​​​​​​​
            setRAM(event.target.value);
          }​​​​​​​​​}​​​​​​​​​
        />
        <br/>
        <br/>

        <label>image:</label>
        <input
          type="text"
          onChange={​​​​​​​​​(event) => {​​​​​​​​​
            setImage(event.target.value);
          }​​​​​​​​​}​​​​​​​​​
        />
        <br/>
        <br/>
        <button onClick={​​​​​​​​​addProd}​​​​​​​​​>Add Product</button>
        <br/>
        <br/>
        <span>{​​​​​​​​​newMessage}​​​​​​​​​</span>
      </div> 
        </div>
    )
}​​​​​​​​​
 
export default AddProduct;

