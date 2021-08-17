import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { DataGrid} from '@material-ui/data-grid';

function ShowProducts(){

    const [productData, setProductData] = useState([]);
    const [selectedRows, setSelectedRows] = useState([])
    

    const getProduct = () => {
        Axios.get("http://localhost:3001/product/get").then((response) => {
            setProductData(response.data);
        });
    };
    useEffect(() => {
        getProduct()
    }, [getProduct]);


const columns = [
    { field: 'id', headerName: 'id', width: 90 },
    { field: 'name', headerName: 'Name', width: 300 },
    {
        field: 'ReleaseDate',
        headerName: 'Release',
        width: 300,
        editable: true,

    },
    {
        field: 'ram',
        headerName: 'Ram Size',
        width: 300,
    },
     /* {
        field:'image',
        headerName:'Images',
        width:500,
    }  */
]
const [select, setSelection] = React.useState([]);

return(
    <div style={{ height: 200, width: '100%' }}>
          
            <h1>Product Details</h1>

            <DataGrid
                rows={productData}
                columns={columns}
                pageSize={5}
                checkboxSelection
                hideFooterPagination
                  onRowSelected={(e) => select.push(e.data)}   
                 /* onSelectionModelChange={(newSelection) => {
                     setSelection(newSelection.rows); }}  */
                    
            />
            <h1 style={{paddingTop:'10px'}}>Comparison Table</h1>
            <table className="table">
                <thead>
    <tr>
      <th scope="col">Model Name</th>
       <th style={{width:'50px'}}>Image</th> 
      <th scope="col">Ram Size</th>
      <th scope="col">Storage</th>
      <th scope="col">Battery</th>
      <th scope="col">Dual Sim</th>
      
    </tr>
  </thead>
  </table>
            {select? select.map((val) => {return (
            <table className="table table-striped"><tbody>
                <tr>
            <td className="table-primary">{val.name}</td>
             <td><img className="table-primary" src={val.image}/></td> 
            <td className="table-primary">{val.ram}</td>
            <td className="table-primary">{val.storage}</td>
            <td className="table-primary">{val.battery}</td>
            <td className="table-primary">{val.DualSim}</td>
            </tr>
           </tbody></table>)}):null}
            </div>
);

}
export default ShowProducts;