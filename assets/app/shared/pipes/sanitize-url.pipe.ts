import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";

@Pipe({
    name: 'sanitizeUrl'
})
export class SanitizeUrl implements PipeTransform  {

    constructor(private _sanitizer: DomSanitizer){}

    transform(v: string) : SafeUrl {
        console.log(v);
        if(!v){
            return "";
        }
        return this._sanitizer.bypassSecurityTrustResourceUrl(v);
    }
}