import { RouterModule } from "@angular/router";
import { ViewComponent } from "./view.component";
var routes = [
    {
        path: 'view/:id',
        component: ViewComponent
    },
    {
        path: 'view/:id/:page',
        component: ViewComponent
    }
];
export var routing = RouterModule.forRoot(routes);
