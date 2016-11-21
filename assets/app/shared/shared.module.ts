import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ErrorComponent } from "../error/error.component";
import { FormsModule } from "@angular/forms";
import { ComboboxComponent } from "./controls/combobox.component";

@NgModule({
    imports:[
        CommonModule,
        FormsModule
    ],
    declarations:[
        ErrorComponent,
        ComboboxComponent
    ],
    exports:[
        ErrorComponent,
        ComboboxComponent
    ]
})

export class SharedModule{}