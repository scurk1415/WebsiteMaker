/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './solution-list.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '../editor.service';
import * as import9 from '../../auth/auth.service';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from '@angular/common/src/directives/ng_if';
import * as import13 from '@angular/core/src/linker/template_ref';
import * as import14 from '@angular/common/src/directives/ng_for';
import * as import15 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import16 from '@angular/router/src/directives/router_link';
import * as import17 from '@angular/router/src/router';
import * as import18 from '@angular/router/src/router_state';
import * as import19 from '@angular/common/src/location/location_strategy';
import * as import20 from '@angular/core/src/security';
var renderType_SolutionListComponent_Host:import0.RenderComponentType = (null as any);
class _View_SolutionListComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _SolutionListComponent_0_4:import3.SolutionListComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_SolutionListComponent_Host0,renderType_SolutionListComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('dip-solution-list',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_SolutionListComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._SolutionListComponent_0_4 = new import3.SolutionListComponent(this.parentInjector.get(import8.EditorService),this.parentInjector.get(import9.AuthService));
    this._appEl_0.initComponent(this._SolutionListComponent_0_4,([] as any[]),compView_0);
    compView_0.create(this._SolutionListComponent_0_4,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.SolutionListComponent) && (0 === requestNodeIndex))) { return this._SolutionListComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._SolutionListComponent_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_SolutionListComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_SolutionListComponent_Host === (null as any))) { (renderType_SolutionListComponent_Host = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_SolutionListComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const SolutionListComponentNgFactory:import11.ComponentFactory<import3.SolutionListComponent> = new import11.ComponentFactory<import3.SolutionListComponent>('dip-solution-list',viewFactory_SolutionListComponent_Host0,import3.SolutionListComponent);
const styles_SolutionListComponent:any[] = ([] as any[]);
var renderType_SolutionListComponent:import0.RenderComponentType = (null as any);
class _View_SolutionListComponent0 extends import1.AppView<import3.SolutionListComponent> {
  _anchor_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _TemplateRef_0_5:any;
  _NgIf_0_6:import12.NgIf;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _appEl_2:import2.AppElement;
  _TemplateRef_2_5:any;
  _NgIf_2_6:import12.NgIf;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_SolutionListComponent0,renderType_SolutionListComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._anchor_0 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._anchor_0);
    this._TemplateRef_0_5 = new import13.TemplateRef_(this._appEl_0,viewFactory_SolutionListComponent1);
    this._NgIf_0_6 = new import12.NgIf(this._appEl_0.vcRef,this._TemplateRef_0_5);
    this._text_1 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._appEl_2 = new import2.AppElement(2,(null as any),this,this._anchor_2);
    this._TemplateRef_2_5 = new import13.TemplateRef_(this._appEl_2,viewFactory_SolutionListComponent5);
    this._NgIf_2_6 = new import12.NgIf(this._appEl_2.vcRef,this._TemplateRef_2_5);
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this.init(([] as any[]),[
      this._anchor_0,
      this._text_1,
      this._anchor_2
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import13.TemplateRef) && (0 === requestNodeIndex))) { return this._TemplateRef_0_5; }
    if (((token === import12.NgIf) && (0 === requestNodeIndex))) { return this._NgIf_0_6; }
    if (((token === import13.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import12.NgIf) && (2 === requestNodeIndex))) { return this._NgIf_2_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = this.context.user;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgIf_0_6.ngIf = currVal_0;
      this._expr_0 = currVal_0;
    }
    const currVal_1:boolean = !this.context.user;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._NgIf_2_6.ngIf = currVal_1;
      this._expr_1 = currVal_1;
    }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_SolutionListComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.SolutionListComponent> {
  if ((renderType_SolutionListComponent === (null as any))) { (renderType_SolutionListComponent = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,styles_SolutionListComponent,{})); }
  return new _View_SolutionListComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_SolutionListComponent1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _text_6:any;
  _anchor_7:any;
  /*private*/ _appEl_7:import2.AppElement;
  _TemplateRef_7_5:any;
  _NgIf_7_6:import12.NgIf;
  _text_8:any;
  _anchor_9:any;
  /*private*/ _appEl_9:import2.AppElement;
  _TemplateRef_9_5:any;
  _NgIf_9_6:import12.NgIf;
  _text_10:any;
  _text_11:any;
  _el_12:any;
  _text_13:any;
  _anchor_14:any;
  /*private*/ _appEl_14:import2.AppElement;
  _TemplateRef_14_5:any;
  _NgFor_14_6:import14.NgFor;
  _text_15:any;
  _text_16:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_SolutionListComponent1,renderType_SolutionListComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','card centered');
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'div',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','clearfix');
    this._text_3 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_2,'div',(null as any));
    this.renderer.setElementAttribute(this._el_4,'class','card-title left');
    this._text_5 = this.renderer.createText(this._el_4,'Solutions',(null as any));
    this._text_6 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._anchor_7 = this.renderer.createTemplateAnchor(this._el_2,(null as any));
    this._appEl_7 = new import2.AppElement(7,2,this,this._anchor_7);
    this._TemplateRef_7_5 = new import13.TemplateRef_(this._appEl_7,viewFactory_SolutionListComponent2);
    this._NgIf_7_6 = new import12.NgIf(this._appEl_7.vcRef,this._TemplateRef_7_5);
    this._text_8 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._anchor_9 = this.renderer.createTemplateAnchor(this._el_2,(null as any));
    this._appEl_9 = new import2.AppElement(9,2,this,this._anchor_9);
    this._TemplateRef_9_5 = new import13.TemplateRef_(this._appEl_9,viewFactory_SolutionListComponent3);
    this._NgIf_9_6 = new import12.NgIf(this._appEl_9.vcRef,this._TemplateRef_9_5);
    this._text_10 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._text_11 = this.renderer.createText(this._el_0,'\n\n    ',(null as any));
    this._el_12 = this.renderer.createElement(this._el_0,'ul',(null as any));
    this.renderer.setElementAttribute(this._el_12,'class','collection with-header');
    this._text_13 = this.renderer.createText(this._el_12,'\n        ',(null as any));
    this._anchor_14 = this.renderer.createTemplateAnchor(this._el_12,(null as any));
    this._appEl_14 = new import2.AppElement(14,12,this,this._anchor_14);
    this._TemplateRef_14_5 = new import13.TemplateRef_(this._appEl_14,viewFactory_SolutionListComponent4);
    this._NgFor_14_6 = new import14.NgFor(this._appEl_14.vcRef,this._TemplateRef_14_5,this.parentInjector.get(import15.IterableDiffers),this.parent.ref);
    this._text_15 = this.renderer.createText(this._el_12,'\n    ',(null as any));
    this._text_16 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._anchor_7,
      this._text_8,
      this._anchor_9,
      this._text_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._anchor_14,
      this._text_15,
      this._text_16
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import13.TemplateRef) && (7 === requestNodeIndex))) { return this._TemplateRef_7_5; }
    if (((token === import12.NgIf) && (7 === requestNodeIndex))) { return this._NgIf_7_6; }
    if (((token === import13.TemplateRef) && (9 === requestNodeIndex))) { return this._TemplateRef_9_5; }
    if (((token === import12.NgIf) && (9 === requestNodeIndex))) { return this._NgIf_9_6; }
    if (((token === import13.TemplateRef) && (14 === requestNodeIndex))) { return this._TemplateRef_14_5; }
    if (((token === import14.NgFor) && (14 === requestNodeIndex))) { return this._NgFor_14_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    const currVal_0:any = (this.parent.context.user.allowed_solutions > this.parent.context.solutions.length);
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgIf_7_6.ngIf = currVal_0;
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = (this.parent.context.user.allowed_solutions <= this.parent.context.solutions.length);
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._NgIf_9_6.ngIf = currVal_1;
      this._expr_1 = currVal_1;
    }
    changes = (null as any);
    const currVal_2:any = this.parent.context.solutions;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._NgFor_14_6.ngForOf = currVal_2;
      if ((changes === (null as any))) { (changes = {}); }
      changes['ngForOf'] = new import7.SimpleChange(this._expr_2,currVal_2);
      this._expr_2 = currVal_2;
    }
    if ((changes !== (null as any))) { this._NgFor_14_6.ngOnChanges(changes); }
    if (!throwOnChange) { this._NgFor_14_6.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_SolutionListComponent1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_SolutionListComponent1(viewUtils,parentInjector,declarationEl);
}
class _View_SolutionListComponent2 extends import1.AppView<any> {
  _el_0:any;
  _RouterLinkWithHref_0_3:import16.RouterLinkWithHref;
  _text_1:any;
  _arr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_SolutionListComponent2,renderType_SolutionListComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'a',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','button icon add right');
    this.renderer.setElementAttribute(this._el_0,'title','Create new');
    this._RouterLinkWithHref_0_3 = new import16.RouterLinkWithHref(this.parent.parentInjector.get(import17.Router),this.parent.parentInjector.get(import18.ActivatedRoute),this.parent.parentInjector.get(import19.LocationStrategy));
    this._text_1 = this.renderer.createText(this._el_0,'+',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_0,'click',this.eventHandler(this._handle_click_0_0.bind(this)));
    this._arr_0 = import4.pureProxy1((p0:any):any[] => {
      return [p0];
    });
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,[disposable_0],([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import16.RouterLinkWithHref) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._RouterLinkWithHref_0_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_1:any = this._arr_0('create');
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._RouterLinkWithHref_0_3.routerLink = currVal_1;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLink'] = new import7.SimpleChange(this._expr_1,currVal_1);
      this._expr_1 = currVal_1;
    }
    if ((changes !== (null as any))) { this._RouterLinkWithHref_0_3.ngOnChanges(changes); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_2:any = this._RouterLinkWithHref_0_3.href;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementProperty(this._el_0,'href',this.viewUtils.sanitizer.sanitize(import20.SecurityContext.URL,currVal_2));
      this._expr_2 = currVal_2;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._RouterLinkWithHref_0_3.ngOnDestroy();
  }
  private _handle_click_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._RouterLinkWithHref_0_3.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_SolutionListComponent2(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_SolutionListComponent2(viewUtils,parentInjector,declarationEl);
}
class _View_SolutionListComponent3 extends import1.AppView<any> {
  _el_0:any;
  _RouterLinkWithHref_0_3:import16.RouterLinkWithHref;
  _text_1:any;
  _arr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_SolutionListComponent3,renderType_SolutionListComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'a',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','button icon add right');
    this.renderer.setElementAttribute(this._el_0,'title','Buy assets');
    this._RouterLinkWithHref_0_3 = new import16.RouterLinkWithHref(this.parent.parentInjector.get(import17.Router),this.parent.parentInjector.get(import18.ActivatedRoute),this.parent.parentInjector.get(import19.LocationStrategy));
    this._text_1 = this.renderer.createText(this._el_0,'+',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_0,'click',this.eventHandler(this._handle_click_0_0.bind(this)));
    this._arr_0 = import4.pureProxy1((p0:any):any[] => {
      return [p0];
    });
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,[disposable_0],([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import16.RouterLinkWithHref) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._RouterLinkWithHref_0_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_1:any = this._arr_0('/market');
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._RouterLinkWithHref_0_3.routerLink = currVal_1;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLink'] = new import7.SimpleChange(this._expr_1,currVal_1);
      this._expr_1 = currVal_1;
    }
    if ((changes !== (null as any))) { this._RouterLinkWithHref_0_3.ngOnChanges(changes); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_2:any = this._RouterLinkWithHref_0_3.href;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementProperty(this._el_0,'href',this.viewUtils.sanitizer.sanitize(import20.SecurityContext.URL,currVal_2));
      this._expr_2 = currVal_2;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._RouterLinkWithHref_0_3.ngOnDestroy();
  }
  private _handle_click_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._RouterLinkWithHref_0_3.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_SolutionListComponent3(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_SolutionListComponent3(viewUtils,parentInjector,declarationEl);
}
class _View_SolutionListComponent4 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _RouterLinkWithHref_2_3:import16.RouterLinkWithHref;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _arr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_SolutionListComponent4,renderType_SolutionListComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'li',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','collection-item clearfix relative');
    this._text_1 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'a',(null as any));
    this.renderer.setElementAttribute(this._el_2,'style','display: block');
    this._RouterLinkWithHref_2_3 = new import16.RouterLinkWithHref(this.parent.parentInjector.get(import17.Router),this.parent.parentInjector.get(import18.ActivatedRoute),this.parent.parentInjector.get(import19.LocationStrategy));
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._el_5 = this.renderer.createElement(this._el_0,'a',(null as any));
    this.renderer.setElementAttribute(this._el_5,'class','delete right');
    this._text_6 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_2,'click',this.eventHandler(this._handle_click_2_0.bind(this)));
    this._arr_0 = import4.pureProxy1((p0:any):any[] => {
      return [p0];
    });
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    var disposable_1:Function = this.renderer.listen(this._el_5,'click',this.eventHandler(this._handle_click_5_0.bind(this)));
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6
    ]
    ,[
      disposable_0,
      disposable_1
    ]
    ,([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import16.RouterLinkWithHref) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._RouterLinkWithHref_2_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_1:any = this._arr_0(this.context.$implicit._id);
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._RouterLinkWithHref_2_3.routerLink = currVal_1;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLink'] = new import7.SimpleChange(this._expr_1,currVal_1);
      this._expr_1 = currVal_1;
    }
    if ((changes !== (null as any))) { this._RouterLinkWithHref_2_3.ngOnChanges(changes); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_2:any = this._RouterLinkWithHref_2_3.href;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementProperty(this._el_2,'href',this.viewUtils.sanitizer.sanitize(import20.SecurityContext.URL,currVal_2));
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = import4.interpolate(1,'\n                ',this.context.$implicit.name,'\n            ');
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setText(this._text_3,currVal_3);
      this._expr_3 = currVal_3;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._RouterLinkWithHref_2_3.ngOnDestroy();
  }
  private _handle_click_2_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._RouterLinkWithHref_2_3.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_0);
  }
  private _handle_click_5_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.parent.context.deleteSolution(this.context.$implicit)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_SolutionListComponent4(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_SolutionListComponent4(viewUtils,parentInjector,declarationEl);
}
class _View_SolutionListComponent5 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_SolutionListComponent5,renderType_SolutionListComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','card centered');
    this._text_1 = this.renderer.createText(this._el_0,'\n    loading\n',(null as any));
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
}
function viewFactory_SolutionListComponent5(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_SolutionListComponent5(viewUtils,parentInjector,declarationEl);
}