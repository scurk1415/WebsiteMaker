import {Routes, RouterModule} from "@angular/router";
import {LandingComponent} from "./landing/landing.component";
import {PageNotFoundComponent} from "./error/pagenotfound.component";
import {AuthGuard} from "./auth/auth.guard";
import { AdminGuard } from "./admin/admin.guard";

const routes: Routes = [
    { path: '', pathMatch: 'full', component: LandingComponent },
    {
        path: 'editor',
        loadChildren: './editor/editor.module#EditorModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'market',
        loadChildren: './subscription/market.module#MarketModule'
    },
    {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
    },
    {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule',
        canActivate: [AdminGuard]
    },
    // redirect unmathched routes to error page
    { path: '**', component: PageNotFoundComponent }
];

export const routing = RouterModule.forRoot(routes);

export const routedComponents = [
    LandingComponent,
    PageNotFoundComponent
];

