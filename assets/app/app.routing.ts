import {Routes, RouterModule} from "@angular/router";
import {LandingComponent} from "./landing/landing.component";
import {PageNotFoundComponent} from "./error/pagenotfound.component";
import {MarketComponent} from "./subscription/market.component";
import {PricingComponent} from "./subscription/pricing.component";
import {AuthGuard} from "./auth/auth.guard";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: LandingComponent
    },
    { path: 'editor', loadChildren: './editor/editor.module#EditorModule', canActivate: [AuthGuard] },
    { path: 'pricing', component: PricingComponent },
    { path: 'market', component: MarketComponent, canActivate: [AuthGuard]},
    { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
    { path: '**', component: PageNotFoundComponent } // redirect unmathched routes to error page
];

export const routing = RouterModule.forRoot(routes);

export const routedComponents = [
    LandingComponent,
    PageNotFoundComponent,
    PricingComponent,
    MarketComponent
];