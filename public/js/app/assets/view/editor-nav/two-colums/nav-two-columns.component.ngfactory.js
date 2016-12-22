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
import * as import3 from './nav-two-columns.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '../../app.service';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from './nav-two-columns.component.css.shim';
import * as import12 from '@angular/common/src/directives/ng_if';
import * as import13 from '@angular/core/src/linker/template_ref';
import * as import14 from '@angular/common/src/directives/ng_style';
import * as import15 from '@angular/common/src/directives/ng_for';
import * as import16 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import17 from '@angular/core/src/linker/element_ref';
import * as import18 from '@angular/core/src/change_detection/differs/iterable_differs';
var renderType_NavTwoColumnsComponent_Host = null;
var _View_NavTwoColumnsComponent_Host0 = (function (_super) {
    __extends(_View_NavTwoColumnsComponent_Host0, _super);
    function _View_NavTwoColumnsComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_NavTwoColumnsComponent_Host0, renderType_NavTwoColumnsComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_NavTwoColumnsComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('dip-nav-two-columns', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_NavTwoColumnsComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._NavTwoColumnsComponent_0_4 = new import3.NavTwoColumnsComponent(this.parentInjector.get(import8.AppService));
        this._appEl_0.initComponent(this._NavTwoColumnsComponent_0_4, [], compView_0);
        compView_0.create(this._NavTwoColumnsComponent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_NavTwoColumnsComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.NavTwoColumnsComponent) && (0 === requestNodeIndex))) {
            return this._NavTwoColumnsComponent_0_4;
        }
        return notFoundResult;
    };
    return _View_NavTwoColumnsComponent_Host0;
}(import1.AppView));
function viewFactory_NavTwoColumnsComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_NavTwoColumnsComponent_Host === null)) {
        (renderType_NavTwoColumnsComponent_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_NavTwoColumnsComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var NavTwoColumnsComponentNgFactory = new import10.ComponentFactory('dip-nav-two-columns', viewFactory_NavTwoColumnsComponent_Host0, import3.NavTwoColumnsComponent);
var styles_NavTwoColumnsComponent = [import11.styles];
var renderType_NavTwoColumnsComponent = null;
var _View_NavTwoColumnsComponent0 = (function (_super) {
    __extends(_View_NavTwoColumnsComponent0, _super);
    function _View_NavTwoColumnsComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_NavTwoColumnsComponent0, renderType_NavTwoColumnsComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_NavTwoColumnsComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._anchor_0 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._anchor_0);
        this._TemplateRef_0_5 = new import13.TemplateRef_(this._appEl_0, viewFactory_NavTwoColumnsComponent1);
        this._NgIf_0_6 = new import12.NgIf(this._appEl_0.vcRef, this._TemplateRef_0_5);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([], [this._anchor_0], [], []);
        return null;
    };
    _View_NavTwoColumnsComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import13.TemplateRef) && (0 === requestNodeIndex))) {
            return this._TemplateRef_0_5;
        }
        if (((token === import12.NgIf) && (0 === requestNodeIndex))) {
            return this._NgIf_0_6;
        }
        return notFoundResult;
    };
    _View_NavTwoColumnsComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = this.context.nav.display;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._NgIf_0_6.ngIf = currVal_0;
            this._expr_0 = currVal_0;
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_NavTwoColumnsComponent0;
}(import1.AppView));
export function viewFactory_NavTwoColumnsComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_NavTwoColumnsComponent === null)) {
        (renderType_NavTwoColumnsComponent = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.Emulated, styles_NavTwoColumnsComponent, {}));
    }
    return new _View_NavTwoColumnsComponent0(viewUtils, parentInjector, declarationEl);
}
var _View_NavTwoColumnsComponent1 = (function (_super) {
    __extends(_View_NavTwoColumnsComponent1, _super);
    function _View_NavTwoColumnsComponent1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_NavTwoColumnsComponent1, renderType_NavTwoColumnsComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_NavTwoColumnsComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'element editor_nav');
        this._NgStyle_0_3 = new import14.NgStyle(this.parentInjector.get(import16.KeyValueDiffers), new import17.ElementRef(this._el_0), this.renderer);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ul', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'nav-menu');
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._anchor_4 = this.renderer.createTemplateAnchor(this._el_2, null);
        this._appEl_4 = new import2.AppElement(4, 2, this, this._anchor_4);
        this._TemplateRef_4_5 = new import13.TemplateRef_(this._appEl_4, viewFactory_NavTwoColumnsComponent2);
        this._NgFor_4_6 = new import15.NgFor(this._appEl_4.vcRef, this._TemplateRef_4_5, this.parentInjector.get(import18.IterableDiffers), this.parent.ref);
        this._text_5 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_6 = this.renderer.createText(this._el_0, '\n', null);
        this._map_0 = import4.pureProxy1(function (p0) {
            return { background: p0 };
        });
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._anchor_4,
            this._text_5,
            this._text_6
        ], [], []);
        return null;
    };
    _View_NavTwoColumnsComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import13.TemplateRef) && (4 === requestNodeIndex))) {
            return this._TemplateRef_4_5;
        }
        if (((token === import15.NgFor) && (4 === requestNodeIndex))) {
            return this._NgFor_4_6;
        }
        if (((token === import14.NgStyle) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._NgStyle_0_3;
        }
        return notFoundResult;
    };
    _View_NavTwoColumnsComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        var currVal_0 = this._map_0(this.parent.context.nav.background);
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._NgStyle_0_3.ngStyle = currVal_0;
            this._expr_0 = currVal_0;
        }
        if (!throwOnChange) {
            this._NgStyle_0_3.ngDoCheck();
        }
        changes = null;
        var currVal_1 = this.parent.context.nav.menu;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._NgFor_4_6.ngForOf = currVal_1;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_1, currVal_1);
            this._expr_1 = currVal_1;
        }
        if ((changes !== null)) {
            this._NgFor_4_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_4_6.ngDoCheck();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_NavTwoColumnsComponent1;
}(import1.AppView));
function viewFactory_NavTwoColumnsComponent1(viewUtils, parentInjector, declarationEl) {
    return new _View_NavTwoColumnsComponent1(viewUtils, parentInjector, declarationEl);
}
var _View_NavTwoColumnsComponent2 = (function (_super) {
    __extends(_View_NavTwoColumnsComponent2, _super);
    function _View_NavTwoColumnsComponent2(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_NavTwoColumnsComponent2, renderType_NavTwoColumnsComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_NavTwoColumnsComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'li', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'nav-menu-item');
        this._NgStyle_0_3 = new import14.NgStyle(this.parent.parentInjector.get(import16.KeyValueDiffers), new import17.ElementRef(this._el_0), this.renderer);
        this._text_1 = this.renderer.createText(this._el_0, '\n\n            ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'a', null);
        this._NgStyle_2_3 = new import14.NgStyle(this.parent.parentInjector.get(import16.KeyValueDiffers), new import17.ElementRef(this._el_2), this.renderer);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n        ', null);
        this._map_0 = import4.pureProxy1(function (p0) {
            return { background: p0 };
        });
        this._expr_0 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_2, 'click', this.eventHandler(this._handle_click_2_0.bind(this)));
        this._map_1 = import4.pureProxy2(function (p0, p1) {
            return {
                color: p0,
                'font-size': p1
            };
        });
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4
        ], [disposable_0], []);
        return null;
    };
    _View_NavTwoColumnsComponent2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.NgStyle) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._NgStyle_2_3;
        }
        if (((token === import14.NgStyle) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 4)))) {
            return this._NgStyle_0_3;
        }
        return notFoundResult;
    };
    _View_NavTwoColumnsComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = this._map_0(this.parent.parent.context.nav.tab_color);
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._NgStyle_0_3.ngStyle = currVal_0;
            this._expr_0 = currVal_0;
        }
        if (!throwOnChange) {
            this._NgStyle_0_3.ngDoCheck();
        }
        var currVal_2 = this._map_1(this.parent.parent.context.nav.font_color, this.parent.parent.context.nav.font_size);
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this._NgStyle_2_3.ngStyle = currVal_2;
            this._expr_2 = currVal_2;
        }
        if (!throwOnChange) {
            this._NgStyle_2_3.ngDoCheck();
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_3 = import4.interpolate(1, '', this.context.$implicit.title, '');
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setText(this._text_3, currVal_3);
            this._expr_3 = currVal_3;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_NavTwoColumnsComponent2.prototype._handle_click_2_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.parent.parent.context.onPageChange(this.context.$implicit) !== false);
        return (true && pd_0);
    };
    return _View_NavTwoColumnsComponent2;
}(import1.AppView));
function viewFactory_NavTwoColumnsComponent2(viewUtils, parentInjector, declarationEl) {
    return new _View_NavTwoColumnsComponent2(viewUtils, parentInjector, declarationEl);
}
