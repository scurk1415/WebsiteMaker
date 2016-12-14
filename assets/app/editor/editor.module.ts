import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { Ng2UploaderModule } from "ng2-uploader";
import { ColorPickerModule } from 'angular2-color-picker';

import { EditorComponent } from "./editor.component";
import { editorRouting } from "./editor.routing";
import { SolutionListComponent } from "./solution-list/solution-list.component";
import { EditorService } from "./editor.service";
import { CreateSolutionComponent } from "./create-solution/create-solution.component";
import { SharedModule } from "../shared/shared.module";
import { OverlayComponent } from "./shared/overlay.component";
import { EditorControlsComponent } from "./editor-controls.component";
import { HiddenComponent } from "./shared/hidden.component";
import { ControlHeaderComponent } from "./shared/control-header.component";
import { NavComponents } from "./editor-nav/navComponents";
import { HeaderComponents } from "./editor-header/header";
import { FooterComponents } from "./editor-footer/footer";
import { MainComponents } from "./editor-main/main";
import { Draggable } from "../shared/controls/dragable.directive";
import { EditorNormalComponent } from "./editor-themes/editor-normal.component";
import { EditorTwoColumnsComponent } from "./editor-themes/editor-two-columns.component";

@NgModule({
    imports: [
        CommonModule,
        editorRouting,
        ReactiveFormsModule,
        SharedModule,
        FormsModule,
        ColorPickerModule,
        Ng2UploaderModule
    ],
    declarations: [
        ControlHeaderComponent,
        EditorComponent,
        HeaderComponents,
        NavComponents,
        FooterComponents,
        MainComponents,
        SolutionListComponent,
        CreateSolutionComponent,
        OverlayComponent,
        EditorControlsComponent,
        HiddenComponent,
        Draggable,
        EditorNormalComponent,
        EditorTwoColumnsComponent
    ],
    providers: [EditorService]
})

export class EditorModule {}