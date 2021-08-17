import axios from 'axios';
const url='http://localhost:3001';

class ProdService
{
    getProduct()
    {
        return axios.get(`${url}/product/get`);
    }

    getProductDetails(id)
    {
        return axios.get(`${url}/product/${id}`);
    }
    /* getAccountInfo()
    {
        return axios.get(`${url}/account`);
    }
    getAccountDetails(email)
    {
        return axios.get(`${url}/user/${email}`);
    } */
    // updateAccountDetails(email)
    // {
    //     return axios.put(`${url}/user/${email}`);
    // }
    
}
export default new ProdService();