import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Pipe({
    name: 'formatedPrice'
})
export class FormatedPrice implements PipeTransform  {

    constructor(){}

    transform(price: number) : SafeHtml {
        if(!price){
            return 0;
        }
        return (price/100).toFixed(2);
    }
}