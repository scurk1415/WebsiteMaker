import { Pipe, Injectable, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filterArray'
})
@Injectable()
export class FilterPipe implements PipeTransform {
    transform(items: any[], field : string, value : string): any[] {
        if (!items) return [];
        if (!value) return items;

        return items.filter(it => it[field].indexOf(value) !== -1);
    }
}