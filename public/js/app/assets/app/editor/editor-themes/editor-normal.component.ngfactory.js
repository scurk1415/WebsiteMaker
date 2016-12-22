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
import * as import3 from './editor-normal.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../editor-header/normal/header-normal.component';
import * as import11 from '../editor-nav/normal/nav-normal.component';
import * as import12 from '../editor-main/normal/main-normal.component';
import * as import13 from '../editor-footer/normal/footer-normal.component';
import * as import14 from '../editor-header/normal/header-normal.component.ngfactory';
import * as import15 from '../editor-nav/normal/nav-normal.component.ngfactory';
import * as import16 from '../editor-main/normal/main-normal.component.ngfactory';
import * as import17 from '../editor-footer/normal/footer-normal.component.ngfactory';
var renderType_EditorNormalComponent_Host = null;
var _View_EditorNormalComponent_Host0 = (function (_super) {
    __extends(_View_EditorNormalComponent_Host0, _super);
    function _View_EditorNormalComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_EditorNormalComponent_Host0, renderType_EditorNormalComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_EditorNormalComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('dip-editor-normal', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_EditorNormalComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._EditorNormalComponent_0_4 = new import3.EditorNormalComponent();
        this._appEl_0.initComponent(this._EditorNormalComponent_0_4, [], compView_0);
        compView_0.create(this._EditorNormalComponent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_EditorNormalComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.EditorNormalComponent) && (0 === requestNodeIndex))) {
            return this._EditorNormalComponent_0_4;
        }
        return notFoundResult;
    };
    _View_EditorNormalComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._EditorNormalComponent_0_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_EditorNormalComponent_Host0;
}(import1.AppView));
function viewFactory_EditorNormalComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_EditorNormalComponent_Host === null)) {
        (renderType_EditorNormalComponent_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_EditorNormalComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var EditorNormalComponentNgFactory = new import9.ComponentFactory('dip-editor-normal', viewFactory_EditorNormalComponent_Host0, import3.EditorNormalComponent);
var styles_EditorNormalComponent = [];
var renderType_EditorNormalComponent = null;
var _View_EditorNormalComponent0 = (function (_super) {
    __extends(_View_EditorNormalComponent0, _super);
    function _View_EditorNormalComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_EditorNormalComponent0, renderType_EditorNormalComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_EditorNormalComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'relative clearfix');
        this.renderer.setElementAttribute(this._el_0, 'id', 'editor-app');
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'dip-header-normal', null);
        this._appEl_2 = new import2.AppElement(2, 0, this, this._el_2);
        var compView_2 = import14.viewFactory_HeaderNormalComponent0(this.viewUtils, this.injector(2), this._appEl_2);
        this._HeaderNormalComponent_2_4 = new import10.HeaderNormalComponent();
        this._appEl_2.initComponent(this._HeaderNormalComponent_2_4, [], compView_2);
        compView_2.create(this._HeaderNormalComponent_2_4, [], null);
        this._text_3 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_4 = this.renderer.createElement(this._el_0, 'dip-nav-normal', null);
        this._appEl_4 = new import2.AppElement(4, 0, this, this._el_4);
        var compView_4 = import15.viewFactory_NavNormalComponent0(this.viewUtils, this.injector(4), this._appEl_4);
        this._NavNormalComponent_4_4 = new import11.NavNormalComponent();
        this._appEl_4.initComponent(this._NavNormalComponent_4_4, [], compView_4);
        compView_4.create(this._NavNormalComponent_4_4, [], null);
        this._text_5 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_6 = this.renderer.createElement(this._el_0, 'dip-main-normal', null);
        this._appEl_6 = new import2.AppElement(6, 0, this, this._el_6);
        var compView_6 = import16.viewFactory_MainNormalComponent0(this.viewUtils, this.injector(6), this._appEl_6);
        this._MainNormalComponent_6_4 = new import12.MainNormalComponent();
        this._appEl_6.initComponent(this._MainNormalComponent_6_4, [], compView_6);
        compView_6.create(this._MainNormalComponent_6_4, [], null);
        this._text_7 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_8 = this.renderer.createElement(this._el_0, 'dip-footer-normal', null);
        this._appEl_8 = new import2.AppElement(8, 0, this, this._el_8);
        var compView_8 = import17.viewFactory_FooterNormalComponent0(this.viewUtils, this.injector(8), this._appEl_8);
        this._FooterNormalComponent_8_4 = new import13.FooterNormalComponent();
        this._appEl_8.initComponent(this._FooterNormalComponent_8_4, [], compView_8);
        compView_8.create(this._FooterNormalComponent_8_4, [], null);
        this._text_9 = this.renderer.createText(this._el_0, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._el_8,
            this._text_9
        ], [], []);
        return null;
    };
    _View_EditorNormalComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import10.HeaderNormalComponent) && (2 === requestNodeIndex))) {
            return this._HeaderNormalComponent_2_4;
        }
        if (((token === import11.NavNormalComponent) && (4 === requestNodeIndex))) {
            return this._NavNormalComponent_4_4;
        }
        if (((token === import12.MainNormalComponent) && (6 === requestNodeIndex))) {
            return this._MainNormalComponent_6_4;
        }
        if (((token === import13.FooterNormalComponent) && (8 === requestNodeIndex))) {
            return this._FooterNormalComponent_8_4;
        }
        return notFoundResult;
    };
    _View_EditorNormalComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = this.context.page.header;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._HeaderNormalComponent_2_4.header = currVal_0;
            this._expr_0 = currVal_0;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._HeaderNormalComponent_2_4.ngOnInit();
        }
        var currVal_1 = this.context.page.nav;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._NavNormalComponent_4_4.nav = currVal_1;
            this._expr_1 = currVal_1;
        }
        var currVal_2 = this.context.solution.pages;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this._NavNormalComponent_4_4.pages = currVal_2;
            this._expr_2 = currVal_2;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._NavNormalComponent_4_4.ngOnInit();
        }
        var currVal_3 = this.context.page.main;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this._MainNormalComponent_6_4.main = currVal_3;
            this._expr_3 = currVal_3;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._MainNormalComponent_6_4.ngOnInit();
        }
        var currVal_4 = this.context.page.footer;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this._FooterNormalComponent_8_4.footer = currVal_4;
            this._expr_4 = currVal_4;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._FooterNormalComponent_8_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_EditorNormalComponent0;
}(import1.AppView));
export function viewFactory_EditorNormalComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_EditorNormalComponent === null)) {
        (renderType_EditorNormalComponent = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_EditorNormalComponent, {}));
    }
    return new _View_EditorNormalComponent0(viewUtils, parentInjector, declarationEl);
}
