import { RouterModule } from "@angular/router";
import { EditorComponent } from "./editor.component";
import { SolutionListComponent } from "./solution-list/solution-list.component";
import { CreateSolutionComponent } from "./create-solution/create-solution.component";
import { AuthGuard } from "../auth/auth.guard";
var editorRoutes = [
    { path: '', component: SolutionListComponent, pathMatch: 'full' },
    { path: 'create', component: CreateSolutionComponent, canActivate: [AuthGuard] },
    { path: ':id', component: EditorComponent, canActivate: [AuthGuard] },
];
export var editorRouting = RouterModule.forChild(editorRoutes);
