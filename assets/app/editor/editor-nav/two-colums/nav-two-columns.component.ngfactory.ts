/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './nav-two-columns.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from './nav-two-columns.component.css.shim';
import * as import11 from '@angular/common/src/directives/ng_style';
import * as import12 from '@angular/common/src/directives/ng_if';
import * as import13 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import14 from '@angular/core/src/linker/element_ref';
import * as import15 from '@angular/core/src/linker/template_ref';
import * as import16 from '../../shared/overlay.component';
import * as import17 from '../../shared/overlay.component.ngfactory';
import * as import18 from '../../shared/hidden.component';
import * as import19 from '../../shared/hidden.component.ngfactory';
import * as import20 from '@angular/common/src/directives/ng_for';
import * as import21 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import22 from '@angular/core/src/security';
import * as import23 from '../nav-control.component';
import * as import24 from '../nav-control.component.ngfactory';
import * as import25 from '../../editor.service';
var renderType_NavTwoColumnsComponent_Host:import0.RenderComponentType = (null as any);
class _View_NavTwoColumnsComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _NavTwoColumnsComponent_0_4:import3.NavTwoColumnsComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_NavTwoColumnsComponent_Host0,renderType_NavTwoColumnsComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('dip-nav-two-columns',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_NavTwoColumnsComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._NavTwoColumnsComponent_0_4 = new import3.NavTwoColumnsComponent();
    this._appEl_0.initComponent(this._NavTwoColumnsComponent_0_4,([] as any[]),compView_0);
    compView_0.create(this._NavTwoColumnsComponent_0_4,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.NavTwoColumnsComponent) && (0 === requestNodeIndex))) { return this._NavTwoColumnsComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._NavTwoColumnsComponent_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_NavTwoColumnsComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_NavTwoColumnsComponent_Host === (null as any))) { (renderType_NavTwoColumnsComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_NavTwoColumnsComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const NavTwoColumnsComponentNgFactory:import9.ComponentFactory<import3.NavTwoColumnsComponent> = new import9.ComponentFactory<import3.NavTwoColumnsComponent>('dip-nav-two-columns',viewFactory_NavTwoColumnsComponent_Host0,import3.NavTwoColumnsComponent);
const styles_NavTwoColumnsComponent:any[] = [import10.styles];
var renderType_NavTwoColumnsComponent:import0.RenderComponentType = (null as any);
class _View_NavTwoColumnsComponent0 extends import1.AppView<import3.NavTwoColumnsComponent> {
  _el_0:any;
  _NgStyle_0_3:import11.NgStyle;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _appEl_2:import2.AppElement;
  _TemplateRef_2_5:any;
  _NgIf_2_6:import12.NgIf;
  _text_3:any;
  _anchor_4:any;
  /*private*/ _appEl_4:import2.AppElement;
  _TemplateRef_4_5:any;
  _NgIf_4_6:import12.NgIf;
  _text_5:any;
  _anchor_6:any;
  /*private*/ _appEl_6:import2.AppElement;
  _TemplateRef_6_5:any;
  _NgIf_6_6:import12.NgIf;
  _text_7:any;
  _text_8:any;
  _anchor_9:any;
  /*private*/ _appEl_9:import2.AppElement;
  _TemplateRef_9_5:any;
  _NgIf_9_6:import12.NgIf;
  _map_0:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_NavTwoColumnsComponent0,renderType_NavTwoColumnsComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','element editor_nav');
    this._NgStyle_0_3 = new import11.NgStyle(this.parentInjector.get(import13.KeyValueDiffers),new import14.ElementRef(this._el_0),this.renderer);
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._appEl_2 = new import2.AppElement(2,0,this,this._anchor_2);
    this._TemplateRef_2_5 = new import15.TemplateRef_(this._appEl_2,viewFactory_NavTwoColumnsComponent1);
    this._NgIf_2_6 = new import12.NgIf(this._appEl_2.vcRef,this._TemplateRef_2_5);
    this._text_3 = this.renderer.createText(this._el_0,'\n\n    ',(null as any));
    this._anchor_4 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._appEl_4 = new import2.AppElement(4,0,this,this._anchor_4);
    this._TemplateRef_4_5 = new import15.TemplateRef_(this._appEl_4,viewFactory_NavTwoColumnsComponent2);
    this._NgIf_4_6 = new import12.NgIf(this._appEl_4.vcRef,this._TemplateRef_4_5);
    this._text_5 = this.renderer.createText(this._el_0,'\n\n    ',(null as any));
    this._anchor_6 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._appEl_6 = new import2.AppElement(6,0,this,this._anchor_6);
    this._TemplateRef_6_5 = new import15.TemplateRef_(this._appEl_6,viewFactory_NavTwoColumnsComponent3);
    this._NgIf_6_6 = new import12.NgIf(this._appEl_6.vcRef,this._TemplateRef_6_5);
    this._text_7 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_8 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._anchor_9 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._appEl_9 = new import2.AppElement(9,(null as any),this,this._anchor_9);
    this._TemplateRef_9_5 = new import15.TemplateRef_(this._appEl_9,viewFactory_NavTwoColumnsComponent5);
    this._NgIf_9_6 = new import12.NgIf(this._appEl_9.vcRef,this._TemplateRef_9_5);
    var disposable_0:Function = this.renderer.listen(this._el_0,'mouseover',this.eventHandler(this._handle_mouseover_0_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_0,'mouseleave',this.eventHandler(this._handle_mouseleave_0_1.bind(this)));
    this._map_0 = import4.pureProxy1((p0:any):{[key: string]:any} => {
      return {background: p0};
    });
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._anchor_2,
      this._text_3,
      this._anchor_4,
      this._text_5,
      this._anchor_6,
      this._text_7,
      this._text_8,
      this._anchor_9
    ]
    ,[
      disposable_0,
      disposable_1
    ]
    ,([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import15.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import12.NgIf) && (2 === requestNodeIndex))) { return this._NgIf_2_6; }
    if (((token === import15.TemplateRef) && (4 === requestNodeIndex))) { return this._TemplateRef_4_5; }
    if (((token === import12.NgIf) && (4 === requestNodeIndex))) { return this._NgIf_4_6; }
    if (((token === import15.TemplateRef) && (6 === requestNodeIndex))) { return this._TemplateRef_6_5; }
    if (((token === import12.NgIf) && (6 === requestNodeIndex))) { return this._NgIf_6_6; }
    if (((token === import11.NgStyle) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._NgStyle_0_3; }
    if (((token === import15.TemplateRef) && (9 === requestNodeIndex))) { return this._TemplateRef_9_5; }
    if (((token === import12.NgIf) && (9 === requestNodeIndex))) { return this._NgIf_9_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2:any = this._map_0(this.context.nav.background);
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._NgStyle_0_3.ngStyle = currVal_2;
      this._expr_2 = currVal_2;
    }
    if (!throwOnChange) { this._NgStyle_0_3.ngDoCheck(); }
    const currVal_3:boolean = !this.context.tmpNav.showControl;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._NgIf_2_6.ngIf = currVal_3;
      this._expr_3 = currVal_3;
    }
    const currVal_4:boolean = !this.context.nav.display;
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._NgIf_4_6.ngIf = currVal_4;
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = this.context.nav.display;
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this._NgIf_6_6.ngIf = currVal_5;
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = this.context.tmpNav.showControl;
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this._NgIf_9_6.ngIf = currVal_6;
      this._expr_6 = currVal_6;
    }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_mouseover_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>(this.context.tmpNav.showOverlay = true)) !== false);
    return (true && pd_0);
  }
  private _handle_mouseleave_0_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>(this.context.tmpNav.showOverlay = false)) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_NavTwoColumnsComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.NavTwoColumnsComponent> {
  if ((renderType_NavTwoColumnsComponent === (null as any))) { (renderType_NavTwoColumnsComponent = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.Emulated,styles_NavTwoColumnsComponent,{})); }
  return new _View_NavTwoColumnsComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_NavTwoColumnsComponent1 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _OverlayComponent_0_4:import16.OverlayComponent;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_NavTwoColumnsComponent1,renderType_NavTwoColumnsComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'dip-editor-overlay',(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import17.viewFactory_OverlayComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._OverlayComponent_0_4 = new import16.OverlayComponent();
    this._appEl_0.initComponent(this._OverlayComponent_0_4,([] as any[]),compView_0);
    compView_0.create(this._OverlayComponent_0_4,([] as any[]),(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import16.OverlayComponent) && (0 === requestNodeIndex))) { return this._OverlayComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = this.parent.context.tmpNav;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._OverlayComponent_0_4.element = currVal_0;
      this._expr_0 = currVal_0;
    }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_NavTwoColumnsComponent1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_NavTwoColumnsComponent1(viewUtils,parentInjector,declarationEl);
}
class _View_NavTwoColumnsComponent2 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _HiddenComponent_0_4:import18.HiddenComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_NavTwoColumnsComponent2,renderType_NavTwoColumnsComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'dip-hidden',(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import19.viewFactory_HiddenComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._HiddenComponent_0_4 = new import18.HiddenComponent();
    this._appEl_0.initComponent(this._HiddenComponent_0_4,([] as any[]),compView_0);
    compView_0.create(this._HiddenComponent_0_4,([] as any[]),(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import18.HiddenComponent) && (0 === requestNodeIndex))) { return this._HiddenComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._HiddenComponent_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_NavTwoColumnsComponent2(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_NavTwoColumnsComponent2(viewUtils,parentInjector,declarationEl);
}
class _View_NavTwoColumnsComponent3 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _appEl_2:import2.AppElement;
  _TemplateRef_2_5:any;
  _NgFor_2_6:import20.NgFor;
  _text_3:any;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_NavTwoColumnsComponent3,renderType_NavTwoColumnsComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'ul',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','nav-menu');
    this._text_1 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._appEl_2 = new import2.AppElement(2,0,this,this._anchor_2);
    this._TemplateRef_2_5 = new import15.TemplateRef_(this._appEl_2,viewFactory_NavTwoColumnsComponent4);
    this._NgFor_2_6 = new import20.NgFor(this._appEl_2.vcRef,this._TemplateRef_2_5,this.parent.parentInjector.get(import21.IterableDiffers),this.parent.ref);
    this._text_3 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._anchor_2,
      this._text_3
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import15.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import20.NgFor) && (2 === requestNodeIndex))) { return this._NgFor_2_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_0:any = this.parent.context.nav.menu;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgFor_2_6.ngForOf = currVal_0;
      if ((changes === (null as any))) { (changes = {}); }
      changes['ngForOf'] = new import7.SimpleChange(this._expr_0,currVal_0);
      this._expr_0 = currVal_0;
    }
    if ((changes !== (null as any))) { this._NgFor_2_6.ngOnChanges(changes); }
    if (!throwOnChange) { this._NgFor_2_6.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_NavTwoColumnsComponent3(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_NavTwoColumnsComponent3(viewUtils,parentInjector,declarationEl);
}
class _View_NavTwoColumnsComponent4 extends import1.AppView<any> {
  _el_0:any;
  _NgStyle_0_3:import11.NgStyle;
  _text_1:any;
  _el_2:any;
  _NgStyle_2_3:import11.NgStyle;
  _text_3:any;
  _text_4:any;
  _map_0:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  _map_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_NavTwoColumnsComponent4,renderType_NavTwoColumnsComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'li',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','nav-menu-item');
    this._NgStyle_0_3 = new import11.NgStyle(this.parent.parent.parentInjector.get(import13.KeyValueDiffers),new import14.ElementRef(this._el_0),this.renderer);
    this._text_1 = this.renderer.createText(this._el_0,'\n\n            ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'a',(null as any));
    this._NgStyle_2_3 = new import11.NgStyle(this.parent.parent.parentInjector.get(import13.KeyValueDiffers),new import14.ElementRef(this._el_2),this.renderer);
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._map_0 = import4.pureProxy1((p0:any):{[key: string]:any} => {
      return {background: p0};
    });
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._map_1 = import4.pureProxy2((p0:any,p1:any):{[key: string]:any} => {
      return {
        color: p0,
        'font-size': p1
      }
      ;
    });
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import11.NgStyle) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._NgStyle_2_3; }
    if (((token === import11.NgStyle) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 4)))) { return this._NgStyle_0_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = this._map_0(this.parent.parent.context.nav.tab_color);
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgStyle_0_3.ngStyle = currVal_0;
      this._expr_0 = currVal_0;
    }
    if (!throwOnChange) { this._NgStyle_0_3.ngDoCheck(); }
    const currVal_2:any = this._map_1(this.parent.parent.context.nav.font_color,this.parent.parent.context.nav.font_size);
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._NgStyle_2_3.ngStyle = currVal_2;
      this._expr_2 = currVal_2;
    }
    if (!throwOnChange) { this._NgStyle_2_3.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_1:any = this.context.$implicit.action;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementAttribute(this._el_2,'href',((this.viewUtils.sanitizer.sanitize(import22.SecurityContext.URL,currVal_1) == (null as any))? (null as any): this.viewUtils.sanitizer.sanitize(import22.SecurityContext.URL,currVal_1).toString()));
      this._expr_1 = currVal_1;
    }
    const currVal_3:any = import4.interpolate(1,'',this.context.$implicit.title,'');
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setText(this._text_3,currVal_3);
      this._expr_3 = currVal_3;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_NavTwoColumnsComponent4(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_NavTwoColumnsComponent4(viewUtils,parentInjector,declarationEl);
}
class _View_NavTwoColumnsComponent5 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _NavControlComponent_0_4:import23.NavControlComponent;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_NavTwoColumnsComponent5,renderType_NavTwoColumnsComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'dip-nav-control',(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import24.viewFactory_NavControlComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._NavControlComponent_0_4 = new import23.NavControlComponent(this.parentInjector.get(import25.EditorService));
    this._appEl_0.initComponent(this._NavControlComponent_0_4,([] as any[]),compView_0);
    compView_0.create(this._NavControlComponent_0_4,([] as any[]),(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import23.NavControlComponent) && (0 === requestNodeIndex))) { return this._NavControlComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = this.parent.context.nav;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NavControlComponent_0_4.nav = currVal_0;
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this.parent.context.pages;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._NavControlComponent_0_4.pages = currVal_1;
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this.parent.context.tmpNav;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._NavControlComponent_0_4.tmpNav = currVal_2;
      this._expr_2 = currVal_2;
    }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._NavControlComponent_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_NavTwoColumnsComponent5(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_NavTwoColumnsComponent5(viewUtils,parentInjector,declarationEl);
}