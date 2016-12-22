/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './market.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from './market.service';
import * as import9 from '@angular/router/src/router';
import * as import10 from '../auth/auth.service';
import * as import11 from '@angular/core/src/metadata/view';
import * as import12 from '@angular/core/src/linker/component_factory';
import * as import13 from './market.component.css.shim';
import * as import14 from '@angular/common/src/directives/ng_for';
import * as import15 from '../shared/pipes/formated-price.pipe';
import * as import16 from '@angular/core/src/linker/template_ref';
import * as import17 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import18 from '@angular/common/src/directives/ng_if';
import * as import19 from '@angular/router/src/directives/router_link';
import * as import20 from '@angular/router/src/router_state';
import * as import21 from '@angular/common/src/location/location_strategy';
import * as import22 from '@angular/core/src/security';
var renderType_MarketComponent_Host:import0.RenderComponentType = (null as any);
class _View_MarketComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _MarketComponent_0_4:import3.MarketComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_MarketComponent_Host0,renderType_MarketComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('dip-market',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_MarketComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._MarketComponent_0_4 = new import3.MarketComponent(this.parentInjector.get(import8.MarketService),this.renderer,this.parentInjector.get(import9.Router),this.parentInjector.get(import10.AuthService));
    this._appEl_0.initComponent(this._MarketComponent_0_4,([] as any[]),compView_0);
    compView_0.create(this._MarketComponent_0_4,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.MarketComponent) && (0 === requestNodeIndex))) { return this._MarketComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._MarketComponent_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._MarketComponent_0_4.ngOnDestroy();
  }
}
function viewFactory_MarketComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_MarketComponent_Host === (null as any))) { (renderType_MarketComponent_Host = viewUtils.createRenderComponentType('',0,import11.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_MarketComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const MarketComponentNgFactory:import12.ComponentFactory<import3.MarketComponent> = new import12.ComponentFactory<import3.MarketComponent>('dip-market',viewFactory_MarketComponent_Host0,import3.MarketComponent);
const styles_MarketComponent:any[] = [import13.styles];
var renderType_MarketComponent:import0.RenderComponentType = (null as any);
class _View_MarketComponent0 extends import1.AppView<import3.MarketComponent> {
  _el_0:any;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _appEl_2:import2.AppElement;
  _TemplateRef_2_5:any;
  _NgFor_2_6:import14.NgFor;
  _text_3:any;
  /*private*/ _expr_0:any;
  _pipe_formatedPrice_0:import15.FormatedPrice;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_MarketComponent0,renderType_MarketComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','flex');
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._appEl_2 = new import2.AppElement(2,0,this,this._anchor_2);
    this._TemplateRef_2_5 = new import16.TemplateRef_(this._appEl_2,viewFactory_MarketComponent1);
    this._NgFor_2_6 = new import14.NgFor(this._appEl_2.vcRef,this._TemplateRef_2_5,this.parentInjector.get(import17.IterableDiffers),this.ref);
    this._text_3 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._pipe_formatedPrice_0 = new import15.FormatedPrice();
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._anchor_2,
      this._text_3
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import16.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import14.NgFor) && (2 === requestNodeIndex))) { return this._NgFor_2_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_0:any = this.context.plans;
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
export function viewFactory_MarketComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.MarketComponent> {
  if ((renderType_MarketComponent === (null as any))) { (renderType_MarketComponent = viewUtils.createRenderComponentType('',0,import11.ViewEncapsulation.Emulated,styles_MarketComponent,{})); }
  return new _View_MarketComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_MarketComponent1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _text_12:any;
  _anchor_13:any;
  /*private*/ _appEl_13:import2.AppElement;
  _TemplateRef_13_5:any;
  _NgIf_13_6:import18.NgIf;
  _text_14:any;
  _anchor_15:any;
  /*private*/ _appEl_15:import2.AppElement;
  _TemplateRef_15_5:any;
  _NgIf_15_6:import18.NgIf;
  _text_16:any;
  _text_17:any;
  /*private*/ _expr_0:any;
  _pipe_formatedPrice_0_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_MarketComponent1,renderType_MarketComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','columns');
    this._text_1 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'ul',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','price');
    this._text_3 = this.renderer.createText(this._el_2,'\n            ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_2,'li',(null as any));
    this.renderer.setElementAttribute(this._el_4,'class','header');
    this._text_5 = this.renderer.createText(this._el_4,'',(null as any));
    this._text_6 = this.renderer.createText(this._el_2,'\n            ',(null as any));
    this._el_7 = this.renderer.createElement(this._el_2,'li',(null as any));
    this.renderer.setElementAttribute(this._el_7,'class','grey');
    this._text_8 = this.renderer.createText(this._el_7,'',(null as any));
    this._text_9 = this.renderer.createText(this._el_2,'\n            ',(null as any));
    this._el_10 = this.renderer.createElement(this._el_2,'li',(null as any));
    this.renderer.setElementAttribute(this._el_10,'class','grey-dark');
    this._text_11 = this.renderer.createText(this._el_10,'',(null as any));
    this._text_12 = this.renderer.createText(this._el_2,'\n            ',(null as any));
    this._anchor_13 = this.renderer.createTemplateAnchor(this._el_2,(null as any));
    this._appEl_13 = new import2.AppElement(13,2,this,this._anchor_13);
    this._TemplateRef_13_5 = new import16.TemplateRef_(this._appEl_13,viewFactory_MarketComponent2);
    this._NgIf_13_6 = new import18.NgIf(this._appEl_13.vcRef,this._TemplateRef_13_5);
    this._text_14 = this.renderer.createText(this._el_2,'\n            ',(null as any));
    this._anchor_15 = this.renderer.createTemplateAnchor(this._el_2,(null as any));
    this._appEl_15 = new import2.AppElement(15,2,this,this._anchor_15);
    this._TemplateRef_15_5 = new import16.TemplateRef_(this._appEl_15,viewFactory_MarketComponent3);
    this._NgIf_15_6 = new import18.NgIf(this._appEl_15.vcRef,this._TemplateRef_15_5);
    this._text_16 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._text_17 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._pipe_formatedPrice_0_0 = import4.pureProxy1((<_View_MarketComponent0>this.parent)._pipe_formatedPrice_0.transform.bind((<_View_MarketComponent0>this.parent)._pipe_formatedPrice_0));
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._text_12,
      this._anchor_13,
      this._text_14,
      this._anchor_15,
      this._text_16,
      this._text_17
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import16.TemplateRef) && (13 === requestNodeIndex))) { return this._TemplateRef_13_5; }
    if (((token === import18.NgIf) && (13 === requestNodeIndex))) { return this._NgIf_13_6; }
    if (((token === import16.TemplateRef) && (15 === requestNodeIndex))) { return this._TemplateRef_15_5; }
    if (((token === import18.NgIf) && (15 === requestNodeIndex))) { return this._NgIf_15_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const valUnwrapper:any = new import7.ValueUnwrapper();
    const currVal_3:any = this.parent.context.isLoggedIn;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._NgIf_13_6.ngIf = currVal_3;
      this._expr_3 = currVal_3;
    }
    const currVal_4:boolean = !this.parent.context.isLoggedIn;
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._NgIf_15_6.ngIf = currVal_4;
      this._expr_4 = currVal_4;
    }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = import4.interpolate(1,'',this.context.$implicit.name,'');
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setText(this._text_5,currVal_0);
      this._expr_0 = currVal_0;
    }
    valUnwrapper.reset();
    const currVal_1:any = import4.interpolate(1,'$ ',valUnwrapper.unwrap(import4.castByValue(this._pipe_formatedPrice_0_0,(<_View_MarketComponent0>this.parent)._pipe_formatedPrice_0.transform)(this.context.$implicit.price)),'');
    if ((valUnwrapper.hasWrappedValue || import4.checkBinding(throwOnChange,this._expr_1,currVal_1))) {
      this.renderer.setText(this._text_8,currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = import4.interpolate(1,'',this.context.$implicit.solutions,' solutions');
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setText(this._text_11,currVal_2);
      this._expr_2 = currVal_2;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_MarketComponent1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_MarketComponent1(viewUtils,parentInjector,declarationEl);
}
class _View_MarketComponent2 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_MarketComponent2,renderType_MarketComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'li',(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n                ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'a',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','button');
    this._text_3 = this.renderer.createText(this._el_2,'Buy now',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_2,'click',this.eventHandler(this._handle_click_2_0.bind(this)));
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4
    ]
    ,[disposable_0],([] as any[]));
    return (null as any);
  }
  private _handle_click_2_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.parent.context.openCheckout(this.parent.context.$implicit.price,this.parent.context.$implicit.solutions)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_MarketComponent2(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_MarketComponent2(viewUtils,parentInjector,declarationEl);
}
class _View_MarketComponent3 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _RouterLinkWithHref_2_3:import19.RouterLinkWithHref;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _RouterLinkWithHref_5_3:import19.RouterLinkWithHref;
  _text_6:any;
  _text_7:any;
  _arr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  _arr_1:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_MarketComponent3,renderType_MarketComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'li',(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n                ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'a',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','button');
    this._RouterLinkWithHref_2_3 = new import19.RouterLinkWithHref(this.parent.parent.parentInjector.get(import9.Router),this.parent.parent.parentInjector.get(import20.ActivatedRoute),this.parent.parent.parentInjector.get(import21.LocationStrategy));
    this._text_3 = this.renderer.createText(this._el_2,'Login',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n                ',(null as any));
    this._el_5 = this.renderer.createElement(this._el_0,'a',(null as any));
    this.renderer.setElementAttribute(this._el_5,'class','button');
    this._RouterLinkWithHref_5_3 = new import19.RouterLinkWithHref(this.parent.parent.parentInjector.get(import9.Router),this.parent.parent.parentInjector.get(import20.ActivatedRoute),this.parent.parent.parentInjector.get(import21.LocationStrategy));
    this._text_6 = this.renderer.createText(this._el_5,'Sign up',(null as any));
    this._text_7 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_2,'click',this.eventHandler(this._handle_click_2_0.bind(this)));
    this._arr_0 = import4.pureProxy2((p0:any,p1:any):any[] => {
      return [
        p0,
        p1
      ]
      ;
    });
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    var disposable_1:Function = this.renderer.listen(this._el_5,'click',this.eventHandler(this._handle_click_5_0.bind(this)));
    this._arr_1 = import4.pureProxy2((p0:any,p1:any):any[] => {
      return [
        p0,
        p1
      ]
      ;
    });
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7
    ]
    ,[
      disposable_0,
      disposable_1
    ]
    ,([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import19.RouterLinkWithHref) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._RouterLinkWithHref_2_3; }
    if (((token === import19.RouterLinkWithHref) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._RouterLinkWithHref_5_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_1:any = this._arr_0('/auth','login');
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._RouterLinkWithHref_2_3.routerLink = currVal_1;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLink'] = new import7.SimpleChange(this._expr_1,currVal_1);
      this._expr_1 = currVal_1;
    }
    if ((changes !== (null as any))) { this._RouterLinkWithHref_2_3.ngOnChanges(changes); }
    changes = (null as any);
    const currVal_4:any = this._arr_1('/auth','signup');
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._RouterLinkWithHref_5_3.routerLink = currVal_4;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLink'] = new import7.SimpleChange(this._expr_4,currVal_4);
      this._expr_4 = currVal_4;
    }
    if ((changes !== (null as any))) { this._RouterLinkWithHref_5_3.ngOnChanges(changes); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_2:any = this._RouterLinkWithHref_2_3.href;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementProperty(this._el_2,'href',this.viewUtils.sanitizer.sanitize(import22.SecurityContext.URL,currVal_2));
      this._expr_2 = currVal_2;
    }
    const currVal_5:any = this._RouterLinkWithHref_5_3.href;
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementProperty(this._el_5,'href',this.viewUtils.sanitizer.sanitize(import22.SecurityContext.URL,currVal_5));
      this._expr_5 = currVal_5;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._RouterLinkWithHref_2_3.ngOnDestroy();
    this._RouterLinkWithHref_5_3.ngOnDestroy();
  }
  private _handle_click_2_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._RouterLinkWithHref_2_3.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_0);
  }
  private _handle_click_5_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._RouterLinkWithHref_5_3.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_MarketComponent3(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_MarketComponent3(viewUtils,parentInjector,declarationEl);
}