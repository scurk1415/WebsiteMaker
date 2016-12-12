/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './shared.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/forms/src/directives';
import * as import4 from '@angular/forms/src/form_providers';
import * as import5 from 'ng2-uploader/src/module/ng2-uploader.module';
import * as import6 from '@angular/common/src/localization';
import * as import7 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import8 from 'ng2-uploader/src/services/ng2-uploader';
import * as import9 from '@angular/core/src/di/injector';
import * as import10 from '@angular/core/src/i18n/tokens';
class SharedModuleInjector extends import0.NgModuleInjector<import1.SharedModule> {
  _CommonModule_0:import2.CommonModule;
  _InternalFormsSharedModule_1:import3.InternalFormsSharedModule;
  _FormsModule_2:import4.FormsModule;
  _Ng2UploaderModule_3:import5.Ng2UploaderModule;
  _SharedModule_4:import1.SharedModule;
  __NgLocalization_5:import6.NgLocaleLocalization;
  __RadioControlRegistry_6:import7.RadioControlRegistry;
  __Ng2Uploader_7:import8.Ng2Uploader;
  constructor(parent:import9.Injector) {
    super(parent,([] as any[]),([] as any[]));
  }
  get _NgLocalization_5():import6.NgLocaleLocalization {
    if ((this.__NgLocalization_5 == (null as any))) { (this.__NgLocalization_5 = new import6.NgLocaleLocalization(this.parent.get(import10.LOCALE_ID))); }
    return this.__NgLocalization_5;
  }
  get _RadioControlRegistry_6():import7.RadioControlRegistry {
    if ((this.__RadioControlRegistry_6 == (null as any))) { (this.__RadioControlRegistry_6 = new import7.RadioControlRegistry()); }
    return this.__RadioControlRegistry_6;
  }
  get _Ng2Uploader_7():import8.Ng2Uploader {
    if ((this.__Ng2Uploader_7 == (null as any))) { (this.__Ng2Uploader_7 = new import8.Ng2Uploader()); }
    return this.__Ng2Uploader_7;
  }
  createInternal():import1.SharedModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._InternalFormsSharedModule_1 = new import3.InternalFormsSharedModule();
    this._FormsModule_2 = new import4.FormsModule();
    this._Ng2UploaderModule_3 = new import5.Ng2UploaderModule();
    this._SharedModule_4 = new import1.SharedModule();
    return this._SharedModule_4;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.InternalFormsSharedModule)) { return this._InternalFormsSharedModule_1; }
    if ((token === import4.FormsModule)) { return this._FormsModule_2; }
    if ((token === import5.Ng2UploaderModule)) { return this._Ng2UploaderModule_3; }
    if ((token === import1.SharedModule)) { return this._SharedModule_4; }
    if ((token === import6.NgLocalization)) { return this._NgLocalization_5; }
    if ((token === import7.RadioControlRegistry)) { return this._RadioControlRegistry_6; }
    if ((token === import8.Ng2Uploader)) { return this._Ng2Uploader_7; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const SharedModuleNgFactory:import0.NgModuleFactory<import1.SharedModule> = new import0.NgModuleFactory(SharedModuleInjector,import1.SharedModule);