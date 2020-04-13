import { writable } from 'svelte/store';
import {Intent, Subject} from "./model";
import MainActivity from '../Nav/MainActivity.svelte'


export const ActivityStore = writable(new Intent(null));
