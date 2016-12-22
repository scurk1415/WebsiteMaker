/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './control-header.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from './control-header.component.css.shim';
import * as import11 from '@angular/common/src/directives/ng_if';
import * as import12 from '@angular/core/src/linker/template_ref';
var renderType_ControlHeaderComponent_Host:import0.RenderComponentType = (null as any);
class _View_ControlHeaderComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _ControlHeaderComponent_0_4:import3.ControlHeaderComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ControlHeaderComponent_Host0,renderType_ControlHeaderComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('dip-control-header',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_ControlHeaderComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._ControlHeaderComponent_0_4 = new import3.ControlHeaderComponent();
    this._appEl_0.initComponent(this._ControlHeaderComponent_0_4,([] as any[]),compView_0);
    compView_0.create(this._ControlHeaderComponent_0_4,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.ControlHeaderComponent) && (0 === requestNodeIndex))) { return this._ControlHeaderComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._ControlHeaderComponent_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_ControlHeaderComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_ControlHeaderComponent_Host === (null as any))) { (renderType_ControlHeaderComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_ControlHeaderComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const ControlHeaderComponentNgFactory:import9.ComponentFactory<import3.ControlHeaderComponent> = new import9.ComponentFactory<import3.ControlHeaderComponent>('dip-control-header',viewFactory_ControlHeaderComponent_Host0,import3.ControlHeaderComponent);
const styles_ControlHeaderComponent:any[] = [import10.styles];
var renderType_ControlHeaderComponent:import0.RenderComponentType = (null as any);
class _View_ControlHeaderComponent0 extends import1.AppView<import3.ControlHeaderComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _text_6:any;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _text_12:any;
  _el_13:any;
  _text_14:any;
  _text_15:any;
  _anchor_16:any;
  /*private*/ _appEl_16:import2.AppElement;
  _TemplateRef_16_5:any;
  _NgIf_16_6:import11.NgIf;
  _text_17:any;
  _anchor_18:any;
  /*private*/ _appEl_18:import2.AppElement;
  _TemplateRef_18_5:any;
  _NgIf_18_6:import11.NgIf;
  _text_19:any;
  _anchor_20:any;
  /*private*/ _appEl_20:import2.AppElement;
  _TemplateRef_20_5:any;
  _NgIf_20_6:import11.NgIf;
  _text_21:any;
  _el_22:any;
  _text_23:any;
  _text_24:any;
  _text_25:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ControlHeaderComponent0,renderType_ControlHeaderComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','control-header-wrapper clearfix');
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'div',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','left');
    this._text_3 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_2,'h1',(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'',(null as any));
    this._text_6 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._text_7 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_8 = this.renderer.createElement(this._el_0,'div',(null as any));
    this.renderer.setElementAttribute(this._el_8,'class','right');
    this._text_9 = this.renderer.createText(this._el_8,'\n        ',(null as any));
    this._el_10 = this.renderer.createElement(this._el_8,'button',(null as any));
    this._text_11 = this.renderer.createText(this._el_10,'Edit',(null as any));
    this._text_12 = this.renderer.createText(this._el_8,'\n        ',(null as any));
    this._el_13 = this.renderer.createElement(this._el_8,'button',(null as any));
    this._text_14 = this.renderer.createText(this._el_13,'Style',(null as any));
    this._text_15 = this.renderer.createText(this._el_8,'\n        ',(null as any));
    this._anchor_16 = this.renderer.createTemplateAnchor(this._el_8,(null as any));
    this._appEl_16 = new import2.AppElement(16,8,this,this._anchor_16);
    this._TemplateRef_16_5 = new import12.TemplateRef_(this._appEl_16,viewFactory_ControlHeaderComponent1);
    this._NgIf_16_6 = new import11.NgIf(this._appEl_16.vcRef,this._TemplateRef_16_5);
    this._text_17 = this.renderer.createText(this._el_8,'\n\n        ',(null as any));
    this._anchor_18 = this.renderer.createTemplateAnchor(this._el_8,(null as any));
    this._appEl_18 = new import2.AppElement(18,8,this,this._anchor_18);
    this._TemplateRef_18_5 = new import12.TemplateRef_(this._appEl_18,viewFactory_ControlHeaderComponent2);
    this._NgIf_18_6 = new import11.NgIf(this._appEl_18.vcRef,this._TemplateRef_18_5);
    this._text_19 = this.renderer.createText(this._el_8,'\n        ',(null as any));
    this._anchor_20 = this.renderer.createTemplateAnchor(this._el_8,(null as any));
    this._appEl_20 = new import2.AppElement(20,8,this,this._anchor_20);
    this._TemplateRef_20_5 = new import12.TemplateRef_(this._appEl_20,viewFactory_ControlHeaderComponent3);
    this._NgIf_20_6 = new import11.NgIf(this._appEl_20.vcRef,this._TemplateRef_20_5);
    this._text_21 = this.renderer.createText(this._el_8,'\n\n        ',(null as any));
    this._el_22 = this.renderer.createElement(this._el_8,'button',(null as any));
    this._text_23 = this.renderer.createText(this._el_22,'Close',(null as any));
    this._text_24 = this.renderer.createText(this._el_8,'\n    ',(null as any));
    this._text_25 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_10,'click',this.eventHandler(this._handle_click_10_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_13,'click',this.eventHandler(this._handle_click_13_0.bind(this)));
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    var disposable_2:Function = this.renderer.listen(this._el_22,'click',this.eventHandler(this._handle_click_22_0.bind(this)));
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._text_15,
      this._anchor_16,
      this._text_17,
      this._anchor_18,
      this._text_19,
      this._anchor_20,
      this._text_21,
      this._el_22,
      this._text_23,
      this._text_24,
      this._text_25
    ]
    ,[
      disposable_0,
      disposable_1,
      disposable_2
    ]
    ,([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import12.TemplateRef) && (16 === requestNodeIndex))) { return this._TemplateRef_16_5; }
    if (((token === import11.NgIf) && (16 === requestNodeIndex))) { return this._NgIf_16_6; }
    if (((token === import12.TemplateRef) && (18 === requestNodeIndex))) { return this._TemplateRef_18_5; }
    if (((token === import11.NgIf) && (18 === requestNodeIndex))) { return this._NgIf_18_6; }
    if (((token === import12.TemplateRef) && (20 === requestNodeIndex))) { return this._TemplateRef_20_5; }
    if (((token === import11.NgIf) && (20 === requestNodeIndex))) { return this._NgIf_20_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_3:any = this.context.control.theme_on;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._NgIf_16_6.ngIf = currVal_3;
      this._expr_3 = currVal_3;
    }
    const currVal_4:boolean = (!this.context.control.float && !this.context.control.disableDock);
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._NgIf_18_6.ngIf = currVal_4;
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = (this.context.control.float && !this.context.control.disableDock);
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this._NgIf_20_6.ngIf = currVal_5;
      this._expr_5 = currVal_5;
    }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = import4.interpolate(1,'',this.context.control.name,'');
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setText(this._text_5,currVal_0);
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_10_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>(this.context.control.selection = this.context.controlViews.Edit)) !== false);
    return (true && pd_0);
  }
  private _handle_click_13_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>(this.context.control.selection = this.context.controlViews.Style)) !== false);
    return (true && pd_0);
  }
  private _handle_click_22_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>(this.context.control.showControl = false)) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_ControlHeaderComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.ControlHeaderComponent> {
  if ((renderType_ControlHeaderComponent === (null as any))) { (renderType_ControlHeaderComponent = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.Emulated,styles_ControlHeaderComponent,{})); }
  return new _View_ControlHeaderComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_ControlHeaderComponent1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ControlHeaderComponent1,renderType_ControlHeaderComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'button',(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'Theme',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_0,'click',this.eventHandler(this._handle_click_0_0.bind(this)));
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,[disposable_0],([] as any[]));
    return (null as any);
  }
  private _handle_click_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>(this.parent.context.control.selection = this.parent.context.controlViews.Theme)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_ControlHeaderComponent1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_ControlHeaderComponent1(viewUtils,parentInjector,declarationEl);
}
class _View_ControlHeaderComponent2 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ControlHeaderComponent2,renderType_ControlHeaderComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'button',(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'Float',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_0,'click',this.eventHandler(this._handle_click_0_0.bind(this)));
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,[disposable_0],([] as any[]));
    return (null as any);
  }
  private _handle_click_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>(this.parent.context.control.float = true)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_ControlHeaderComponent2(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_ControlHeaderComponent2(viewUtils,parentInjector,declarationEl);
}
class _View_ControlHeaderComponent3 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ControlHeaderComponent3,renderType_ControlHeaderComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'button',(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'Dock',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_0,'click',this.eventHandler(this._handle_click_0_0.bind(this)));
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,[disposable_0],([] as any[]));
    return (null as any);
  }
  private _handle_click_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>(this.parent.context.control.float = false)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_ControlHeaderComponent3(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_ControlHeaderComponent3(viewUtils,parentInjector,declarationEl);
}