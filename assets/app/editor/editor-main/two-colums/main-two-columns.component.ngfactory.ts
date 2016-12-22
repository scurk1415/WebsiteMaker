/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './main-two-columns.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from './main-two-columns.component.css';
import * as import11 from '@angular/common/src/directives/ng_style';
import * as import12 from '@angular/common/src/directives/ng_if';
import * as import13 from '../main-control.component';
import * as import14 from '../../../shared/pipes/sanitize-html.pipe';
import * as import15 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import16 from '@angular/core/src/linker/element_ref';
import * as import17 from '@angular/core/src/linker/template_ref';
import * as import18 from '../main-control.component.ngfactory';
import * as import19 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import20 from '../../shared/overlay.component';
import * as import21 from '../../shared/overlay.component.ngfactory';
import * as import22 from '@angular/core/src/security';
import * as import23 from '../layouts/main-layout-grid.component';
import * as import24 from '../layouts/main-layout-grid.component.ngfactory';
import * as import25 from '../layouts/main-layout-rows.component';
import * as import26 from '../layouts/main-layout-rows.component.ngfactory';
import * as import27 from '../layouts/main-layout-text.component';
import * as import28 from '../layouts/main-layout-text.component.ngfactory';
import * as import29 from '../layouts/scroll/main-scroll.component';
import * as import30 from '../layouts/scroll/main-scroll.component.ngfactory';
var renderType_MainTwoColumnsComponent_Host:import0.RenderComponentType = (null as any);
class _View_MainTwoColumnsComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _MainTwoColumnsComponent_0_4:import3.MainTwoColumnsComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_MainTwoColumnsComponent_Host0,renderType_MainTwoColumnsComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('dip-main-two-columns',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_MainTwoColumnsComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._MainTwoColumnsComponent_0_4 = new import3.MainTwoColumnsComponent();
    this._appEl_0.initComponent(this._MainTwoColumnsComponent_0_4,([] as any[]),compView_0);
    compView_0.create(this._MainTwoColumnsComponent_0_4,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.MainTwoColumnsComponent) && (0 === requestNodeIndex))) { return this._MainTwoColumnsComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._MainTwoColumnsComponent_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_MainTwoColumnsComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_MainTwoColumnsComponent_Host === (null as any))) { (renderType_MainTwoColumnsComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_MainTwoColumnsComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const MainTwoColumnsComponentNgFactory:import9.ComponentFactory<import3.MainTwoColumnsComponent> = new import9.ComponentFactory<import3.MainTwoColumnsComponent>('dip-main-two-columns',viewFactory_MainTwoColumnsComponent_Host0,import3.MainTwoColumnsComponent);
const styles_MainTwoColumnsComponent:any[] = [import10.styles];
var renderType_MainTwoColumnsComponent:import0.RenderComponentType = (null as any);
class _View_MainTwoColumnsComponent0 extends import1.AppView<import3.MainTwoColumnsComponent> {
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
  _anchor_8:any;
  /*private*/ _appEl_8:import2.AppElement;
  _TemplateRef_8_5:any;
  _NgIf_8_6:import12.NgIf;
  _text_9:any;
  _anchor_10:any;
  /*private*/ _appEl_10:import2.AppElement;
  _TemplateRef_10_5:any;
  _NgIf_10_6:import12.NgIf;
  _text_11:any;
  _anchor_12:any;
  /*private*/ _appEl_12:import2.AppElement;
  _TemplateRef_12_5:any;
  _NgIf_12_6:import12.NgIf;
  _text_13:any;
  _text_14:any;
  _el_15:any;
  /*private*/ _appEl_15:import2.AppElement;
  _MainControlComponent_15_4:import13.MainControlComponent;
  _map_0:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  _pipe_sanitizeHtml_0:import14.SanitizeHtml;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_MainTwoColumnsComponent0,renderType_MainTwoColumnsComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','element main-two-column');
    this._NgStyle_0_3 = new import11.NgStyle(this.parentInjector.get(import15.KeyValueDiffers),new import16.ElementRef(this._el_0),this.renderer);
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._appEl_2 = new import2.AppElement(2,0,this,this._anchor_2);
    this._TemplateRef_2_5 = new import17.TemplateRef_(this._appEl_2,viewFactory_MainTwoColumnsComponent1);
    this._NgIf_2_6 = new import12.NgIf(this._appEl_2.vcRef,this._TemplateRef_2_5);
    this._text_3 = this.renderer.createText(this._el_0,'\n\n    ',(null as any));
    this._anchor_4 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._appEl_4 = new import2.AppElement(4,0,this,this._anchor_4);
    this._TemplateRef_4_5 = new import17.TemplateRef_(this._appEl_4,viewFactory_MainTwoColumnsComponent2);
    this._NgIf_4_6 = new import12.NgIf(this._appEl_4.vcRef,this._TemplateRef_4_5);
    this._text_5 = this.renderer.createText(this._el_0,'\n\n    ',(null as any));
    this._anchor_6 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._appEl_6 = new import2.AppElement(6,0,this,this._anchor_6);
    this._TemplateRef_6_5 = new import17.TemplateRef_(this._appEl_6,viewFactory_MainTwoColumnsComponent5);
    this._NgIf_6_6 = new import12.NgIf(this._appEl_6.vcRef,this._TemplateRef_6_5);
    this._text_7 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._anchor_8 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._appEl_8 = new import2.AppElement(8,0,this,this._anchor_8);
    this._TemplateRef_8_5 = new import17.TemplateRef_(this._appEl_8,viewFactory_MainTwoColumnsComponent6);
    this._NgIf_8_6 = new import12.NgIf(this._appEl_8.vcRef,this._TemplateRef_8_5);
    this._text_9 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._anchor_10 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._appEl_10 = new import2.AppElement(10,0,this,this._anchor_10);
    this._TemplateRef_10_5 = new import17.TemplateRef_(this._appEl_10,viewFactory_MainTwoColumnsComponent7);
    this._NgIf_10_6 = new import12.NgIf(this._appEl_10.vcRef,this._TemplateRef_10_5);
    this._text_11 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._anchor_12 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._appEl_12 = new import2.AppElement(12,0,this,this._anchor_12);
    this._TemplateRef_12_5 = new import17.TemplateRef_(this._appEl_12,viewFactory_MainTwoColumnsComponent8);
    this._NgIf_12_6 = new import12.NgIf(this._appEl_12.vcRef,this._TemplateRef_12_5);
    this._text_13 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_14 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_15 = this.renderer.createElement(parentRenderNode,'dip-main-control',(null as any));
    this._appEl_15 = new import2.AppElement(15,(null as any),this,this._el_15);
    var compView_15:any = import18.viewFactory_MainControlComponent0(this.viewUtils,this.injector(15),this._appEl_15);
    this._MainControlComponent_15_4 = new import13.MainControlComponent();
    this._appEl_15.initComponent(this._MainControlComponent_15_4,([] as any[]),compView_15);
    compView_15.create(this._MainControlComponent_15_4,([] as any[]),(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_0,'mouseover',this.eventHandler(this._handle_mouseover_0_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_0,'mouseleave',this.eventHandler(this._handle_mouseleave_0_1.bind(this)));
    this._map_0 = import4.pureProxy2((p0:any,p1:any):{[key: string]:any} => {
      return {
        background: p0,
        padding: p1
      }
      ;
    });
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this._pipe_sanitizeHtml_0 = new import14.SanitizeHtml(this.parentInjector.get(import19.DomSanitizer));
    this._expr_5 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    this._expr_7 = import7.UNINITIALIZED;
    this._expr_8 = import7.UNINITIALIZED;
    this._expr_9 = import7.UNINITIALIZED;
    this._expr_10 = import7.UNINITIALIZED;
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._anchor_2,
      this._text_3,
      this._anchor_4,
      this._text_5,
      this._anchor_6,
      this._text_7,
      this._anchor_8,
      this._text_9,
      this._anchor_10,
      this._text_11,
      this._anchor_12,
      this._text_13,
      this._text_14,
      this._el_15
    ]
    ,[
      disposable_0,
      disposable_1
    ]
    ,([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import17.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import12.NgIf) && (2 === requestNodeIndex))) { return this._NgIf_2_6; }
    if (((token === import17.TemplateRef) && (4 === requestNodeIndex))) { return this._TemplateRef_4_5; }
    if (((token === import12.NgIf) && (4 === requestNodeIndex))) { return this._NgIf_4_6; }
    if (((token === import17.TemplateRef) && (6 === requestNodeIndex))) { return this._TemplateRef_6_5; }
    if (((token === import12.NgIf) && (6 === requestNodeIndex))) { return this._NgIf_6_6; }
    if (((token === import17.TemplateRef) && (8 === requestNodeIndex))) { return this._TemplateRef_8_5; }
    if (((token === import12.NgIf) && (8 === requestNodeIndex))) { return this._NgIf_8_6; }
    if (((token === import17.TemplateRef) && (10 === requestNodeIndex))) { return this._TemplateRef_10_5; }
    if (((token === import12.NgIf) && (10 === requestNodeIndex))) { return this._NgIf_10_6; }
    if (((token === import17.TemplateRef) && (12 === requestNodeIndex))) { return this._TemplateRef_12_5; }
    if (((token === import12.NgIf) && (12 === requestNodeIndex))) { return this._NgIf_12_6; }
    if (((token === import11.NgStyle) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 13)))) { return this._NgStyle_0_3; }
    if (((token === import13.MainControlComponent) && (15 === requestNodeIndex))) { return this._MainControlComponent_15_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2:any = this._map_0(this.context.main.background,this.context.main.padding);
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._NgStyle_0_3.ngStyle = currVal_2;
      this._expr_2 = currVal_2;
    }
    if (!throwOnChange) { this._NgStyle_0_3.ngDoCheck(); }
    const currVal_3:boolean = !this.context.tmpMain.showControl;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._NgIf_2_6.ngIf = currVal_3;
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = (this.context.main.layout != this.context.layoutTypes.Scroll);
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._NgIf_4_6.ngIf = currVal_4;
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = (this.context.main.layout == this.context.layoutTypes.Grid);
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this._NgIf_6_6.ngIf = currVal_5;
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = (this.context.main.layout == this.context.layoutTypes.Rows);
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this._NgIf_8_6.ngIf = currVal_6;
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = (this.context.main.layout == this.context.layoutTypes.ContactForm);
    if (import4.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this._NgIf_10_6.ngIf = currVal_7;
      this._expr_7 = currVal_7;
    }
    const currVal_8:any = (this.context.main.layout == this.context.layoutTypes.Scroll);
    if (import4.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this._NgIf_12_6.ngIf = currVal_8;
      this._expr_8 = currVal_8;
    }
    const currVal_9:any = this.context.main;
    if (import4.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this._MainControlComponent_15_4.main = currVal_9;
      this._expr_9 = currVal_9;
    }
    const currVal_10:any = this.context.tmpMain;
    if (import4.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      this._MainControlComponent_15_4.tmpMain = currVal_10;
      this._expr_10 = currVal_10;
    }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._MainControlComponent_15_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_mouseover_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>(this.context.tmpMain.showOverlay = true)) !== false);
    return (true && pd_0);
  }
  private _handle_mouseleave_0_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>(this.context.tmpMain.showOverlay = false)) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_MainTwoColumnsComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.MainTwoColumnsComponent> {
  if ((renderType_MainTwoColumnsComponent === (null as any))) { (renderType_MainTwoColumnsComponent = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,styles_MainTwoColumnsComponent,{})); }
  return new _View_MainTwoColumnsComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_MainTwoColumnsComponent1 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _OverlayComponent_0_4:import20.OverlayComponent;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_MainTwoColumnsComponent1,renderType_MainTwoColumnsComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'dip-editor-overlay',(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import21.viewFactory_OverlayComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._OverlayComponent_0_4 = new import20.OverlayComponent();
    this._appEl_0.initComponent(this._OverlayComponent_0_4,([] as any[]),compView_0);
    compView_0.create(this._OverlayComponent_0_4,([] as any[]),(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import20.OverlayComponent) && (0 === requestNodeIndex))) { return this._OverlayComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = this.parent.context.tmpMain;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._OverlayComponent_0_4.element = currVal_0;
      this._expr_0 = currVal_0;
    }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_MainTwoColumnsComponent1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_MainTwoColumnsComponent1(viewUtils,parentInjector,declarationEl);
}
class _View_MainTwoColumnsComponent2 extends import1.AppView<any> {
  _el_0:any;
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
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_MainTwoColumnsComponent2,renderType_MainTwoColumnsComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','align-center');
    this._text_1 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._appEl_2 = new import2.AppElement(2,0,this,this._anchor_2);
    this._TemplateRef_2_5 = new import17.TemplateRef_(this._appEl_2,viewFactory_MainTwoColumnsComponent3);
    this._NgIf_2_6 = new import12.NgIf(this._appEl_2.vcRef,this._TemplateRef_2_5);
    this._text_3 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._anchor_4 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._appEl_4 = new import2.AppElement(4,0,this,this._anchor_4);
    this._TemplateRef_4_5 = new import17.TemplateRef_(this._appEl_4,viewFactory_MainTwoColumnsComponent4);
    this._NgIf_4_6 = new import12.NgIf(this._appEl_4.vcRef,this._TemplateRef_4_5);
    this._text_5 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._anchor_2,
      this._text_3,
      this._anchor_4,
      this._text_5
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import17.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import12.NgIf) && (2 === requestNodeIndex))) { return this._NgIf_2_6; }
    if (((token === import17.TemplateRef) && (4 === requestNodeIndex))) { return this._TemplateRef_4_5; }
    if (((token === import12.NgIf) && (4 === requestNodeIndex))) { return this._NgIf_4_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = this.parent.context.main.title;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgIf_2_6.ngIf = currVal_0;
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this.parent.context.main.description;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._NgIf_4_6.ngIf = currVal_1;
      this._expr_1 = currVal_1;
    }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_MainTwoColumnsComponent2(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_MainTwoColumnsComponent2(viewUtils,parentInjector,declarationEl);
}
class _View_MainTwoColumnsComponent3 extends import1.AppView<any> {
  _el_0:any;
  _NgStyle_0_3:import11.NgStyle;
  _text_1:any;
  _map_0:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_MainTwoColumnsComponent3,renderType_MainTwoColumnsComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'h1',(null as any));
    this._NgStyle_0_3 = new import11.NgStyle(this.parent.parent.parentInjector.get(import15.KeyValueDiffers),new import16.ElementRef(this._el_0),this.renderer);
    this._text_1 = this.renderer.createText(this._el_0,'',(null as any));
    this._map_0 = import4.pureProxy2((p0:any,p1:any):{[key: string]:any} => {
      return {
        color: p0,
        'font-size': p1
      }
      ;
    });
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import11.NgStyle) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._NgStyle_0_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = this._map_0(this.parent.parent.context.main.title_color,this.parent.parent.context.main.title_size);
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgStyle_0_3.ngStyle = currVal_0;
      this._expr_0 = currVal_0;
    }
    if (!throwOnChange) { this._NgStyle_0_3.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_1:any = import4.interpolate(1,'\n            ',this.parent.parent.context.main.title,'\n        ');
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setText(this._text_1,currVal_1);
      this._expr_1 = currVal_1;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_MainTwoColumnsComponent3(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_MainTwoColumnsComponent3(viewUtils,parentInjector,declarationEl);
}
class _View_MainTwoColumnsComponent4 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _pipe_sanitizeHtml_0_0:any;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_MainTwoColumnsComponent4,renderType_MainTwoColumnsComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','break-word top10');
    this._text_1 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._pipe_sanitizeHtml_0_0 = import4.pureProxy1((<_View_MainTwoColumnsComponent0>this.parent.parent)._pipe_sanitizeHtml_0.transform.bind((<_View_MainTwoColumnsComponent0>this.parent.parent)._pipe_sanitizeHtml_0));
    this._expr_0 = import7.UNINITIALIZED;
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const valUnwrapper:any = new import7.ValueUnwrapper();
    this.detectContentChildrenChanges(throwOnChange);
    valUnwrapper.reset();
    const currVal_0:any = valUnwrapper.unwrap(import4.castByValue(this._pipe_sanitizeHtml_0_0,(<_View_MainTwoColumnsComponent0>this.parent.parent)._pipe_sanitizeHtml_0.transform)(this.parent.parent.context.main.description));
    if ((valUnwrapper.hasWrappedValue || import4.checkBinding(throwOnChange,this._expr_0,currVal_0))) {
      this.renderer.setElementProperty(this._el_0,'innerHTML',this.viewUtils.sanitizer.sanitize(import22.SecurityContext.HTML,currVal_0));
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_MainTwoColumnsComponent4(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_MainTwoColumnsComponent4(viewUtils,parentInjector,declarationEl);
}
class _View_MainTwoColumnsComponent5 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _MainLayoutGridComponent_0_4:import23.MainLayoutGridComponent;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_MainTwoColumnsComponent5,renderType_MainTwoColumnsComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'dip-main-layout-grid',(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import24.viewFactory_MainLayoutGridComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._MainLayoutGridComponent_0_4 = new import23.MainLayoutGridComponent();
    this._appEl_0.initComponent(this._MainLayoutGridComponent_0_4,([] as any[]),compView_0);
    compView_0.create(this._MainLayoutGridComponent_0_4,([] as any[]),(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import23.MainLayoutGridComponent) && (0 === requestNodeIndex))) { return this._MainLayoutGridComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = this.parent.context.main;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._MainLayoutGridComponent_0_4.main = currVal_0;
      this._expr_0 = currVal_0;
    }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._MainLayoutGridComponent_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_MainTwoColumnsComponent5(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_MainTwoColumnsComponent5(viewUtils,parentInjector,declarationEl);
}
class _View_MainTwoColumnsComponent6 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _MainLayoutRowsComponent_0_4:import25.MainLayoutRowsComponent;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_MainTwoColumnsComponent6,renderType_MainTwoColumnsComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'dip-main-layout-rows',(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import26.viewFactory_MainLayoutRowsComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._MainLayoutRowsComponent_0_4 = new import25.MainLayoutRowsComponent();
    this._appEl_0.initComponent(this._MainLayoutRowsComponent_0_4,([] as any[]),compView_0);
    compView_0.create(this._MainLayoutRowsComponent_0_4,([] as any[]),(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import25.MainLayoutRowsComponent) && (0 === requestNodeIndex))) { return this._MainLayoutRowsComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = this.parent.context.main;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._MainLayoutRowsComponent_0_4.main = currVal_0;
      this._expr_0 = currVal_0;
    }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._MainLayoutRowsComponent_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_MainTwoColumnsComponent6(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_MainTwoColumnsComponent6(viewUtils,parentInjector,declarationEl);
}
class _View_MainTwoColumnsComponent7 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _MainLayoutTextComponent_0_4:import27.MainLayoutTextComponent;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_MainTwoColumnsComponent7,renderType_MainTwoColumnsComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'dip-main-layout-text',(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import28.viewFactory_MainLayoutTextComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._MainLayoutTextComponent_0_4 = new import27.MainLayoutTextComponent();
    this._appEl_0.initComponent(this._MainLayoutTextComponent_0_4,([] as any[]),compView_0);
    compView_0.create(this._MainLayoutTextComponent_0_4,([] as any[]),(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import27.MainLayoutTextComponent) && (0 === requestNodeIndex))) { return this._MainLayoutTextComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = this.parent.context.main;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._MainLayoutTextComponent_0_4.main = currVal_0;
      this._expr_0 = currVal_0;
    }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._MainLayoutTextComponent_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_MainTwoColumnsComponent7(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_MainTwoColumnsComponent7(viewUtils,parentInjector,declarationEl);
}
class _View_MainTwoColumnsComponent8 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _MainScrollComponent_0_4:import29.MainScrollComponent;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_MainTwoColumnsComponent8,renderType_MainTwoColumnsComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'dip-main-layout-scroll',(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import30.viewFactory_MainScrollComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._MainScrollComponent_0_4 = new import29.MainScrollComponent();
    this._appEl_0.initComponent(this._MainScrollComponent_0_4,([] as any[]),compView_0);
    compView_0.create(this._MainScrollComponent_0_4,([] as any[]),(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import29.MainScrollComponent) && (0 === requestNodeIndex))) { return this._MainScrollComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = this.parent.context.main;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._MainScrollComponent_0_4.main = currVal_0;
      this._expr_0 = currVal_0;
    }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._MainScrollComponent_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_MainTwoColumnsComponent8(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_MainTwoColumnsComponent8(viewUtils,parentInjector,declarationEl);
}