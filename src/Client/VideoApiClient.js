import Axios from "./AxiosInstance";
import CourseApiClient from "./CourseApiClient";

async function postVideo(vidToken,vidFile) {
    return (await fetch('/vid/',{
        headers:{
            'x-api-key':vidToken,
            'x-vid-res':'1080P'
        },
        method:"POST",
        body:(await pFileReader(vidFile))
    })).ok
}

function pFileReader(file){
    return new Promise((resolve, reject) => {
        let fr = new FileReader();
        fr.onload = ()=>resolve(fr.result);  // CHANGE to whatever function you want which would eventually call resolve
        fr.readAsArrayBuffer(file)
    });
}

export async function uploadVid(courseId,title,file){
    let token = (await CourseApiClient.addVideo(courseId, title)).data;
    return (await postVideo(token,file)).ok;
}
