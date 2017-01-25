import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";

import { AdminComponent } from './admin.component';
import { AdminService } from "./admin.service";
import { adminRouting } from "./admin.routing";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    imports: [
        adminRouting,
        HttpModule,
        CommonModule,
        SharedModule
    ],
    exports: [],
    declarations: [AdminComponent],
    providers: [AdminService],
})
export class AdminModule { }
