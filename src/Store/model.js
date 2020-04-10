import HelloWorldPage from "../Page/HelloWorldPage.svelte";

export class ListEntry{

}

export class ListItem extends ListEntry{
    constructor(icon, text,activated) {
        super();
        this.icon = icon;
        this.text = text;
        this.activated = activated;
    }
}

export class ComponentListItem extends ListItem{
    constructor(icon, text,component,activated) {
        super(icon,text,activated);
        this.component = component;
    }
}

export class CustomActionListItem extends ListItem{
    constructor(icon, text,activated,onClickListener) {
        super(icon, text,activated);
        this.onClickListener = onClickListener;
    }
}

export class ListSeparator extends ListEntry{

}

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
