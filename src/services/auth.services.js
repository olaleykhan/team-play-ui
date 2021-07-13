// import { categoryData } from "../demo-data/vendorCategory";
// import { apiData } from "../demo-data/apiData";

import axios from '../axios/axios';


export default class AuthService {
    constructor() {
        // this.vendorCategory = categoryData;
        this.axios = axios
    }

    delayMe = (i)=>{
        setTimeout(() => {
           const  x= i
            return x                
        }, 1000);
    }

    async sendSignUpData (data){

       
        try {
            // console.log(ndata)
            
            //  const msg = await this.delayMe(data)
             axios.post('/users.json', data)
            return "success";

        } catch(error){
            console.log(error)
            return("failed tp sign up. please try again.")
        }
    }


    async getVendorCategories() {
        try {

            let result = await this.vendorCategory;
            // return result;
          
            return Promise.resolve(result);
            // return Promise.resolve(result)
            // console.log(result);
            // return result;
        } catch (error) {
            return Promise.reject(error)
        }


    }

    async getAllVendorsByCategory(category) {
        try {
            let result = await this.vendorData;
            return Promise.resolve(result)

        } catch (error) {
            return Promise.reject(error)
        }
    }
}

