import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ErrorComponent} from "../error/error.component";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports:[
        CommonModule,
        FormsModule
    ],
    declarations:[
        ErrorComponent
    ],
    exports:[
        ErrorComponent
    ]
})

export class SharedModule{}