import Axios from "./AxiosInstance";

export default class UserClient{
    static getToken(userName,password){
        return Axios.get('/subject/logIn',{
            params:{
                name:userName,
                password:password
            }
        })
    }

    static getSubjectObj(){
        return Axios.get('/subject/info',{

        })
    }

    static getSubjectPhoto(){
        return Axios.get('/subject/photo',{
        })
    }
}
