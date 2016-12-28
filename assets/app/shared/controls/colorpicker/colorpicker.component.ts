import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'dip-colorpicker',
    templateUrl: 'colorpicker.component.html',
    styleUrls: ['colorpicker.component.css']
})
export class ColorpickerComponent implements OnInit {
    @Input() color: string;
    @Output() colorChanged = new EventEmitter<string>();

    constructor() { }

    ngOnInit() { }

    onColorChange(value){
        this.color = value;
        this.colorChanged.emit(this.color);
    }

}