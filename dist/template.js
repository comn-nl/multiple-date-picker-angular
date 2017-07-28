"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_TEMPLATE = "\n<div class=\"multiple-date-picker\">\n    <div class=\"picker-top-row\" [ngSwitch]=\"arrow\">\n        <div class=\"text-center picker-navigate picker-navigate-left-arrow\" id=\"button\" [ngClass]=\"{'disabled':disableBackButton}\" (click)=\"changeMonth($event, disableBackButton, -1)\">\n            <p *ngSwitchDefault>&lt;</p>\n            <p *ngSwitchCase=\"1\"><i class=\"material-icons\">keyboard_arrow_left</i></p>\n            <p *ngSwitchCase=\"2\"><i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i></p>\n        </div>\n        <div class=\"text-center picker-month\">\n            {{monthToDisplay}}\n            <span *ngIf=\"yearsForSelect.length < 2\">{{yearToDisplay}}</span>\n        </div>\n        <div class=\"text-center picker-navigate picker-navigate-right-arrow\" [ngClass]=\"{'disabled':disableNextButton}\" (click)=\"changeMonth($event, disableNextButton, 1)\">\n            <p *ngSwitchDefault>&gt;</p>\n            <p *ngSwitchCase=\"1\"><i class=\"material-icons\">keyboard_arrow_right</i></p>\n            <p *ngSwitchCase=\"2\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></p>\n        </div>\n            \n    </div>\n    <div class=\"picker-days-week-row\">\n        <div class=\"text-center\" *ngFor=\"let weekDays of daysOfWeek\">{{weekDays}}</div>\n    </div>\n    <div class=\"picker-days-row\">\n        <div dateClicked class=\"text-center picker-day {{getDayClasses(day)}}\" title=\"{{day.title}}\" *ngFor=\"let day of days\" (click)=\"toggleDay($event, day)\" >\n            {{day ? day.mdp.otherMonth && !showDaysOfSurroundingMonths ? '&nbsp;' : day.date.format('D') : ''}}\n        </div>\n    </div>\n</div>\n";
exports.DEFAULT_STYLES = "\n    .text-center {\n        text-align: center\n    }\n    \n    .multiple-date-picker {\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none\n    }\n    \n    .multiple-date-picker,.picker-days-row,.picker-days-week-row,.picker-top-row {\n        width: 100%\n    }\n    \n    .picker-top-row>div {\n        display: inline-block\n    }\n    \n    .picker-navigate {\n        width: 16.5%\n    }\n    \n    .picker-navigate:hover {\n        cursor: pointer\n    }\n    \n    .picker-navigate.disabled,.picker-navigate.disabled:hover {\n        color: #ddd;\n        cursor: default\n    }\n    \n    .picker-month {\n        width: 65%\n    }\n    \n    .picker-days-row>div,.picker-days-week-row>div {\n        width: 14.28%;\n        display: inline-block\n    }\n    \n    .picker-day,.picker-top-row {\n        padding: 10px 0\n    }\n    \n    .picker-day {\n        background-color: #fff;\n        border: 1px solid #eee;\n        box-sizing: border-box;\n        color: #000\n    }\n    \n    .picker-day.today,.picker-day.today.picker-off,.picker-day.today.picker-off:hover,.picker-day.today.picker-selected,.picker-day.today:hover {\n        color: #00a3ff\n    }\n    \n    .picker-day:not(.picker-off):not(.picker-empty):hover {\n        background-color: rgba(0, 165, 206, 0.5);\n        color: #f7fb65;\n    }\n    \n    .picker-day.picker-selected {\n        background-color: #d0d425;\n        color: #568eab;\n    }\n    \n    .picker-day.picker-selected.click-selection-active:not(.picker-off) {\n        background-color: #d0d425;\n        color: #568eab;\n    }\n    \n    .picker-day.picker-off,.picker-day.picker-off:hover {\n        background-color: #eee;\n        color: #bbb;\n        cursor: default\n    }\n    \n    .picker-day.picker-empty,.picker-day.picker-empty:hover {\n        background-color: #fafafa;\n        cursor: default\n    }\n    \n    .picker-day.stay-dates {\n        background-color: #78BC42;\n        color: #fff;\n    }\n    \n    .picker-day.stay-dates.picker-selected {\n        background-color: #d0d425;\n        color: #568eab;\n    }\n    \n    .picker-day.today.stay-dates {\n        background-color: #00a5ce;\n        color: #f7fb65;\n    }\n    \n    .picker-day.today.stay-dates.picker-selected {\n        background-color: #d0d425;\n        color: #568eab;\n    }\n    \n    .picker-day.stay-dates.picker-off {\n        background-color: rgba(91, 136, 56, 0.6);\n        color: rgba(255, 255, 255, 0.6);\n    }\n    \n    .picker-day.stay-dates:not(.picker-off):hover{\n        background-color: rgba(0, 165, 206, 0.5);\n        color: #f7fb65;\n    }\n    \n    .picker-day.stay-dates.picker-selected.click-selection-active:not(.picker-off) {\n        background-color: #d0d425;\n        color: #568eab;\n    }\n    \n    input {\n        border: 0;\n        border-radius: 3px;\n        height: 30px;\n        max-width: 100px;\n        text-align: center;\n    }\n";
