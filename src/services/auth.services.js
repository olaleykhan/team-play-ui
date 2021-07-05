// import { categoryData } from "../demo-data/vendorCategory";
// import { apiData } from "../demo-data/apiData";

import axios from '../axios/axios';


export default class AuthService {
    constructor() {
        // this.vendorCategory = categoryData;
        this.axios = axios
    }

    async sendSignUpData (data){

        const delayMe = (data)=>{
            setTimeout(() => {
                return data                
            }, 1000);
        }
        try {
            console.log(data)
             const msg = await delayMe("sign up successfull")
            return msg;

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
            console.log(result);
            return result;
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

