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
import * as import3 from './view.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from './app.service';
import * as import9 from '@angular/router/src/router_state';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from '@angular/common/src/directives/ng_if';
import * as import13 from '@angular/core/src/linker/template_ref';
import * as import14 from './editor-themes/editor-normal.component';
import * as import15 from './editor-themes/editor-normal.component.ngfactory';
import * as import16 from './editor-themes/editor-two-columns.component';
import * as import17 from './editor-themes/editor-two-columns.component.ngfactory';
var renderType_ViewComponent_Host = null;
var _View_ViewComponent_Host0 = (function (_super) {
    __extends(_View_ViewComponent_Host0, _super);
    function _View_ViewComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ViewComponent_Host0, renderType_ViewComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ViewComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('dip-view', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_ViewComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ViewComponent_0_4 = new import3.ViewComponent(this.parentInjector.get(import8.AppService), this.parentInjector.get(import9.ActivatedRoute));
        this._appEl_0.initComponent(this._ViewComponent_0_4, [], compView_0);
        compView_0.create(this._ViewComponent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_ViewComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.ViewComponent) && (0 === requestNodeIndex))) {
            return this._ViewComponent_0_4;
        }
        return notFoundResult;
    };
    _View_ViewComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._ViewComponent_0_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_ViewComponent_Host0.prototype.destroyInternal = function () {
        this._ViewComponent_0_4.ngOnDestroy();
    };
    return _View_ViewComponent_Host0;
}(import1.AppView));
function viewFactory_ViewComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ViewComponent_Host === null)) {
        (renderType_ViewComponent_Host = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, [], {}));
    }
    return new _View_ViewComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var ViewComponentNgFactory = new import11.ComponentFactory('dip-view', viewFactory_ViewComponent_Host0, import3.ViewComponent);
var styles_ViewComponent = [];
var renderType_ViewComponent = null;
var _View_ViewComponent0 = (function (_super) {
    __extends(_View_ViewComponent0, _super);
    function _View_ViewComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ViewComponent0, renderType_ViewComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ViewComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._anchor_0 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._anchor_0);
        this._TemplateRef_0_5 = new import13.TemplateRef_(this._appEl_0, viewFactory_ViewComponent1);
        this._NgIf_0_6 = new import12.NgIf(this._appEl_0.vcRef, this._TemplateRef_0_5);
        this._text_1 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._appEl_2 = new import2.AppElement(2, null, this, this._anchor_2);
        this._TemplateRef_2_5 = new import13.TemplateRef_(this._appEl_2, viewFactory_ViewComponent4);
        this._NgIf_2_6 = new import12.NgIf(this._appEl_2.vcRef, this._TemplateRef_2_5);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this.init([], [
            this._anchor_0,
            this._text_1,
            this._anchor_2
        ], [], []);
        return null;
    };
    _View_ViewComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import13.TemplateRef) && (0 === requestNodeIndex))) {
            return this._TemplateRef_0_5;
        }
        if (((token === import12.NgIf) && (0 === requestNodeIndex))) {
            return this._NgIf_0_6;
        }
        if (((token === import13.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import12.NgIf) && (2 === requestNodeIndex))) {
            return this._NgIf_2_6;
        }
        return notFoundResult;
    };
    _View_ViewComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = this.context.solution;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._NgIf_0_6.ngIf = currVal_0;
            this._expr_0 = currVal_0;
        }
        var currVal_1 = !this.context.solution;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._NgIf_2_6.ngIf = currVal_1;
            this._expr_1 = currVal_1;
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_ViewComponent0;
}(import1.AppView));
export function viewFactory_ViewComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ViewComponent === null)) {
        (renderType_ViewComponent = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, styles_ViewComponent, {}));
    }
    return new _View_ViewComponent0(viewUtils, parentInjector, declarationEl);
}
var _View_ViewComponent1 = (function (_super) {
    __extends(_View_ViewComponent1, _super);
    function _View_ViewComponent1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ViewComponent1, renderType_ViewComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ViewComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'id', 'editor-app-wrapper');
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_2 = new import2.AppElement(2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new import13.TemplateRef_(this._appEl_2, viewFactory_ViewComponent2);
        this._NgIf_2_6 = new import12.NgIf(this._appEl_2.vcRef, this._TemplateRef_2_5);
        this._text_3 = this.renderer.createText(this._el_0, '\n    ', null);
        this._anchor_4 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_4 = new import2.AppElement(4, 0, this, this._anchor_4);
        this._TemplateRef_4_5 = new import13.TemplateRef_(this._appEl_4, viewFactory_ViewComponent3);
        this._NgIf_4_6 = new import12.NgIf(this._appEl_4.vcRef, this._TemplateRef_4_5);
        this._text_5 = this.renderer.createText(this._el_0, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3,
            this._anchor_4,
            this._text_5
        ], [], []);
        return null;
    };
    _View_ViewComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import13.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import12.NgIf) && (2 === requestNodeIndex))) {
            return this._NgIf_2_6;
        }
        if (((token === import13.TemplateRef) && (4 === requestNodeIndex))) {
            return this._TemplateRef_4_5;
        }
        if (((token === import12.NgIf) && (4 === requestNodeIndex))) {
            return this._NgIf_4_6;
        }
        return notFoundResult;
    };
    _View_ViewComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = (this.parent.context.page.theme == this.parent.context.solutionThemes.Normal);
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._NgIf_2_6.ngIf = currVal_0;
            this._expr_0 = currVal_0;
        }
        var currVal_1 = (this.parent.context.page.theme == this.parent.context.solutionThemes.TwoColumns);
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._NgIf_4_6.ngIf = currVal_1;
            this._expr_1 = currVal_1;
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_ViewComponent1;
}(import1.AppView));
function viewFactory_ViewComponent1(viewUtils, parentInjector, declarationEl) {
    return new _View_ViewComponent1(viewUtils, parentInjector, declarationEl);
}
var _View_ViewComponent2 = (function (_super) {
    __extends(_View_ViewComponent2, _super);
    function _View_ViewComponent2(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ViewComponent2, renderType_ViewComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ViewComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'dip-editor-normal', null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = import15.viewFactory_EditorNormalComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._EditorNormalComponent_0_4 = new import14.EditorNormalComponent();
        this._appEl_0.initComponent(this._EditorNormalComponent_0_4, [], compView_0);
        compView_0.create(this._EditorNormalComponent_0_4, [], null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return null;
    };
    _View_ViewComponent2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.EditorNormalComponent) && (0 === requestNodeIndex))) {
            return this._EditorNormalComponent_0_4;
        }
        return notFoundResult;
    };
    _View_ViewComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = this.parent.parent.context.solution;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._EditorNormalComponent_0_4.solution = currVal_0;
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this.parent.parent.context.page;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._EditorNormalComponent_0_4.page = currVal_1;
            this._expr_1 = currVal_1;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._EditorNormalComponent_0_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_ViewComponent2;
}(import1.AppView));
function viewFactory_ViewComponent2(viewUtils, parentInjector, declarationEl) {
    return new _View_ViewComponent2(viewUtils, parentInjector, declarationEl);
}
var _View_ViewComponent3 = (function (_super) {
    __extends(_View_ViewComponent3, _super);
    function _View_ViewComponent3(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ViewComponent3, renderType_ViewComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ViewComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'dip-editor-two-columns', null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = import17.viewFactory_EditorTwoColumnsComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._EditorTwoColumnsComponent_0_4 = new import16.EditorTwoColumnsComponent();
        this._appEl_0.initComponent(this._EditorTwoColumnsComponent_0_4, [], compView_0);
        compView_0.create(this._EditorTwoColumnsComponent_0_4, [], null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return null;
    };
    _View_ViewComponent3.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import16.EditorTwoColumnsComponent) && (0 === requestNodeIndex))) {
            return this._EditorTwoColumnsComponent_0_4;
        }
        return notFoundResult;
    };
    _View_ViewComponent3.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = this.parent.parent.context.solution;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._EditorTwoColumnsComponent_0_4.solution = currVal_0;
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this.parent.parent.context.page;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._EditorTwoColumnsComponent_0_4.page = currVal_1;
            this._expr_1 = currVal_1;
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_ViewComponent3;
}(import1.AppView));
function viewFactory_ViewComponent3(viewUtils, parentInjector, declarationEl) {
    return new _View_ViewComponent3(viewUtils, parentInjector, declarationEl);
}
var _View_ViewComponent4 = (function (_super) {
    __extends(_View_ViewComponent4, _super);
    function _View_ViewComponent4(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ViewComponent4, renderType_ViewComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ViewComponent4.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    Waiting for solution\n', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    return _View_ViewComponent4;
}(import1.AppView));
function viewFactory_ViewComponent4(viewUtils, parentInjector, declarationEl) {
    return new _View_ViewComponent4(viewUtils, parentInjector, declarationEl);
}
