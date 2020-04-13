import {ActivityStore} from "../Store/ActivityStore";
import {Intent} from "../Store/model";
import MainActivity from "../Nav/MainActivity.svelte";

export function startActivity(){
    ActivityStore.set(new Intent(MainActivity,null))
}
