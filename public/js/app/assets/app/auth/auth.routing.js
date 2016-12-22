import { RouterModule } from "@angular/router";
import { SignupComponent } from "./signup.component";
import { LoginComponent } from "./login.component";
import { AuthComponent } from "./auth.component";
var auth_routes = [
    { path: '', component: AuthComponent, children: [
            { path: 'login', component: LoginComponent },
            { path: 'signup', component: SignupComponent }
        ] }
];
export var authRouting = RouterModule.forChild(auth_routes);
