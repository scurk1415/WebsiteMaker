import {RouterModule, Routes} from "@angular/router";
import { MarketComponent } from "./market.component";

const editorRoutes: Routes = [
    { path: '', component: MarketComponent, pathMatch: 'full'},
];

export const marketRouting = RouterModule.forChild(editorRoutes);