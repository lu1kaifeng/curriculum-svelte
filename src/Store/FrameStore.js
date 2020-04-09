import { writable } from 'svelte/store';
import HelloWorldPage from "../Page/HelloWorldPage.svelte"
import FuckWorldPage from "../Page/FuckWorldPage.svelte"
export const FrameStore = writable({
    header : {
        title:"",
        subtitle:""
    },
    itemList : [
        {
            icon:"",
            text:"Hello World",
            component:HelloWorldPage,
            activated:true
        },
        {
            icon:"",
            text:"Fuck World",
            component:FuckWorldPage,
            activated:true
        }
    ]
});
