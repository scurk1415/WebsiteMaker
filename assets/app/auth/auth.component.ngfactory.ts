/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './auth.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/router/src/directives/router_outlet';
import * as import11 from '@angular/router/src/router_outlet_map';
import * as import12 from '@angular/core/src/linker/component_factory_resolver';
var renderType_AuthComponent_Host:import0.RenderComponentType = (null as any);
class _View_AuthComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _AuthComponent_0_4:import3.AuthComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_AuthComponent_Host0,renderType_AuthComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('dip-auth',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_AuthComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._AuthComponent_0_4 = new import3.AuthComponent();
    this._appEl_0.initComponent(this._AuthComponent_0_4,([] as any[]),compView_0);
    compView_0.create(this._AuthComponent_0_4,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.AuthComponent) && (0 === requestNodeIndex))) { return this._AuthComponent_0_4; }
    return notFoundResult;
  }
}
function viewFactory_AuthComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_AuthComponent_Host === (null as any))) { (renderType_AuthComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_AuthComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const AuthComponentNgFactory:import9.ComponentFactory<import3.AuthComponent> = new import9.ComponentFactory<import3.AuthComponent>('dip-auth',viewFactory_AuthComponent_Host0,import3.AuthComponent);
const styles_AuthComponent:any[] = ([] as any[]);
var renderType_AuthComponent:import0.RenderComponentType = (null as any);
class _View_AuthComponent0 extends import1.AppView<import3.AuthComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import2.AppElement;
  _RouterOutlet_2_5:import10.RouterOutlet;
  _text_3:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_AuthComponent0,renderType_AuthComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','container');
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'router-outlet',(null as any));
    this._appEl_2 = new import2.AppElement(2,0,this,this._el_2);
    this._RouterOutlet_2_5 = new import10.RouterOutlet(this.parentInjector.get(import11.RouterOutletMap),this._appEl_2.vcRef,this.parentInjector.get(import12.ComponentFactoryResolver),(null as any));
    this._text_3 = this.renderer.createText(this._el_0,'\n',(null as any));
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import10.RouterOutlet) && (2 === requestNodeIndex))) { return this._RouterOutlet_2_5; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._RouterOutlet_2_5.ngOnDestroy();
  }
}
export function viewFactory_AuthComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.AuthComponent> {
  if ((renderType_AuthComponent === (null as any))) { (renderType_AuthComponent = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,styles_AuthComponent,{})); }
  return new _View_AuthComponent0(viewUtils,parentInjector,declarationEl);
}