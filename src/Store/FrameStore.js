import { writable } from 'svelte/store';
import HelloWorldPage from "../Page/HelloWorldPage.svelte"
import FuckWorldPage from "../Page/FuckWorldPage.svelte"
import {ComponentListItem} from "./model";
export const FrameStore = writable({
    header : {
        title:"",
        subtitle:""
    },
    itemList : [
        new ComponentListItem("", "Hello World", HelloWorldPage, true),
        new ComponentListItem("", "Fuck World", FuckWorldPage, true)
    ]
});
