"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
// import needed PrimeNG modules here
// import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var animations_1 = require("@angular/platform-browser/animations");
var primeng_1 = require("primeng/primeng");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            primeng_1.InputTextModule,
            primeng_1.PanelModule,
            primeng_1.SplitButtonModule,
            primeng_1.ButtonModule,
            primeng_1.RatingModule,
            primeng_1.RadioButtonModule,
            animations_1.BrowserAnimationsModule],
        providers: [{ provide: common_1.APP_BASE_HREF, useValue: '/' }],
        declarations: [app_component_1.AppComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map