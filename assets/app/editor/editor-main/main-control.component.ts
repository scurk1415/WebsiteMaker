import { Component, OnInit, Input } from "@angular/core";
import { ControlViews, MainLayoutTypes, FormTypes } from "../../shared/enums";
import { Main, MainItem, FormItem } from "../models/main";

@Component({
    selector: 'dip-main-control',
    templateUrl: 'main-control.component.html'
})
export class MainControlComponent implements OnInit{

    @Input() main: Main;
    @Input() tmpMain: any;

    controlViews = ControlViews;
    public layoutTypes = MainLayoutTypes;
    public form_types = FormTypes;
    public form_input_types = [];

    public edit: Array<boolean> = new Array();

    public test;

    ngOnInit() {
        if(!this.main.items){
            this.main.items = [];
        }
        if(!this.main.form_items){
            this.main.form_items = [];
        }

        this.form_input_types = [
            { text: "Text", value: this.form_types.Text},
            { text: "Email", value: this.form_types.Email},
            { text: "Phone", value: this.form_types.Phone},
            { text: "Message", value: this.form_types.Message},
        ];
    }

    addItem(){
        var item = new MainItem("Title");
        this.main.items.push(item);
    }

    addFormItem(){
        var item = new FormItem("Email", this.form_types.Email, false);
        this.main.form_items.push(item);
    }

    onFormTypeSelect(event: number, item:FormItem){
        item.form_type = event;
    }

    deleteItem(item){
        var index = this.main.items.indexOf(item);
        this.main.items.splice(index,1);
    }

    onFileUploaded(file, item){
        let itemIndex = this.main.items.indexOf(item);
        this.main.items[itemIndex].image = file;
    }

    keyupHandlerFunction(value, item){
        item.description = value;
    }

}