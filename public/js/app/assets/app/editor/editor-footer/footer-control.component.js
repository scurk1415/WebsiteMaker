import { Component, Input } from "@angular/core";
import { ControlViews } from "../../shared/enums";
import { FooterLink } from "../models/footer";
export var FooterControlComponent = (function () {
    function FooterControlComponent() {
        this.controlViews = ControlViews;
        this.edit = new Array();
    }
    FooterControlComponent.prototype.ngOnInit = function () {
        if (!this.footer.links) {
            this.footer.links = [];
        }
    };
    FooterControlComponent.prototype.addItem = function () {
        var item = new FooterLink("Link");
        this.footer.links.push(item);
    };
    FooterControlComponent.prototype.deleteItem = function (index) {
        this.footer.links.splice(index, 1);
    };
    FooterControlComponent.prototype.keyupHandlerFunction = function (value, property) {
        switch (property) {
            case 'text':
                this.footer.text = value;
                break;
            case 'copyright_text':
                this.footer.copyright_text = value;
                break;
        }
    };
    FooterControlComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dip-footer-control',
                    templateUrl: 'footer-control.component.html'
                },] },
    ];
    /** @nocollapse */
    FooterControlComponent.ctorParameters = [];
    FooterControlComponent.propDecorators = {
        'footer': [{ type: Input },],
        'tmpFooter': [{ type: Input },],
    };
    return FooterControlComponent;
}());
