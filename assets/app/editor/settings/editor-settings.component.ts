import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Settings } from "../models/settings";

@Component({
    selector: 'dip-editor-settings',
    templateUrl: 'editor-settings.component.html',
    styleUrls: ['editor-settings.component.css']
})
export class EditorSettingsComponent implements OnInit {
    @Input() settings: Settings;
    @Output() onSettingsClose = new EventEmitter<Settings>();

    constructor() { }

    ngOnInit() {
        console.log(this.settings);
        if (!this.settings){
            this.settings = new Settings();
        }
    }

    onToggleSettings(){
        this.onSettingsClose.emit(this.settings);
    }

}