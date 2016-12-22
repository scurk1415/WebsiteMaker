import { Component, Input, Output, EventEmitter } from '@angular/core';
export var ComboboxComponent = (function () {
    function ComboboxComponent() {
        this.selectedItem = "";
        this.selected = new EventEmitter();
        this.open = false;
    }
    ComboboxComponent.prototype.ngOnInit = function () {
        this.changeSelectedText(this.selectedItem);
    };
    // emit selected value
    ComboboxComponent.prototype.selectItem = function (value) {
        this.open = false;
        this.selectedItem = value;
        this.selected.emit(this.selectedItem);
        this.changeSelectedText(value);
    };
    // open/close options
    ComboboxComponent.prototype.onOpen = function () {
        this.open = !this.open;
    };
    //get selected item
    ComboboxComponent.prototype.changeSelectedText = function (value) {
        if (value === void 0) { value = ""; }
        this.displayed_item = this.items.find(function (item) { return item.value === value; });
        if (!this.displayed_item) {
            this.displayed_item = this.items[0];
        }
    };
    ComboboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dip-combobox',
                    templateUrl: 'combobox.component.html',
                    styleUrls: ['combobox.component.css']
                },] },
    ];
    /** @nocollapse */
    ComboboxComponent.ctorParameters = [];
    ComboboxComponent.propDecorators = {
        'items': [{ type: Input },],
        'selectedItem': [{ type: Input },],
        'cbStyle': [{ type: Input },],
        'label': [{ type: Input },],
        'selected': [{ type: Output },],
    };
    return ComboboxComponent;
}());
