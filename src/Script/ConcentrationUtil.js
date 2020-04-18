import FaceApiClient from "../Client/FaceApiClient";
import {SubjectStore} from "../Store/SubjectStore";
let subjectPhoto;
SubjectStore.subscribe(value=>{
    subjectPhoto = value.photo
});

export async function concentrationDetect(base64) {
    try {
        let faces = (await FaceApiClient.faceExtraction(base64)).data;
        if (faces.length !== 0) {
            if (await faceComparison(base64, subjectPhoto)) {
                if ((await FaceApiClient.engagementDetect(faces[0].photoBase64)).data[0].engaged) {
                    return Status.OK;
                } else {
                    return Status.NOT_CONCENTRATED
                }
            } else {
                return Status.INVALID_IDENTITY;
            }
        } else {
            return Status.ABSENT;
        }
    }catch (e) {
        return Status.ABSENT;
    }
}

export let Status = {
    ABSENT:0,
    NOT_CONCENTRATED:1,
    INVALID_IDENTITY:2,
    OK:3
}

async function faceComparison(f1,f2) {
    let subject1 = (await FaceApiClient.identifySubject(f1)).data;
    let subject2 = (await FaceApiClient.identifySubject(f2)).data;
    return subject1.name === subject2.name;
}
