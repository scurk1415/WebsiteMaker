import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SolutionThemes } from "../../shared/enums";

@Component({
    selector: 'dip-themes',
    templateUrl: 'solution-themes.component.html'
})
export class SolutionThemesComponent implements OnInit {

    @Input() selectedThemeId;
    @Output() changeTheme = new EventEmitter<Number>();

    public themes = SolutionThemes;

    constructor() { }

    ngOnInit() {
        if (!this.selectedThemeId){
            this.selectedThemeId = this.themes.Normal;
            this.onThemeChange(this.selectedThemeId);
        }
    }

    onThemeChange(themeId: number){
        this.changeTheme.emit(themeId);
    }
    
}