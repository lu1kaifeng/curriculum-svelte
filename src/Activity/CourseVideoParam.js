import {ActivityStore} from "../Store/ActivityStore";
import {Intent} from "../Store/model";
import CourseVideoActivity from '../Activity/CourseVideoActivity.svelte'
import {Param} from './Param'

export class CourseVideoParam extends Param{
    constructor(course) {
        super();
        this.course = course;
    }
}

export function startActivity(param){
    ActivityStore.set(new Intent(CourseVideoActivity,param))
}
