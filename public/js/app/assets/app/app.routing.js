import { RouterModule } from "@angular/router";
import { LandingComponent } from "./landing/landing.component";
import { PageNotFoundComponent } from "./error/pagenotfound.component";
import { AuthGuard } from "./auth/auth.guard";
var routes = [
    {
        path: '',
        pathMatch: 'full',
        component: LandingComponent
    },
    { path: 'editor', loadChildren: './editor/editor.module#EditorModule', canActivate: [AuthGuard] },
    { path: 'market', loadChildren: './subscription/market.module#MarketModule' },
    { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
    { path: '**', component: PageNotFoundComponent } // redirect unmathched routes to error page
];
export var routing = RouterModule.forRoot(routes);
export var routedComponents = [
    LandingComponent,
    PageNotFoundComponent
];
