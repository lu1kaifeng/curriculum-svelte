import {writable} from "svelte/store";
import HelloWorldPage from "../Page/HelloWorldPage.svelte";
import FuckWorldPage from "../Page/FuckWorldPage.svelte";
import {ComponentListItem, CustomActionListItem, ListSeparator} from "./model";
import {SubjectStore} from "./SubjectStore";


export const AvatarStore = writable({
    itemList:[new ListSeparator(),new CustomActionListItem("delete","Log Out",true,()=>{SubjectStore.clear()})]
});
