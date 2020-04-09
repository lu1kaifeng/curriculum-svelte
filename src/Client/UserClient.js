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

    static getSubjectObj(token){
        return Axios.get('/subject/info',{
            headers:{
                "x-api-key":token
            }
        })
    }

    static getSubjectPhoto(token){
        return Axios.get('/subject/photo',{
            headers:{
                "x-api-key":token
            }
        })
    }
}
