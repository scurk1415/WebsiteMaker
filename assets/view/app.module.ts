import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { AppService } from "./app.service";
import { routing } from "./app.routing";
import { ViewComponent } from "./view.component";
import { NavComponents } from "./editor-nav/navComponents";
import { MainComponents } from "./editor-main/main";
import { HeaderComponents } from "./editor-header/header";
import { FooterComponents } from "./editor-footer/footer";
import { EditorNormalComponent } from "./editor-themes/editor-normal.component";
import { EditorTwoColumnsComponent } from "./editor-themes/editor-two-columns.component";
import { SanitizeHtml } from "./pipes/sanitize-html.pipe";
import { HiddenComponent } from "./shared/hidden.component";

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        ViewComponent,
        EditorNormalComponent,
        EditorTwoColumnsComponent,
        HiddenComponent,
        NavComponents,
        MainComponents,
        HeaderComponents,
        FooterComponents,
        SanitizeHtml
    ],
    providers: [AppService],
    bootstrap: [AppComponent]
})
export class AppModule { }