// https://github.com/tastejs/todomvc/blob/gh-pages/examples/angular2/app/services/store.ts

export class Todo {

    // current state
    completed: Boolean;
    editing: Boolean;

    private _title: String;
    get title() {
        return this._title;
    }

    set title(value: String){
        this._title = value.trim();
    }

    constructor(title: String){
        this.completed = false;
        this.editing = false;
        this.title = title.trim();
    }

}

