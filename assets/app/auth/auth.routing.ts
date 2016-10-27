import {Routes, RouterModule} from "@angular/router";
import {SignupComponent} from "./signup.component";
import {LoginComponent} from "./login.component";
import {AuthComponent} from "./auth.component";


const auth_routes: Routes = [
    { path: '', component: AuthComponent, children:[
        { path: 'login', component: LoginComponent },
        { path: 'signup', component: SignupComponent }
    ]}
];

export const authRouting = RouterModule.forChild(auth_routes);