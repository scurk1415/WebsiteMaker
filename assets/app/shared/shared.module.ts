import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ErrorComponent } from "../error/error.component";
import { FormsModule } from "@angular/forms";
import { ComboboxComponent } from "./controls/combobox.component";
import { UploaderComponent } from "./controls/uploader/uploader.component";
import { Ng2UploaderModule } from "ng2-uploader";
import { TinyMceComponent } from "./controls/tinymce.component";
import { SanitizeHtml } from "./pipes/sanitize-html.pipe";
import { SanitizeUrl } from "./pipes/sanitize-url.pipe";
import { FormatedPrice } from "./pipes/formated-price.pipe";

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        Ng2UploaderModule,
    ],
    declarations:[
        ErrorComponent,
        ComboboxComponent,
        UploaderComponent,
        TinyMceComponent,
        SanitizeHtml,
        SanitizeUrl,
        FormatedPrice
    ],
    exports:[
        ErrorComponent,
        ComboboxComponent,
        UploaderComponent,
        TinyMceComponent,
        SanitizeHtml,
        SanitizeUrl,
        FormatedPrice
    ]
})

export class SharedModule{}