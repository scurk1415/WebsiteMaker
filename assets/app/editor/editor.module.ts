import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";

import {EditorHeaderComponent} from "./editor-header/editor-header.component";
import {EditorFooterComponent} from "./editor-footer/editor-footer.component";
import {EditorNavComponent} from "./editor-nav/editor-nav.component";
import {EditorMainComponent} from "./editor-main/editor-main.component";
import {EditorComponent} from "./editor.component";
import {editorRouting} from "./editor.routing";
import {SolutionListComponent} from "./solution-list/solution-list.component";
import {EditorService} from "./editor.service";
import {CreateSolutionComponent} from "./create-solution/create-solution.component";
import {SharedModule} from "../shared/shared.module";
import {OverlayComponent} from "./overlay/overlay.component";
import {HeaderControlComponent} from "./editor-header/header-control.component";
import {EditorControlsComponent} from "./editor-controls.component";
import {HiddenComponent} from "./shared/hidden.component";
import {NavControlComponent} from "./editor-nav/nav-control.component";


@NgModule({
    imports: [
        CommonModule,
        editorRouting,
        ReactiveFormsModule,
        SharedModule,
        FormsModule
    ],
    declarations: [
        EditorComponent,
        EditorHeaderComponent,
        HeaderControlComponent,
        EditorNavComponent,
        NavControlComponent,
        EditorFooterComponent,
        EditorMainComponent,
        SolutionListComponent,
        CreateSolutionComponent,
        OverlayComponent,
        EditorControlsComponent,
        HiddenComponent
    ],
    providers: [EditorService]
})

export class EditorModule {}