/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './combobox.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from './combobox.component.css.shim';
import * as import11 from '@angular/common/src/directives/ng_if';
import * as import12 from '@angular/common/src/directives/ng_style';
import * as import13 from '@angular/core/src/linker/template_ref';
import * as import14 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import15 from '@angular/core/src/linker/element_ref';
import * as import16 from '@angular/common/src/directives/ng_for';
import * as import17 from '@angular/core/src/change_detection/differs/iterable_differs';
var renderType_ComboboxComponent_Host:import0.RenderComponentType = (null as any);
class _View_ComboboxComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _ComboboxComponent_0_4:import3.ComboboxComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ComboboxComponent_Host0,renderType_ComboboxComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('dip-combobox',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_ComboboxComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._ComboboxComponent_0_4 = new import3.ComboboxComponent();
    this._appEl_0.initComponent(this._ComboboxComponent_0_4,([] as any[]),compView_0);
    compView_0.create(this._ComboboxComponent_0_4,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.ComboboxComponent) && (0 === requestNodeIndex))) { return this._ComboboxComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._ComboboxComponent_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_ComboboxComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_ComboboxComponent_Host === (null as any))) { (renderType_ComboboxComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_ComboboxComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const ComboboxComponentNgFactory:import9.ComponentFactory<import3.ComboboxComponent> = new import9.ComponentFactory<import3.ComboboxComponent>('dip-combobox',viewFactory_ComboboxComponent_Host0,import3.ComboboxComponent);
const styles_ComboboxComponent:any[] = [import10.styles];
var renderType_ComboboxComponent:import0.RenderComponentType = (null as any);
class _View_ComboboxComponent0 extends import1.AppView<import3.ComboboxComponent> {
  _el_0:any;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _appEl_2:import2.AppElement;
  _TemplateRef_2_5:any;
  _NgIf_2_6:import11.NgIf;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _NgStyle_6_3:import12.NgStyle;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _text_10:any;
  _anchor_11:any;
  /*private*/ _appEl_11:import2.AppElement;
  _TemplateRef_11_5:any;
  _NgIf_11_6:import11.NgIf;
  _text_12:any;
  _text_13:any;
  _text_14:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ComboboxComponent0,renderType_ComboboxComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','form-field');
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._appEl_2 = new import2.AppElement(2,0,this,this._anchor_2);
    this._TemplateRef_2_5 = new import13.TemplateRef_(this._appEl_2,viewFactory_ComboboxComponent1);
    this._NgIf_2_6 = new import11.NgIf(this._appEl_2.vcRef,this._TemplateRef_2_5);
    this._text_3 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_0,'div',(null as any));
    this.renderer.setElementAttribute(this._el_4,'class','combobox');
    this._text_5 = this.renderer.createText(this._el_4,'\n        ',(null as any));
    this._el_6 = this.renderer.createElement(this._el_4,'div',(null as any));
    this.renderer.setElementAttribute(this._el_6,'class','cb-trigger');
    this._NgStyle_6_3 = new import12.NgStyle(this.parentInjector.get(import14.KeyValueDiffers),new import15.ElementRef(this._el_6),this.renderer);
    this._text_7 = this.renderer.createText(this._el_6,'',(null as any));
    this._el_8 = this.renderer.createElement(this._el_6,'span',(null as any));
    this.renderer.setElementAttribute(this._el_8,'class','down-arrow');
    this._text_9 = this.renderer.createText(this._el_6,'\n        ',(null as any));
    this._text_10 = this.renderer.createText(this._el_4,'\n        ',(null as any));
    this._anchor_11 = this.renderer.createTemplateAnchor(this._el_4,(null as any));
    this._appEl_11 = new import2.AppElement(11,4,this,this._anchor_11);
    this._TemplateRef_11_5 = new import13.TemplateRef_(this._appEl_11,viewFactory_ComboboxComponent2);
    this._NgIf_11_6 = new import11.NgIf(this._appEl_11.vcRef,this._TemplateRef_11_5);
    this._text_12 = this.renderer.createText(this._el_4,'\n    ',(null as any));
    this._text_13 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_14 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_6,'click',this.eventHandler(this._handle_click_6_0.bind(this)));
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._anchor_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._text_10,
      this._anchor_11,
      this._text_12,
      this._text_13,
      this._text_14
    ]
    ,[disposable_0],([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import13.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import11.NgIf) && (2 === requestNodeIndex))) { return this._NgIf_2_6; }
    if (((token === import12.NgStyle) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._NgStyle_6_3; }
    if (((token === import13.TemplateRef) && (11 === requestNodeIndex))) { return this._TemplateRef_11_5; }
    if (((token === import11.NgIf) && (11 === requestNodeIndex))) { return this._NgIf_11_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = this.context.label;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgIf_2_6.ngIf = currVal_0;
      this._expr_0 = currVal_0;
    }
    const currVal_3:any = this.context.cbStyle;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._NgStyle_6_3.ngStyle = currVal_3;
      this._expr_3 = currVal_3;
    }
    if (!throwOnChange) { this._NgStyle_6_3.ngDoCheck(); }
    const currVal_5:any = this.context.open;
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this._NgIf_11_6.ngIf = currVal_5;
      this._expr_5 = currVal_5;
    }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_2:any = (this.context.displayed_item.value === '');
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementClass(this._el_6,'empty',currVal_2);
      this._expr_2 = currVal_2;
    }
    const currVal_4:any = import4.interpolate(1,'\n            ',this.context.displayed_item.text,'\n            ');
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setText(this._text_7,currVal_4);
      this._expr_4 = currVal_4;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_6_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.onOpen()) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_ComboboxComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.ComboboxComponent> {
  if ((renderType_ComboboxComponent === (null as any))) { (renderType_ComboboxComponent = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.Emulated,styles_ComboboxComponent,{})); }
  return new _View_ComboboxComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_ComboboxComponent1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ComboboxComponent1,renderType_ComboboxComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','form-label');
    this._text_1 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'label',(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
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
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = import4.interpolate(1,'',this.parent.context.label,'');
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setText(this._text_3,currVal_0);
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_ComboboxComponent1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_ComboboxComponent1(viewUtils,parentInjector,declarationEl);
}
class _View_ComboboxComponent2 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _appEl_2:import2.AppElement;
  _TemplateRef_2_5:any;
  _NgFor_2_6:import16.NgFor;
  _text_3:any;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ComboboxComponent2,renderType_ComboboxComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'ul',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','cb-items');
    this._text_1 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._appEl_2 = new import2.AppElement(2,0,this,this._anchor_2);
    this._TemplateRef_2_5 = new import13.TemplateRef_(this._appEl_2,viewFactory_ComboboxComponent3);
    this._NgFor_2_6 = new import16.NgFor(this._appEl_2.vcRef,this._TemplateRef_2_5,this.parent.parentInjector.get(import17.IterableDiffers),this.parent.ref);
    this._text_3 = this.renderer.createText(this._el_0,'\n        ',(null as any));
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
    if (((token === import13.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import16.NgFor) && (2 === requestNodeIndex))) { return this._NgFor_2_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_0:any = this.parent.context.items;
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
function viewFactory_ComboboxComponent2(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_ComboboxComponent2(viewUtils,parentInjector,declarationEl);
}
class _View_ComboboxComponent3 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ComboboxComponent3,renderType_ComboboxComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'li',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','cb-item');
    this._text_1 = this.renderer.createText(this._el_0,'',(null as any));
    this._expr_1 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_0,'click',this.eventHandler(this._handle_click_0_0.bind(this)));
    this._expr_2 = import7.UNINITIALIZED;
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,[disposable_0],([] as any[]));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_1:any = (this.parent.parent.context.displayed_item.value == this.context.$implicit.value);
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementClass(this._el_0,'selected',currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = import4.interpolate(1,'\n\n                ',this.context.$implicit.text,'\n            ');
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setText(this._text_1,currVal_2);
      this._expr_2 = currVal_2;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.parent.context.selectItem(this.context.$implicit.value)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_ComboboxComponent3(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_ComboboxComponent3(viewUtils,parentInjector,declarationEl);
}