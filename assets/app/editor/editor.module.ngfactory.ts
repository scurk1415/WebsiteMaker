/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './editor.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/router/src/router_module';
import * as import4 from '@angular/forms/src/directives';
import * as import5 from '@angular/forms/src/form_providers';
import * as import6 from 'ng2-uploader/src/module/ng2-uploader.module';
import * as import7 from '../shared/shared.module';
import * as import8 from 'angular2-color-picker/lib/color-picker.module';
import * as import9 from '@angular/common/src/localization';
import * as import10 from '@angular/forms/src/form_builder';
import * as import11 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import12 from 'ng2-uploader/src/services/ng2-uploader';
import * as import13 from 'angular2-color-picker/lib/color-picker.service';
import * as import14 from './editor.service';
import * as import15 from '@angular/core/src/di/injector';
import * as import16 from './solution-list/solution-list.component.ngfactory';
import * as import17 from './create-solution/create-solution.component.ngfactory';
import * as import18 from './editor.component.ngfactory';
import * as import19 from '@angular/core/src/i18n/tokens';
import * as import20 from './solution-list/solution-list.component';
import * as import21 from './create-solution/create-solution.component';
import * as import22 from '../auth/auth.guard';
import * as import23 from './editor.component';
import * as import24 from '@angular/http/src/http';
import * as import25 from '@angular/router/src/router_config_loader';
class EditorModuleInjector extends import0.NgModuleInjector<import1.EditorModule> {
  _CommonModule_0:import2.CommonModule;
  _RouterModule_1:import3.RouterModule;
  _InternalFormsSharedModule_2:import4.InternalFormsSharedModule;
  _ReactiveFormsModule_3:import5.ReactiveFormsModule;
  _FormsModule_4:import5.FormsModule;
  _Ng2UploaderModule_5:import6.Ng2UploaderModule;
  _SharedModule_6:import7.SharedModule;
  _ColorPickerModule_7:import8.ColorPickerModule;
  _EditorModule_8:import1.EditorModule;
  __NgLocalization_9:import9.NgLocaleLocalization;
  __FormBuilder_10:import10.FormBuilder;
  __RadioControlRegistry_11:import11.RadioControlRegistry;
  __Ng2Uploader_12:import12.Ng2Uploader;
  __ColorPickerService_13:import13.ColorPickerService;
  __ROUTES_14:any[];
  __EditorService_15:import14.EditorService;
  constructor(parent:import15.Injector) {
    super(parent,[
      import16.SolutionListComponentNgFactory,
      import17.CreateSolutionComponentNgFactory,
      import18.EditorComponentNgFactory
    ]
    ,([] as any[]));
  }
  get _NgLocalization_9():import9.NgLocaleLocalization {
    if ((this.__NgLocalization_9 == (null as any))) { (this.__NgLocalization_9 = new import9.NgLocaleLocalization(this.parent.get(import19.LOCALE_ID))); }
    return this.__NgLocalization_9;
  }
  get _FormBuilder_10():import10.FormBuilder {
    if ((this.__FormBuilder_10 == (null as any))) { (this.__FormBuilder_10 = new import10.FormBuilder()); }
    return this.__FormBuilder_10;
  }
  get _RadioControlRegistry_11():import11.RadioControlRegistry {
    if ((this.__RadioControlRegistry_11 == (null as any))) { (this.__RadioControlRegistry_11 = new import11.RadioControlRegistry()); }
    return this.__RadioControlRegistry_11;
  }
  get _Ng2Uploader_12():import12.Ng2Uploader {
    if ((this.__Ng2Uploader_12 == (null as any))) { (this.__Ng2Uploader_12 = new import12.Ng2Uploader()); }
    return this.__Ng2Uploader_12;
  }
  get _ColorPickerService_13():import13.ColorPickerService {
    if ((this.__ColorPickerService_13 == (null as any))) { (this.__ColorPickerService_13 = new import13.ColorPickerService()); }
    return this.__ColorPickerService_13;
  }
  get _ROUTES_14():any[] {
      if ((this.__ROUTES_14 == (null as any))) { (this.__ROUTES_14 = [[
        {
          path: '',
          component: import20.SolutionListComponent,
          pathMatch: 'full'
        }
        ,
        {
          path: 'create',
          component: import21.CreateSolutionComponent,
          canActivate: [import22.AuthGuard]
        }
        ,
        {
          path: ':id',
          component: import23.EditorComponent,
          canActivate: [import22.AuthGuard]
        }

      ]
    ]); }
    return this.__ROUTES_14;
  }
  get _EditorService_15():import14.EditorService {
    if ((this.__EditorService_15 == (null as any))) { (this.__EditorService_15 = new import14.EditorService(this.parent.get(import24.Http))); }
    return this.__EditorService_15;
  }
  createInternal():import1.EditorModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._RouterModule_1 = new import3.RouterModule(this.parent.get(import3.ROUTER_FORROOT_GUARD,(null as any)));
    this._InternalFormsSharedModule_2 = new import4.InternalFormsSharedModule();
    this._ReactiveFormsModule_3 = new import5.ReactiveFormsModule();
    this._FormsModule_4 = new import5.FormsModule();
    this._Ng2UploaderModule_5 = new import6.Ng2UploaderModule();
    this._SharedModule_6 = new import7.SharedModule();
    this._ColorPickerModule_7 = new import8.ColorPickerModule();
    this._EditorModule_8 = new import1.EditorModule();
    return this._EditorModule_8;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.RouterModule)) { return this._RouterModule_1; }
    if ((token === import4.InternalFormsSharedModule)) { return this._InternalFormsSharedModule_2; }
    if ((token === import5.ReactiveFormsModule)) { return this._ReactiveFormsModule_3; }
    if ((token === import5.FormsModule)) { return this._FormsModule_4; }
    if ((token === import6.Ng2UploaderModule)) { return this._Ng2UploaderModule_5; }
    if ((token === import7.SharedModule)) { return this._SharedModule_6; }
    if ((token === import8.ColorPickerModule)) { return this._ColorPickerModule_7; }
    if ((token === import1.EditorModule)) { return this._EditorModule_8; }
    if ((token === import9.NgLocalization)) { return this._NgLocalization_9; }
    if ((token === import10.FormBuilder)) { return this._FormBuilder_10; }
    if ((token === import11.RadioControlRegistry)) { return this._RadioControlRegistry_11; }
    if ((token === import12.Ng2Uploader)) { return this._Ng2Uploader_12; }
    if ((token === import13.ColorPickerService)) { return this._ColorPickerService_13; }
    if ((token === import25.ROUTES)) { return this._ROUTES_14; }
    if ((token === import14.EditorService)) { return this._EditorService_15; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const EditorModuleNgFactory:import0.NgModuleFactory<import1.EditorModule> = new import0.NgModuleFactory(EditorModuleInjector,import1.EditorModule);