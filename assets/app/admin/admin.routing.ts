import {Routes, RouterModule} from "@angular/router";
import { AdminComponent } from "./admin.component";


const admin_routes: Routes = [
    { path: '', component: AdminComponent}
];

export const adminRouting = RouterModule.forChild(admin_routes);