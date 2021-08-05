import api from '../api';

export default {
    async postPhoto(token: any){
        try{
            const response = await api.post('api/private/picprofile/${token}');
            return response;
        }catch(err){
            console.log(err);
        }
    },

    async updateProfile(token: any){
        try{
            const response = await api.put('api/updateprofile/${token}');
            return response;
        }catch(err){
            console.log(err);
        }
    },

    async showFavList(token: any){
        try{
            const response = await api.get('api/favlist/${token}');
            return response;
        }catch(err){
            console.log(err);
        }
    },

    async showUsers(){
        try{
            const response = await api.get('api/users');
            return response;
        }catch(err){
            console.log(err);
        }
    },

    async showUser(user_Id: any){
        try{
            const response = await api.get('api/user/${user_id');
            return response;
        }catch(err){
            console.log(err);
        }
    },

    async deleteUser(token: any){
        try{
            const response = await api.delete('api/user/${token}');
            return response;
        }catch(err){
            console.log(err);
        }
    }

    
} 