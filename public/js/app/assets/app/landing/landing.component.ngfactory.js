/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './landing.component';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
var renderType_LandingComponent_Host = null;
var _View_LandingComponent_Host0 = (function (_super) {
    __extends(_View_LandingComponent_Host0, _super);
    function _View_LandingComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_LandingComponent_Host0, renderType_LandingComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_LandingComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('dip-landing', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_LandingComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._LandingComponent_0_4 = new import3.LandingComponent();
        this._appEl_0.initComponent(this._LandingComponent_0_4, [], compView_0);
        compView_0.create(this._LandingComponent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_LandingComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.LandingComponent) && (0 === requestNodeIndex))) {
            return this._LandingComponent_0_4;
        }
        return notFoundResult;
    };
    return _View_LandingComponent_Host0;
}(import1.AppView));
function viewFactory_LandingComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_LandingComponent_Host === null)) {
        (renderType_LandingComponent_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_LandingComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var LandingComponentNgFactory = new import9.ComponentFactory('dip-landing', viewFactory_LandingComponent_Host0, import3.LandingComponent);
var styles_LandingComponent = [];
var renderType_LandingComponent = null;
var _View_LandingComponent0 = (function (_super) {
    __extends(_View_LandingComponent0, _super);
    function _View_LandingComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_LandingComponent0, renderType_LandingComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_LandingComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'card');
        this.renderer.setElementAttribute(this._el_0, 'style', 'width: 500px; margin: 50px auto;');
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'form-field');
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = this.renderer.createElement(this._el_2, 'h1', null);
        this.renderer.setElementAttribute(this._el_4, 'class', 'align-center');
        this._text_5 = this.renderer.createText(this._el_4, 'Account instructions', null);
        this._text_6 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_7 = this.renderer.createElement(this._el_2, 'div', null);
        this._text_8 = this.renderer.createText(this._el_7, '\n            If you don\'t want to create a new account you can use my test account (if using mongoLab):\n            ', null);
        this._el_9 = this.renderer.createElement(this._el_7, 'ul', null);
        this._text_10 = this.renderer.createText(this._el_9, '\n                ', null);
        this._el_11 = this.renderer.createElement(this._el_9, 'li', null);
        this._text_12 = this.renderer.createText(this._el_11, 'Username: test@test.com', null);
        this._text_13 = this.renderer.createText(this._el_9, '\n                ', null);
        this._el_14 = this.renderer.createElement(this._el_9, 'li', null);
        this._text_15 = this.renderer.createText(this._el_14, 'Password: tester', null);
        this._text_16 = this.renderer.createText(this._el_9, '\n            ', null);
        this._text_17 = this.renderer.createText(this._el_7, '\n        ', null);
        this._text_18 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_19 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_20 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_20, 'class', 'form-field');
        this._text_21 = this.renderer.createText(this._el_20, '\n        ', null);
        this._el_22 = this.renderer.createElement(this._el_20, 'h1', null);
        this.renderer.setElementAttribute(this._el_22, 'class', 'align-center');
        this._text_23 = this.renderer.createText(this._el_22, 'Payment instructions', null);
        this._text_24 = this.renderer.createText(this._el_20, '\n        ', null);
        this._el_25 = this.renderer.createElement(this._el_20, 'div', null);
        this._text_26 = this.renderer.createText(this._el_25, '\n            Because this app is in test mode and we don\'t want to charge real money from the user we provide test payment data.\n            ', null);
        this._el_27 = this.renderer.createElement(this._el_25, 'ul', null);
        this._text_28 = this.renderer.createText(this._el_27, '\n                ', null);
        this._el_29 = this.renderer.createElement(this._el_27, 'li', null);
        this._text_30 = this.renderer.createText(this._el_29, 'Email: doesn\'t really matter, but it has to be a valid email', null);
        this._text_31 = this.renderer.createText(this._el_27, '\n                ', null);
        this._el_32 = this.renderer.createElement(this._el_27, 'li', null);
        this._text_33 = this.renderer.createText(this._el_32, 'CardNumber: 4242 4242 4242 4242', null);
        this._text_34 = this.renderer.createText(this._el_27, '\n                ', null);
        this._el_35 = this.renderer.createElement(this._el_27, 'li', null);
        this._text_36 = this.renderer.createText(this._el_35, 'Expiry date: any date in the future', null);
        this._text_37 = this.renderer.createText(this._el_27, '\n                ', null);
        this._el_38 = this.renderer.createElement(this._el_27, 'li', null);
        this._text_39 = this.renderer.createText(this._el_38, 'CVC: any 3 numbers', null);
        this._text_40 = this.renderer.createText(this._el_27, '\n            ', null);
        this._text_41 = this.renderer.createText(this._el_25, '\n        ', null);
        this._text_42 = this.renderer.createText(this._el_20, '\n    ', null);
        this._text_43 = this.renderer.createText(this._el_0, '\n', null);
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._text_16,
            this._text_17,
            this._text_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._el_29,
            this._text_30,
            this._text_31,
            this._el_32,
            this._text_33,
            this._text_34,
            this._el_35,
            this._text_36,
            this._text_37,
            this._el_38,
            this._text_39,
            this._text_40,
            this._text_41,
            this._text_42,
            this._text_43
        ], [], []);
        return null;
    };
    return _View_LandingComponent0;
}(import1.AppView));
export function viewFactory_LandingComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_LandingComponent === null)) {
        (renderType_LandingComponent = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_LandingComponent, {}));
    }
    return new _View_LandingComponent0(viewUtils, parentInjector, declarationEl);
}
