import api from '../api';

export default {
    async addComment(token: any){
        try{
            const response = await api.post('api/addcomment/${token}');
            return response;
        }catch(err){
            console.log;
        }
    },

    async deletComment(token: any){
        try{
            const response = await api.delete('api/deletecomment/${token}');
            return response;
        }catch(err){
            console.log;
        }
    },

    async showComments(){
        try{
            const response = await api.get('api/comments');
            return response;
        }catch{
            console.log;
        }
    },

    async showComment(user_Id: any){
        try{
            const response = await api.get('api/comment/${token}');
            return response;
        }catch(err){
            console.log;
        }
    }

//falta o ADMIN  
}