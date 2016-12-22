import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./login.component";
import { SignupComponent } from "./signup.component";
import { authRouting } from "./auth.routing";
import { SharedModule } from "../shared/shared.module";
export var AuthModule = (function () {
    function AuthModule() {
    }
    AuthModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        RouterModule,
                        ReactiveFormsModule,
                        CommonModule,
                        authRouting,
                        SharedModule
                    ],
                    exports: [AuthComponent],
                    declarations: [AuthComponent, LoginComponent, SignupComponent]
                },] },
    ];
    /** @nocollapse */
    AuthModule.ctorParameters = [];
    return AuthModule;
}());
