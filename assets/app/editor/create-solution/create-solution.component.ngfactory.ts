/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './create-solution.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/forms/src/form_builder';
import * as import9 from '../editor.service';
import * as import10 from '@angular/router/src/router';
import * as import11 from '../../error/error.service';
import * as import12 from '@angular/core/src/metadata/view';
import * as import13 from '@angular/core/src/linker/component_factory';
import * as import14 from '@angular/forms/src/directives/reactive_directives/form_group_directive';
import * as import15 from '@angular/forms/src/directives/ng_control_status';
import * as import16 from '@angular/forms/src/directives/default_value_accessor';
import * as import17 from '@angular/forms/src/directives/reactive_directives/form_control_name';
import * as import18 from '@angular/core/src/linker/element_ref';
import * as import19 from '@angular/forms/src/directives/control_value_accessor';
import * as import20 from '@angular/forms/src/directives/ng_control';
import * as import21 from '@angular/forms/src/directives/control_container';
var renderType_CreateSolutionComponent_Host:import0.RenderComponentType = (null as any);
class _View_CreateSolutionComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _CreateSolutionComponent_0_4:import3.CreateSolutionComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_CreateSolutionComponent_Host0,renderType_CreateSolutionComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('dip-create-solution',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_CreateSolutionComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._CreateSolutionComponent_0_4 = new import3.CreateSolutionComponent(this.parentInjector.get(import8.FormBuilder),this.parentInjector.get(import9.EditorService),this.parentInjector.get(import10.Router),this.parentInjector.get(import11.ErrorService));
    this._appEl_0.initComponent(this._CreateSolutionComponent_0_4,([] as any[]),compView_0);
    compView_0.create(this._CreateSolutionComponent_0_4,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.CreateSolutionComponent) && (0 === requestNodeIndex))) { return this._CreateSolutionComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._CreateSolutionComponent_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_CreateSolutionComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_CreateSolutionComponent_Host === (null as any))) { (renderType_CreateSolutionComponent_Host = viewUtils.createRenderComponentType('',0,import12.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_CreateSolutionComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const CreateSolutionComponentNgFactory:import13.ComponentFactory<import3.CreateSolutionComponent> = new import13.ComponentFactory<import3.CreateSolutionComponent>('dip-create-solution',viewFactory_CreateSolutionComponent_Host0,import3.CreateSolutionComponent);
const styles_CreateSolutionComponent:any[] = ([] as any[]);
var renderType_CreateSolutionComponent:import0.RenderComponentType = (null as any);
class _View_CreateSolutionComponent0 extends import1.AppView<import3.CreateSolutionComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _FormGroupDirective_5_3:import14.FormGroupDirective;
  _ControlContainer_5_4:any;
  _NgControlStatusGroup_5_5:import15.NgControlStatusGroup;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _el_9:any;
  _DefaultValueAccessor_9_3:import16.DefaultValueAccessor;
  _NG_VALUE_ACCESSOR_9_4:any[];
  _FormControlName_9_5:import17.FormControlName;
  _NgControl_9_6:any;
  _NgControlStatus_9_7:import15.NgControlStatus;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _text_13:any;
  _text_14:any;
  _el_15:any;
  _text_16:any;
  _text_17:any;
  _text_18:any;
  _text_19:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_12:any;
  /*private*/ _expr_13:any;
  /*private*/ _expr_14:any;
  /*private*/ _expr_15:any;
  /*private*/ _expr_16:any;
  /*private*/ _expr_17:any;
  /*private*/ _expr_18:any;
  /*private*/ _expr_19:any;
  /*private*/ _expr_20:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_CreateSolutionComponent0,renderType_CreateSolutionComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','card centered');
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'div',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','card-title');
    this._text_3 = this.renderer.createText(this._el_2,'Create new',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_5 = this.renderer.createElement(this._el_0,'form',(null as any));
    this.renderer.setElementAttribute(this._el_5,'class','top10');
    this._FormGroupDirective_5_3 = new import14.FormGroupDirective((null as any),(null as any));
    this._ControlContainer_5_4 = this._FormGroupDirective_5_3;
    this._NgControlStatusGroup_5_5 = new import15.NgControlStatusGroup(this._ControlContainer_5_4);
    this._text_6 = this.renderer.createText(this._el_5,'\n        ',(null as any));
    this._el_7 = this.renderer.createElement(this._el_5,'div',(null as any));
    this.renderer.setElementAttribute(this._el_7,'class','input-field');
    this._text_8 = this.renderer.createText(this._el_7,'\n            ',(null as any));
    this._el_9 = this.renderer.createElement(this._el_7,'input',(null as any));
    this.renderer.setElementAttribute(this._el_9,'formControlName','name');
    this.renderer.setElementAttribute(this._el_9,'id','name');
    this.renderer.setElementAttribute(this._el_9,'name','name');
    this.renderer.setElementAttribute(this._el_9,'type','text');
    this._DefaultValueAccessor_9_3 = new import16.DefaultValueAccessor(this.renderer,new import18.ElementRef(this._el_9));
    this._NG_VALUE_ACCESSOR_9_4 = [this._DefaultValueAccessor_9_3];
    this._FormControlName_9_5 = new import17.FormControlName(this._ControlContainer_5_4,(null as any),(null as any),this._NG_VALUE_ACCESSOR_9_4);
    this._NgControl_9_6 = this._FormControlName_9_5;
    this._NgControlStatus_9_7 = new import15.NgControlStatus(this._NgControl_9_6);
    this._text_10 = this.renderer.createText(this._el_7,'\n            ',(null as any));
    this._el_11 = this.renderer.createElement(this._el_7,'label',(null as any));
    this.renderer.setElementAttribute(this._el_11,'for','name');
    this._text_12 = this.renderer.createText(this._el_11,'Name',(null as any));
    this._text_13 = this.renderer.createText(this._el_7,'\n        ',(null as any));
    this._text_14 = this.renderer.createText(this._el_5,'\n\n        ',(null as any));
    this._el_15 = this.renderer.createElement(this._el_5,'button',(null as any));
    this.renderer.setElementAttribute(this._el_15,'class','button top20');
    this.renderer.setElementAttribute(this._el_15,'type','submit');
    this._text_16 = this.renderer.createText(this._el_15,'\n            Create\n        ',(null as any));
    this._text_17 = this.renderer.createText(this._el_5,'\n    ',(null as any));
    this._text_18 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_19 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_5,'ngSubmit',this.eventHandler(this._handle_ngSubmit_5_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_5,'submit',this.eventHandler(this._handle_submit_5_1.bind(this)));
    var disposable_2:Function = this.renderer.listen(this._el_5,'reset',this.eventHandler(this._handle_reset_5_2.bind(this)));
    this._expr_3 = import7.UNINITIALIZED;
    const subscription_0:any = this._FormGroupDirective_5_3.ngSubmit.subscribe(this.eventHandler(this._handle_ngSubmit_5_0.bind(this)));
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    this._expr_7 = import7.UNINITIALIZED;
    this._expr_8 = import7.UNINITIALIZED;
    this._expr_9 = import7.UNINITIALIZED;
    this._expr_12 = import7.UNINITIALIZED;
    var disposable_3:Function = this.renderer.listen(this._el_9,'input',this.eventHandler(this._handle_input_9_0.bind(this)));
    var disposable_4:Function = this.renderer.listen(this._el_9,'blur',this.eventHandler(this._handle_blur_9_1.bind(this)));
    this._expr_13 = import7.UNINITIALIZED;
    this._expr_14 = import7.UNINITIALIZED;
    this._expr_15 = import7.UNINITIALIZED;
    this._expr_16 = import7.UNINITIALIZED;
    this._expr_17 = import7.UNINITIALIZED;
    this._expr_18 = import7.UNINITIALIZED;
    this._expr_19 = import7.UNINITIALIZED;
    this._expr_20 = import7.UNINITIALIZED;
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._text_13,
      this._text_14,
      this._el_15,
      this._text_16,
      this._text_17,
      this._text_18,
      this._text_19
    ]
    ,[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3,
      disposable_4
    ]
    ,[subscription_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import16.DefaultValueAccessor) && (9 === requestNodeIndex))) { return this._DefaultValueAccessor_9_3; }
    if (((token === import19.NG_VALUE_ACCESSOR) && (9 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_9_4; }
    if (((token === import17.FormControlName) && (9 === requestNodeIndex))) { return this._FormControlName_9_5; }
    if (((token === import20.NgControl) && (9 === requestNodeIndex))) { return this._NgControl_9_6; }
    if (((token === import15.NgControlStatus) && (9 === requestNodeIndex))) { return this._NgControlStatus_9_7; }
    if (((token === import14.FormGroupDirective) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 17)))) { return this._FormGroupDirective_5_3; }
    if (((token === import21.ControlContainer) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 17)))) { return this._ControlContainer_5_4; }
    if (((token === import15.NgControlStatusGroup) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 17)))) { return this._NgControlStatusGroup_5_5; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_3:any = this.context.createSolutionForm;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._FormGroupDirective_5_3.form = currVal_3;
      if ((changes === (null as any))) { (changes = {}); }
      changes['form'] = new import7.SimpleChange(this._expr_3,currVal_3);
      this._expr_3 = currVal_3;
    }
    if ((changes !== (null as any))) { this._FormGroupDirective_5_3.ngOnChanges(changes); }
    changes = (null as any);
    const currVal_13:any = 'name';
    if (import4.checkBinding(throwOnChange,this._expr_13,currVal_13)) {
      this._FormControlName_9_5.name = currVal_13;
      if ((changes === (null as any))) { (changes = {}); }
      changes['name'] = new import7.SimpleChange(this._expr_13,currVal_13);
      this._expr_13 = currVal_13;
    }
    if ((changes !== (null as any))) { this._FormControlName_9_5.ngOnChanges(changes); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_4:any = this._NgControlStatusGroup_5_5.ngClassUntouched;
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementClass(this._el_5,'ng-untouched',currVal_4);
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = this._NgControlStatusGroup_5_5.ngClassTouched;
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementClass(this._el_5,'ng-touched',currVal_5);
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = this._NgControlStatusGroup_5_5.ngClassPristine;
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementClass(this._el_5,'ng-pristine',currVal_6);
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = this._NgControlStatusGroup_5_5.ngClassDirty;
    if (import4.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setElementClass(this._el_5,'ng-dirty',currVal_7);
      this._expr_7 = currVal_7;
    }
    const currVal_8:any = this._NgControlStatusGroup_5_5.ngClassValid;
    if (import4.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this.renderer.setElementClass(this._el_5,'ng-valid',currVal_8);
      this._expr_8 = currVal_8;
    }
    const currVal_9:any = this._NgControlStatusGroup_5_5.ngClassInvalid;
    if (import4.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this.renderer.setElementClass(this._el_5,'ng-invalid',currVal_9);
      this._expr_9 = currVal_9;
    }
    const currVal_12:any = this._el_9.value;
    if (import4.checkBinding(throwOnChange,this._expr_12,currVal_12)) {
      this.renderer.setElementClass(this._el_9,'active',currVal_12);
      this._expr_12 = currVal_12;
    }
    const currVal_14:any = this._NgControlStatus_9_7.ngClassUntouched;
    if (import4.checkBinding(throwOnChange,this._expr_14,currVal_14)) {
      this.renderer.setElementClass(this._el_9,'ng-untouched',currVal_14);
      this._expr_14 = currVal_14;
    }
    const currVal_15:any = this._NgControlStatus_9_7.ngClassTouched;
    if (import4.checkBinding(throwOnChange,this._expr_15,currVal_15)) {
      this.renderer.setElementClass(this._el_9,'ng-touched',currVal_15);
      this._expr_15 = currVal_15;
    }
    const currVal_16:any = this._NgControlStatus_9_7.ngClassPristine;
    if (import4.checkBinding(throwOnChange,this._expr_16,currVal_16)) {
      this.renderer.setElementClass(this._el_9,'ng-pristine',currVal_16);
      this._expr_16 = currVal_16;
    }
    const currVal_17:any = this._NgControlStatus_9_7.ngClassDirty;
    if (import4.checkBinding(throwOnChange,this._expr_17,currVal_17)) {
      this.renderer.setElementClass(this._el_9,'ng-dirty',currVal_17);
      this._expr_17 = currVal_17;
    }
    const currVal_18:any = this._NgControlStatus_9_7.ngClassValid;
    if (import4.checkBinding(throwOnChange,this._expr_18,currVal_18)) {
      this.renderer.setElementClass(this._el_9,'ng-valid',currVal_18);
      this._expr_18 = currVal_18;
    }
    const currVal_19:any = this._NgControlStatus_9_7.ngClassInvalid;
    if (import4.checkBinding(throwOnChange,this._expr_19,currVal_19)) {
      this.renderer.setElementClass(this._el_9,'ng-invalid',currVal_19);
      this._expr_19 = currVal_19;
    }
    const currVal_20:boolean = !this.context.createSolutionForm.valid;
    if (import4.checkBinding(throwOnChange,this._expr_20,currVal_20)) {
      this.renderer.setElementProperty(this._el_15,'disabled',currVal_20);
      this._expr_20 = currVal_20;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._FormControlName_9_5.ngOnDestroy();
  }
  private _handle_ngSubmit_5_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.onSubmit()) !== false);
    return (true && pd_0);
  }
  private _handle_submit_5_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._FormGroupDirective_5_3.onSubmit($event)) !== false);
    return (true && pd_0);
  }
  private _handle_reset_5_2($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._FormGroupDirective_5_3.onReset()) !== false);
    return (true && pd_0);
  }
  private _handle_input_9_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._DefaultValueAccessor_9_3.onChange($event.target.value)) !== false);
    return (true && pd_0);
  }
  private _handle_blur_9_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._DefaultValueAccessor_9_3.onTouched()) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_CreateSolutionComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.CreateSolutionComponent> {
  if ((renderType_CreateSolutionComponent === (null as any))) { (renderType_CreateSolutionComponent = viewUtils.createRenderComponentType('',0,import12.ViewEncapsulation.None,styles_CreateSolutionComponent,{})); }
  return new _View_CreateSolutionComponent0(viewUtils,parentInjector,declarationEl);
}