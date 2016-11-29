import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ErrorComponent } from "../error/error.component";
import { FormsModule } from "@angular/forms";
import { ComboboxComponent } from "./controls/combobox.component";
import { UploaderComponent } from "./controls/uploader/uploader.component";
import { Ng2UploaderModule } from "ng2-uploader";

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        Ng2UploaderModule
    ],
    declarations:[
        ErrorComponent,
        ComboboxComponent,
        UploaderComponent
    ],
    exports:[
        ErrorComponent,
        ComboboxComponent,
        UploaderComponent
    ]
})

export class SharedModule{}