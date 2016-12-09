import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SelectListItem } from "./select-list-item";

@Component({
    selector: 'dip-combobox',
    templateUrl: 'combobox.component.html',
    styleUrls: ['combobox.component.css']
})
export class ComboboxComponent implements OnInit {
    @Input() items: Array<SelectListItem>;
    @Input() selectedItem: string = "";
    @Input() cbStyle: string;
    @Input() label: string;
    @Output() selected = new EventEmitter();

    displayed_item: SelectListItem;
    open: boolean = false;

    ngOnInit() {
        this.changeSelectedText(this.selectedItem);
    }

    // emit selected value
    selectItem(value){
        this.open = false;
        this.selectedItem = value;
        this.selected.emit(this.selectedItem);
        this.changeSelectedText(value);
    }

    // open/close options
    onOpen(){
        this.open = !this.open;
    }

    //get selected item
    changeSelectedText(value: string = ""){
        this.displayed_item = this.items.find(function(item) { return item.value === value; });
    }
}