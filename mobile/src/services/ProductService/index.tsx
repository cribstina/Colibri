import api from "../api";

export default {
    async showProducts(){
        try{
            const response = await api.get('api/');
            return response;
        }catch(err){
            console.log;
        }
    },

    async showProduct(product_Id: any){
        try{
            const response = await api.get('api//${product_Id}');
            return response;
        }catch(err){
            console.log;
        }
    },

    async showProductByCategory(product_Id: any){
        try{
            const response = await api.get('api//${product_Id}');
            return response;
        }catch(err){
            console.log;
        }
    },

    async postProduct(token: any){
        try{
            const response = await api.post('api//${token}');
            return response;
        }catch(err){
            console.log;
        }
    },

    async editPostProduct(token: any){
        try{
            const response = await api.put('api//${token}');
            return response;
        }catch(err){
            console.log;
        }

    },

    async deletePostProduct(product_Id: any){
        try{
            const response = await api.delete('api//${product_Id');
            return response;
        }catch(err){
            console.log;
        }
    },

    async addProductCart(token: any){
        try{
            const response = await api.put('api//${token}')
        }
    }
}