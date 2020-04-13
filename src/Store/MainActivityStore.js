import { writable } from 'svelte/store';
import HelloWorldPage from "../Page/HelloWorldPage.svelte"
import FuckWorldPage from "../Page/FuckWorldPage.svelte"
import {ComponentListItem} from "./model";
import CoursePage from "../Page/CoursePage.svelte"
export const MainActivityStore = writable({
    loading:false,
    header : {
        title:"",
        subtitle:""
    },
    itemList : [
        new ComponentListItem("", "Courses", CoursePage, true),
        new ComponentListItem("", "Hello World", HelloWorldPage, true),
        new ComponentListItem("", "Fuck World", FuckWorldPage, true)
    ]
});
