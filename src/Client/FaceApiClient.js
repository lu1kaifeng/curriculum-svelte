import Axios from "./AxiosInstance";
export default class FaceApiClient{
    static faceExtraction(pic){
        return Axios.post('/face/extraction',pic,{
            headers: { 'Content-Type': 'text/plain' }
        })
    }

    static engagementDetect(faces){
        return Axios.post('/engagement/detect',faces,{
        });
    }
    static identifySubject(photoBase64){
        return Axios.post('/subject/identify',photoBase64,{
            headers: { 'Content-Type': 'text/plain' }
        })
    }
}
