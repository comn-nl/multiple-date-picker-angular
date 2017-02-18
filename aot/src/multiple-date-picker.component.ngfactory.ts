/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './multiple-date-picker.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/forms/src/directives/control_value_accessor';
import * as import10 from '@angular/core/src/linker/view_container';
import * as import11 from '../aot/node_modules/@angular/common/src/directives/ng_class.ngfactory';
import * as import12 from '../aot/node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import13 from '../aot/node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import14 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import15 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import16 from '@angular/core/src/linker/element_ref';
import * as import17 from '@angular/core/src/linker/template_ref';
import * as import18 from '@angular/common/src/directives/ng_class';
import * as import19 from '@angular/common/src/directives/ng_if';
import * as import20 from '@angular/common/src/directives/ng_for';
export class Wrapper_MultipleDatePickerComponent {
  /*private*/ _eventHandler:Function;
  context:import0.MultipleDatePickerComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  /*private*/ _expr_11:any;
  /*private*/ _expr_12:any;
  /*private*/ _expr_13:any;
  /*private*/ _expr_14:any;
  /*private*/ _expr_15:any;
  /*private*/ _expr_16:any;
  /*private*/ _expr_17:any;
  /*private*/ _expr_18:any;
  /*private*/ _expr_19:any;
  /*private*/ _expr_20:any;
  /*private*/ _expr_21:any;
  /*private*/ _expr_22:any;
  constructor() {
    this._changed = false;
    this.context = new import0.MultipleDatePickerComponent();
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
    this._expr_5 = import1.UNINITIALIZED;
    this._expr_6 = import1.UNINITIALIZED;
    this._expr_7 = import1.UNINITIALIZED;
    this._expr_8 = import1.UNINITIALIZED;
    this._expr_9 = import1.UNINITIALIZED;
    this._expr_10 = import1.UNINITIALIZED;
    this._expr_11 = import1.UNINITIALIZED;
    this._expr_12 = import1.UNINITIALIZED;
    this._expr_13 = import1.UNINITIALIZED;
    this._expr_14 = import1.UNINITIALIZED;
    this._expr_15 = import1.UNINITIALIZED;
    this._expr_16 = import1.UNINITIALIZED;
    this._expr_17 = import1.UNINITIALIZED;
    this._expr_18 = import1.UNINITIALIZED;
    this._expr_19 = import1.UNINITIALIZED;
    this._expr_20 = import1.UNINITIALIZED;
    this._expr_21 = import1.UNINITIALIZED;
    this._expr_22 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  check_highlightDays(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.highlightDays = currValue;
      this._expr_0 = currValue;
    }
  }
  check_dayClick(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.dayClick = currValue;
      this._expr_1 = currValue;
    }
  }
  check_dayHover(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.dayHover = currValue;
      this._expr_2 = currValue;
    }
  }
  check_rightClick(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.rightClick = currValue;
      this._expr_3 = currValue;
    }
  }
  check_month(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_4,currValue))) {
      this._changed = true;
      this.context.month = currValue;
      this._expr_4 = currValue;
    }
  }
  check_monthChanged(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_5,currValue))) {
      this._changed = true;
      this.context.monthChanged = currValue;
      this._expr_5 = currValue;
    }
  }
  check_monthClick(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_6,currValue))) {
      this._changed = true;
      this.context.monthClick = currValue;
      this._expr_6 = currValue;
    }
  }
  check_weekDaysOff(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_7,currValue))) {
      this._changed = true;
      this.context.weekDaysOff = currValue;
      this._expr_7 = currValue;
    }
  }
  check_allDaysOff(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_8,currValue))) {
      this._changed = true;
      this.context.allDaysOff = currValue;
      this._expr_8 = currValue;
    }
  }
  check_daysAllowed(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_9,currValue))) {
      this._changed = true;
      this.context.daysAllowed = currValue;
      this._expr_9 = currValue;
    }
  }
  check_disableNavigation(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_10,currValue))) {
      this._changed = true;
      this.context.disableNavigation = currValue;
      this._expr_10 = currValue;
    }
  }
  check_disallowBackPastMonths(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_11,currValue))) {
      this._changed = true;
      this.context.disallowBackPastMonths = currValue;
      this._expr_11 = currValue;
    }
  }
  check_disallowGoFuturMonths(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_12,currValue))) {
      this._changed = true;
      this.context.disallowGoFuturMonths = currValue;
      this._expr_12 = currValue;
    }
  }
  check_showDaysOfSurroundingMonths(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_13,currValue))) {
      this._changed = true;
      this.context.showDaysOfSurroundingMonths = currValue;
      this._expr_13 = currValue;
    }
  }
  check_cssDaysOfSurroundingMonths(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_14,currValue))) {
      this._changed = true;
      this.context.cssDaysOfSurroundingMonths = currValue;
      this._expr_14 = currValue;
    }
  }
  check_fireEventsForDaysOfSurroundingMonths(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_15,currValue))) {
      this._changed = true;
      this.context.fireEventsForDaysOfSurroundingMonths = currValue;
      this._expr_15 = currValue;
    }
  }
  check_disableDaysBefore(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_16,currValue))) {
      this._changed = true;
      this.context.disableDaysBefore = currValue;
      this._expr_16 = currValue;
    }
  }
  check_disableDaysAfter(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_17,currValue))) {
      this._changed = true;
      this.context.disableDaysAfter = currValue;
      this._expr_17 = currValue;
    }
  }
  check_changeYearPast(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_18,currValue))) {
      this._changed = true;
      this.context.changeYearPast = currValue;
      this._expr_18 = currValue;
    }
  }
  check_changeYearFuture(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_19,currValue))) {
      this._changed = true;
      this.context.changeYearFuture = currValue;
      this._expr_19 = currValue;
    }
  }
  check_projectScope(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_20,currValue))) {
      this._changed = true;
      this.context.projectScope = currValue;
      this._expr_20 = currValue;
    }
  }
  check_sundayFirstDay(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_21,currValue))) {
      this._changed = true;
      this.context.sundayFirstDay = currValue;
      this._expr_21 = currValue;
    }
  }
  check__projectScope(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_22,currValue))) {
      this._changed = true;
      this.context._projectScope = currValue;
      this._expr_22 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_MultipleDatePickerComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_MultipleDatePickerComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.MultipleDatePickerComponent>;
  _MultipleDatePickerComponent_0_3:Wrapper_MultipleDatePickerComponent;
  __NG_VALUE_ACCESSOR_0_4:any[];
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_MultipleDatePickerComponent_Host0,renderType_MultipleDatePickerComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  get _NG_VALUE_ACCESSOR_0_4():any[] {
    if ((this.__NG_VALUE_ACCESSOR_0_4 == null)) { (this.__NG_VALUE_ACCESSOR_0_4 = [this._MultipleDatePickerComponent_0_3.context]); }
    return this.__NG_VALUE_ACCESSOR_0_4;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'multiple-date-picker',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_MultipleDatePickerComponent0(this.viewUtils,this,0,this._el_0);
    this._MultipleDatePickerComponent_0_3 = new Wrapper_MultipleDatePickerComponent();
    this.compView_0.create(this._MultipleDatePickerComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._MultipleDatePickerComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.MultipleDatePickerComponent) && (0 === requestNodeIndex))) { return this._MultipleDatePickerComponent_0_3.context; }
    if (((token === import9.NG_VALUE_ACCESSOR) && (0 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._MultipleDatePickerComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const MultipleDatePickerComponentNgFactory:import8.ComponentFactory<import0.MultipleDatePickerComponent> = new import8.ComponentFactory<import0.MultipleDatePickerComponent>('multiple-date-picker',View_MultipleDatePickerComponent_Host0,import0.MultipleDatePickerComponent);
const styles_MultipleDatePickerComponent:any[] = ['.text-center[_ngcontent-%COMP%] {\n        text-align: center\n    }\n    \n    .multiple-date-picker[_ngcontent-%COMP%] {\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none\n    }\n    \n    .multiple-date-picker[_ngcontent-%COMP%], .picker-days-row[_ngcontent-%COMP%], .picker-days-week-row[_ngcontent-%COMP%], .picker-top-row[_ngcontent-%COMP%] {\n        width: 100%\n    }\n    \n    .picker-top-row[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] {\n        display: inline-block\n    }\n    \n    .picker-navigate[_ngcontent-%COMP%] {\n        width: 16.66%\n    }\n    \n    .picker-navigate[_ngcontent-%COMP%]:hover {\n        cursor: pointer\n    }\n    \n    .picker-navigate.disabled[_ngcontent-%COMP%], .picker-navigate.disabled[_ngcontent-%COMP%]:hover {\n        color: #ddd;\n        cursor: default\n    }\n    \n    .picker-month[_ngcontent-%COMP%] {\n        width: 66%\n    }\n    \n    .picker-days-row[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .picker-days-week-row[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] {\n        width: 14.28%;\n        display: inline-block\n    }\n    \n    .picker-day[_ngcontent-%COMP%], .picker-top-row[_ngcontent-%COMP%] {\n        padding: 10px 0\n    }\n    \n    .picker-day[_ngcontent-%COMP%] {\n        background-color: #fff;\n        border: 1px solid #eee;\n        box-sizing: border-box;\n        color: #000\n    }\n    \n    .picker-day.today[_ngcontent-%COMP%], .picker-day.today.picker-off[_ngcontent-%COMP%], .picker-day.today.picker-off[_ngcontent-%COMP%]:hover, .picker-day.today.picker-selected[_ngcontent-%COMP%], .picker-day.today[_ngcontent-%COMP%]:hover {\n        color: #00a3ff\n    }\n    \n    .picker-day[_ngcontent-%COMP%]:not(.picker-off):not(.picker-empty):hover {\n        background-color: #C6000B;\n        color: #fff;\n        cursor: pointer\n    }\n    \n    .picker-day.picker-selected[_ngcontent-%COMP%] {\n        background-color: #C6000B;\n        color: #fff\n    }\n    \n    .picker-day.picker-off[_ngcontent-%COMP%], .picker-day.picker-off[_ngcontent-%COMP%]:hover {\n        background-color: #eee;\n        color: #bbb;\n        cursor: default\n    }\n    \n    .picker-day.picker-empty[_ngcontent-%COMP%], .picker-day.picker-empty[_ngcontent-%COMP%]:hover {\n        background-color: #fafafa;\n        cursor: default\n    }\n    \n    input[_ngcontent-%COMP%] {\n            border: 0;\n            border-radius: 3px;\n            height: 30px;\n            max-width: 100px;\n            text-align: center;\n        }'];
class View_MultipleDatePickerComponent1 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import10.ViewContainer) {
    super(View_MultipleDatePickerComponent1,renderType_MultipleDatePickerComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_2 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'span',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2:any = import3.inlineInterpolate(1,'',this.parentView.context.yearToDisplay,'');
    if (import3.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setText(this._text_1,currVal_2);
      this._expr_2 = currVal_2;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_MultipleDatePickerComponent2 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import10.ViewContainer) {
    super(View_MultipleDatePickerComponent2,renderType_MultipleDatePickerComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_2 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'class','text-center'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2:any = import3.inlineInterpolate(1,'',this.context.$implicit,'');
    if (import3.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setText(this._text_1,currVal_2);
      this._expr_2 = currVal_2;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_MultipleDatePickerComponent3 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import10.ViewContainer) {
    super(View_MultipleDatePickerComponent3,renderType_MultipleDatePickerComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_0));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),[disposable_0]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2:any = import3.inlineInterpolate(1,'text-center picker-day ',this.parentView.context.getDayClasses(this.context.$implicit),'');
    if (import3.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementProperty(this._el_0,'className',currVal_2);
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = import3.inlineInterpolate(1,'',this.context.$implicit.title,'');
    if (import3.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementProperty(this._el_0,'title',currVal_3);
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = import3.inlineInterpolate(1,'\n            ',(this.context.$implicit? ((this.context.$implicit.mdp.otherMonth && !this.parentView.context.showDaysOfSurroundingMonths)? ' ': this.context.$implicit.date.format('D')): ''),'\n        ');
    if (import3.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setText(this._text_1,currVal_4);
      this._expr_4 = currVal_4;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.parentView.context.toggleDay($event,this.context.$implicit)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
var renderType_MultipleDatePickerComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.Emulated,styles_MultipleDatePickerComponent,{});
export class View_MultipleDatePickerComponent0 extends import2.AppView<import0.MultipleDatePickerComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  _NgClass_5_3:import11.Wrapper_NgClass;
  _text_6:any;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _anchor_10:any;
  /*private*/ _vc_10:import10.ViewContainer;
  _TemplateRef_10_5:any;
  _NgIf_10_6:import12.Wrapper_NgIf;
  _text_11:any;
  _text_12:any;
  _el_13:any;
  _NgClass_13_3:import11.Wrapper_NgClass;
  _text_14:any;
  _text_15:any;
  _text_16:any;
  _el_17:any;
  _text_18:any;
  _anchor_19:any;
  /*private*/ _vc_19:import10.ViewContainer;
  _TemplateRef_19_5:any;
  _NgFor_19_6:import13.Wrapper_NgFor;
  _text_20:any;
  _text_21:any;
  _el_22:any;
  _text_23:any;
  _anchor_24:any;
  /*private*/ _vc_24:import10.ViewContainer;
  _TemplateRef_24_5:any;
  _NgFor_24_6:import13.Wrapper_NgFor;
  _text_25:any;
  _text_26:any;
  _text_27:any;
  _map_39:any;
  /*private*/ _expr_40:any;
  _map_41:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_MultipleDatePickerComponent0,renderType_MultipleDatePickerComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
    this._map_39 = import3.pureProxy1((p0:any):{[key: string]:any} => {
      return {disabled: p0};
    });
    this._expr_40 = import1.UNINITIALIZED;
    this._map_41 = import3.pureProxy1((p0:any):{[key: string]:any} => {
      return {disabled: p0};
    });
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','multiple-date-picker'),(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,this._el_1,'div',new import3.InlineArray2(2,'class','picker-top-row'),(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_3,'div',new import3.InlineArray2(2,'class','text-center picker-navigate picker-navigate-left-arrow'),(null as any));
    this._NgClass_5_3 = new import11.Wrapper_NgClass(this.parentView.injectorGet(import14.IterableDiffers,this.parentIndex),this.parentView.injectorGet(import15.KeyValueDiffers,this.parentIndex),new import16.ElementRef(this._el_5),this.renderer);
    this._text_6 = this.renderer.createText(this._el_5,'<',(null as any));
    this._text_7 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._el_8 = import3.createRenderElement(this.renderer,this._el_3,'div',new import3.InlineArray2(2,'class','text-center picker-month'),(null as any));
    this._text_9 = this.renderer.createText(this._el_8,'',(null as any));
    this._anchor_10 = this.renderer.createTemplateAnchor(this._el_8,(null as any));
    this._vc_10 = new import10.ViewContainer(10,8,this,this._anchor_10);
    this._TemplateRef_10_5 = new import17.TemplateRef_(this,10,this._anchor_10);
    this._NgIf_10_6 = new import12.Wrapper_NgIf(this._vc_10.vcRef,this._TemplateRef_10_5);
    this._text_11 = this.renderer.createText(this._el_8,'\n        ',(null as any));
    this._text_12 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._el_13 = import3.createRenderElement(this.renderer,this._el_3,'div',new import3.InlineArray2(2,'class','text-center picker-navigate picker-navigate-right-arrow'),(null as any));
    this._NgClass_13_3 = new import11.Wrapper_NgClass(this.parentView.injectorGet(import14.IterableDiffers,this.parentIndex),this.parentView.injectorGet(import15.KeyValueDiffers,this.parentIndex),new import16.ElementRef(this._el_13),this.renderer);
    this._text_14 = this.renderer.createText(this._el_13,'>',(null as any));
    this._text_15 = this.renderer.createText(this._el_3,'\n    ',(null as any));
    this._text_16 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._el_17 = import3.createRenderElement(this.renderer,this._el_1,'div',new import3.InlineArray2(2,'class','picker-days-week-row'),(null as any));
    this._text_18 = this.renderer.createText(this._el_17,'\n        ',(null as any));
    this._anchor_19 = this.renderer.createTemplateAnchor(this._el_17,(null as any));
    this._vc_19 = new import10.ViewContainer(19,17,this,this._anchor_19);
    this._TemplateRef_19_5 = new import17.TemplateRef_(this,19,this._anchor_19);
    this._NgFor_19_6 = new import13.Wrapper_NgFor(this._vc_19.vcRef,this._TemplateRef_19_5,this.parentView.injectorGet(import14.IterableDiffers,this.parentIndex),this.ref);
    this._text_20 = this.renderer.createText(this._el_17,'\n    ',(null as any));
    this._text_21 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._el_22 = import3.createRenderElement(this.renderer,this._el_1,'div',new import3.InlineArray2(2,'class','picker-days-row'),(null as any));
    this._text_23 = this.renderer.createText(this._el_22,'\n        ',(null as any));
    this._anchor_24 = this.renderer.createTemplateAnchor(this._el_22,(null as any));
    this._vc_24 = new import10.ViewContainer(24,22,this,this._anchor_24);
    this._TemplateRef_24_5 = new import17.TemplateRef_(this,24,this._anchor_24);
    this._NgFor_24_6 = new import13.Wrapper_NgFor(this._vc_24.vcRef,this._TemplateRef_24_5,this.parentView.injectorGet(import14.IterableDiffers,this.parentIndex),this.ref);
    this._text_25 = this.renderer.createText(this._el_22,'\n    ',(null as any));
    this._text_26 = this.renderer.createText(this._el_1,'\n',(null as any));
    this._text_27 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_5,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_5));
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_13,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_13));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._anchor_10,
      this._text_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._text_15,
      this._text_16,
      this._el_17,
      this._text_18,
      this._anchor_19,
      this._text_20,
      this._text_21,
      this._el_22,
      this._text_23,
      this._anchor_24,
      this._text_25,
      this._text_26,
      this._text_27
    ]
    ),[
      disposable_0,
      disposable_1
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import18.NgClass) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._NgClass_5_3.context; }
    if (((token === import17.TemplateRef) && (10 === requestNodeIndex))) { return this._TemplateRef_10_5; }
    if (((token === import19.NgIf) && (10 === requestNodeIndex))) { return this._NgIf_10_6.context; }
    if (((token === import18.NgClass) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 14)))) { return this._NgClass_13_3.context; }
    if (((token === import17.TemplateRef) && (19 === requestNodeIndex))) { return this._TemplateRef_19_5; }
    if (((token === import20.NgFor) && (19 === requestNodeIndex))) { return this._NgFor_19_6.context; }
    if (((token === import17.TemplateRef) && (24 === requestNodeIndex))) { return this._TemplateRef_24_5; }
    if (((token === import20.NgFor) && (24 === requestNodeIndex))) { return this._NgFor_24_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_5_0_0:any = 'text-center picker-navigate picker-navigate-left-arrow';
    this._NgClass_5_3.check_klass(currVal_5_0_0,throwOnChange,false);
    const currVal_5_0_1:any = this._map_39(this.context.disableBackButton);
    this._NgClass_5_3.check_ngClass(currVal_5_0_1,throwOnChange,false);
    this._NgClass_5_3.ngDoCheck(this,this._el_5,throwOnChange);
    const currVal_10_0_0:any = (this.context.yearsForSelect.length < 2);
    this._NgIf_10_6.check_ngIf(currVal_10_0_0,throwOnChange,false);
    this._NgIf_10_6.ngDoCheck(this,this._anchor_10,throwOnChange);
    const currVal_13_0_0:any = 'text-center picker-navigate picker-navigate-right-arrow';
    this._NgClass_13_3.check_klass(currVal_13_0_0,throwOnChange,false);
    const currVal_13_0_1:any = this._map_41(this.context.disableNextButton);
    this._NgClass_13_3.check_ngClass(currVal_13_0_1,throwOnChange,false);
    this._NgClass_13_3.ngDoCheck(this,this._el_13,throwOnChange);
    const currVal_19_0_0:any = this.context.daysOfWeek;
    this._NgFor_19_6.check_ngForOf(currVal_19_0_0,throwOnChange,false);
    this._NgFor_19_6.ngDoCheck(this,this._anchor_19,throwOnChange);
    const currVal_24_0_0:any = this.context.days;
    this._NgFor_24_6.check_ngForOf(currVal_24_0_0,throwOnChange,false);
    this._NgFor_24_6.ngDoCheck(this,this._anchor_24,throwOnChange);
    this._vc_10.detectChangesInNestedViews(throwOnChange);
    this._vc_19.detectChangesInNestedViews(throwOnChange);
    this._vc_24.detectChangesInNestedViews(throwOnChange);
    const currVal_40:any = import3.inlineInterpolate(1,'\n            ',this.context.monthToDisplay,'\n            ');
    if (import3.checkBinding(throwOnChange,this._expr_40,currVal_40)) {
      this.renderer.setText(this._text_9,currVal_40);
      this._expr_40 = currVal_40;
    }
  }
  destroyInternal():void {
    this._vc_10.destroyNestedViews();
    this._vc_19.destroyNestedViews();
    this._vc_24.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 10)) { return new View_MultipleDatePickerComponent1(this.viewUtils,this,10,this._anchor_10,this._vc_10); }
    if ((nodeIndex == 19)) { return new View_MultipleDatePickerComponent2(this.viewUtils,this,19,this._anchor_19,this._vc_19); }
    if ((nodeIndex == 24)) { return new View_MultipleDatePickerComponent3(this.viewUtils,this,24,this._anchor_24,this._vc_24); }
    return (null as any);
  }
  handleEvent_5(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.changeMonth($event,this.context.disableBackButton,(0 - 1))) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_13(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.changeMonth($event,this.context.disableNextButton,1)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}