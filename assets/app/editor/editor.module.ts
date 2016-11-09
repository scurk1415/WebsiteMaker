import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";

import {EditorComponent} from "./editor.component";
import {editorRouting} from "./editor.routing";
import {SolutionListComponent} from "./solution-list/solution-list.component";
import {EditorService} from "./editor.service";
import {CreateSolutionComponent} from "./create-solution/create-solution.component";
import {SharedModule} from "../shared/shared.module";
import {OverlayComponent} from "./shared/overlay.component";
import {EditorControlsComponent} from "./editor-controls.component";
import {HiddenComponent} from "./shared/hidden.component";

import { ColorPickerModule } from 'angular2-color-picker';
import { ControlHeaderComponent } from "./shared/control-header.component";
import { NavComponent } from "./editor-nav/nav";
import { HeaderComponents } from "./editor-header/header";
import { FooterComponents } from "./editor-footer/footer";
import { MainComponents } from "./editor-main/main";

@NgModule({
    imports: [
        CommonModule,
        editorRouting,
        ReactiveFormsModule,
        SharedModule,
        FormsModule,
        ColorPickerModule
    ],
    declarations: [
        ControlHeaderComponent,
        EditorComponent,
        HeaderComponents,
        NavComponent,
        FooterComponents,
        MainComponents,
        SolutionListComponent,
        CreateSolutionComponent,
        OverlayComponent,
        EditorControlsComponent,
        HiddenComponent
    ],
    providers: [EditorService]
})

export class EditorModule {}