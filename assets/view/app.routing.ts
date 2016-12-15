import { Routes, RouterModule } from "@angular/router";
import { ViewComponent } from "./view.component";

const routes: Routes = [
    {
        path: 'view/:id',
        component: ViewComponent
    }
];

export const routing = RouterModule.forRoot(routes);