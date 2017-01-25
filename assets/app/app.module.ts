import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/header/header.component";
import { routing, routedComponents } from "./app.routing";
import { AuthService } from "./auth/auth.service";
import { AuthGuard } from "./auth/auth.guard";
import { ErrorService } from "./error/error.service";
import { AccountBoxComponent } from "./shared/header/account-box.component";
import { AdminGuard } from "./admin/admin.guard";

@NgModule({
    imports: [
        BrowserModule,
        routing,
        ReactiveFormsModule,
        RouterModule,
        HttpModule,
        FormsModule
    ],
    declarations: [
        AppComponent, 
        HeaderComponent,
        routedComponents,
        AccountBoxComponent
    ],
    providers: [AuthService, AuthGuard, ErrorService, AdminGuard],
    bootstrap: [AppComponent]
})
export class AppModule { }