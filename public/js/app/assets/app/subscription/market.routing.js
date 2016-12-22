import { RouterModule } from "@angular/router";
import { MarketComponent } from "./market.component";
var editorRoutes = [
    { path: '', component: MarketComponent, pathMatch: 'full' },
];
export var marketRouting = RouterModule.forChild(editorRoutes);
