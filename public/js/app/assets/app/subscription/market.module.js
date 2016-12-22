import { NgModule } from '@angular/core';
import { MarketComponent } from "./market.component";
import { MarketService } from "./market.service";
import { marketRouting } from "./market.routing";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
export var MarketModule = (function () {
    function MarketModule() {
    }
    MarketModule.decorators = [
        { type: NgModule, args: [{
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
                },] },
    ];
    /** @nocollapse */
    MarketModule.ctorParameters = [];
    return MarketModule;
}());
