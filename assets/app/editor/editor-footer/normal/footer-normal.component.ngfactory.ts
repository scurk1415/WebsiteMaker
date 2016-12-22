/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './footer-normal.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from './footer-normal.component.css.shim';
import * as import11 from '@angular/common/src/directives/ng_if';
import * as import12 from '../footer-control.component';
import * as import13 from '../../../shared/pipes/sanitize-html.pipe';
import * as import14 from '@angular/core/src/linker/template_ref';
import * as import15 from '../footer-control.component.ngfactory';
import * as import16 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import17 from '../../shared/overlay.component';
import * as import18 from '../../shared/overlay.component.ngfactory';
import * as import19 from '../../shared/hidden.component';
import * as import20 from '../../shared/hidden.component.ngfactory';
import * as import21 from '@angular/common/src/directives/ng_style';
import * as import22 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import23 from '@angular/core/src/linker/element_ref';
import * as import24 from '@angular/core/src/security';
import * as import25 from '@angular/common/src/directives/ng_for';
import * as import26 from '@angular/core/src/change_detection/differs/iterable_differs';
var renderType_FooterNormalComponent_Host:import0.RenderComponentType = (null as any);
class _View_FooterNormalComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _FooterNormalComponent_0_4:import3.FooterNormalComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_FooterNormalComponent_Host0,renderType_FooterNormalComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('dip-footer-normal',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_FooterNormalComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._FooterNormalComponent_0_4 = new import3.FooterNormalComponent();
    this._appEl_0.initComponent(this._FooterNormalComponent_0_4,([] as any[]),compView_0);
    compView_0.create(this._FooterNormalComponent_0_4,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.FooterNormalComponent) && (0 === requestNodeIndex))) { return this._FooterNormalComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._FooterNormalComponent_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_FooterNormalComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_FooterNormalComponent_Host === (null as any))) { (renderType_FooterNormalComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_FooterNormalComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const FooterNormalComponentNgFactory:import9.ComponentFactory<import3.FooterNormalComponent> = new import9.ComponentFactory<import3.FooterNormalComponent>('dip-footer-normal',viewFactory_FooterNormalComponent_Host0,import3.FooterNormalComponent);
const styles_FooterNormalComponent:any[] = [import10.styles];
var renderType_FooterNormalComponent:import0.RenderComponentType = (null as any);
class _View_FooterNormalComponent0 extends import1.AppView<import3.FooterNormalComponent> {
  _el_0:any;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _appEl_2:import2.AppElement;
  _TemplateRef_2_5:any;
  _NgIf_2_6:import11.NgIf;
  _text_3:any;
  _anchor_4:any;
  /*private*/ _appEl_4:import2.AppElement;
  _TemplateRef_4_5:any;
  _NgIf_4_6:import11.NgIf;
  _text_5:any;
  _anchor_6:any;
  /*private*/ _appEl_6:import2.AppElement;
  _TemplateRef_6_5:any;
  _NgIf_6_6:import11.NgIf;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  /*private*/ _appEl_9:import2.AppElement;
  _FooterControlComponent_9_4:import12.FooterControlComponent;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  _pipe_sanitizeHtml_0:import13.SanitizeHtml;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_FooterNormalComponent0,renderType_FooterNormalComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','element');
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._appEl_2 = new import2.AppElement(2,0,this,this._anchor_2);
    this._TemplateRef_2_5 = new import14.TemplateRef_(this._appEl_2,viewFactory_FooterNormalComponent1);
    this._NgIf_2_6 = new import11.NgIf(this._appEl_2.vcRef,this._TemplateRef_2_5);
    this._text_3 = this.renderer.createText(this._el_0,'\n\n    ',(null as any));
    this._anchor_4 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._appEl_4 = new import2.AppElement(4,0,this,this._anchor_4);
    this._TemplateRef_4_5 = new import14.TemplateRef_(this._appEl_4,viewFactory_FooterNormalComponent2);
    this._NgIf_4_6 = new import11.NgIf(this._appEl_4.vcRef,this._TemplateRef_4_5);
    this._text_5 = this.renderer.createText(this._el_0,'\n\n    ',(null as any));
    this._anchor_6 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._appEl_6 = new import2.AppElement(6,0,this,this._anchor_6);
    this._TemplateRef_6_5 = new import14.TemplateRef_(this._appEl_6,viewFactory_FooterNormalComponent3);
    this._NgIf_6_6 = new import11.NgIf(this._appEl_6.vcRef,this._TemplateRef_6_5);
    this._text_7 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_8 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_9 = this.renderer.createElement(parentRenderNode,'dip-footer-control',(null as any));
    this._appEl_9 = new import2.AppElement(9,(null as any),this,this._el_9);
    var compView_9:any = import15.viewFactory_FooterControlComponent0(this.viewUtils,this.injector(9),this._appEl_9);
    this._FooterControlComponent_9_4 = new import12.FooterControlComponent();
    this._appEl_9.initComponent(this._FooterControlComponent_9_4,([] as any[]),compView_9);
    compView_9.create(this._FooterControlComponent_9_4,([] as any[]),(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_0,'mouseover',this.eventHandler(this._handle_mouseover_0_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_0,'mouseleave',this.eventHandler(this._handle_mouseleave_0_1.bind(this)));
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this._pipe_sanitizeHtml_0 = new import13.SanitizeHtml(this.parentInjector.get(import16.DomSanitizer));
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
      this._el_9
    ]
    ,[
      disposable_0,
      disposable_1
    ]
    ,([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import11.NgIf) && (2 === requestNodeIndex))) { return this._NgIf_2_6; }
    if (((token === import14.TemplateRef) && (4 === requestNodeIndex))) { return this._TemplateRef_4_5; }
    if (((token === import11.NgIf) && (4 === requestNodeIndex))) { return this._NgIf_4_6; }
    if (((token === import14.TemplateRef) && (6 === requestNodeIndex))) { return this._TemplateRef_6_5; }
    if (((token === import11.NgIf) && (6 === requestNodeIndex))) { return this._NgIf_6_6; }
    if (((token === import12.FooterControlComponent) && (9 === requestNodeIndex))) { return this._FooterControlComponent_9_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2:boolean = !this.context.tmpFooter.showControl;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._NgIf_2_6.ngIf = currVal_2;
      this._expr_2 = currVal_2;
    }
    const currVal_3:boolean = !this.context.footer.display;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._NgIf_4_6.ngIf = currVal_3;
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = this.context.footer.display;
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._NgIf_6_6.ngIf = currVal_4;
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = this.context.footer;
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this._FooterControlComponent_9_4.footer = currVal_5;
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = this.context.tmpFooter;
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this._FooterControlComponent_9_4.tmpFooter = currVal_6;
      this._expr_6 = currVal_6;
    }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._FooterControlComponent_9_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_mouseover_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>(this.context.tmpFooter.showOverlay = true)) !== false);
    return (true && pd_0);
  }
  private _handle_mouseleave_0_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>(this.context.tmpFooter.showOverlay = false)) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_FooterNormalComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.FooterNormalComponent> {
  if ((renderType_FooterNormalComponent === (null as any))) { (renderType_FooterNormalComponent = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.Emulated,styles_FooterNormalComponent,{})); }
  return new _View_FooterNormalComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_FooterNormalComponent1 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _OverlayComponent_0_4:import17.OverlayComponent;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_FooterNormalComponent1,renderType_FooterNormalComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'dip-editor-overlay',(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import18.viewFactory_OverlayComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._OverlayComponent_0_4 = new import17.OverlayComponent();
    this._appEl_0.initComponent(this._OverlayComponent_0_4,([] as any[]),compView_0);
    compView_0.create(this._OverlayComponent_0_4,([] as any[]),(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import17.OverlayComponent) && (0 === requestNodeIndex))) { return this._OverlayComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = this.parent.context.tmpFooter;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._OverlayComponent_0_4.element = currVal_0;
      this._expr_0 = currVal_0;
    }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_FooterNormalComponent1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_FooterNormalComponent1(viewUtils,parentInjector,declarationEl);
}
class _View_FooterNormalComponent2 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _HiddenComponent_0_4:import19.HiddenComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_FooterNormalComponent2,renderType_FooterNormalComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'dip-hidden',(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import20.viewFactory_HiddenComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._HiddenComponent_0_4 = new import19.HiddenComponent();
    this._appEl_0.initComponent(this._HiddenComponent_0_4,([] as any[]),compView_0);
    compView_0.create(this._HiddenComponent_0_4,([] as any[]),(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import19.HiddenComponent) && (0 === requestNodeIndex))) { return this._HiddenComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._HiddenComponent_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_FooterNormalComponent2(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_FooterNormalComponent2(viewUtils,parentInjector,declarationEl);
}
class _View_FooterNormalComponent3 extends import1.AppView<any> {
  _el_0:any;
  _NgStyle_0_3:import21.NgStyle;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  _text_10:any;
  _text_11:any;
  _anchor_12:any;
  /*private*/ _appEl_12:import2.AppElement;
  _TemplateRef_12_5:any;
  _NgIf_12_6:import11.NgIf;
  _text_13:any;
  _text_14:any;
  _anchor_15:any;
  /*private*/ _appEl_15:import2.AppElement;
  _TemplateRef_15_5:any;
  _NgIf_15_6:import11.NgIf;
  _text_16:any;
  _map_0:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  _pipe_sanitizeHtml_0_0:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_FooterNormalComponent3,renderType_FooterNormalComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'footer',(null as any));
    this._NgStyle_0_3 = new import21.NgStyle(this.parent.parentInjector.get(import22.KeyValueDiffers),new import23.ElementRef(this._el_0),this.renderer);
    this._text_1 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'div',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','footer-data');
    this._text_3 = this.renderer.createText(this._el_2,'\n            ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_2,'div',(null as any));
    this.renderer.setElementAttribute(this._el_4,'class','width-half');
    this._text_5 = this.renderer.createText(this._el_4,'\n                ',(null as any));
    this._el_6 = this.renderer.createElement(this._el_4,'h5',(null as any));
    this.renderer.setElementAttribute(this._el_6,'class','white-text');
    this._text_7 = this.renderer.createText(this._el_6,'',(null as any));
    this._text_8 = this.renderer.createText(this._el_4,'\n                ',(null as any));
    this._el_9 = this.renderer.createElement(this._el_4,'p',(null as any));
    this._text_10 = this.renderer.createText(this._el_4,'\n            ',(null as any));
    this._text_11 = this.renderer.createText(this._el_2,'\n            ',(null as any));
    this._anchor_12 = this.renderer.createTemplateAnchor(this._el_2,(null as any));
    this._appEl_12 = new import2.AppElement(12,2,this,this._anchor_12);
    this._TemplateRef_12_5 = new import14.TemplateRef_(this._appEl_12,viewFactory_FooterNormalComponent4);
    this._NgIf_12_6 = new import11.NgIf(this._appEl_12.vcRef,this._TemplateRef_12_5);
    this._text_13 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._text_14 = this.renderer.createText(this._el_0,'\n\n        ',(null as any));
    this._anchor_15 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._appEl_15 = new import2.AppElement(15,0,this,this._anchor_15);
    this._TemplateRef_15_5 = new import14.TemplateRef_(this._appEl_15,viewFactory_FooterNormalComponent6);
    this._NgIf_15_6 = new import11.NgIf(this._appEl_15.vcRef,this._TemplateRef_15_5);
    this._text_16 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._map_0 = import4.pureProxy3((p0:any,p1:any,p2:any):{[key: string]:any} => {
      return {
        background: p0,
        color: p1,
        'font-size': p2
      }
      ;
    });
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this._pipe_sanitizeHtml_0_0 = import4.pureProxy1((<_View_FooterNormalComponent0>this.parent)._pipe_sanitizeHtml_0.transform.bind((<_View_FooterNormalComponent0>this.parent)._pipe_sanitizeHtml_0));
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._text_11,
      this._anchor_12,
      this._text_13,
      this._text_14,
      this._anchor_15,
      this._text_16
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.TemplateRef) && (12 === requestNodeIndex))) { return this._TemplateRef_12_5; }
    if (((token === import11.NgIf) && (12 === requestNodeIndex))) { return this._NgIf_12_6; }
    if (((token === import14.TemplateRef) && (15 === requestNodeIndex))) { return this._TemplateRef_15_5; }
    if (((token === import11.NgIf) && (15 === requestNodeIndex))) { return this._NgIf_15_6; }
    if (((token === import21.NgStyle) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 16)))) { return this._NgStyle_0_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const valUnwrapper:any = new import7.ValueUnwrapper();
    const currVal_0:any = this._map_0(this.parent.context.footer.background,this.parent.context.footer.font_color,this.parent.context.footer.font_size);
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgStyle_0_3.ngStyle = currVal_0;
      this._expr_0 = currVal_0;
    }
    if (!throwOnChange) { this._NgStyle_0_3.ngDoCheck(); }
    const currVal_4:any = (this.parent.context.footer.links.length > 0);
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._NgIf_12_6.ngIf = currVal_4;
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = this.parent.context.footer.display_copyright;
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this._NgIf_15_6.ngIf = currVal_5;
      this._expr_5 = currVal_5;
    }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_1:any = this.parent.context.footer.title_size;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementStyle(this._el_6,'fontSize',((this.viewUtils.sanitizer.sanitize(import24.SecurityContext.STYLE,currVal_1) == (null as any))? (null as any): this.viewUtils.sanitizer.sanitize(import24.SecurityContext.STYLE,currVal_1).toString()));
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = import4.interpolate(1,'',this.parent.context.footer.title,'');
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setText(this._text_7,currVal_2);
      this._expr_2 = currVal_2;
    }
    valUnwrapper.reset();
    const currVal_3:any = valUnwrapper.unwrap(import4.castByValue(this._pipe_sanitizeHtml_0_0,(<_View_FooterNormalComponent0>this.parent)._pipe_sanitizeHtml_0.transform)(this.parent.context.footer.text));
    if ((valUnwrapper.hasWrappedValue || import4.checkBinding(throwOnChange,this._expr_3,currVal_3))) {
      this.renderer.setElementProperty(this._el_9,'innerHTML',this.viewUtils.sanitizer.sanitize(import24.SecurityContext.HTML,currVal_3));
      this._expr_3 = currVal_3;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_FooterNormalComponent3(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_FooterNormalComponent3(viewUtils,parentInjector,declarationEl);
}
class _View_FooterNormalComponent4 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _anchor_7:any;
  /*private*/ _appEl_7:import2.AppElement;
  _TemplateRef_7_5:any;
  _NgFor_7_6:import25.NgFor;
  _text_8:any;
  _text_9:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_FooterNormalComponent4,renderType_FooterNormalComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','width-half');
    this._text_1 = this.renderer.createText(this._el_0,'\n                ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'h5',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','white-text');
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n\n                ',(null as any));
    this._el_5 = this.renderer.createElement(this._el_0,'ul',(null as any));
    this.renderer.setElementAttribute(this._el_5,'class','footer-menu clearfix');
    this._text_6 = this.renderer.createText(this._el_5,'\n                    ',(null as any));
    this._anchor_7 = this.renderer.createTemplateAnchor(this._el_5,(null as any));
    this._appEl_7 = new import2.AppElement(7,5,this,this._anchor_7);
    this._TemplateRef_7_5 = new import14.TemplateRef_(this._appEl_7,viewFactory_FooterNormalComponent5);
    this._NgFor_7_6 = new import25.NgFor(this._appEl_7.vcRef,this._TemplateRef_7_5,this.parent.parent.parentInjector.get(import26.IterableDiffers),this.parent.parent.ref);
    this._text_8 = this.renderer.createText(this._el_5,'\n                ',(null as any));
    this._text_9 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._anchor_7,
      this._text_8,
      this._text_9
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.TemplateRef) && (7 === requestNodeIndex))) { return this._TemplateRef_7_5; }
    if (((token === import25.NgFor) && (7 === requestNodeIndex))) { return this._NgFor_7_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_2:any = this.parent.parent.context.footer.links;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._NgFor_7_6.ngForOf = currVal_2;
      if ((changes === (null as any))) { (changes = {}); }
      changes['ngForOf'] = new import7.SimpleChange(this._expr_2,currVal_2);
      this._expr_2 = currVal_2;
    }
    if ((changes !== (null as any))) { this._NgFor_7_6.ngOnChanges(changes); }
    if (!throwOnChange) { this._NgFor_7_6.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = this.parent.parent.context.footer.title_size;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementStyle(this._el_2,'fontSize',((this.viewUtils.sanitizer.sanitize(import24.SecurityContext.STYLE,currVal_0) == (null as any))? (null as any): this.viewUtils.sanitizer.sanitize(import24.SecurityContext.STYLE,currVal_0).toString()));
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = import4.interpolate(1,'',this.parent.parent.context.footer.link_title,'');
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setText(this._text_3,currVal_1);
      this._expr_1 = currVal_1;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_FooterNormalComponent4(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_FooterNormalComponent4(viewUtils,parentInjector,declarationEl);
}
class _View_FooterNormalComponent5 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_FooterNormalComponent5,renderType_FooterNormalComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'li',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','footer-menu-item ellipsis');
    this._text_1 = this.renderer.createText(this._el_0,'\n                        ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'a',(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n                    ',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
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
    const currVal_0:any = this.context.$implicit.action;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementAttribute(this._el_2,'href',((this.viewUtils.sanitizer.sanitize(import24.SecurityContext.URL,currVal_0) == (null as any))? (null as any): this.viewUtils.sanitizer.sanitize(import24.SecurityContext.URL,currVal_0).toString()));
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this.parent.parent.parent.context.footer.link_color;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementStyle(this._el_2,'color',((this.viewUtils.sanitizer.sanitize(import24.SecurityContext.STYLE,currVal_1) == (null as any))? (null as any): this.viewUtils.sanitizer.sanitize(import24.SecurityContext.STYLE,currVal_1).toString()));
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = import4.interpolate(1,'',this.context.$implicit.title,'');
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setText(this._text_3,currVal_2);
      this._expr_2 = currVal_2;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_FooterNormalComponent5(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_FooterNormalComponent5(viewUtils,parentInjector,declarationEl);
}
class _View_FooterNormalComponent6 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_FooterNormalComponent6,renderType_FooterNormalComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','footer-copyright');
    this._text_1 = this.renderer.createText(this._el_0,'',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = this.parent.parent.context.footer.copyright_background;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementStyle(this._el_0,'background',((this.viewUtils.sanitizer.sanitize(import24.SecurityContext.STYLE,currVal_0) == (null as any))? (null as any): this.viewUtils.sanitizer.sanitize(import24.SecurityContext.STYLE,currVal_0).toString()));
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = import4.interpolate(1,'',this.parent.parent.context.footer.copyright_text,'');
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setText(this._text_1,currVal_1);
      this._expr_1 = currVal_1;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_FooterNormalComponent6(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_FooterNormalComponent6(viewUtils,parentInjector,declarationEl);
}