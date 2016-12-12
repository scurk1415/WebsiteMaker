import { NgModule } from '@angular/core';

import { MarketComponent } from "./market.component";
import { MarketService } from "./market.service";
import { marketRouting } from "./market.routing";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        marketRouting,
        SharedModule,
        CommonModule
    ],
    exports: [],
    declarations: [
        MarketComponent
    ],
    providers: [
        MarketService
    ],
})
export class MarketModule { }
