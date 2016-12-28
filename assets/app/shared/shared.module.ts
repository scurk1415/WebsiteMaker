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
import { ColorpickerComponent } from "./controls/colorpicker/colorpicker.component";
import { ColorPickerModule, DialogComponent, SliderDirective, TextDirective, ColorPickerDirective } from 'angular2-color-picker';

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        Ng2UploaderModule,
        ColorPickerModule
    ],
    declarations:[
        ErrorComponent,
        ComboboxComponent,
        UploaderComponent,
        TinyMceComponent,
        SanitizeHtml,
        SanitizeUrl,
        FormatedPrice,
        ColorpickerComponent,
        /*DialogComponent,
         SliderDirective,
         TextDirective*/
    ],
    exports:[
        ErrorComponent,
        ComboboxComponent,
        UploaderComponent,
        TinyMceComponent,
        SanitizeHtml,
        SanitizeUrl,
        FormatedPrice,
        ColorpickerComponent,
        /*DialogComponent,
         SliderDirective,
         TextDirective*/
    ]
})

export class SharedModule{}