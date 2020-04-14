import Axios from "./AxiosInstance";

export default class CourseApiClient{
    static getAttendance(){
        return Axios.get('/course/attendance',{

        })
    }
    static getAllCourse(){
        return Axios.get('/course/all',{
        })
    }
    static attendCourse(courseId){
        return Axios.post('/course/attendance',null,{
            params:{
                "courseId":courseId
            }
        })
    }

    static newCourse(name,teacherId,classroom,weekday,timeHr,timeMin,durationHr){
        return Axios.post('/course',null,{
            params:{
                "name":name,
                "teacherId":teacherId,
                "classroom":classroom,
                "weekday":weekday,
                "timeHr":timeHr,
                "timeMin":timeMin,
                "durationHr":durationHr
            }
        })
    }

    static addVideo(courseId,title){
        return Axios.post('/course/'+courseId+'/video/'+title,null,{
        })
    }

    static delVideo(courseId,title){
        return Axios.delete('/course/'+courseId+'/video/'+title,{
        })
    }
}
