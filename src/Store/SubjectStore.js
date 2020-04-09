import { writable } from 'svelte/store';

export class Subject{
    constructor(token,subject,photo) {
        this.token = token;
        this.subject = subject;
        this.photo = photo;
    }
    static load(){
        return JSON.parse(window.localStorage.getItem("Subject"))
    }
    static persist(subject){
        Subject.clear();
        window.localStorage.setItem("Subject",JSON.stringify(subject))
    }
    static clear(){
        window.localStorage.removeItem("Subject");
    }
}

function createSubjectStore() {
    const { subscribe, set } = writable(Subject.load());
    return {
        subscribe,
        persist(subject) {
            set(subject);
            Subject.persist(subject)
        },
        clear(){
            set(null);
            Subject.clear()
        }
    }
}

export const SubjectStore = createSubjectStore();






