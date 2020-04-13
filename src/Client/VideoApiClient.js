import Axios from "./AxiosInstance";

export class VideoApiClient {
    static upload(vidFile,token){
        let file = new Blob([vidFile], { type: 'video/mp4' });
        return Axios.post('/vid/vid',file,{
            headers:{
                "x-api-key":token,
                "content-type": file.type
            }
        })
    }
}
