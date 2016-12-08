import { Component, OnInit, Input } from "@angular/core";
import { ControlViews } from "../../shared/enums";
import { Main, MainItem } from "../models/main";

@Component({
    selector: 'dip-main-control',
    templateUrl: 'main-control.component.html'
})
export class MainControlComponent implements OnInit{

    @Input() main: Main;
    @Input() tmpMain: any;
    controlViews = ControlViews;

    public edit: Array<boolean> = new Array();

    public test;

    ngOnInit() {
        if(!this.main.items){
            this.main.items = [];
        }
    }

    addItem(){
        var item = new MainItem("Title");
        this.main.items.push(item);
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