import {Component, OnInit, Input} from "@angular/core";
import { ControlViews } from "../../shared/enums";
import { Footer, FooterLink } from "../models/footer";

@Component({
    selector: 'dip-footer-control',
    templateUrl: 'footer-control.component.html'
})
export class FooterControlComponent implements OnInit{

    @Input() footer: Footer;
    @Input() tmpFooter: any;
    controlViews = ControlViews;

    public edit: Array<boolean> = new Array();

    ngOnInit() {
        if(!this.footer.links){
            this.footer.links = [];
        }
    }

    addItem(){
        var item = new FooterLink("Link");
        this.footer.links.push(item);
    }

    deleteItem(index){
        this.footer.links.splice(index,1);
    }

    keyupHandlerFunction(value, property){
        switch (property) {
            case 'text':
                this.footer.text = value;
                break;

            case 'copyright_text':
                this.footer.copyright_text = value;
                break;
        }
    }
}