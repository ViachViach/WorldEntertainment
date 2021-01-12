(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-material.module.ts":
/*!****************************************!*\
  !*** ./src/app/app-material.module.ts ***!
  \****************************************/
/*! exports provided: AppMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function() { return AppMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/toolbar.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/sidenav.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/input.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/select.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm5/scrolling.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/menu.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/autocomplete.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/tooltip.js");















var AppMaterialModule = /** @class */ (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppMaterialModule });
    AppMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppMaterialModule_Factory(t) { return new (t || AppMaterialModule)(); }, providers: [], imports: [[
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__["ScrollingModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"]
            ],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__["ScrollingModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"]] });
    return AppMaterialModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppMaterialModule, { imports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__["ScrollingModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"]], exports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__["ScrollingModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__["ScrollingModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"]
                ],
                exports: [
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__["ScrollingModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"]
                ],
                providers: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");




var routes = [];
//
// const routerOptions: ExtraOptions = {
//   useHash: false,
//   anchorScrolling: 'enabled',
//   // scrollPositionRestoration: 'enabled',
//   // onSameUrlNavigation: 'reload'
// };
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _containers_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/main-layout/main-layout.component */ "./src/app/containers/main-layout/main-layout.component.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'pets-app';
    }
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main-layout");
        } }, directives: [_containers_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_1__["MainLayoutComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-material.module */ "./src/app/app-material.module.ts");
/* harmony import */ var _containers_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./containers/main-layout/main-layout.component */ "./src/app/containers/main-layout/main-layout.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_content_content_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/content/content.component */ "./src/app/components/content/content.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_introduce_introduce_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/introduce/introduce.component */ "./src/app/components/introduce/introduce.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm5/scrolling.js");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_contact_phone_input_phone_input_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/contact/phone-input/phone-input.component */ "./src/app/components/contact/phone-input/phone-input.component.ts");
/* harmony import */ var _components_clients_client_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/clients/client.component */ "./src/app/components/clients/client.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _store_reducer_app_reducer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./store/reducer/app.reducer */ "./src/app/store/reducer/app.reducer.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
/* harmony import */ var _store_effect_config_effects__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./store/effect/config.effects */ "./src/app/store/effect/config.effects.ts");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/__ivy_ngcc__/fesm2015/ngrx-router-store.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/ngrx-store-devtools.js");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./service/config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var _service_iso_code_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./service/iso-code.service */ "./src/app/service/iso-code.service.ts");
/* harmony import */ var _store_effect_isoCode_effects__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./store/effect/isoCode.effects */ "./src/app/store/effect/isoCode.effects.ts");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/__ivy_ngcc__/fesm5/nicky-lenaers-ngx-scroll-to.js");
/* harmony import */ var _components_lang_menu_lang_menu_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/lang-menu/lang-menu.component */ "./src/app/components/lang-menu/lang-menu.component.ts");
/* harmony import */ var _components_social_social_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/social/social.component */ "./src/app/components/social/social.component.ts");





































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__["ScrollDispatcher"], _service_config_service__WEBPACK_IMPORTED_MODULE_25__["ConfigService"], _service_iso_code_service__WEBPACK_IMPORTED_MODULE_26__["IsoCodeService"]], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _app_material_module__WEBPACK_IMPORTED_MODULE_7__["AppMaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_28__["ScrollToModule"].forRoot(),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_18__["StoreModule"].forRoot(_store_reducer_app_reducer__WEBPACK_IMPORTED_MODULE_19__["appReducer"], { metaReducers: _store_reducer_app_reducer__WEBPACK_IMPORTED_MODULE_19__["metaReducers"] }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_20__["EffectsModule"].forRoot([_store_effect_config_effects__WEBPACK_IMPORTED_MODULE_21__["ConfigEffect"], _store_effect_isoCode_effects__WEBPACK_IMPORTED_MODULE_27__["IsoCodeffect"]]),
                _ngrx_router_store__WEBPACK_IMPORTED_MODULE_22__["StoreRouterConnectingModule"].forRoot({ stateKey: 'router' }),
                !src_environments_environment__WEBPACK_IMPORTED_MODULE_23__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_24__["StoreDevtoolsModule"].instrument() : [],
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _containers_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_8__["MainLayoutComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
        _components_content_content_component__WEBPACK_IMPORTED_MODULE_10__["ContentComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
        _components_introduce_introduce_component__WEBPACK_IMPORTED_MODULE_12__["IntroduceComponent"],
        _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"],
        _components_contact_phone_input_phone_input_component__WEBPACK_IMPORTED_MODULE_16__["PhoneNumberCustomInput"],
        _components_clients_client_component__WEBPACK_IMPORTED_MODULE_17__["ClientComponent"],
        _components_lang_menu_lang_menu_component__WEBPACK_IMPORTED_MODULE_29__["LangMenuComponent"],
        _components_social_social_component__WEBPACK_IMPORTED_MODULE_30__["SocialComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _app_material_module__WEBPACK_IMPORTED_MODULE_7__["AppMaterialModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_28__["ScrollToModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_18__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_20__["EffectsRootModule"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_22__["StoreRouterConnectingModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_24__["StoreDevtoolsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _containers_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_8__["MainLayoutComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                    _components_content_content_component__WEBPACK_IMPORTED_MODULE_10__["ContentComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                    _components_introduce_introduce_component__WEBPACK_IMPORTED_MODULE_12__["IntroduceComponent"],
                    _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"],
                    _components_contact_phone_input_phone_input_component__WEBPACK_IMPORTED_MODULE_16__["PhoneNumberCustomInput"],
                    _components_clients_client_component__WEBPACK_IMPORTED_MODULE_17__["ClientComponent"],
                    _components_lang_menu_lang_menu_component__WEBPACK_IMPORTED_MODULE_29__["LangMenuComponent"],
                    _components_social_social_component__WEBPACK_IMPORTED_MODULE_30__["SocialComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _app_material_module__WEBPACK_IMPORTED_MODULE_7__["AppMaterialModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                    _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_28__["ScrollToModule"].forRoot(),
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_18__["StoreModule"].forRoot(_store_reducer_app_reducer__WEBPACK_IMPORTED_MODULE_19__["appReducer"], { metaReducers: _store_reducer_app_reducer__WEBPACK_IMPORTED_MODULE_19__["metaReducers"] }),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_20__["EffectsModule"].forRoot([_store_effect_config_effects__WEBPACK_IMPORTED_MODULE_21__["ConfigEffect"], _store_effect_isoCode_effects__WEBPACK_IMPORTED_MODULE_27__["IsoCodeffect"]]),
                    _ngrx_router_store__WEBPACK_IMPORTED_MODULE_22__["StoreRouterConnectingModule"].forRoot({ stateKey: 'router' }),
                    !src_environments_environment__WEBPACK_IMPORTED_MODULE_23__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_24__["StoreDevtoolsModule"].instrument() : [],
                ],
                providers: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__["ScrollDispatcher"], _service_config_service__WEBPACK_IMPORTED_MODULE_25__["ConfigService"], _service_iso_code_service__WEBPACK_IMPORTED_MODULE_26__["IsoCodeService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/clients/client.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/clients/client.component.ts ***!
  \********************************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/icon.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");





var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Title
     * @meaning About Us
     */ 
    var MSG_EXTERNAL_AboutUsTitle$$SRC_APP_COMPONENTS_CLIENTS_CLIENT_COMPONENT_TS_1 = goog.getMsg("About Us ...");
    I18N_0 = MSG_EXTERNAL_AboutUsTitle$$SRC_APP_COMPONENTS_CLIENTS_CLIENT_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":About Us|Title @@AboutUsTitle\u241Faf25bd9226c88873f1cfdc6898ffd4e3c022de97\u241F5171412225323591878:About Us ..."], [":About Us|Title @@AboutUsTitle\u241Faf25bd9226c88873f1cfdc6898ffd4e3c022de97\u241F5171412225323591878:About Us ..."])));
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Desc 1st
     * @meaning About Us
     */ 
    var MSG_EXTERNAL_AboutUsDesc1$$SRC_APP_COMPONENTS_CLIENTS_CLIENT_COMPONENT_TS_3 = goog.getMsg("We participated in projects for various purposes - payment systems, document flow, integration solutions. {$lineBreak}To acheave excellent result we have always used modern stack. {$lineBreak}So by this reason we have strong experience in such technologies as:", { "lineBreak": "[\uFFFD#7\uFFFD\uFFFD/#7\uFFFD|\uFFFD#8\uFFFD\uFFFD/#8\uFFFD]" });
    I18N_2 = MSG_EXTERNAL_AboutUsDesc1$$SRC_APP_COMPONENTS_CLIENTS_CLIENT_COMPONENT_TS_3;
}
else {
    I18N_2 = $localize(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":About Us|Desc 1st @@AboutUsDesc1\u241F5ab3f959fdc0c6fae4ec120f9d94126da73c4981\u241F5548147904887427301:We participated in projects for various purposes - payment systems, document flow, integration solutions. ", ":LINE_BREAK:To acheave excellent result we have always used modern stack. ", ":LINE_BREAK:So by this reason we have strong experience in such technologies as:"], [":About Us|Desc 1st @@AboutUsDesc1\u241F5ab3f959fdc0c6fae4ec120f9d94126da73c4981\u241F5548147904887427301:We participated in projects for various purposes - payment systems, document flow, integration solutions. ", ":LINE_BREAK:To acheave excellent result we have always used modern stack. ", ":LINE_BREAK:So by this reason we have strong experience in such technologies as:"])), "[\uFFFD#7\uFFFD\uFFFD/#7\uFFFD|\uFFFD#8\uFFFD\uFFFD/#8\uFFFD]", "[\uFFFD#7\uFFFD\uFFFD/#7\uFFFD|\uFFFD#8\uFFFD\uFFFD/#8\uFFFD]");
}
I18N_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nPostprocess"](I18N_2);
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Desc 2nd
     * @meaning About Us
     */ 
    var MSG_EXTERNAL_AboutUsDesc2$$SRC_APP_COMPONENTS_CLIENTS_CLIENT_COMPONENT_TS_5 = goog.getMsg("We have earned the trust of companies as software developers {$lineBreak} where we could implement their requirements according to their purposes, delivery products on time ", { "lineBreak": "\uFFFD#43\uFFFD\uFFFD/#43\uFFFD" });
    I18N_4 = MSG_EXTERNAL_AboutUsDesc2$$SRC_APP_COMPONENTS_CLIENTS_CLIENT_COMPONENT_TS_5;
}
else {
    I18N_4 = $localize(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":About Us|Desc 2nd @@AboutUsDesc2\u241F8c0ac6b1fab24041448564212c24cab24663cf44\u241F226629478792385793:We have earned the trust of companies as software developers ", ":LINE_BREAK: where we could implement their requirements according to their purposes, delivery products on time "], [":About Us|Desc 2nd @@AboutUsDesc2\u241F8c0ac6b1fab24041448564212c24cab24663cf44\u241F226629478792385793:We have earned the trust of companies as software developers ", ":LINE_BREAK: where we could implement their requirements according to their purposes, delivery products on time "])), "\uFFFD#43\uFFFD\uFFFD/#43\uFFFD");
}
var ClientComponent = /** @class */ (function () {
    function ClientComponent(iconRegistry, sanitizer) {
        iconRegistry
            .addSvgIcon('spring', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/spring.svg'))
            .addSvgIcon('angular', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/angular.svg'))
            .addSvgIcon('nodejs', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/nodejs.svg'))
            .addSvgIcon('redux', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/redux.svg'))
            .addSvgIcon('elasticsearch', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/elasticsearch.svg'))
            .addSvgIcon('html5', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/html5.svg'))
            .addSvgIcon('css3', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/css.svg'))
            .addSvgIcon('hibernate', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/hibernate.svg'))
            .addSvgIcon('postgresql', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/postgresql.svg'))
            .addSvgIcon('mysql', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/mysql-7.svg'))
            .addSvgIcon('commerz', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/cl_cb.svg'))
            .addSvgIcon('accenture', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/cl_a.svg'))
            .addSvgIcon('telstra', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/cl_ts.svg'))
            .addSvgIcon('sberbank', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/cl_sb.svg'))
            .addSvgIcon('terralink', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/cl_tr.svg'));
    }
    ClientComponent.prototype.ngOnInit = function () {
    };
    ClientComponent.ɵfac = function ClientComponent_Factory(t) { return new (t || ClientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"])); };
    ClientComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ClientComponent, selectors: [["app-client"]], decls: 60, vars: 0, consts: [["id", "clientId", 1, "white", "intrd-container"], [1, "intrd-container-intrl"], [1, "title"], [1, "grid-wrapper"], [1, "card", "zone"], [1, "card-title"], ["svgIcon", "spring", "aria-hidden", "false", "aria-label", "Example thumbs up SVG icon", 1, "app-icon"], ["svgIcon", "angular", "aria-hidden", "false", "aria-label", "Example thumbs up SVG icon", 1, "app-icon"], ["svgIcon", "nodejs", "aria-hidden", "false", "aria-label", "Example thumbs up SVG icon", 1, "app-icon"], ["svgIcon", "redux", "aria-hidden", "false", "aria-label", "Example thumbs up SVG icon", 1, "app-icon"], ["svgIcon", "elasticsearch", "aria-hidden", "false", "aria-label", "Example thumbs up SVG icon", 1, "app-icon", "black"], ["svgIcon", "html5", "aria-hidden", "false", "aria-label", "Example thumbs up SVG icon", 1, "app-icon", "black"], ["svgIcon", "css3", "aria-hidden", "false", "aria-label", "Example thumbs up SVG icon", 1, "app-icon", "black"], ["svgIcon", "hibernate", "aria-hidden", "false", "aria-label", "Example thumbs up SVG icon", 1, "app-icon"], ["svgIcon", "postgresql", "aria-hidden", "false", "aria-label", "Example thumbs up SVG icon", 1, "app-icon"], ["svgIcon", "mysql", "aria-hidden", "false", "aria-label", "Example thumbs up SVG icon", 1, "app-icon", "black"], ["svgIcon", "commerz", "aria-hidden", "false", "aria-label", "Example thumbs up SVG icon", 1, "app-icon", "black"], ["svgIcon", "accenture", "aria-hidden", "false", "aria-label", "Example thumbs up SVG icon", 1, "app-icon", "black"], ["svgIcon", "telstra", "aria-hidden", "false", "aria-label", "Example thumbs up SVG icon", 1, "app-icon"], ["svgIcon", "sberbank", "aria-hidden", "false", "aria-label", "Example thumbs up SVG icon", 1, "app-icon"], ["svgIcon", "terralink", "aria-hidden", "false", "aria-label", "Example thumbs up SVG icon", 1, "app-icon", "black"]], template: function ClientComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](4, I18N_0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](6, I18N_2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "mat-icon", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "mat-icon", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "mat-icon", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "mat-icon", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "mat-icon", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "mat-icon", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "mat-icon", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "mat-icon", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "mat-icon", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "mat-icon", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](42, I18N_4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "mat-icon", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "mat-icon", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "mat-icon", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "mat-icon", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "mat-icon", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"]], styles: [".intrd-container[_ngcontent-%COMP%] {\n  padding: 2% 5% 5% 5%;\n}\n.intrd-container[_ngcontent-%COMP%]   .intrd-container-intrl[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  padding: 20px 0;\n}\n.intrd-container[_ngcontent-%COMP%]   .intrd-container-intrl[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: bold;\n}\n.intrd-container[_ngcontent-%COMP%]   .intrd-container-intrl[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #1a1818;\n}\n.white[_ngcontent-%COMP%] {\n  background: white;\n}\n.grid-wrapper[_ngcontent-%COMP%] {\n  align-content: center;\n  display: grid;\n  grid-template-columns: repeat(5, minmax(150px, 1fr));\n  grid-gap: 10px;\n}\n@media (max-width: 800px) {\n  .grid-wrapper[_ngcontent-%COMP%] {\n    align-content: center;\n    display: grid;\n    grid-template-columns: repeat(1, minmax(350px, 1fr));\n    grid-gap: 10px;\n  }\n}\n.zone[_ngcontent-%COMP%] {\n  color: #FFF;\n  font-size: 2em;\n  border-radius: 4px;\n  transition: all 0.3s linear;\n}\n.card[_ngcontent-%COMP%] {\n  background-color: #FFF;\n  margin: 20px;\n}\n.card[_ngcontent-%COMP%]    > .card-title[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0 20px;\n}\n.card[_ngcontent-%COMP%]    > .card-title[_ngcontent-%COMP%]    > .app-icon[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 70px;\n  font-size: 60px;\n}\n.card[_ngcontent-%COMP%]    > .card-title[_ngcontent-%COMP%]    > .black[_ngcontent-%COMP%] {\n  fill: #161512;\n}\n.card[_ngcontent-%COMP%]    > .card-title[_ngcontent-%COMP%]    > .blue[_ngcontent-%COMP%] {\n  fill: #00bcd4;\n}\n.card[_ngcontent-%COMP%]    > .card-title[_ngcontent-%COMP%]    > .red[_ngcontent-%COMP%] {\n  fill: #F44336;\n}\n.card[_ngcontent-%COMP%]    > .card-title[_ngcontent-%COMP%]    > .h0[_ngcontent-%COMP%] {\n  fill: #59666c;\n}\n.card[_ngcontent-%COMP%]    > .card-title[_ngcontent-%COMP%]    > .h1[_ngcontent-%COMP%] {\n  fill: #bcae79;\n}\n.card[_ngcontent-%COMP%]    > .text[_ngcontent-%COMP%] {\n  padding: 0 20px 20px;\n}\n.card[_ngcontent-%COMP%]    > .card-title[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #1a1818;\n}\n.text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #1a1818;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jbGllbnRzL0M6XFxXb3Jrc3BhY2VcXHByb2plY3RzXFx3b3JsZC1lbnRlcnRhaW5tZW50XFxlbnRlcnRhaW5tZW50LXVpL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjbGllbnRzXFxjbGllbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2xpZW50cy9jbGllbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtBQ0NGO0FERUk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQU47QURFTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0FSO0FER007RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0RSO0FET0E7RUFDRSxpQkFBQTtBQ0pGO0FET0E7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxvREFBQTtFQUNBLGNBQUE7QUNKRjtBRE9BO0VBQ0U7SUFDRSxxQkFBQTtJQUNBLGFBQUE7SUFDQSxvREFBQTtJQUNBLGNBQUE7RUNKRjtBQUNGO0FET0E7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUNMRjtBRFFBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0FDTEY7QURRQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQ0xGO0FEUUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNMRjtBRFFBO0VBQ0UsYUFBQTtBQ0xGO0FEUUE7RUFDRSxhQUFBO0FDTEY7QURRQTtFQUNFLGFBQUE7QUNMRjtBRFFBO0VBQ0UsYUFBQTtBQ0xGO0FEUUE7RUFDRSxhQUFBO0FDTEY7QURRQTtFQUNFLG9CQUFBO0FDTEY7QURRQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQ0xGO0FEUUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0xGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jbGllbnRzL2NsaWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnRyZC1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDIlIDUlIDUlIDUlO1xyXG5cclxuICAuaW50cmQtY29udGFpbmVyLWludHJsIHtcclxuICAgIC50aXRsZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHggMDtcclxuXHJcbiAgICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBjb2xvcjogIzFhMTgxODtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLndoaXRlIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLmdyaWQtd3JhcHBlciB7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgbWlubWF4KDE1MHB4LCAxZnIpKTtcclxuICBncmlkLWdhcDogMTBweDtcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogODAwcHgpIHtcclxuICAuZ3JpZC13cmFwcGVyIHtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCBtaW5tYXgoMzUwcHgsIDFmcikpO1xyXG4gICAgZ3JpZC1nYXA6IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uem9uZSB7XHJcbiAgY29sb3I6ICNGRkY7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG4uY2FyZCA+IC5jYXJkLXRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMCAyMHB4O1xyXG59XHJcblxyXG4uY2FyZCA+IC5jYXJkLXRpdGxlID4gLmFwcC1pY29uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgZm9udC1zaXplOiA2MHB4O1xyXG59XHJcblxyXG4uY2FyZCA+IC5jYXJkLXRpdGxlID4gLmJsYWNrIHtcclxuICBmaWxsOiAjMTYxNTEyO1xyXG59XHJcblxyXG4uY2FyZCA+IC5jYXJkLXRpdGxlID4gLmJsdWUge1xyXG4gIGZpbGw6ICMwMGJjZDQ7XHJcbn1cclxuXHJcbi5jYXJkID4gLmNhcmQtdGl0bGUgPiAucmVkIHtcclxuICBmaWxsOiAjRjQ0MzM2O1xyXG59XHJcblxyXG4uY2FyZCA+IC5jYXJkLXRpdGxlID4gLmgwIHtcclxuICBmaWxsOiAjNTk2NjZjO1xyXG59XHJcblxyXG4uY2FyZCA+IC5jYXJkLXRpdGxlID4gLmgxIHtcclxuICBmaWxsOiAjYmNhZTc5O1xyXG59XHJcblxyXG4uY2FyZCA+IC50ZXh0IHtcclxuICBwYWRkaW5nOiAwIDIwcHggMjBweDtcclxufVxyXG5cclxuLmNhcmQgPiAuY2FyZC10aXRsZSA+IGgxIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBjb2xvcjogcmdiKDI2LCAyNCwgMjQpO1xyXG59XHJcblxyXG4udGV4dCBwIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgY29sb3I6IHJnYigyNiwgMjQsIDI0KTtcclxufVxyXG4iLCIuaW50cmQtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMiUgNSUgNSUgNSU7XG59XG4uaW50cmQtY29udGFpbmVyIC5pbnRyZC1jb250YWluZXItaW50cmwgLnRpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuLmludHJkLWNvbnRhaW5lciAuaW50cmQtY29udGFpbmVyLWludHJsIC50aXRsZSBoMSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uaW50cmQtY29udGFpbmVyIC5pbnRyZC1jb250YWluZXItaW50cmwgLnRpdGxlIHAge1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiAjMWExODE4O1xufVxuXG4ud2hpdGUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmdyaWQtd3JhcHBlciB7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgbWlubWF4KDE1MHB4LCAxZnIpKTtcbiAgZ3JpZC1nYXA6IDEwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuZ3JpZC13cmFwcGVyIHtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCBtaW5tYXgoMzUwcHgsIDFmcikpO1xuICAgIGdyaWQtZ2FwOiAxMHB4O1xuICB9XG59XG4uem9uZSB7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LXNpemU6IDJlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XG59XG5cbi5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG4uY2FyZCA+IC5jYXJkLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG5cbi5jYXJkID4gLmNhcmQtdGl0bGUgPiAuYXBwLWljb24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3MHB4O1xuICBmb250LXNpemU6IDYwcHg7XG59XG5cbi5jYXJkID4gLmNhcmQtdGl0bGUgPiAuYmxhY2sge1xuICBmaWxsOiAjMTYxNTEyO1xufVxuXG4uY2FyZCA+IC5jYXJkLXRpdGxlID4gLmJsdWUge1xuICBmaWxsOiAjMDBiY2Q0O1xufVxuXG4uY2FyZCA+IC5jYXJkLXRpdGxlID4gLnJlZCB7XG4gIGZpbGw6ICNGNDQzMzY7XG59XG5cbi5jYXJkID4gLmNhcmQtdGl0bGUgPiAuaDAge1xuICBmaWxsOiAjNTk2NjZjO1xufVxuXG4uY2FyZCA+IC5jYXJkLXRpdGxlID4gLmgxIHtcbiAgZmlsbDogI2JjYWU3OTtcbn1cblxuLmNhcmQgPiAudGV4dCB7XG4gIHBhZGRpbmc6IDAgMjBweCAyMHB4O1xufVxuXG4uY2FyZCA+IC5jYXJkLXRpdGxlID4gaDEge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6ICMxYTE4MTg7XG59XG5cbi50ZXh0IHAge1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiAjMWExODE4O1xufSJdfQ== */"] });
    return ClientComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ClientComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-client',
                templateUrl: './client.component.html',
                styleUrls: ['./client.component.scss']
            }]
    }], function () { return [{ type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }]; }, null); })();
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var src_app_model_phone_number_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/phone-number.model */ "./src/app/model/phone-number.model.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/icon.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var src_app_service_iso_code_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/iso-code.service */ "./src/app/service/iso-code.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/autocomplete.js");
/* harmony import */ var _phone_input_phone_input_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./phone-input/phone-input.component */ "./src/app/components/contact/phone-input/phone-input.component.ts");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/core.js");

















var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Title
     * @meaning Contact
     */ 
    var MSG_EXTERNAL_ContactTitle$$SRC_APP_COMPONENTS_CONTACT_CONTACT_COMPONENT_TS_1 = goog.getMsg("Feel free and contact us");
    I18N_0 = MSG_EXTERNAL_ContactTitle$$SRC_APP_COMPONENTS_CONTACT_CONTACT_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Contact|Title @@ContactTitle\u241Fc7e6157af039abb9d28f868d4e13c7d59015115d\u241F7766704631461001196:Feel free and contact us"], [":Contact|Title @@ContactTitle\u241Fc7e6157af039abb9d28f868d4e13c7d59015115d\u241F7766704631461001196:Feel free and contact us"])));
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Desc
     * @meaning Contact
     */ 
    var MSG_EXTERNAL_ContactDesc$$SRC_APP_COMPONENTS_CONTACT_CONTACT_COMPONENT_TS_3 = goog.getMsg("This we can add some text to provide more information to clien {$lineBreak} about all that can be neccesary to them.", { "lineBreak": "\uFFFD#8\uFFFD\uFFFD/#8\uFFFD" });
    I18N_2 = MSG_EXTERNAL_ContactDesc$$SRC_APP_COMPONENTS_CONTACT_CONTACT_COMPONENT_TS_3;
}
else {
    I18N_2 = $localize(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Contact|Desc @@ContactDesc\u241Fa2f60a152932b7b9d7cca7aa141573c2abc11f2c\u241F6026864859510370314:This we can add some text to provide more information to clien ", ":LINE_BREAK: about all that can be neccesary to them."], [":Contact|Desc @@ContactDesc\u241Fa2f60a152932b7b9d7cca7aa141573c2abc11f2c\u241F6026864859510370314:This we can add some text to provide more information to clien ", ":LINE_BREAK: about all that can be neccesary to them."])), "\uFFFD#8\uFFFD\uFFFD/#8\uFFFD");
}
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc SendForm Name
     * @meaning Contact
     */ 
    var MSG_EXTERNAL_SendFormName$$SRC_APP_COMPONENTS_CONTACT_CONTACT_COMPONENT_TS_5 = goog.getMsg("Your First Name: ");
    I18N_4 = MSG_EXTERNAL_SendFormName$$SRC_APP_COMPONENTS_CONTACT_CONTACT_COMPONENT_TS_5;
}
else {
    I18N_4 = $localize(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Contact|SendForm Name @@SendFormName\u241F07541e03659554994fa78b0779dc2e4ff428d208\u241F7118484351224225679:Your First Name: "], [":Contact|SendForm Name @@SendFormName\u241F07541e03659554994fa78b0779dc2e4ff428d208\u241F7118484351224225679:Your First Name: "])));
}
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Hint Name
     * @meaning Contact
     */ 
    var MSG_EXTERNAL_SendHintName$$SRC_APP_COMPONENTS_CONTACT_CONTACT_COMPONENT_TS_7 = goog.getMsg("Enter your first name");
    I18N_6 = MSG_EXTERNAL_SendHintName$$SRC_APP_COMPONENTS_CONTACT_CONTACT_COMPONENT_TS_7;
}
else {
    I18N_6 = $localize(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Contact|Hint Name@@SendHintName\u241F02faa693e818522b1e024f6554c570ceec9320e0\u241F7520807365484879021:Enter your first name"], [":Contact|Hint Name@@SendHintName\u241F02faa693e818522b1e024f6554c570ceec9320e0\u241F7520807365484879021:Enter your first name"])));
}
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc SendForm Surename
     * @meaning Contact
     */ 
    var MSG_EXTERNAL_SendFormSurename$$SRC_APP_COMPONENTS_CONTACT_CONTACT_COMPONENT_TS_9 = goog.getMsg("Your Last Name: ");
    I18N_8 = MSG_EXTERNAL_SendFormSurename$$SRC_APP_COMPONENTS_CONTACT_CONTACT_COMPONENT_TS_9;
}
else {
    I18N_8 = $localize(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Contact|SendForm Surename @@SendFormSurename\u241F94256b6f1fed853af3c525657235836a9afb8483\u241F4141098419311520798:Your Last Name: "], [":Contact|SendForm Surename @@SendFormSurename\u241F94256b6f1fed853af3c525657235836a9afb8483\u241F4141098419311520798:Your Last Name: "])));
}
var I18N_10;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Hint Surename
     * @meaning Contact
     */ 
    var MSG_EXTERNAL_SendHintSurename$$SRC_APP_COMPONENTS_CONTACT_CONTACT_COMPONENT_TS_11 = goog.getMsg("Enter your last name");
    I18N_10 = MSG_EXTERNAL_SendHintSurename$$SRC_APP_COMPONENTS_CONTACT_CONTACT_COMPONENT_TS_11;
}
else {
    I18N_10 = $localize(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Contact|Hint Surename@@SendHintSurename\u241F0aba71a5b4e779a7071055966f621070869ed501\u241F3449639042580283940:Enter your last name"], [":Contact|Hint Surename@@SendHintSurename\u241F0aba71a5b4e779a7071055966f621070869ed501\u241F3449639042580283940:Enter your last name"])));
}
var I18N_12;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc ContactForm Address 1st
     * @meaning Contact
     */ 
    var MSG_EXTERNAL_ContactFormAddress1$$SRC_APP_COMPONENTS_CONTACT_CONTACT_COMPONENT_TS_13 = goog.getMsg("Prague, Czech Republic,");
    I18N_12 = MSG_EXTERNAL_ContactFormAddress1$$SRC_APP_COMPONENTS_CONTACT_CONTACT_COMPONENT_TS_13;
}
else {
    I18N_12 = $localize(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Contact|ContactForm Address 1st @@ContactFormAddress1\u241F0e2b18f501feead2f443b51a27e22c7ebe9615d3\u241F4065176442031448904:Prague, Czech Republic,"], [":Contact|ContactForm Address 1st @@ContactFormAddress1\u241F0e2b18f501feead2f443b51a27e22c7ebe9615d3\u241F4065176442031448904:Prague, Czech Republic,"])));
}
var I18N_14;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc ContactForm Address 2nd
     * @meaning Contact
     */ 
    var MSG_EXTERNAL_ContactFormAddress2$$SRC_APP_COMPONENTS_CONTACT_CONTACT_COMPONENT_TS_15 = goog.getMsg(" 15800, Praha 5");
    I18N_14 = MSG_EXTERNAL_ContactFormAddress2$$SRC_APP_COMPONENTS_CONTACT_CONTACT_COMPONENT_TS_15;
}
else {
    I18N_14 = $localize(templateObject_8 || (templateObject_8 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Contact|ContactForm Address 2nd @@ContactFormAddress2\u241F2b19ec10ac7cc23fb11e0260bf6a2a3206c44209\u241F4815265948387875255: 15800, Praha 5"], [":Contact|ContactForm Address 2nd @@ContactFormAddress2\u241F2b19ec10ac7cc23fb11e0260bf6a2a3206c44209\u241F4815265948387875255: 15800, Praha 5"])));
}
var I18N_16;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc SendForm Email
     * @meaning Contact
     */ 
    var MSG_EXTERNAL_SendFormEmail$$SRC_APP_COMPONENTS_CONTACT_CONTACT_COMPONENT_TS_17 = goog.getMsg("Enter your email");
    I18N_16 = MSG_EXTERNAL_SendFormEmail$$SRC_APP_COMPONENTS_CONTACT_CONTACT_COMPONENT_TS_17;
}
else {
    I18N_16 = $localize(templateObject_9 || (templateObject_9 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Contact|SendForm Email @@SendFormEmail\u241F0aa4d9ac935af73094184d8ab5b36b596922dbdc\u241F8330644184981117085:Enter your email"], [":Contact|SendForm Email @@SendFormEmail\u241F0aa4d9ac935af73094184d8ab5b36b596922dbdc\u241F8330644184981117085:Enter your email"])));
}
var I18N_18;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Hint Email
     * @meaning Contact
     */ 
    var MSG_EXTERNAL_SendHintEmail$$SRC_APP_COMPONENTS_CONTACT_CONTACT_COMPONENT_TS_19 = goog.getMsg("Your e-mail");
    I18N_18 = MSG_EXTERNAL_SendHintEmail$$SRC_APP_COMPONENTS_CONTACT_CONTACT_COMPONENT_TS_19;
}
else {
    I18N_18 = $localize(templateObject_10 || (templateObject_10 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Contact|Hint Email@@SendHintEmail\u241Fe8a453d7df85a6a80e3d18144fe2300ccf0a47c5\u241F7622224782134547498:Your e-mail"], [":Contact|Hint Email@@SendHintEmail\u241Fe8a453d7df85a6a80e3d18144fe2300ccf0a47c5\u241F7622224782134547498:Your e-mail"])));
}
var I18N_20;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc SendForm Email
     * @meaning Contact
     */ 
    var MSG_EXTERNAL_SendFormCountry$$SRC_APP_COMPONENTS_CONTACT_CONTACT_COMPONENT_TS_21 = goog.getMsg("Country");
    I18N_20 = MSG_EXTERNAL_SendFormCountry$$SRC_APP_COMPONENTS_CONTACT_CONTACT_COMPONENT_TS_21;
}
else {
    I18N_20 = $localize(templateObject_11 || (templateObject_11 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Contact|SendForm Email @@SendFormCountry\u241Fb6aa2211241121e15e5400044b6e69ff126047bb\u241F8955342723069024047:Country"], [":Contact|SendForm Email @@SendFormCountry\u241Fb6aa2211241121e15e5400044b6e69ff126047bb\u241F8955342723069024047:Country"])));
}
var I18N_22;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc SendForm Phone
     * @meaning Contact
     */ 
    var MSG_EXTERNAL_SendFormPhone$$SRC_APP_COMPONENTS_CONTACT_CONTACT_COMPONENT_TS_23 = goog.getMsg("Your phone number");
    I18N_22 = MSG_EXTERNAL_SendFormPhone$$SRC_APP_COMPONENTS_CONTACT_CONTACT_COMPONENT_TS_23;
}
else {
    I18N_22 = $localize(templateObject_12 || (templateObject_12 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Contact|SendForm Phone @@SendFormPhone\u241F03195112ba0f7144120492952b0e0888c96577ff\u241F1363199968018876063:Your phone number"], [":Contact|SendForm Phone @@SendFormPhone\u241F03195112ba0f7144120492952b0e0888c96577ff\u241F1363199968018876063:Your phone number"])));
}
var I18N_24;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc ContactForm Phone
     * @meaning Contact
     */ 
    var MSG_EXTERNAL_ContactFormPhone$$SRC_APP_COMPONENTS_CONTACT_CONTACT_COMPONENT_TS_25 = goog.getMsg("+420-589-658-987");
    I18N_24 = MSG_EXTERNAL_ContactFormPhone$$SRC_APP_COMPONENTS_CONTACT_CONTACT_COMPONENT_TS_25;
}
else {
    I18N_24 = $localize(templateObject_13 || (templateObject_13 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Contact|ContactForm Phone @@ContactFormPhone\u241Ff771f615dd429e06e4a258f7181968113b6ddcdd\u241F247644863170790010:+420-589-658-987"], [":Contact|ContactForm Phone @@ContactFormPhone\u241Ff771f615dd429e06e4a258f7181968113b6ddcdd\u241F247644863170790010:+420-589-658-987"])));
}
var I18N_26;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc SendForm Msg
     * @meaning Contact
     */ 
    var MSG_EXTERNAL_SendFormMsg$$SRC_APP_COMPONENTS_CONTACT_CONTACT_COMPONENT_TS_27 = goog.getMsg("Enter your questions");
    I18N_26 = MSG_EXTERNAL_SendFormMsg$$SRC_APP_COMPONENTS_CONTACT_CONTACT_COMPONENT_TS_27;
}
else {
    I18N_26 = $localize(templateObject_14 || (templateObject_14 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Contact|SendForm Msg @@SendFormMsg\u241F9e51ab426b6c4ddab4c77e722dea1b1900df76b4\u241F2867894119398767913:Enter your questions"], [":Contact|SendForm Msg @@SendFormMsg\u241F9e51ab426b6c4ddab4c77e722dea1b1900df76b4\u241F2867894119398767913:Enter your questions"])));
}
var I18N_28;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc ContactForm Email
     * @meaning Contact
     */ 
    var MSG_EXTERNAL_ContactFormEmail$$SRC_APP_COMPONENTS_CONTACT_CONTACT_COMPONENT_TS_29 = goog.getMsg("mr.azaroff@gmail.com");
    I18N_28 = MSG_EXTERNAL_ContactFormEmail$$SRC_APP_COMPONENTS_CONTACT_CONTACT_COMPONENT_TS_29;
}
else {
    I18N_28 = $localize(templateObject_15 || (templateObject_15 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Contact|ContactForm Email @@ContactFormEmail\u241F3f79f384972acfd07b338897a34ddf2d672ad563\u241F6307079788658085791:mr.azaroff@gmail.com"], [":Contact|ContactForm Email @@ContactFormEmail\u241F3f79f384972acfd07b338897a34ddf2d672ad563\u241F6307079788658085791:mr.azaroff@gmail.com"])));
}
var I18N_30;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc SendForm Submit
     * @meaning Contact
     */ 
    var MSG_EXTERNAL_SendFormSubmit$$SRC_APP_COMPONENTS_CONTACT_CONTACT_COMPONENT_TS_31 = goog.getMsg("Send");
    I18N_30 = MSG_EXTERNAL_SendFormSubmit$$SRC_APP_COMPONENTS_CONTACT_CONTACT_COMPONENT_TS_31;
}
else {
    I18N_30 = $localize(templateObject_16 || (templateObject_16 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Contact|SendForm Submit @@SendFormSubmit\u241Fc905c5f778dc56d388db07bcc33efaa7626a7805\u241F2457622190452144393:Send"], [":Contact|SendForm Submit @@SendFormSubmit\u241Fc905c5f778dc56d388db07bcc33efaa7626a7805\u241F2457622190452144393:Send"])));
}
function ContactComponent_mat_error_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.getErrorMessage());
} }
function ContactComponent_mat_option_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var country_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", country_r3.dial_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", country_r3.code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", country_r3.dial_code, "");
} }
var ContactComponent = /** @class */ (function () {
    function ContactComponent(iconRegistry, sanitizer, isoCodeService) {
        this.isoCodeService = isoCodeService;
        this.isHeading = true;
        this.isSubheading = true;
        this.isHeadingBtn = true;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]);
        this.firstName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.lastName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.country = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.tel = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new src_app_model_phone_number_model__WEBPACK_IMPORTED_MODULE_3__["PhoneNumber"]('', '', ''));
        this.text = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        iconRegistry
            .addSvgIcon('location', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/u_loc.svg'))
            .addSvgIcon('send', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/u_snd.svg'))
            .addSvgIcon('phone', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/u_ph.svg'))
            .addSvgIcon('email', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/u_em.svg'));
    }
    ContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredOptions = this.country.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) {
            return value ? _this.countryFilter(value) : _this.countryList.slice();
        }));
        this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            country: this.country,
            tel: this.tel,
            text: this.text,
        });
    };
    ContactComponent.prototype.countryFilter = function (value) {
        var filterValue = value.toLowerCase();
        return this.countryList.filter(function (state) {
            return state.dial_code.toLowerCase().includes(filterValue) ||
                state.code.toLowerCase().includes(filterValue);
        });
    };
    ContactComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.countryList) {
            this.filteredOptions = this.country.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) { return value ? _this.countryFilter(value) : _this.countryList.slice(); }));
        }
    };
    ContactComponent.prototype.getErrorMessage = function () {
        if (this.email.hasError('required')) {
            return 'You must enter a value';
        }
        return this.email.hasError('email') ? 'Not a valid email' : '';
    };
    ContactComponent.prototype.onSubmit = function () {
        console.log(this.contactForm);
    };
    ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_iso_code_service__WEBPACK_IMPORTED_MODULE_7__["IsoCodeService"])); };
    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], inputs: { countryList: "countryList" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 84, vars: 11, consts: [["id", "contactId", 1, "contact", "black"], ["src", "assets/img/slider_8.jpeg", 1, "cover"], [1, "cover-block"], [1, "title"], [1, "row"], ["novalidate", "", 3, "formGroup", "ngSubmit"], [1, "sending-form"], ["appearance", "legacy", 1, "two-in-row", "sendig-form-right"], ["matInput", "", "placeholder", "Placeholder", 3, "formControl"], ["appearance", "legacy", 1, "two-in-row"], [1, "contact-form"], [1, "icon-block"], ["svgIcon", "location", "aria-hidden", "false", "aria-label", "Example thumbs up SVG icon", 1, "app-icon", "blue"], [1, "text-block"], ["appearance", "legacy", 1, "mail", "sendig-form-right"], ["matInput", "", "placeholder", "email@example.com", "required", "", 3, "formControl"], [4, "ngIf"], ["appearance", "legacy", 1, "country", "sendig-form-right"], ["type", "text", "aria-label", "Number", "matInput", "", "required", "", 3, "formControl", "matAutocomplete"], ["autoActiveFirstOption", ""], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "legacy", 1, "mail"], ["formControlName", "tel", "required", ""], ["svgIcon", "phone", "aria-hidden", "false", "aria-label", "Example thumbs up SVG icon", 1, "app-icon", "blue"], ["appearance", "legacy", 1, "one-in-row"], ["svgIcon", "email", "aria-hidden", "false", "aria-label", "Example thumbs up SVG icon", 1, "app-icon", "blue"], [1, "row", "submit"], ["svgIcon", "send", "aria-hidden", "false", "aria-label", "Example thumbs up SVG icon", 1, "app-icon", "blue"], [3, "value"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](5, I18N_0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](7, I18N_2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "form", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_11_listener() { return ctx.onSubmit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-form-field", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](16, I18N_4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-hint");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](19, I18N_6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-form-field", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](22, I18N_8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-hint");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](25, I18N_10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "mat-icon", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](33, I18N_12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](35, I18N_14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "mat-form-field", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](40, I18N_16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "input", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "mat-hint");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](43, I18N_18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, ContactComponent_mat_error_44_Template, 2, 1, "mat-error", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "mat-form-field", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](47, I18N_20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "input", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "mat-autocomplete", 19, 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, ContactComponent_mat_option_51_Template, 5, 3, "mat-option", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](52, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "mat-form-field", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](55, I18N_22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "app-phone-input", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "mat-icon", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](64, I18N_24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "mat-form-field", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](69, I18N_26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "textarea", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "mat-icon", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](78, I18N_28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "button");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](82, I18N_30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "mat-icon", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.contactForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.firstName);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.lastName);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.email);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.email.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.country)("matAutocomplete", _r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](52, 9, ctx.filteredOptions));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.text);
        } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatHint"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _phone_input_phone_input_component__WEBPACK_IMPORTED_MODULE_13__["PhoneNumberCustomInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"]], styles: [".black[_ngcontent-%COMP%] {\n  background: black;\n  overflow: hidden;\n}\n\n.contact[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: block;\n  position: relative;\n  align-items: center;\n  justify-content: center;\n}\n\n.contact[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  opacity: 0.4;\n}\n\n.contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%] {\n  position: absolute;\n  color: white;\n  font-weight: bold;\n  width: 65%;\n}\n\n.contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 5%;\n}\n\n.contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: bold;\n}\n\n.contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: lighter;\n}\n\n.contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .sending-form[_ngcontent-%COMP%] {\n  margin-top: auto;\n  margin-bottom: auto;\n  align-content: center;\n}\n\n.contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .icon-block[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n\n.contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .icon-block[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  font-size: 60px;\n}\n\n.contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .icon-block[_ngcontent-%COMP%]   .blue[_ngcontent-%COMP%] {\n  fill: #3f51b5;\n}\n\n.contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .text-block[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  color: rgba(0, 0, 0, 0.54);\n  font-style: italic;\n  font-weight: lighter;\n}\n\n.contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 5%;\n  cursor: pointer;\n  background: transparent;\n  border-style: solid;\n  border-width: 2px;\n  border-color: #3f51b5;\n  border-radius: 4px;\n  font-size: 1rem;\n  font-weight: bold;\n  color: #3f51b5;\n  padding: 10px;\n}\n\n.contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%] {\n  vertical-align: text-bottom;\n}\n\n.contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  vertical-align: bottom;\n  margin-left: 5px;\n}\n\n.contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #3f51b5;\n  color: white;\n}\n\n.contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\n@media only screen and (min-width: 0px) and (max-width: 320px) {\n  .contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%] {\n    left: 50%;\n    top: 60%;\n    transform: translate(-50%, -40%);\n  }\n  .contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .sending-form[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .sending-form[_ngcontent-%COMP%]   .two-in-row[_ngcontent-%COMP%] {\n    width: 85%;\n    margin-left: 5%;\n  }\n  .contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .sending-form[_ngcontent-%COMP%]   .mail[_ngcontent-%COMP%] {\n    width: 85%;\n    margin-left: 5%;\n  }\n  .contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .sending-form[_ngcontent-%COMP%]   .country[_ngcontent-%COMP%] {\n    width: 85%;\n    margin-left: 5%;\n  }\n  .contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .sending-form[_ngcontent-%COMP%]   .one-in-row[_ngcontent-%COMP%] {\n    width: 85%;\n    margin-left: 5%;\n  }\n}\n\n@media only screen and (min-width: 321px) and (max-width: 480px) {\n  .contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%] {\n    left: 50%;\n    top: 60%;\n    transform: translate(-50%, -40%);\n  }\n  .contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .sending-form[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .sending-form[_ngcontent-%COMP%]   .two-in-row[_ngcontent-%COMP%] {\n    width: 85%;\n    margin-left: 5%;\n  }\n  .contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .sending-form[_ngcontent-%COMP%]   .mail[_ngcontent-%COMP%] {\n    width: 85%;\n    margin-left: 5%;\n  }\n  .contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .sending-form[_ngcontent-%COMP%]   .country[_ngcontent-%COMP%] {\n    width: 85%;\n    margin-left: 5%;\n  }\n  .contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .sending-form[_ngcontent-%COMP%]   .one-in-row[_ngcontent-%COMP%] {\n    width: 85%;\n    margin-left: 5%;\n  }\n}\n\n@media only screen and (min-width: 481px) and (max-width: 768px) {\n  .contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%] {\n    left: 50%;\n    top: 45%;\n    transform: translate(-50%, -45%);\n  }\n  .contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%] {\n    width: 34%;\n  }\n  .contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .sending-form[_ngcontent-%COMP%] {\n    width: 65%;\n  }\n  .contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .sending-form[_ngcontent-%COMP%]   .sendig-form-right[_ngcontent-%COMP%] {\n    margin-right: 5%;\n  }\n  .contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .sending-form[_ngcontent-%COMP%]   .two-in-row[_ngcontent-%COMP%] {\n    width: 85%;\n    margin-left: 5%;\n  }\n  .contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .sending-form[_ngcontent-%COMP%]   .mail[_ngcontent-%COMP%] {\n    width: 85%;\n    margin-left: 5%;\n  }\n  .contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .sending-form[_ngcontent-%COMP%]   .country[_ngcontent-%COMP%] {\n    width: 85%;\n    margin-left: 5%;\n  }\n  .contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .sending-form[_ngcontent-%COMP%]   .one-in-row[_ngcontent-%COMP%] {\n    width: 85%;\n    margin-left: 5%;\n  }\n}\n\n@media (min-width: 769px) and (max-width: 992px) {\n  .contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%] {\n    left: 50%;\n    top: 45%;\n    transform: translate(-50%, -45%);\n  }\n  .contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%] {\n    width: 34%;\n  }\n  .contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .sending-form[_ngcontent-%COMP%] {\n    width: 65%;\n  }\n  .contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .sending-form[_ngcontent-%COMP%]   .two-in-row[_ngcontent-%COMP%] {\n    width: 85%;\n    margin-left: 5%;\n  }\n  .contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .sending-form[_ngcontent-%COMP%]   .mail[_ngcontent-%COMP%] {\n    width: 85%;\n    margin-left: 5%;\n  }\n  .contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .sending-form[_ngcontent-%COMP%]   .country[_ngcontent-%COMP%] {\n    width: 85%;\n    margin-left: 5%;\n  }\n  .contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .sending-form[_ngcontent-%COMP%]   .one-in-row[_ngcontent-%COMP%] {\n    width: 85%;\n    margin-left: 5%;\n  }\n}\n\n@media (min-width: 993px) and (max-width: 1280px) {\n  .contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%] {\n    left: 50%;\n    top: 45%;\n    transform: translate(-50%, -45%);\n  }\n  .contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%] {\n    width: 34%;\n  }\n  .contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .sending-form[_ngcontent-%COMP%] {\n    width: 65%;\n  }\n  .contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .sending-form[_ngcontent-%COMP%]   .two-in-row[_ngcontent-%COMP%] {\n    width: 45%;\n    margin-left: 5%;\n  }\n  .contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .sending-form[_ngcontent-%COMP%]   .mail[_ngcontent-%COMP%] {\n    width: 35%;\n    margin-left: 5%;\n  }\n  .contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .sending-form[_ngcontent-%COMP%]   .country[_ngcontent-%COMP%] {\n    width: 15%;\n    margin-left: 5%;\n  }\n  .contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .sending-form[_ngcontent-%COMP%]   .one-in-row[_ngcontent-%COMP%] {\n    width: 95%;\n    margin-left: 5%;\n  }\n}\n\n@media only screen and (min-width: 1281px) and (max-width: 1600px) {\n  .contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%] {\n    left: 50%;\n    top: 55%;\n    transform: translate(-50%, -45%);\n  }\n  .contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%] {\n    width: 34%;\n  }\n  .contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .sending-form[_ngcontent-%COMP%] {\n    width: 65%;\n  }\n  .contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .sending-form[_ngcontent-%COMP%]   .two-in-row[_ngcontent-%COMP%] {\n    width: 45%;\n    margin-left: 5%;\n  }\n  .contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .sending-form[_ngcontent-%COMP%]   .mail[_ngcontent-%COMP%] {\n    width: 35%;\n    margin-left: 5%;\n  }\n  .contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .sending-form[_ngcontent-%COMP%]   .country[_ngcontent-%COMP%] {\n    width: 15%;\n    margin-left: 5%;\n  }\n  .contact[_ngcontent-%COMP%]   .cover-block[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .sending-form[_ngcontent-%COMP%]   .one-in-row[_ngcontent-%COMP%] {\n    width: 95%;\n    margin-left: 5%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L0M6XFxXb3Jrc3BhY2VcXHByb2plY3RzXFx3b3JsZC1lbnRlcnRhaW5tZW50XFxlbnRlcnRhaW5tZW50LXVpL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb250YWN0XFxjb250YWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FEQ0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxZQUFBO0FDQ1I7O0FERUk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUNBUjs7QURFUTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUNBWjs7QURFWTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0FoQjs7QURFWTtFQUNJLG9CQUFBO0FDQWhCOztBRElZO0VBR0ksYUFBQTtFQUVBLGVBQUE7QUNGaEI7O0FESWdCO0VBQ0ksV0FBQTtBQ0ZwQjs7QURLd0I7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNINUI7O0FES3dCO0VBQ0ksY0FBQTtBQ0g1Qjs7QURNZ0M7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNKcEM7O0FETW9DO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDSnhDOztBRE9vQztFQUNJLGFBQUE7QUNMeEM7O0FEU2dDO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDUHBDOztBRFl3QjtFQUNJLGVBQUE7RUFFQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUVBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FDWjVCOztBRGM0QjtFQUNJLDJCQUFBO0FDWmhDOztBRGM0QjtFQUNJLHNCQUFBO0VBQ0EsZ0JBQUE7QUNaaEM7O0FEZ0J3QjtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQ2Q1Qjs7QURpQndCO0VBQ0ksVUFBQTtBQ2Y1Qjs7QUR3Qkk7RUFDSTtJQUNJLFNBQUE7SUFDQSxRQUFBO0lBQ0EsZ0NBQUE7RUN0QlY7RUQ0QjBCO0lBQ0ksYUFBQTtFQzFCOUI7RUQ0QjBCO0lBQ0ksV0FBQTtFQzFCOUI7RUQ0QjhCO0lBQ0ksVUFBQTtJQUNBLGVBQUE7RUMxQmxDO0VENEI4QjtJQUNJLFVBQUE7SUFDQSxlQUFBO0VDMUJsQztFRDRCOEI7SUFDSSxVQUFBO0lBQ0EsZUFBQTtFQzFCbEM7RUQ0QjhCO0lBQ0ksVUFBQTtJQUNBLGVBQUE7RUMxQmxDO0FBQ0Y7O0FEbUNJO0VBQ0k7SUFDSSxTQUFBO0lBQ0EsUUFBQTtJQUNBLGdDQUFBO0VDakNWO0VEdUMwQjtJQUNJLGFBQUE7RUNyQzlCO0VEdUMwQjtJQUNJLFdBQUE7RUNyQzlCO0VEdUM4QjtJQUNJLFVBQUE7SUFDQSxlQUFBO0VDckNsQztFRHVDOEI7SUFDSSxVQUFBO0lBQ0EsZUFBQTtFQ3JDbEM7RUR1QzhCO0lBQ0ksVUFBQTtJQUNBLGVBQUE7RUNyQ2xDO0VEdUM4QjtJQUNJLFVBQUE7SUFDQSxlQUFBO0VDckNsQztBQUNGOztBRDhDSTtFQUNJO0lBQ0ksU0FBQTtJQUNBLFFBQUE7SUFDQSxnQ0FBQTtFQzVDVjtFRGtEMEI7SUFDSSxVQUFBO0VDaEQ5QjtFRGtEMEI7SUFDSSxVQUFBO0VDaEQ5QjtFRGlEOEI7SUFDSSxnQkFBQTtFQy9DbEM7RURrRDhCO0lBQ0ksVUFBQTtJQUNBLGVBQUE7RUNoRGxDO0VEa0Q4QjtJQUNJLFVBQUE7SUFDQSxlQUFBO0VDaERsQztFRGtEOEI7SUFDSSxVQUFBO0lBQ0EsZUFBQTtFQ2hEbEM7RURrRDhCO0lBQ0ksVUFBQTtJQUNBLGVBQUE7RUNoRGxDO0FBQ0Y7O0FEeURJO0VBQ0k7SUFDSSxTQUFBO0lBQ0EsUUFBQTtJQUNBLGdDQUFBO0VDdkRWO0VENkQwQjtJQUNJLFVBQUE7RUMzRDlCO0VENkQwQjtJQUNJLFVBQUE7RUMzRDlCO0VENkQ4QjtJQUNJLFVBQUE7SUFDQSxlQUFBO0VDM0RsQztFRDZEOEI7SUFDSSxVQUFBO0lBQ0EsZUFBQTtFQzNEbEM7RUQ2RDhCO0lBQ0ksVUFBQTtJQUNBLGVBQUE7RUMzRGxDO0VENkQ4QjtJQUNJLFVBQUE7SUFDQSxlQUFBO0VDM0RsQztBQUNGOztBRG9FSTtFQUNJO0lBQ0ksU0FBQTtJQUNBLFFBQUE7SUFDQSxnQ0FBQTtFQ2xFVjtFRHdFMEI7SUFDSSxVQUFBO0VDdEU5QjtFRHdFMEI7SUFDSSxVQUFBO0VDdEU5QjtFRHdFOEI7SUFDSSxVQUFBO0lBQ0EsZUFBQTtFQ3RFbEM7RUR3RThCO0lBQ0ksVUFBQTtJQUNBLGVBQUE7RUN0RWxDO0VEd0U4QjtJQUNJLFVBQUE7SUFDQSxlQUFBO0VDdEVsQztFRHdFOEI7SUFDSSxVQUFBO0lBQ0EsZUFBQTtFQ3RFbEM7QUFDRjs7QUQrRUk7RUFDSTtJQUNJLFNBQUE7SUFDQSxRQUFBO0lBQ0EsZ0NBQUE7RUM3RVY7RURtRjBCO0lBQ0ksVUFBQTtFQ2pGOUI7RURtRjBCO0lBQ0ksVUFBQTtFQ2pGOUI7RURtRjhCO0lBQ0ksVUFBQTtJQUNBLGVBQUE7RUNqRmxDO0VEbUY4QjtJQUNJLFVBQUE7SUFDQSxlQUFBO0VDakZsQztFRG1GOEI7SUFDSSxVQUFBO0lBQ0EsZUFBQTtFQ2pGbEM7RURtRjhCO0lBQ0ksVUFBQTtJQUNBLGVBQUE7RUNqRmxDO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibGFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jb250YWN0IHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAuY292ZXIge1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgb3BhY2l0eTogMC40O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb3Zlci1ibG9jayB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB3aWR0aDogNjUlO1xyXG5cclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG5cclxuICAgICAgICAgICAgaDF7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1hdC1jYXJkIHtcclxuICAgICAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIC1tcy1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2VuZGluZy1mb3JtIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb250YWN0LWZvcm0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmljb24tYmxvY2sge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFwcC1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYmx1ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAjM2Y1MWI1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGV4dC1ibG9jayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsMCwwLC41NCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjM2Y1MWI1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzZjUxYjU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdC1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbjpmb2N1c3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjBweCkgYW5kIChtYXgtd2lkdGg6MzIwcHgpIHtcclxuICAgICAgICAuY292ZXItYmxvY2sge1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHRvcDogNjAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNDAlKTtcclxuXHJcbiAgICAgICAgICAgIG1hdC1jYXJke1xyXG4gICAgICAgICAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRhY3QtZm9ybSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZW5kaW5nLWZvcm0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudHdvLWluLXJvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1haWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb3VudHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAub25lLWluLXJvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjMyMXB4KSBhbmQgKG1heC13aWR0aDo0ODBweCkge1xyXG4gICAgICAgIC5jb3Zlci1ibG9jayB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgdG9wOiA2MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC00MCUpO1xyXG5cclxuICAgICAgICAgICAgbWF0LWNhcmR7XHJcbiAgICAgICAgICAgICAgICAucm93IHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29udGFjdC1mb3JtIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNlbmRpbmctZm9ybSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50d28taW4tcm93IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFpbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvdW50cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5vbmUtaW4tcm93IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NDgxcHgpIGFuZCAobWF4LXdpZHRoOjc2OHB4KSB7XHJcbiAgICAgICAgLmNvdmVyLWJsb2NrIHtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB0b3A6IDQ1JTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTQ1JSk7XHJcblxyXG4gICAgICAgICAgICBtYXQtY2FyZHtcclxuICAgICAgICAgICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAucm93IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb250YWN0LWZvcm0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2VuZGluZy1mb3JtIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZW5kaWctZm9ybS1yaWdodCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudHdvLWluLXJvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1haWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb3VudHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAub25lLWluLXJvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhKG1pbi13aWR0aDo3NjlweCkgYW5kIChtYXgtd2lkdGg6OTkycHgpIHtcclxuICAgICAgICAuY292ZXItYmxvY2sge1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHRvcDogNDUlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNDUlKTtcclxuXHJcbiAgICAgICAgICAgIG1hdC1jYXJke1xyXG4gICAgICAgICAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRhY3QtZm9ybSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM0JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZW5kaW5nLWZvcm0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2NSU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50d28taW4tcm93IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFpbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvdW50cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5vbmUtaW4tcm93IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEobWluLXdpZHRoOjk5M3B4KSBhbmQgKG1heC13aWR0aDoxMjgwcHgpIHtcclxuICAgICAgICAuY292ZXItYmxvY2sge1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHRvcDogNDUlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNDUlKTtcclxuXHJcbiAgICAgICAgICAgIG1hdC1jYXJke1xyXG4gICAgICAgICAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRhY3QtZm9ybSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM0JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZW5kaW5nLWZvcm0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2NSU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50d28taW4tcm93IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFpbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvdW50cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5vbmUtaW4tcm93IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTI4MXB4KSBhbmQgKG1heC13aWR0aDoxNjAwcHgpIHtcclxuICAgICAgICAuY292ZXItYmxvY2sge1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHRvcDogNTUlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNDUlKTtcclxuXHJcbiAgICAgICAgICAgIG1hdC1jYXJke1xyXG4gICAgICAgICAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRhY3QtZm9ybSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM0JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZW5kaW5nLWZvcm0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2NSU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50d28taW4tcm93IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFpbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvdW50cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5vbmUtaW4tcm93IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIiwiLmJsYWNrIHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jb250YWN0IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY29udGFjdCAuY292ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb3BhY2l0eTogMC40O1xufVxuLmNvbnRhY3QgLmNvdmVyLWJsb2NrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aWR0aDogNjUlO1xufVxuLmNvbnRhY3QgLmNvdmVyLWJsb2NrIC50aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG4uY29udGFjdCAuY292ZXItYmxvY2sgLnRpdGxlIGgxIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWN0IC5jb3Zlci1ibG9jayAudGl0bGUgcCB7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuLmNvbnRhY3QgLmNvdmVyLWJsb2NrIG1hdC1jYXJkIC5yb3cge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5jb250YWN0IC5jb3Zlci1ibG9jayBtYXQtY2FyZCAucm93IGZvcm0ge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWN0IC5jb3Zlci1ibG9jayBtYXQtY2FyZCAucm93IGZvcm0gLnJvdyAuc2VuZGluZy1mb3JtIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuLmNvbnRhY3QgLmNvdmVyLWJsb2NrIG1hdC1jYXJkIC5yb3cgZm9ybSAucm93IC5jb250YWN0LWZvcm0ge1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5jb250YWN0IC5jb3Zlci1ibG9jayBtYXQtY2FyZCAucm93IGZvcm0gLnJvdyAuY29udGFjdC1mb3JtIC5yb3cgLmljb24tYmxvY2sge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRhY3QgLmNvdmVyLWJsb2NrIG1hdC1jYXJkIC5yb3cgZm9ybSAucm93IC5jb250YWN0LWZvcm0gLnJvdyAuaWNvbi1ibG9jayAuYXBwLWljb24ge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDYwcHg7XG59XG4uY29udGFjdCAuY292ZXItYmxvY2sgbWF0LWNhcmQgLnJvdyBmb3JtIC5yb3cgLmNvbnRhY3QtZm9ybSAucm93IC5pY29uLWJsb2NrIC5ibHVlIHtcbiAgZmlsbDogIzNmNTFiNTtcbn1cbi5jb250YWN0IC5jb3Zlci1ibG9jayBtYXQtY2FyZCAucm93IGZvcm0gLnJvdyAuY29udGFjdC1mb3JtIC5yb3cgLnRleHQtYmxvY2sge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cbi5jb250YWN0IC5jb3Zlci1ibG9jayBtYXQtY2FyZCAucm93IGZvcm0gLnJvdyBidXR0b24ge1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3JkZXItY29sb3I6ICMzZjUxYjU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMzZjUxYjU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uY29udGFjdCAuY292ZXItYmxvY2sgbWF0LWNhcmQgLnJvdyBmb3JtIC5yb3cgYnV0dG9uIG1hdC1sYWJlbCB7XG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbn1cbi5jb250YWN0IC5jb3Zlci1ibG9jayBtYXQtY2FyZCAucm93IGZvcm0gLnJvdyBidXR0b24gbWF0LWljb24ge1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLmNvbnRhY3QgLmNvdmVyLWJsb2NrIG1hdC1jYXJkIC5yb3cgZm9ybSAucm93IGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5jb250YWN0IC5jb3Zlci1ibG9jayBtYXQtY2FyZCAucm93IGZvcm0gLnJvdyBidXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcHgpIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xuICAuY29udGFjdCAuY292ZXItYmxvY2sge1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDYwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNDAlKTtcbiAgfVxuICAuY29udGFjdCAuY292ZXItYmxvY2sgbWF0LWNhcmQgLnJvdyBmb3JtIC5yb3cgLmNvbnRhY3QtZm9ybSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuY29udGFjdCAuY292ZXItYmxvY2sgbWF0LWNhcmQgLnJvdyBmb3JtIC5yb3cgLnNlbmRpbmctZm9ybSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmNvbnRhY3QgLmNvdmVyLWJsb2NrIG1hdC1jYXJkIC5yb3cgZm9ybSAucm93IC5zZW5kaW5nLWZvcm0gLnR3by1pbi1yb3cge1xuICAgIHdpZHRoOiA4NSU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICB9XG4gIC5jb250YWN0IC5jb3Zlci1ibG9jayBtYXQtY2FyZCAucm93IGZvcm0gLnJvdyAuc2VuZGluZy1mb3JtIC5tYWlsIHtcbiAgICB3aWR0aDogODUlO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgfVxuICAuY29udGFjdCAuY292ZXItYmxvY2sgbWF0LWNhcmQgLnJvdyBmb3JtIC5yb3cgLnNlbmRpbmctZm9ybSAuY291bnRyeSB7XG4gICAgd2lkdGg6IDg1JTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gIH1cbiAgLmNvbnRhY3QgLmNvdmVyLWJsb2NrIG1hdC1jYXJkIC5yb3cgZm9ybSAucm93IC5zZW5kaW5nLWZvcm0gLm9uZS1pbi1yb3cge1xuICAgIHdpZHRoOiA4NSU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMXB4KSBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmNvbnRhY3QgLmNvdmVyLWJsb2NrIHtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA2MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTQwJSk7XG4gIH1cbiAgLmNvbnRhY3QgLmNvdmVyLWJsb2NrIG1hdC1jYXJkIC5yb3cgZm9ybSAucm93IC5jb250YWN0LWZvcm0ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmNvbnRhY3QgLmNvdmVyLWJsb2NrIG1hdC1jYXJkIC5yb3cgZm9ybSAucm93IC5zZW5kaW5nLWZvcm0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5jb250YWN0IC5jb3Zlci1ibG9jayBtYXQtY2FyZCAucm93IGZvcm0gLnJvdyAuc2VuZGluZy1mb3JtIC50d28taW4tcm93IHtcbiAgICB3aWR0aDogODUlO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgfVxuICAuY29udGFjdCAuY292ZXItYmxvY2sgbWF0LWNhcmQgLnJvdyBmb3JtIC5yb3cgLnNlbmRpbmctZm9ybSAubWFpbCB7XG4gICAgd2lkdGg6IDg1JTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gIH1cbiAgLmNvbnRhY3QgLmNvdmVyLWJsb2NrIG1hdC1jYXJkIC5yb3cgZm9ybSAucm93IC5zZW5kaW5nLWZvcm0gLmNvdW50cnkge1xuICAgIHdpZHRoOiA4NSU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICB9XG4gIC5jb250YWN0IC5jb3Zlci1ibG9jayBtYXQtY2FyZCAucm93IGZvcm0gLnJvdyAuc2VuZGluZy1mb3JtIC5vbmUtaW4tcm93IHtcbiAgICB3aWR0aDogODUlO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb250YWN0IC5jb3Zlci1ibG9jayB7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogNDUlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC00NSUpO1xuICB9XG4gIC5jb250YWN0IC5jb3Zlci1ibG9jayBtYXQtY2FyZCAucm93IGZvcm0gLnJvdyAuY29udGFjdC1mb3JtIHtcbiAgICB3aWR0aDogMzQlO1xuICB9XG4gIC5jb250YWN0IC5jb3Zlci1ibG9jayBtYXQtY2FyZCAucm93IGZvcm0gLnJvdyAuc2VuZGluZy1mb3JtIHtcbiAgICB3aWR0aDogNjUlO1xuICB9XG4gIC5jb250YWN0IC5jb3Zlci1ibG9jayBtYXQtY2FyZCAucm93IGZvcm0gLnJvdyAuc2VuZGluZy1mb3JtIC5zZW5kaWctZm9ybS1yaWdodCB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgfVxuICAuY29udGFjdCAuY292ZXItYmxvY2sgbWF0LWNhcmQgLnJvdyBmb3JtIC5yb3cgLnNlbmRpbmctZm9ybSAudHdvLWluLXJvdyB7XG4gICAgd2lkdGg6IDg1JTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gIH1cbiAgLmNvbnRhY3QgLmNvdmVyLWJsb2NrIG1hdC1jYXJkIC5yb3cgZm9ybSAucm93IC5zZW5kaW5nLWZvcm0gLm1haWwge1xuICAgIHdpZHRoOiA4NSU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICB9XG4gIC5jb250YWN0IC5jb3Zlci1ibG9jayBtYXQtY2FyZCAucm93IGZvcm0gLnJvdyAuc2VuZGluZy1mb3JtIC5jb3VudHJ5IHtcbiAgICB3aWR0aDogODUlO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgfVxuICAuY29udGFjdCAuY292ZXItYmxvY2sgbWF0LWNhcmQgLnJvdyBmb3JtIC5yb3cgLnNlbmRpbmctZm9ybSAub25lLWluLXJvdyB7XG4gICAgd2lkdGg6IDg1JTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWN0IC5jb3Zlci1ibG9jayB7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogNDUlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC00NSUpO1xuICB9XG4gIC5jb250YWN0IC5jb3Zlci1ibG9jayBtYXQtY2FyZCAucm93IGZvcm0gLnJvdyAuY29udGFjdC1mb3JtIHtcbiAgICB3aWR0aDogMzQlO1xuICB9XG4gIC5jb250YWN0IC5jb3Zlci1ibG9jayBtYXQtY2FyZCAucm93IGZvcm0gLnJvdyAuc2VuZGluZy1mb3JtIHtcbiAgICB3aWR0aDogNjUlO1xuICB9XG4gIC5jb250YWN0IC5jb3Zlci1ibG9jayBtYXQtY2FyZCAucm93IGZvcm0gLnJvdyAuc2VuZGluZy1mb3JtIC50d28taW4tcm93IHtcbiAgICB3aWR0aDogODUlO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgfVxuICAuY29udGFjdCAuY292ZXItYmxvY2sgbWF0LWNhcmQgLnJvdyBmb3JtIC5yb3cgLnNlbmRpbmctZm9ybSAubWFpbCB7XG4gICAgd2lkdGg6IDg1JTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gIH1cbiAgLmNvbnRhY3QgLmNvdmVyLWJsb2NrIG1hdC1jYXJkIC5yb3cgZm9ybSAucm93IC5zZW5kaW5nLWZvcm0gLmNvdW50cnkge1xuICAgIHdpZHRoOiA4NSU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICB9XG4gIC5jb250YWN0IC5jb3Zlci1ibG9jayBtYXQtY2FyZCAucm93IGZvcm0gLnJvdyAuc2VuZGluZy1mb3JtIC5vbmUtaW4tcm93IHtcbiAgICB3aWR0aDogODUlO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5M3B4KSBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gIC5jb250YWN0IC5jb3Zlci1ibG9jayB7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogNDUlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC00NSUpO1xuICB9XG4gIC5jb250YWN0IC5jb3Zlci1ibG9jayBtYXQtY2FyZCAucm93IGZvcm0gLnJvdyAuY29udGFjdC1mb3JtIHtcbiAgICB3aWR0aDogMzQlO1xuICB9XG4gIC5jb250YWN0IC5jb3Zlci1ibG9jayBtYXQtY2FyZCAucm93IGZvcm0gLnJvdyAuc2VuZGluZy1mb3JtIHtcbiAgICB3aWR0aDogNjUlO1xuICB9XG4gIC5jb250YWN0IC5jb3Zlci1ibG9jayBtYXQtY2FyZCAucm93IGZvcm0gLnJvdyAuc2VuZGluZy1mb3JtIC50d28taW4tcm93IHtcbiAgICB3aWR0aDogNDUlO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgfVxuICAuY29udGFjdCAuY292ZXItYmxvY2sgbWF0LWNhcmQgLnJvdyBmb3JtIC5yb3cgLnNlbmRpbmctZm9ybSAubWFpbCB7XG4gICAgd2lkdGg6IDM1JTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gIH1cbiAgLmNvbnRhY3QgLmNvdmVyLWJsb2NrIG1hdC1jYXJkIC5yb3cgZm9ybSAucm93IC5zZW5kaW5nLWZvcm0gLmNvdW50cnkge1xuICAgIHdpZHRoOiAxNSU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICB9XG4gIC5jb250YWN0IC5jb3Zlci1ibG9jayBtYXQtY2FyZCAucm93IGZvcm0gLnJvdyAuc2VuZGluZy1mb3JtIC5vbmUtaW4tcm93IHtcbiAgICB3aWR0aDogOTUlO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgxcHgpIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHtcbiAgLmNvbnRhY3QgLmNvdmVyLWJsb2NrIHtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1NSU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTQ1JSk7XG4gIH1cbiAgLmNvbnRhY3QgLmNvdmVyLWJsb2NrIG1hdC1jYXJkIC5yb3cgZm9ybSAucm93IC5jb250YWN0LWZvcm0ge1xuICAgIHdpZHRoOiAzNCU7XG4gIH1cbiAgLmNvbnRhY3QgLmNvdmVyLWJsb2NrIG1hdC1jYXJkIC5yb3cgZm9ybSAucm93IC5zZW5kaW5nLWZvcm0ge1xuICAgIHdpZHRoOiA2NSU7XG4gIH1cbiAgLmNvbnRhY3QgLmNvdmVyLWJsb2NrIG1hdC1jYXJkIC5yb3cgZm9ybSAucm93IC5zZW5kaW5nLWZvcm0gLnR3by1pbi1yb3cge1xuICAgIHdpZHRoOiA0NSU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICB9XG4gIC5jb250YWN0IC5jb3Zlci1ibG9jayBtYXQtY2FyZCAucm93IGZvcm0gLnJvdyAuc2VuZGluZy1mb3JtIC5tYWlsIHtcbiAgICB3aWR0aDogMzUlO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgfVxuICAuY29udGFjdCAuY292ZXItYmxvY2sgbWF0LWNhcmQgLnJvdyBmb3JtIC5yb3cgLnNlbmRpbmctZm9ybSAuY291bnRyeSB7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gIH1cbiAgLmNvbnRhY3QgLmNvdmVyLWJsb2NrIG1hdC1jYXJkIC5yb3cgZm9ybSAucm93IC5zZW5kaW5nLWZvcm0gLm9uZS1pbi1yb3cge1xuICAgIHdpZHRoOiA5NSU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICB9XG59Il19 */"] });
    return ContactComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss']
            }]
    }], function () { return [{ type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconRegistry"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] }, { type: src_app_service_iso_code_service__WEBPACK_IMPORTED_MODULE_7__["IsoCodeService"] }]; }, { countryList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16;


/***/ }),

/***/ "./src/app/components/contact/phone-input/phone-input.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/contact/phone-input/phone-input.component.ts ***!
  \*************************************************************************/
/*! exports provided: PhoneNumberCustomInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneNumberCustomInput", function() { return PhoneNumberCustomInput; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/form-field.js");
/* harmony import */ var _model_phone_number_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../model/phone-number.model */ "./src/app/model/phone-number.model.ts");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/fesm5/coercion.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm5/a11y.js");











var _c0 = ["area"];
var _c1 = ["exchange"];
var _c2 = ["subscriber"];
var PhoneNumberCustomInput = /** @class */ (function () {
    function PhoneNumberCustomInput(formBuilder, _focusMonitor, _elementRef, _formField, ngControl) {
        var _this = this;
        this._focusMonitor = _focusMonitor;
        this._elementRef = _elementRef;
        this._formField = _formField;
        this.ngControl = ngControl;
        this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.focused = false;
        this.controlType = 'example-tel-input';
        this.id = "example-tel-input-" + PhoneNumberCustomInput.nextId++;
        this.onChange = function (_) { };
        this.onTouched = function () { };
        this._required = false;
        this._disabled = false;
        this.parts = formBuilder.group({
            area: [
                null,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(3)]
            ],
            exchange: [
                null,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(3)]
            ],
            subscriber: [
                null,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(4)]
            ]
        });
        _focusMonitor.monitor(_elementRef, true).subscribe(function (origin) {
            if (_this.focused && !origin) {
                _this.onTouched();
            }
            _this.focused = !!origin;
            _this.stateChanges.next();
        });
        if (this.ngControl != null) {
            this.ngControl.valueAccessor = this;
        }
    }
    Object.defineProperty(PhoneNumberCustomInput.prototype, "empty", {
        get: function () {
            var _a = this.parts.value, area = _a.area, exchange = _a.exchange, subscriber = _a.subscriber;
            return !area && !exchange && !subscriber;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PhoneNumberCustomInput.prototype, "shouldLabelFloat", {
        get: function () {
            return this.focused || !this.empty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PhoneNumberCustomInput.prototype, "placeholder", {
        get: function () {
            return this._placeholder;
        },
        set: function (value) {
            this._placeholder = value;
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PhoneNumberCustomInput.prototype, "required", {
        get: function () {
            return this._required;
        },
        set: function (value) {
            this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PhoneNumberCustomInput.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
            this._disabled ? this.parts.disable() : this.parts.enable();
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PhoneNumberCustomInput.prototype, "value", {
        get: function () {
            if (this.parts.valid) {
                var _a = this.parts.value, area = _a.area, exchange = _a.exchange, subscriber = _a.subscriber;
                return new _model_phone_number_model__WEBPACK_IMPORTED_MODULE_3__["PhoneNumber"](area, exchange, subscriber);
            }
            return null;
        },
        set: function (tel) {
            var _a = tel || new _model_phone_number_model__WEBPACK_IMPORTED_MODULE_3__["PhoneNumber"]('', '', ''), area = _a.area, exchange = _a.exchange, subscriber = _a.subscriber;
            this.parts.setValue({ area: area, exchange: exchange, subscriber: subscriber });
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PhoneNumberCustomInput.prototype, "errorState", {
        get: function () {
            return this.parts.invalid && this.parts.dirty;
        },
        enumerable: true,
        configurable: true
    });
    PhoneNumberCustomInput.prototype.autoFocusNext = function (control, nextElement) {
        if (!control.errors && nextElement) {
            this._focusMonitor.focusVia(nextElement, 'program');
        }
    };
    PhoneNumberCustomInput.prototype.autoFocusPrev = function (control, prevElement) {
        if (control.value.length < 1) {
            this._focusMonitor.focusVia(prevElement, 'program');
        }
    };
    PhoneNumberCustomInput.prototype.ngOnDestroy = function () {
        this.stateChanges.complete();
        this._focusMonitor.stopMonitoring(this._elementRef);
    };
    PhoneNumberCustomInput.prototype.setDescribedByIds = function (ids) {
        var controlElement = this._elementRef.nativeElement
            .querySelector('.example-tel-input-container');
        controlElement.setAttribute('aria-describedby', ids.join(' '));
    };
    PhoneNumberCustomInput.prototype.onContainerClick = function () {
        if (this.parts.controls.subscriber.valid) {
            this._focusMonitor.focusVia(this.subscriberInput, 'program');
        }
        else if (this.parts.controls.exchange.valid) {
            this._focusMonitor.focusVia(this.subscriberInput, 'program');
        }
        else if (this.parts.controls.area.valid) {
            this._focusMonitor.focusVia(this.exchangeInput, 'program');
        }
        else {
            this._focusMonitor.focusVia(this.areaInput, 'program');
        }
    };
    PhoneNumberCustomInput.prototype.writeValue = function (tel) {
        this.value = tel;
    };
    PhoneNumberCustomInput.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    PhoneNumberCustomInput.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    PhoneNumberCustomInput.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    PhoneNumberCustomInput.prototype._handleInput = function (control, nextElement) {
        this.autoFocusNext(control, nextElement);
        this.onChange(this.value);
    };
    PhoneNumberCustomInput.nextId = 0;
    PhoneNumberCustomInput.ɵfac = function PhoneNumberCustomInput_Factory(t) { return new (t || PhoneNumberCustomInput)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MAT_FORM_FIELD"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"], 10)); };
    PhoneNumberCustomInput.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PhoneNumberCustomInput, selectors: [["app-phone-input"]], viewQuery: function PhoneNumberCustomInput_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.areaInput = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.exchangeInput = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.subscriberInput = _t.first);
        } }, hostVars: 3, hostBindings: function PhoneNumberCustomInput_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("example-floating", ctx.shouldLabelFloat);
        } }, inputs: { userAriaDescribedBy: ["aria-describedby", "userAriaDescribedBy"], placeholder: "placeholder", required: "required", disabled: "disabled", value: "value" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldControl"], useExisting: PhoneNumberCustomInput }])], decls: 11, vars: 2, consts: [["role", "group", 1, "example-tel-input-container", 3, "formGroup"], ["formControlName", "area", "size", "3", "maxLength", "3", "aria-label", "Area code", 1, "example-tel-input-element", 3, "input"], ["area", ""], [1, "example-tel-input-spacer"], ["formControlName", "exchange", "maxLength", "3", "size", "3", "aria-label", "Exchange code", 1, "example-tel-input-element", 3, "input", "keyup.backspace"], ["exchange", ""], ["formControlName", "subscriber", "maxLength", "4", "size", "4", "aria-label", "Subscriber number", 1, "example-tel-input-element", 3, "input", "keyup.backspace"], ["subscriber", ""]], template: function PhoneNumberCustomInput_Template(rf, ctx) { if (rf & 1) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function PhoneNumberCustomInput_Template_input_input_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return ctx._handleInput(ctx.parts.controls.area, _r1); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u2013");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function PhoneNumberCustomInput_Template_input_input_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return ctx._handleInput(ctx.parts.controls.exchange, _r2); })("keyup.backspace", function PhoneNumberCustomInput_Template_input_keyup_backspace_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.autoFocusPrev(ctx.parts.controls.exchange, _r0); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u2013");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function PhoneNumberCustomInput_Template_input_input_9_listener() { return ctx._handleInput(ctx.parts.controls.subscriber); })("keyup.backspace", function PhoneNumberCustomInput_Template_input_keyup_backspace_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return ctx.autoFocusPrev(ctx.parts.controls.subscriber, _r1); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.parts);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", ctx._formField == null ? null : ctx._formField._labelId);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".example-tel-input-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.example-tel-input-element[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  padding: 0;\n  outline: none;\n  font: inherit;\n  text-align: center;\n}\n\n.example-tel-input-spacer[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 200ms;\n}\n\n.example-floating[_nghost-%COMP%]   .example-tel-input-spacer[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L3Bob25lLWlucHV0L0M6XFxXb3Jrc3BhY2VcXHByb2plY3RzXFx3b3JsZC1lbnRlcnRhaW5tZW50XFxlbnRlcnRhaW5tZW50LXVpL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb250YWN0XFxwaG9uZS1pbnB1dFxccGhvbmUtaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC9waG9uZS1pbnB1dC9waG9uZS1pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUU7RUFDRSxVQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFRTtFQUNFLFVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC9waG9uZS1pbnB1dC9waG9uZS1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXRlbC1pbnB1dC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtdGVsLWlucHV0LWVsZW1lbnQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgZm9udDogaW5oZXJpdDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtdGVsLWlucHV0LXNwYWNlciB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcztcclxuICB9XHJcbiAgXHJcbiAgOmhvc3QuZXhhbXBsZS1mbG9hdGluZyAuZXhhbXBsZS10ZWwtaW5wdXQtc3BhY2VyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfSIsIi5leGFtcGxlLXRlbC1pbnB1dC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZXhhbXBsZS10ZWwtaW5wdXQtZWxlbWVudCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udDogaW5oZXJpdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZXhhbXBsZS10ZWwtaW5wdXQtc3BhY2VyIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcztcbn1cblxuOmhvc3QuZXhhbXBsZS1mbG9hdGluZyAuZXhhbXBsZS10ZWwtaW5wdXQtc3BhY2VyIHtcbiAgb3BhY2l0eTogMTtcbn0iXX0= */"] });
    return PhoneNumberCustomInput;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhoneNumberCustomInput, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-phone-input',
                templateUrl: './phone-input.component.html',
                styleUrls: ['./phone-input.component.scss'],
                providers: [{ provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldControl"], useExisting: PhoneNumberCustomInput }],
                host: {
                    '[class.example-floating]': 'shouldLabelFloat',
                    '[id]': 'id',
                }
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MAT_FORM_FIELD"]]
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }] }]; }, { areaInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['area']
        }], exchangeInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['exchange']
        }], subscriberInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['subscriber']
        }], userAriaDescribedBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['aria-describedby']
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/content/content.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/content/content.component.ts ***!
  \*********************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/icon.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/form-field.js");







var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Title
     * @meaning Content
     */ 
    var MSG_EXTERNAL_ContentTitle$$SRC_APP_COMPONENTS_CONTENT_CONTENT_COMPONENT_TS_1 = goog.getMsg("About Template ...");
    I18N_0 = MSG_EXTERNAL_ContentTitle$$SRC_APP_COMPONENTS_CONTENT_CONTENT_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Content|Title @@ContentTitle\u241F6a26aeacd63652c3f6d439dc8fbd9820fb5f5537\u241F1809567571283758673:About Template ..."], [":Content|Title @@ContentTitle\u241F6a26aeacd63652c3f6d439dc8fbd9820fb5f5537\u241F1809567571283758673:About Template ..."])));
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Sub Title 1st
     * @meaning Content
     */ 
    var MSG_EXTERNAL_ContentSubTitle1$$SRC_APP_COMPONENTS_CONTENT_CONTENT_COMPONENT_TS_3 = goog.getMsg("\u0421ross browser");
    I18N_2 = MSG_EXTERNAL_ContentSubTitle1$$SRC_APP_COMPONENTS_CONTENT_CONTENT_COMPONENT_TS_3;
}
else {
    I18N_2 = $localize(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Content|Sub Title 1st @@ContentSubTitle1\u241Fce97a6fc14ff672425f7f6918cef5b4b8fa75c1f\u241F7910278045704021408:\u0421ross browser"], [":Content|Sub Title 1st @@ContentSubTitle1\u241Fce97a6fc14ff672425f7f6918cef5b4b8fa75c1f\u241F7910278045704021408:\u0421ross browser"])));
}
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Text 1st
     * @meaning Content
     */ 
    var MSG_EXTERNAL_ContentText1$$SRC_APP_COMPONENTS_CONTENT_CONTENT_COMPONENT_TS_5 = goog.getMsg("This template our create work across an acceptable number of web browsers");
    I18N_4 = MSG_EXTERNAL_ContentText1$$SRC_APP_COMPONENTS_CONTENT_CONTENT_COMPONENT_TS_5;
}
else {
    I18N_4 = $localize(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Content|Text 1st @@ContentText1\u241F1fa781fdf841bd4deab38a910c502f0cbc5f5f09\u241F4577171224110526429:This template our create work across an acceptable number of web browsers"], [":Content|Text 1st @@ContentText1\u241F1fa781fdf841bd4deab38a910c502f0cbc5f5f09\u241F4577171224110526429:This template our create work across an acceptable number of web browsers"])));
}
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Lern More
     * @meaning Content
     */ 
    var MSG_EXTERNAL_ContentLearnMore$$SRC_APP_COMPONENTS_CONTENT_CONTENT_COMPONENT_TS_7 = goog.getMsg("Learn more");
    I18N_6 = MSG_EXTERNAL_ContentLearnMore$$SRC_APP_COMPONENTS_CONTENT_CONTENT_COMPONENT_TS_7;
}
else {
    I18N_6 = $localize(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Content|Lern More @@ContentLearnMore\u241Fb7ee86e877eaa53181fbbbd7bac707e7c3505321\u241F7845348434100927694:Learn more"], [":Content|Lern More @@ContentLearnMore\u241Fb7ee86e877eaa53181fbbbd7bac707e7c3505321\u241F7845348434100927694:Learn more"])));
}
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Sub Title 2nd
     * @meaning Content
     */ 
    var MSG_EXTERNAL_ContentSubTitle2$$SRC_APP_COMPONENTS_CONTENT_CONTENT_COMPONENT_TS_9 = goog.getMsg("Modern stack");
    I18N_8 = MSG_EXTERNAL_ContentSubTitle2$$SRC_APP_COMPONENTS_CONTENT_CONTENT_COMPONENT_TS_9;
}
else {
    I18N_8 = $localize(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Content|Sub Title 2nd @@ContentSubTitle2\u241F3c306bd313924d15b4dbb183673789a40de1e39e\u241F6493063026318684010:Modern stack"], [":Content|Sub Title 2nd @@ContentSubTitle2\u241F3c306bd313924d15b4dbb183673789a40de1e39e\u241F6493063026318684010:Modern stack"])));
}
var I18N_10;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Text 2nd
     * @meaning Content
     */ 
    var MSG_EXTERNAL_ContentText2$$SRC_APP_COMPONENTS_CONTENT_CONTENT_COMPONENT_TS_11 = goog.getMsg("Our template uses Angular framework, reactive state management, SASS and etc. ");
    I18N_10 = MSG_EXTERNAL_ContentText2$$SRC_APP_COMPONENTS_CONTENT_CONTENT_COMPONENT_TS_11;
}
else {
    I18N_10 = $localize(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Content|Text 2nd @@ContentText2\u241Fa497c12870d29585b217453bae27d39f06af4814\u241F4398019621987966828:Our template uses Angular framework, reactive state management, SASS and etc. "], [":Content|Text 2nd @@ContentText2\u241Fa497c12870d29585b217453bae27d39f06af4814\u241F4398019621987966828:Our template uses Angular framework, reactive state management, SASS and etc. "])));
}
var I18N_12;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Lern More
     * @meaning Content
     */ 
    var MSG_EXTERNAL_ContentLearnMore$$SRC_APP_COMPONENTS_CONTENT_CONTENT_COMPONENT_TS_13 = goog.getMsg("Learn more");
    I18N_12 = MSG_EXTERNAL_ContentLearnMore$$SRC_APP_COMPONENTS_CONTENT_CONTENT_COMPONENT_TS_13;
}
else {
    I18N_12 = $localize(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Content|Lern More @@ContentLearnMore\u241Fb7ee86e877eaa53181fbbbd7bac707e7c3505321\u241F7845348434100927694:Learn more"], [":Content|Lern More @@ContentLearnMore\u241Fb7ee86e877eaa53181fbbbd7bac707e7c3505321\u241F7845348434100927694:Learn more"])));
}
var I18N_14;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Sub Title 3rd
     * @meaning Content
     */ 
    var MSG_EXTERNAL_ContentSubTitle3$$SRC_APP_COMPONENTS_CONTENT_CONTENT_COMPONENT_TS_15 = goog.getMsg("Multi languages");
    I18N_14 = MSG_EXTERNAL_ContentSubTitle3$$SRC_APP_COMPONENTS_CONTENT_CONTENT_COMPONENT_TS_15;
}
else {
    I18N_14 = $localize(templateObject_8 || (templateObject_8 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Content|Sub Title 3rd @@ContentSubTitle3\u241Ff6d76d363c69d716b9b495d59de71a6b55c1c298\u241F1009488355433896816:Multi languages"], [":Content|Sub Title 3rd @@ContentSubTitle3\u241Ff6d76d363c69d716b9b495d59de71a6b55c1c298\u241F1009488355433896816:Multi languages"])));
}
var I18N_16;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Text 3rd
     * @meaning Content
     */ 
    var MSG_EXTERNAL_ContentText3$$SRC_APP_COMPONENTS_CONTENT_CONTENT_COMPONENT_TS_17 = goog.getMsg("This template provides opportunity your app to be usable in different locales");
    I18N_16 = MSG_EXTERNAL_ContentText3$$SRC_APP_COMPONENTS_CONTENT_CONTENT_COMPONENT_TS_17;
}
else {
    I18N_16 = $localize(templateObject_9 || (templateObject_9 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Content|Text 3rd @@ContentText3\u241F8baf1e41a548ec47b5f124be7fe876b27ea61a32\u241F1627633807034157790:This template provides opportunity your app to be usable in different locales"], [":Content|Text 3rd @@ContentText3\u241F8baf1e41a548ec47b5f124be7fe876b27ea61a32\u241F1627633807034157790:This template provides opportunity your app to be usable in different locales"])));
}
var I18N_18;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Lern More
     * @meaning Content
     */ 
    var MSG_EXTERNAL_ContentLearnMore$$SRC_APP_COMPONENTS_CONTENT_CONTENT_COMPONENT_TS_19 = goog.getMsg("Learn more");
    I18N_18 = MSG_EXTERNAL_ContentLearnMore$$SRC_APP_COMPONENTS_CONTENT_CONTENT_COMPONENT_TS_19;
}
else {
    I18N_18 = $localize(templateObject_10 || (templateObject_10 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Content|Lern More @@ContentLearnMore\u241Fb7ee86e877eaa53181fbbbd7bac707e7c3505321\u241F7845348434100927694:Learn more"], [":Content|Lern More @@ContentLearnMore\u241Fb7ee86e877eaa53181fbbbd7bac707e7c3505321\u241F7845348434100927694:Learn more"])));
}
var I18N_20;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Sub Title 4th
     * @meaning Content
     */ 
    var MSG_EXTERNAL_ContentSubTitle4$$SRC_APP_COMPONENTS_CONTENT_CONTENT_COMPONENT_TS_21 = goog.getMsg("Low price");
    I18N_20 = MSG_EXTERNAL_ContentSubTitle4$$SRC_APP_COMPONENTS_CONTENT_CONTENT_COMPONENT_TS_21;
}
else {
    I18N_20 = $localize(templateObject_11 || (templateObject_11 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Content|Sub Title 4th @@ContentSubTitle4\u241Fd4155605e5ef2c1629715b5bcb89b9afbff668a2\u241F6519892128718925202:Low price"], [":Content|Sub Title 4th @@ContentSubTitle4\u241Fd4155605e5ef2c1629715b5bcb89b9afbff668a2\u241F6519892128718925202:Low price"])));
}
var I18N_22;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Text 4th
     * @meaning Content
     */ 
    var MSG_EXTERNAL_ContentText4$$SRC_APP_COMPONENTS_CONTENT_CONTENT_COMPONENT_TS_23 = goog.getMsg("Reusing pre-built templates will save you money. We save our time - you save your money");
    I18N_22 = MSG_EXTERNAL_ContentText4$$SRC_APP_COMPONENTS_CONTENT_CONTENT_COMPONENT_TS_23;
}
else {
    I18N_22 = $localize(templateObject_12 || (templateObject_12 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Content|Text 4th @@ContentText4\u241F3c3457decd51404a303e9a88dd916bdee161e62b\u241F2464682063760423781:Reusing pre-built templates will save you money. We save our time - you save your money"], [":Content|Text 4th @@ContentText4\u241F3c3457decd51404a303e9a88dd916bdee161e62b\u241F2464682063760423781:Reusing pre-built templates will save you money. We save our time - you save your money"])));
}
var I18N_24;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Lern More
     * @meaning Content
     */ 
    var MSG_EXTERNAL_ContentLearnMore$$SRC_APP_COMPONENTS_CONTENT_CONTENT_COMPONENT_TS_25 = goog.getMsg("Learn more");
    I18N_24 = MSG_EXTERNAL_ContentLearnMore$$SRC_APP_COMPONENTS_CONTENT_CONTENT_COMPONENT_TS_25;
}
else {
    I18N_24 = $localize(templateObject_13 || (templateObject_13 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Content|Lern More @@ContentLearnMore\u241Fb7ee86e877eaa53181fbbbd7bac707e7c3505321\u241F7845348434100927694:Learn more"], [":Content|Lern More @@ContentLearnMore\u241Fb7ee86e877eaa53181fbbbd7bac707e7c3505321\u241F7845348434100927694:Learn more"])));
}
var ContentComponent = /** @class */ (function () {
    function ContentComponent(iconRegistry, sanitizer) {
        iconRegistry
            .addSvgIcon('readMore', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/u_rm.svg'));
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent.ɵfac = function ContentComponent_Factory(t) { return new (t || ContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"])); };
    ContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContentComponent, selectors: [["app-content"]], decls: 58, vars: 0, consts: [["id", "contentId", 1, "content", "blue"], [1, "content-wrapper"], [1, "title"], [1, "cards-block"], [1, "card", "zone"], ["src", "assets/img/startup1.jpg"], [1, "text"], [1, "title-card"], [1, "text-card"], ["svgIcon", "readMore", "aria-hidden", "false", "aria-label", "Example thumbs up SVG icon", 1, "app-icon"], ["src", "assets/img/startup2.jpg"], ["src", "assets/img/startup3.jpg"], ["src", "assets/img/startup4.jpg"]], template: function ContentComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](4, I18N_0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](11, I18N_2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](14, I18N_4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](17, I18N_6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "mat-icon", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-card", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](24, I18N_8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](27, I18N_10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](30, I18N_12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "mat-icon", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-card", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "img", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](37, I18N_14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](40, I18N_16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](43, I18N_18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "mat-icon", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "mat-card", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "img", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](50, I18N_20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](53, I18N_22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "button");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](56, I18N_24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "mat-icon", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"]], styles: [".blue[_ngcontent-%COMP%] {\n  background: #202539;\n  background: linear-gradient(0deg, #202539 4%, #f15e23 39%, #fcb045 58%, white 90%);\n}\n\n.content[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  opacity: 0.4;\n}\n\n.content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 5%;\n  padding-top: 4%;\n}\n\n.content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: bold;\n}\n\n.content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: lighter;\n}\n\n.content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .cards-block[_ngcontent-%COMP%] {\n  align-content: center;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  grid-gap: 10px;\n}\n\n.content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .cards-block[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .cards-block[_ngcontent-%COMP%]   .zone[_ngcontent-%COMP%] {\n  color: #FFF;\n  font-size: 2em;\n  border-radius: 4px;\n  transition: all 0.3s linear;\n}\n\n.content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .cards-block[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: #FFF;\n  margin: 7%;\n}\n\n.content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .cards-block[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n\n.content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .cards-block[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  padding: 15px 20px 20px 20px;\n}\n\n.content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .cards-block[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .title-card[_ngcontent-%COMP%] {\n  min-height: 45px;\n  max-height: 75px;\n}\n\n.content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .cards-block[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .title-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #F44336;\n}\n\n.content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .cards-block[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .text-card[_ngcontent-%COMP%] {\n  min-height: 138px;\n  max-height: 300px;\n}\n\n.content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .cards-block[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .text-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: black;\n}\n\n.content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .cards-block[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background: transparent;\n  border-style: solid;\n  border-width: 2px;\n  border-color: #ff9800;\n  border-radius: 4px;\n  font-size: 1rem;\n  font-weight: bold;\n  color: #ff9800;\n  padding: 10px;\n  width: 100%;\n}\n\n.content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .cards-block[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%] {\n  vertical-align: text-bottom;\n}\n\n.content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .cards-block[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  vertical-align: bottom;\n  margin-left: 5px;\n}\n\n.content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .cards-block[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #ff9800;\n  color: white;\n}\n\n.content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .cards-block[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\n.content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .cards-block[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .orange[_ngcontent-%COMP%] {\n  fill: #ff9800;\n}\n\n@media only screen and (min-width: 993px) and (max-width: 1080px) {\n  .content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .cards-block[_ngcontent-%COMP%] {\n    align-content: center;\n    display: grid;\n    grid-template-columns: repeat(4, minmax(220px, 1fr));\n    grid-gap: 10px;\n  }\n}\n\n@media only screen and (min-width: 993px) and (max-width: 1280px) {\n  .content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .cards-block[_ngcontent-%COMP%] {\n    align-content: center;\n    display: grid;\n    grid-template-columns: repeat(4, minmax(250px, 1fr));\n    grid-gap: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250ZW50L0M6XFxXb3Jrc3BhY2VcXHByb2plY3RzXFx3b3JsZC1lbnRlcnRhaW5tZW50XFxlbnRlcnRhaW5tZW50LXVpL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb250ZW50XFxjb250ZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esa0ZBQUE7QUNDSjs7QURLSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFlBQUE7QUNGUjs7QURPUTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDTFo7O0FET1k7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNMaEI7O0FEUVk7RUFDSSxvQkFBQTtBQ05oQjs7QURVUTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLDREQUFBO0VBQ0EsY0FBQTtBQ1JaOztBRFdZO0VBQ0ksVUFBQTtBQ1RoQjs7QURXWTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQ1RoQjs7QURZWTtFQUNJLHNCQUFBO0VBQ0EsVUFBQTtBQ1ZoQjs7QURZZ0I7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUNWcEI7O0FEYWdCO0VBQ0ksNEJBQUE7QUNYcEI7O0FEYW9CO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ1h0Qjs7QURZc0I7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUNWeEI7O0FEYW9CO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQ1h0Qjs7QURZc0I7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQ1Z4Qjs7QURjb0I7RUFDSSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUVBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ2J4Qjs7QURld0I7RUFDSSwyQkFBQTtBQ2I1Qjs7QURnQndCO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtBQ2Q1Qjs7QURtQm9CO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FDakJ4Qjs7QURtQm9CO0VBQ0ksVUFBQTtBQ2pCeEI7O0FEb0JvQjtFQUNJLGFBQUE7QUNsQnhCOztBRDRCUTtFQUNJO0lBQ0kscUJBQUE7SUFDQSxhQUFBO0lBQ0Esb0RBQUE7SUFDQSxjQUFBO0VDMUJkO0FBQ0Y7O0FENEJRO0VBQ0k7SUFDSSxxQkFBQTtJQUNBLGFBQUE7SUFDQSxvREFBQTtJQUNBLGNBQUE7RUMxQmQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsdWUge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDMyLDM3LDU3KTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDMyLDM3LDU3LDEpIDQlLCByZ2JhKDI0MSw5NCwzNSwxKSAzOSUsIHJnYmEoMjUyLDE3Niw2OSwxKSA1OCUsIHJnYmEoMjU1LDI1NSwyNTUsMSkgOTAlKTtcclxuICAgfVxyXG5cclxuXHJcbi5jb250ZW50IHtcclxuXHJcbiAgICAuY292ZXIge1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgb3BhY2l0eTogMC40O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50LXdyYXBwZXIge1xyXG5cclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNCU7XHJcblxyXG4gICAgICAgICAgICBoMXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgLy8gY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkcy1ibG9jayB7XHJcbiAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzUwcHgsIDFmcikpO1xyXG4gICAgICAgICAgICBncmlkLWdhcDogMTBweDtcclxuXHJcblxyXG4gICAgICAgICAgICBtYXQtY2FyZCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC56b25lIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiNGRkY7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MmVtO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo0cHg7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiA3JTtcclxuXHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMjBweCAyMHB4IDIwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC50aXRsZS1jYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNGNDQzMzY7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0LWNhcmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTM4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICNmZjk4MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmY5ODAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdC1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTgwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBidXR0b246Zm9jdXN7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6MDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5vcmFuZ2UgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogI2ZmOTgwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDowcHgpIGFuZCAobWF4LXdpZHRoOjMyMHB4KSB7fVxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDozMjFweCkgYW5kIChtYXgtd2lkdGg6NDgwcHgpIHt9XHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjQ4MXB4KSBhbmQgKG1heC13aWR0aDo3NjhweCkge31cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY5cHgpIGFuZCAobWF4LXdpZHRoOjk5MnB4KSB7fVxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo5OTNweCkgYW5kIChtYXgtd2lkdGg6MTA4MHB4KSB7XHJcbiAgICAgICAgICAgIC5jYXJkcy1ibG9jayB7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDIyMHB4LCAxZnIpKTtcclxuICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo5OTNweCkgYW5kIChtYXgtd2lkdGg6MTI4MHB4KSB7XHJcbiAgICAgICAgICAgIC5jYXJkcy1ibG9jayB7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcclxuICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLXdpZHRoOjEyODFweCkgYW5kIChtYXgtd2lkdGg6MTYwMHB4KSB7fVxyXG4gICAgfVxyXG59XHJcbiIsIi5ibHVlIHtcbiAgYmFja2dyb3VuZDogIzIwMjUzOTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICMyMDI1MzkgNCUsICNmMTVlMjMgMzklLCAjZmNiMDQ1IDU4JSwgd2hpdGUgOTAlKTtcbn1cblxuLmNvbnRlbnQgLmNvdmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG9wYWNpdHk6IDAuNDtcbn1cbi5jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgcGFkZGluZy10b3A6IDQlO1xufVxuLmNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAudGl0bGUgaDEge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAudGl0bGUgcCB7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuLmNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAuY2FyZHMtYmxvY2sge1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDM1MHB4LCAxZnIpKTtcbiAgZ3JpZC1nYXA6IDEwcHg7XG59XG4uY29udGVudCAuY29udGVudC13cmFwcGVyIC5jYXJkcy1ibG9jayBtYXQtY2FyZCB7XG4gIHBhZGRpbmc6IDA7XG59XG4uY29udGVudCAuY29udGVudC13cmFwcGVyIC5jYXJkcy1ibG9jayAuem9uZSB7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LXNpemU6IDJlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XG59XG4uY29udGVudCAuY29udGVudC13cmFwcGVyIC5jYXJkcy1ibG9jayAuY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIG1hcmdpbjogNyU7XG59XG4uY29udGVudCAuY29udGVudC13cmFwcGVyIC5jYXJkcy1ibG9jayAuY2FyZCBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xufVxuLmNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAuY2FyZHMtYmxvY2sgLmNhcmQgLnRleHQge1xuICBwYWRkaW5nOiAxNXB4IDIwcHggMjBweCAyMHB4O1xufVxuLmNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAuY2FyZHMtYmxvY2sgLmNhcmQgLnRleHQgLnRpdGxlLWNhcmQge1xuICBtaW4taGVpZ2h0OiA0NXB4O1xuICBtYXgtaGVpZ2h0OiA3NXB4O1xufVxuLmNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAuY2FyZHMtYmxvY2sgLmNhcmQgLnRleHQgLnRpdGxlLWNhcmQgaDEge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6ICNGNDQzMzY7XG59XG4uY29udGVudCAuY29udGVudC13cmFwcGVyIC5jYXJkcy1ibG9jayAuY2FyZCAudGV4dCAudGV4dC1jYXJkIHtcbiAgbWluLWhlaWdodDogMTM4cHg7XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xufVxuLmNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAuY2FyZHMtYmxvY2sgLmNhcmQgLnRleHQgLnRleHQtY2FyZCBwIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogYmxhY2s7XG59XG4uY29udGVudCAuY29udGVudC13cmFwcGVyIC5jYXJkcy1ibG9jayAuY2FyZCAudGV4dCBidXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLWNvbG9yOiAjZmY5ODAwO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZmY5ODAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLmNhcmRzLWJsb2NrIC5jYXJkIC50ZXh0IGJ1dHRvbiBtYXQtbGFiZWwge1xuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG59XG4uY29udGVudCAuY29udGVudC13cmFwcGVyIC5jYXJkcy1ibG9jayAuY2FyZCAudGV4dCBidXR0b24gbWF0LWljb24ge1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLmNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAuY2FyZHMtYmxvY2sgLmNhcmQgLnRleHQgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTgwMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAuY2FyZHMtYmxvY2sgLmNhcmQgLnRleHQgYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbn1cbi5jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLmNhcmRzLWJsb2NrIC5jYXJkIC50ZXh0IC5vcmFuZ2Uge1xuICBmaWxsOiAjZmY5ODAwO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTNweCkgYW5kIChtYXgtd2lkdGg6IDEwODBweCkge1xuICAuY29udGVudCAuY29udGVudC13cmFwcGVyIC5jYXJkcy1ibG9jayB7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDIyMHB4LCAxZnIpKTtcbiAgICBncmlkLWdhcDogMTBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTNweCkgYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xuICAuY29udGVudCAuY29udGVudC13cmFwcGVyIC5jYXJkcy1ibG9jayB7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcbiAgICBncmlkLWdhcDogMTBweDtcbiAgfVxufSJdfQ== */"] });
    return ContentComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-content',
                templateUrl: './content.component.html',
                styleUrls: ['./content.component.scss']
            }]
    }], function () { return [{ type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }]; }, null); })();
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13;


/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _social_social_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../social/social.component */ "./src/app/components/social/social.component.ts");



var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 6, vars: 0, consts: [[1, "zone"], ["href", "#"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-social");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "2020 \u00A9 Azzart.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "www.azzart.com");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_social_social_component__WEBPACK_IMPORTED_MODULE_1__["SocialComponent"]], styles: ["footer[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0;\n  background-color: #292929;\n}\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: white;\n  margin: 0;\n  padding: 1rem;\n}\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #f5f5f6;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvQzpcXFdvcmtzcGFjZVxccHJvamVjdHNcXHdvcmxkLWVudGVydGFpbm1lbnRcXGVudGVydGFpbm1lbnQtdWkvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQ0NGO0FEQ0U7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FDQ0o7QURFRTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTI5O1xyXG5cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIGNvbG9yOiAjZjVmNWY2O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxufVxyXG4iLCJmb290ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTI5Mjk7XG59XG5mb290ZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5mb290ZXIgYSB7XG4gIGNvbG9yOiAjZjVmNWY2O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */"] });
    return FooterComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");



var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Home Title
     * @meaning Home
     */ 
    var MSG_EXTERNAL_homeCoverTextTitle$$SRC_APP_COMPONENTS_HOME_HOME_COMPONENT_TS_1 = goog.getMsg("Making world better");
    I18N_0 = MSG_EXTERNAL_homeCoverTextTitle$$SRC_APP_COMPONENTS_HOME_HOME_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Home|Home Title @@homeCoverTextTitle\u241F8f33685a2e47feaa4fdf3805719b2388edf13915\u241F3130725433706241586:Making world better"], [":Home|Home Title @@homeCoverTextTitle\u241F8f33685a2e47feaa4fdf3805719b2388edf13915\u241F3130725433706241586:Making world better"])));
}
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.isHeading = true;
        this.isSubheading = true;
        this.isHeadingBtn = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 5, vars: 0, consts: [["id", "homeId", 1, "container", "blue"], ["src", "assets/img/slider_8.jpeg", 1, "cover"], [1, "coverText"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](4, I18N_0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } }, styles: [".blue[_ngcontent-%COMP%] {\n  background: #2d3436;\n}\n\n.container[_ngcontent-%COMP%] {\n  \n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n\n\n.cover[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n\n\n.coverText[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  font-weight: bold;\n}\n\n.coverText[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0M6XFxXb3Jrc3BhY2VcXHByb2plY3RzXFx3b3JsZC1lbnRlcnRhaW5tZW50XFxlbnRlcnRhaW5tZW50LXVpL3NyY1xcYXBwXFxjb21wb25lbnRzXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSx1RUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREVBOzs7O0NBQUE7O0FBS0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBOztFQUFBOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmx1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMmQzNDM2O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIC8qIHZoID0gdmlldyBoZWlnaHQuIFdlIGRvIHRoaXMgdG8gbWFrZSBzdXJlIGJhbm5lciBmaWxscyBlbnRpcmUgdmlldyAqL1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qXHJcbldlIHNldCB0aGUgaW1hZ2Ugd2l0aGluIHRoZSBjb3ZlciBsYXlvdXRcclxucmVtID0gcmVsYXRpdmUgdG8gZm9udC1zaXplIG9mIHJvb3QgZWxlbWVudC4gVGhpcyBpcyBzaW5jZSB3ZSd2ZSBjcmVhdGVkIGRpZmZlcmVudCBmb250IHNpemUgdG8gdmFyeSBiYXNlZCBvbiBzY3JlZW4sIFxyXG5zbyB0aGlzIHdpbGwgYXV0b21hdGljYWxseSBjaGFuZ2UgdGhpcyBhcyB3ZWxsXHJcbiovXHJcbi5jb3ZlciB7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbn1cclxuXHJcbi8qXHJcbiAgICBXZSdkIGxpa2UgdGhlIHRleHQgdG8gYXBwZWFyIGluIHRoZSBjZW50ZXIgb2YgdGhlIGltYWdlIGFuZCBhYm92ZSBpdC5cclxuICovXHJcbi5jb3ZlclRleHQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY292ZXJUZXh0ID4gaDEge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG59IiwiLmJsdWUge1xuICBiYWNrZ3JvdW5kOiAjMmQzNDM2O1xufVxuXG4uY29udGFpbmVyIHtcbiAgLyogdmggPSB2aWV3IGhlaWdodC4gV2UgZG8gdGhpcyB0byBtYWtlIHN1cmUgYmFubmVyIGZpbGxzIGVudGlyZSB2aWV3ICovXG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4vKlxuV2Ugc2V0IHRoZSBpbWFnZSB3aXRoaW4gdGhlIGNvdmVyIGxheW91dFxucmVtID0gcmVsYXRpdmUgdG8gZm9udC1zaXplIG9mIHJvb3QgZWxlbWVudC4gVGhpcyBpcyBzaW5jZSB3ZSd2ZSBjcmVhdGVkIGRpZmZlcmVudCBmb250IHNpemUgdG8gdmFyeSBiYXNlZCBvbiBzY3JlZW4sIFxuc28gdGhpcyB3aWxsIGF1dG9tYXRpY2FsbHkgY2hhbmdlIHRoaXMgYXMgd2VsbFxuKi9cbi5jb3ZlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi8qXG4gICAgV2UnZCBsaWtlIHRoZSB0ZXh0IHRvIGFwcGVhciBpbiB0aGUgY2VudGVyIG9mIHRoZSBpbWFnZSBhbmQgYWJvdmUgaXQuXG4gKi9cbi5jb3ZlclRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY292ZXJUZXh0ID4gaDEge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn0iXX0= */"] });
    return HomeComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();
var templateObject_1;


/***/ }),

/***/ "./src/app/components/introduce/introduce.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/introduce/introduce.component.ts ***!
  \*************************************************************/
/*! exports provided: IntroduceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroduceComponent", function() { return IntroduceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/icon.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");





var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Title
     * @meaning Introduce
     */ 
    var MSG_EXTERNAL_IntroduceTitle$$SRC_APP_COMPONENTS_INTRODUCE_INTRODUCE_COMPONENT_TS_1 = goog.getMsg("Here will be content ...");
    I18N_0 = MSG_EXTERNAL_IntroduceTitle$$SRC_APP_COMPONENTS_INTRODUCE_INTRODUCE_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Introduce|Title @@IntroduceTitle\u241F42edd94cd5c5f650470ceb248d4e1c4cfdd55883\u241F6755725696594608709:Here will be content ..."], [":Introduce|Title @@IntroduceTitle\u241F42edd94cd5c5f650470ceb248d4e1c4cfdd55883\u241F6755725696594608709:Here will be content ..."])));
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Sub Title 1st
     * @meaning Introduce
     */ 
    var MSG_EXTERNAL_IntroduceSubTitle1$$SRC_APP_COMPONENTS_INTRODUCE_INTRODUCE_COMPONENT_TS_3 = goog.getMsg("Really Fast");
    I18N_2 = MSG_EXTERNAL_IntroduceSubTitle1$$SRC_APP_COMPONENTS_INTRODUCE_INTRODUCE_COMPONENT_TS_3;
}
else {
    I18N_2 = $localize(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Introduce|Sub Title 1st @@IntroduceSubTitle1\u241F7e892cd833fdf8066289b4996eb6f4607e26a7be\u241F812236410475977742:Really Fast"], [":Introduce|Sub Title 1st @@IntroduceSubTitle1\u241F7e892cd833fdf8066289b4996eb6f4607e26a7be\u241F812236410475977742:Really Fast"])));
}
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Desc1_1
     * @meaning Introduce
     */ 
    var MSG_EXTERNAL_IntroduceText1_1$$SRC_APP_COMPONENTS_INTRODUCE_INTRODUCE_COMPONENT_TS_5 = goog.getMsg("We are using prepared template to make your web site as soon as posible.");
    I18N_4 = MSG_EXTERNAL_IntroduceText1_1$$SRC_APP_COMPONENTS_INTRODUCE_INTRODUCE_COMPONENT_TS_5;
}
else {
    I18N_4 = $localize(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Introduce|Desc1_1 @@IntroduceText1_1\u241F0f7451036b7e3a42328118e951b2c41eb4778879\u241F5648904637352261117:We are using prepared template to make your web site as soon as posible."], [":Introduce|Desc1_1 @@IntroduceText1_1\u241F0f7451036b7e3a42328118e951b2c41eb4778879\u241F5648904637352261117:We are using prepared template to make your web site as soon as posible."])));
}
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Desc1_2
     * @meaning Introduce
     */ 
    var MSG_EXTERNAL_IntroduceText1_2$$SRC_APP_COMPONENTS_INTRODUCE_INTRODUCE_COMPONENT_TS_7 = goog.getMsg("We will just change content, images, colors scheme of page according targets of your new web site and your wishes.");
    I18N_6 = MSG_EXTERNAL_IntroduceText1_2$$SRC_APP_COMPONENTS_INTRODUCE_INTRODUCE_COMPONENT_TS_7;
}
else {
    I18N_6 = $localize(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Introduce|Desc1_2 @@IntroduceText1_2\u241F66bc37badaa677ab23b5c35aaf8d122d5f574b0d\u241F7347310119071197749:We will just change content, images, colors scheme of page according targets of your new web site and your wishes."], [":Introduce|Desc1_2 @@IntroduceText1_2\u241F66bc37badaa677ab23b5c35aaf8d122d5f574b0d\u241F7347310119071197749:We will just change content, images, colors scheme of page according targets of your new web site and your wishes."])));
}
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Desc1_3
     * @meaning Introduce
     */ 
    var MSG_EXTERNAL_IntroduceText1_3$$SRC_APP_COMPONENTS_INTRODUCE_INTRODUCE_COMPONENT_TS_9 = goog.getMsg("Our template allows to use multi languages, so you can share your products around world.");
    I18N_8 = MSG_EXTERNAL_IntroduceText1_3$$SRC_APP_COMPONENTS_INTRODUCE_INTRODUCE_COMPONENT_TS_9;
}
else {
    I18N_8 = $localize(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Introduce|Desc1_3 @@IntroduceText1_3\u241F1742823259eb4809520c1aa0a03e8b7a2beb966b\u241F9157584962912044136:Our template allows to use multi languages, so you can share your products around world."], [":Introduce|Desc1_3 @@IntroduceText1_3\u241F1742823259eb4809520c1aa0a03e8b7a2beb966b\u241F9157584962912044136:Our template allows to use multi languages, so you can share your products around world."])));
}
var I18N_10;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Sub Title 2nd
     * @meaning Introduce
     */ 
    var MSG_EXTERNAL_IntroduceSubTitle2$$SRC_APP_COMPONENTS_INTRODUCE_INTRODUCE_COMPONENT_TS_11 = goog.getMsg("Modern Design");
    I18N_10 = MSG_EXTERNAL_IntroduceSubTitle2$$SRC_APP_COMPONENTS_INTRODUCE_INTRODUCE_COMPONENT_TS_11;
}
else {
    I18N_10 = $localize(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Introduce|Sub Title 2nd @@IntroduceSubTitle2\u241F1cb38a6d45cfa1fb1dabaccd5ab1d2240b9f0839\u241F145886621888695796:Modern Design"], [":Introduce|Sub Title 2nd @@IntroduceSubTitle2\u241F1cb38a6d45cfa1fb1dabaccd5ab1d2240b9f0839\u241F145886621888695796:Modern Design"])));
}
var I18N_12;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Desc2_1
     * @meaning Introduce
     */ 
    var MSG_EXTERNAL_IntroduceText2_1$$SRC_APP_COMPONENTS_INTRODUCE_INTRODUCE_COMPONENT_TS_13 = goog.getMsg("We know how important to have web site which meets last modern requirements, so we suggest page was implemented by most popular technical stack.");
    I18N_12 = MSG_EXTERNAL_IntroduceText2_1$$SRC_APP_COMPONENTS_INTRODUCE_INTRODUCE_COMPONENT_TS_13;
}
else {
    I18N_12 = $localize(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Introduce|Desc2_1 @@IntroduceText2_1\u241Fa85f96db20948051f08c9aa7beaddeaf36315f31\u241F6187467334839798700:We know how important to have web site which meets last modern requirements, so we suggest page was implemented by most popular technical stack."], [":Introduce|Desc2_1 @@IntroduceText2_1\u241Fa85f96db20948051f08c9aa7beaddeaf36315f31\u241F6187467334839798700:We know how important to have web site which meets last modern requirements, so we suggest page was implemented by most popular technical stack."])));
}
var I18N_14;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Desc2_2
     * @meaning Introduce
     */ 
    var MSG_EXTERNAL_IntroduceText2_2$$SRC_APP_COMPONENTS_INTRODUCE_INTRODUCE_COMPONENT_TS_15 = goog.getMsg("Landing structure allows to focus on your product or service, which is suggested by you.");
    I18N_14 = MSG_EXTERNAL_IntroduceText2_2$$SRC_APP_COMPONENTS_INTRODUCE_INTRODUCE_COMPONENT_TS_15;
}
else {
    I18N_14 = $localize(templateObject_8 || (templateObject_8 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Introduce|Desc2_2 @@IntroduceText2_2\u241Fbb7d5dbff8f3b8c7504e37898289e378d6179e22\u241F1045171609191966477:Landing structure allows to focus on your product or service, which is suggested by you."], [":Introduce|Desc2_2 @@IntroduceText2_2\u241Fbb7d5dbff8f3b8c7504e37898289e378d6179e22\u241F1045171609191966477:Landing structure allows to focus on your product or service, which is suggested by you."])));
}
var I18N_16;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Desc2_3
     * @meaning Introduce
     */ 
    var MSG_EXTERNAL_IntroduceText2_3$$SRC_APP_COMPONENTS_INTRODUCE_INTRODUCE_COMPONENT_TS_17 = goog.getMsg("It is easy-peasy supporting, it looks modern, it is really cheap to you as a customer.");
    I18N_16 = MSG_EXTERNAL_IntroduceText2_3$$SRC_APP_COMPONENTS_INTRODUCE_INTRODUCE_COMPONENT_TS_17;
}
else {
    I18N_16 = $localize(templateObject_9 || (templateObject_9 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Introduce|Desc2_3 @@IntroduceText2_3\u241Ffa2ea476169a71a5e0d11a7d92f2e7c4608ff922\u241F3453410465756449925:It is easy-peasy supporting, it looks modern, it is really cheap to you as a customer."], [":Introduce|Desc2_3 @@IntroduceText2_3\u241Ffa2ea476169a71a5e0d11a7d92f2e7c4608ff922\u241F3453410465756449925:It is easy-peasy supporting, it looks modern, it is really cheap to you as a customer."])));
}
var I18N_18;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Sub Title 3rd
     * @meaning Introduce
     */ 
    var MSG_EXTERNAL_IntroduceSubTitle3$$SRC_APP_COMPONENTS_INTRODUCE_INTRODUCE_COMPONENT_TS_19 = goog.getMsg("Improve image");
    I18N_18 = MSG_EXTERNAL_IntroduceSubTitle3$$SRC_APP_COMPONENTS_INTRODUCE_INTRODUCE_COMPONENT_TS_19;
}
else {
    I18N_18 = $localize(templateObject_10 || (templateObject_10 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Introduce|Sub Title 3rd @@IntroduceSubTitle3\u241Fcfd2c2ce359b0afa0049a82d0ab98b12909a1695\u241F7021181433732851787:Improve image"], [":Introduce|Sub Title 3rd @@IntroduceSubTitle3\u241Fcfd2c2ce359b0afa0049a82d0ab98b12909a1695\u241F7021181433732851787:Improve image"])));
}
var I18N_20;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Desc3_1
     * @meaning Introduce
     */ 
    var MSG_EXTERNAL_IntroduceText3_1$$SRC_APP_COMPONENTS_INTRODUCE_INTRODUCE_COMPONENT_TS_21 = goog.getMsg("When you are choosing which of one of companies will provide you some service, let say truth, you will select company which share information about provided services by her, about herself.");
    I18N_20 = MSG_EXTERNAL_IntroduceText3_1$$SRC_APP_COMPONENTS_INTRODUCE_INTRODUCE_COMPONENT_TS_21;
}
else {
    I18N_20 = $localize(templateObject_11 || (templateObject_11 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Introduce|Desc3_1 @@IntroduceText3_1\u241Fe291bb96ef834c05a628360dadc8964252ee47f3\u241F8156991718508072448:When you are choosing which of one of companies will provide you some service, let say truth, you will select company which share information about provided services by her, about herself."], [":Introduce|Desc3_1 @@IntroduceText3_1\u241Fe291bb96ef834c05a628360dadc8964252ee47f3\u241F8156991718508072448:When you are choosing which of one of companies will provide you some service, let say truth, you will select company which share information about provided services by her, about herself."])));
}
var I18N_22;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Desc3_2
     * @meaning Introduce
     */ 
    var MSG_EXTERNAL_IntroduceText3_2$$SRC_APP_COMPONENTS_INTRODUCE_INTRODUCE_COMPONENT_TS_23 = goog.getMsg("Right?");
    I18N_22 = MSG_EXTERNAL_IntroduceText3_2$$SRC_APP_COMPONENTS_INTRODUCE_INTRODUCE_COMPONENT_TS_23;
}
else {
    I18N_22 = $localize(templateObject_12 || (templateObject_12 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Introduce|Desc3_2 @@IntroduceText3_2\u241F1ccb1e1aa07980e68ceebb06900139dada37235d\u241F7532759059459078832:Right?"], [":Introduce|Desc3_2 @@IntroduceText3_2\u241F1ccb1e1aa07980e68ceebb06900139dada37235d\u241F7532759059459078832:Right?"])));
}
var I18N_24;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Desc3_3
     * @meaning Introduce
     */ 
    var MSG_EXTERNAL_IntroduceText3_3$$SRC_APP_COMPONENTS_INTRODUCE_INTRODUCE_COMPONENT_TS_25 = goog.getMsg("We make sure so.");
    I18N_24 = MSG_EXTERNAL_IntroduceText3_3$$SRC_APP_COMPONENTS_INTRODUCE_INTRODUCE_COMPONENT_TS_25;
}
else {
    I18N_24 = $localize(templateObject_13 || (templateObject_13 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Introduce|Desc3_3 @@IntroduceText3_3\u241Fbcd39a93cdedb0d64f4e34fd729d77f3a2760300\u241F5001636352960211365:We make sure so."], [":Introduce|Desc3_3 @@IntroduceText3_3\u241Fbcd39a93cdedb0d64f4e34fd729d77f3a2760300\u241F5001636352960211365:We make sure so."])));
}
var I18N_26;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Desc3_4
     * @meaning Introduce
     */ 
    var MSG_EXTERNAL_IntroduceText3_4$$SRC_APP_COMPONENTS_INTRODUCE_INTRODUCE_COMPONENT_TS_27 = goog.getMsg("Cause it sounds like company with a strong experience, which spent time and resources for her brand, her face.");
    I18N_26 = MSG_EXTERNAL_IntroduceText3_4$$SRC_APP_COMPONENTS_INTRODUCE_INTRODUCE_COMPONENT_TS_27;
}
else {
    I18N_26 = $localize(templateObject_14 || (templateObject_14 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Introduce|Desc3_4 @@IntroduceText3_4\u241Ff6e64651bdf7cd990c020395da3d819f0778fd8e\u241F2588858840832036267:Cause it sounds like company with a strong experience, which spent time and resources for her brand, her face."], [":Introduce|Desc3_4 @@IntroduceText3_4\u241Ff6e64651bdf7cd990c020395da3d819f0778fd8e\u241F2588858840832036267:Cause it sounds like company with a strong experience, which spent time and resources for her brand, her face."])));
}
var IntroduceComponent = /** @class */ (function () {
    function IntroduceComponent(iconRegistry, sanitizer) {
        iconRegistry
            .addSvgIcon('watch_later', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/u_wat.svg'))
            .addSvgIcon('insights', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/u_ins.svg'))
            .addSvgIcon('business', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/u_bus.svg'));
    }
    IntroduceComponent.prototype.ngOnInit = function () {
    };
    IntroduceComponent.ɵfac = function IntroduceComponent_Factory(t) { return new (t || IntroduceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"])); };
    IntroduceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IntroduceComponent, selectors: [["app-introduce"]], decls: 46, vars: 0, consts: [["id", "introduceId", 1, "white", "intrd-container"], [1, "intrd-container-intrl"], [1, "title"], [1, "grid-wrapper"], [1, "card", "zone"], [1, "card-title"], ["svgIcon", "watch_later", "aria-hidden", "false", "aria-label", "Example thumbs up SVG icon", 1, "app-icon", "orange"], [1, "text"], ["svgIcon", "insights", "aria-hidden", "false", "aria-label", "Example thumbs up SVG icon", 1, "app-icon", "blue"], ["svgIcon", "business", "aria-hidden", "false", "aria-label", "Example thumbs up SVG icon", 1, "app-icon", "red"]], template: function IntroduceComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](4, I18N_0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "mat-icon", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](10, I18N_2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](13, I18N_4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](15, I18N_6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](17, I18N_8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "mat-icon", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](23, I18N_10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](26, I18N_12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](28, I18N_14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](30, I18N_16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "mat-icon", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](36, I18N_18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](39, I18N_20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](41, I18N_22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](43, I18N_24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](45, I18N_26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"]], styles: [".white[_ngcontent-%COMP%] {\n  background: white;\n}\n\n.intrd-container[_ngcontent-%COMP%] {\n  padding: 2% 5% 5% 5%;\n}\n\n.intrd-container[_ngcontent-%COMP%]   .intrd-container-intrl[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  padding: 20px 0;\n}\n\n.intrd-container[_ngcontent-%COMP%]   .intrd-container-intrl[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: bold;\n}\n\n.intrd-container[_ngcontent-%COMP%]   .intrd-container-intrl[_ngcontent-%COMP%]   .grid-wrapper[_ngcontent-%COMP%] {\n  align-content: center;\n  display: grid;\n  grid-template-columns: repeat(3, minmax(250px, 1fr));\n  grid-gap: 10px;\n}\n\n.intrd-container[_ngcontent-%COMP%]   .intrd-container-intrl[_ngcontent-%COMP%]   .grid-wrapper[_ngcontent-%COMP%]   .zone[_ngcontent-%COMP%] {\n  color: #FFF;\n  font-size: 2em;\n  border-radius: 4px;\n  transition: all 0.3s linear;\n}\n\n.intrd-container[_ngcontent-%COMP%]   .intrd-container-intrl[_ngcontent-%COMP%]   .grid-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: #FFF;\n  margin: 20px;\n}\n\n.intrd-container[_ngcontent-%COMP%]   .intrd-container-intrl[_ngcontent-%COMP%]   .grid-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0 20px;\n}\n\n.intrd-container[_ngcontent-%COMP%]   .intrd-container-intrl[_ngcontent-%COMP%]   .grid-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 70px;\n  font-size: 60px;\n}\n\n.intrd-container[_ngcontent-%COMP%]   .intrd-container-intrl[_ngcontent-%COMP%]   .grid-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]   .orange[_ngcontent-%COMP%] {\n  fill: #ff9800;\n}\n\n.intrd-container[_ngcontent-%COMP%]   .intrd-container-intrl[_ngcontent-%COMP%]   .grid-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]   .blue[_ngcontent-%COMP%] {\n  fill: #00bcd4;\n}\n\n.intrd-container[_ngcontent-%COMP%]   .intrd-container-intrl[_ngcontent-%COMP%]   .grid-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%] {\n  fill: #F44336;\n}\n\n.intrd-container[_ngcontent-%COMP%]   .intrd-container-intrl[_ngcontent-%COMP%]   .grid-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  padding: 0 20px 20px;\n}\n\n.intrd-container[_ngcontent-%COMP%]   .intrd-container-intrl[_ngcontent-%COMP%]   .grid-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #1a1818;\n}\n\n.intrd-container[_ngcontent-%COMP%]   .intrd-container-intrl[_ngcontent-%COMP%]   .grid-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #1a1818;\n}\n\n@media (max-width: 800px) {\n  .intrd-container[_ngcontent-%COMP%]   .intrd-container-intrl[_ngcontent-%COMP%]   .grid-wrapper[_ngcontent-%COMP%] {\n    align-content: center;\n    display: grid;\n    grid-template-columns: repeat(1, minmax(350px, 1fr));\n    grid-gap: 10px;\n  }\n}\n\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .intrd-container[_ngcontent-%COMP%]   .intrd-container-intrl[_ngcontent-%COMP%] {\n    \n    display: grid;\n    height: 100%;\n    -ms-grid-rows: 1fr 1fr;\n    -ms-grid-columns: 1fr 1fr;\n    grid-template: \"a   b\" 1fr \"c   d\" 1fr/1fr 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnRyb2R1Y2UvQzpcXFdvcmtzcGFjZVxccHJvamVjdHNcXHdvcmxkLWVudGVydGFpbm1lbnRcXGVudGVydGFpbm1lbnQtdWkvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGludHJvZHVjZVxcaW50cm9kdWNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2ludHJvZHVjZS9pbnRyb2R1Y2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7QUNDRjs7QURFSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNBTjs7QURFTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0FSOztBREdJO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0RBQUE7RUFDQSxjQUFBO0FDRE47O0FER007RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUNEUjs7QURJTTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtBQ0ZSOztBRElRO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FDRlY7O0FESVU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNGWjs7QURLVTtFQUNFLGFBQUE7QUNIWjs7QURLVTtFQUNFLGFBQUE7QUNIWjs7QURLVTtFQUNFLGFBQUE7QUNIWjs7QURNUTtFQUNFLG9CQUFBO0FDSlY7O0FETVU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0paOztBRFFRO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FDTlY7O0FEVUk7RUFDRTtJQUNFLHFCQUFBO0lBQ0EsYUFBQTtJQUNBLG9EQUFBO0lBQ0EsY0FBQTtFQ1JOO0FBQ0Y7O0FEV0k7RUF4RUY7SUF5RUksNkJBQUE7SUFFQSxhQUFBO0lBQ0EsWUFBQTtJQUNBLHNCQUFBO0lBQ0EseUJBQUE7SUFDQSw4Q0FBQTtFQ1JKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ludHJvZHVjZS9pbnRyb2R1Y2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2hpdGUge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4uaW50cmQtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAyJSA1JSA1JSA1JTtcclxuXHJcbiAgLmludHJkLWNvbnRhaW5lci1pbnRybCB7XHJcbiAgICAudGl0bGUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcblxyXG4gICAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuZ3JpZC13cmFwcGVyIHtcclxuICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMjUwcHgsIDFmcikpO1xyXG4gICAgICBncmlkLWdhcDogMTBweDtcclxuXHJcbiAgICAgIC56b25lIHtcclxuICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2FyZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgICAgICBtYXJnaW46IDIwcHg7XHJcblxyXG4gICAgICAgIC5jYXJkLXRpdGxlIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuXHJcbiAgICAgICAgICAuYXBwLWljb24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm9yYW5nZSB7XHJcbiAgICAgICAgICAgIGZpbGw6ICNmZjk4MDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYmx1ZSB7XHJcbiAgICAgICAgICAgIGZpbGw6ICMwMGJjZDQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucmVkIHtcclxuICAgICAgICAgICAgZmlsbDogI0Y0NDMzNjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgcGFkZGluZzogMCAyMHB4IDIwcHg7XHJcblxyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgY29sb3I6IHJnYigyNiwgMjQsIDI0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgY29sb3I6IHJnYigyNiwgMjQsIDI0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIEBtZWRpYShtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAgIC5ncmlkLXdyYXBwZXIge1xyXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIG1pbm1heCgzNTBweCwgMWZyKSk7XHJcbiAgICAgICAgZ3JpZC1nYXA6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xyXG4gICAgICAvKiBJRTEwKyBDU1Mgc3R5bGVzIGdvIGhlcmUgKi9cclxuICAgICAgZGlzcGxheTogLW1zLWdyaWQ7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgLW1zLWdyaWQtcm93czogMWZyIDFmcjtcclxuICAgICAgLW1zLWdyaWQtY29sdW1uczogMWZyIDFmcjtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZTogXCJhICAgYlwiIDFmciBcImMgICBkXCIgMWZyIC8gMWZyICAxZnI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iLCIud2hpdGUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmludHJkLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDIlIDUlIDUlIDUlO1xufVxuLmludHJkLWNvbnRhaW5lciAuaW50cmQtY29udGFpbmVyLWludHJsIC50aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cbi5pbnRyZC1jb250YWluZXIgLmludHJkLWNvbnRhaW5lci1pbnRybCAudGl0bGUgaDEge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmludHJkLWNvbnRhaW5lciAuaW50cmQtY29udGFpbmVyLWludHJsIC5ncmlkLXdyYXBwZXIge1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgyNTBweCwgMWZyKSk7XG4gIGdyaWQtZ2FwOiAxMHB4O1xufVxuLmludHJkLWNvbnRhaW5lciAuaW50cmQtY29udGFpbmVyLWludHJsIC5ncmlkLXdyYXBwZXIgLnpvbmUge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1zaXplOiAyZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xufVxuLmludHJkLWNvbnRhaW5lciAuaW50cmQtY29udGFpbmVyLWludHJsIC5ncmlkLXdyYXBwZXIgLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBtYXJnaW46IDIwcHg7XG59XG4uaW50cmQtY29udGFpbmVyIC5pbnRyZC1jb250YWluZXItaW50cmwgLmdyaWQtd3JhcHBlciAuY2FyZCAuY2FyZC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuLmludHJkLWNvbnRhaW5lciAuaW50cmQtY29udGFpbmVyLWludHJsIC5ncmlkLXdyYXBwZXIgLmNhcmQgLmNhcmQtdGl0bGUgLmFwcC1pY29uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzBweDtcbiAgZm9udC1zaXplOiA2MHB4O1xufVxuLmludHJkLWNvbnRhaW5lciAuaW50cmQtY29udGFpbmVyLWludHJsIC5ncmlkLXdyYXBwZXIgLmNhcmQgLmNhcmQtdGl0bGUgLm9yYW5nZSB7XG4gIGZpbGw6ICNmZjk4MDA7XG59XG4uaW50cmQtY29udGFpbmVyIC5pbnRyZC1jb250YWluZXItaW50cmwgLmdyaWQtd3JhcHBlciAuY2FyZCAuY2FyZC10aXRsZSAuYmx1ZSB7XG4gIGZpbGw6ICMwMGJjZDQ7XG59XG4uaW50cmQtY29udGFpbmVyIC5pbnRyZC1jb250YWluZXItaW50cmwgLmdyaWQtd3JhcHBlciAuY2FyZCAuY2FyZC10aXRsZSAucmVkIHtcbiAgZmlsbDogI0Y0NDMzNjtcbn1cbi5pbnRyZC1jb250YWluZXIgLmludHJkLWNvbnRhaW5lci1pbnRybCAuZ3JpZC13cmFwcGVyIC5jYXJkIC50ZXh0IHtcbiAgcGFkZGluZzogMCAyMHB4IDIwcHg7XG59XG4uaW50cmQtY29udGFpbmVyIC5pbnRyZC1jb250YWluZXItaW50cmwgLmdyaWQtd3JhcHBlciAuY2FyZCAudGV4dCBwIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogIzFhMTgxODtcbn1cbi5pbnRyZC1jb250YWluZXIgLmludHJkLWNvbnRhaW5lci1pbnRybCAuZ3JpZC13cmFwcGVyIC5jYXJkIGgxIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiAjMWExODE4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5pbnRyZC1jb250YWluZXIgLmludHJkLWNvbnRhaW5lci1pbnRybCAuZ3JpZC13cmFwcGVyIHtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCBtaW5tYXgoMzUwcHgsIDFmcikpO1xuICAgIGdyaWQtZ2FwOiAxMHB4O1xuICB9XG59XG5AbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuICAuaW50cmQtY29udGFpbmVyIC5pbnRyZC1jb250YWluZXItaW50cmwge1xuICAgIC8qIElFMTArIENTUyBzdHlsZXMgZ28gaGVyZSAqL1xuICAgIGRpc3BsYXk6IC1tcy1ncmlkO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIC1tcy1ncmlkLXJvd3M6IDFmciAxZnI7XG4gICAgLW1zLWdyaWQtY29sdW1uczogMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlOiBcImEgICBiXCIgMWZyIFwiYyAgIGRcIiAxZnIvMWZyIDFmcjtcbiAgfVxufSJdfQ== */"] });
    return IntroduceComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IntroduceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-introduce',
                templateUrl: './introduce.component.html',
                styleUrls: ['./introduce.component.scss']
            }]
    }], function () { return [{ type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }]; }, null); })();
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14;


/***/ }),

/***/ "./src/app/components/lang-menu/lang-menu.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/lang-menu/lang-menu.component.ts ***!
  \*************************************************************/
/*! exports provided: LangMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LangMenuComponent", function() { return LangMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/icon.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/menu.js");






var LangMenuComponent = /** @class */ (function () {
    function LangMenuComponent(iconRegistry, sanitizer) {
        this.changeLanguage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        iconRegistry
            .addSvgIcon('En', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/l_e.svg'))
            .addSvgIcon('Ru', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/l_r.svg'));
    }
    LangMenuComponent.prototype.ngOnInit = function () {
    };
    LangMenuComponent.prototype.onChangeLanguage = function (value) {
        this.changeLanguage.emit(value);
    };
    LangMenuComponent.ɵfac = function LangMenuComponent_Factory(t) { return new (t || LangMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
    LangMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LangMenuComponent, selectors: [["app-lang-menu"]], inputs: { config: "config" }, outputs: { changeLanguage: "changeLanguage" }, decls: 14, vars: 3, consts: [["mat-button", "", 3, "matMenuTriggerFor"], [1, "icon-block"], ["aria-hidden", "false", "aria-label", "Example thumbs up SVG icon", 1, "app-icon", "blue", 3, "svgIcon"], [1, "custom-lang-menu"], ["localMenu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["svgIcon", "En", "aria-hidden", "false", "aria-label", "Example thumbs up SVG icon", 1, "app-icon", "blue"], ["svgIcon", "Ru", "aria-hidden", "false", "aria-label", "Example thumbs up SVG icon", 1, "app-icon", "blue"]], template: function LangMenuComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-icon", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", 3, 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LangMenuComponent_Template_button_click_6_listener() { return ctx.onChangeLanguage("En"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-icon", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "En ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LangMenuComponent_Template_button_click_10_listener() { return ctx.onChangeLanguage("Ru"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-icon", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Ru ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("svgIcon", ctx.config.local);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.config.local, " ");
        } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuItem"]], styles: [".mat-menu-panel.custom-lang-menu {\n  min-width: 60px;\n  max-width: 100px;\n}\n\n.icon-block {\n  display: inline;\n  width: 50%;\n  text-align: center;\n}\n\n.icon-block .app-icon {\n  width: 20px;\n  height: 20px;\n  font-size: 30px;\n}\n\n.icon-block .blue {\n  fill: #3f51b5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYW5nLW1lbnUvQzpcXFdvcmtzcGFjZVxccHJvamVjdHNcXHdvcmxkLWVudGVydGFpbm1lbnRcXGVudGVydGFpbm1lbnQtdWkvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGxhbmctbWVudVxcbGFuZy1tZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xhbmctbWVudS9sYW5nLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVFO0VBQ0UsYUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYW5nLW1lbnUvbGFuZy1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1tZW51LXBhbmVsLmN1c3RvbS1sYW5nLW1lbnV7XHJcbiAgbWluLXdpZHRoOiA2MHB4O1xyXG4gIG1heC13aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi5pY29uLWJsb2NrIHtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgd2lkdGg6IDUwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIC5hcHAtaWNvbiB7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICB9XHJcblxyXG4gIC5ibHVlIHtcclxuICAgIGZpbGw6ICMzZjUxYjU7XHJcbiAgfVxyXG59XHJcbiIsIi5tYXQtbWVudS1wYW5lbC5jdXN0b20tbGFuZy1tZW51IHtcbiAgbWluLXdpZHRoOiA2MHB4O1xuICBtYXgtd2lkdGg6IDEwMHB4O1xufVxuXG4uaWNvbi1ibG9jayB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgd2lkdGg6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmljb24tYmxvY2sgLmFwcC1pY29uIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuLmljb24tYmxvY2sgLmJsdWUge1xuICBmaWxsOiAjM2Y1MWI1O1xufSJdfQ== */"], encapsulation: 2 });
    return LangMenuComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LangMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-lang-menu',
                templateUrl: './lang-menu.component.html',
                styleUrls: ['./lang-menu.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }]; }, { config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], changeLanguage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/social/social.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/social/social.component.ts ***!
  \*******************************************************/
/*! exports provided: SocialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialComponent", function() { return SocialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/icon.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");





var SocialComponent = /** @class */ (function () {
    function SocialComponent(iconRegistry, sanitizer) {
        iconRegistry
            .addSvgIcon('facebook', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/s_f.svg'))
            .addSvgIcon('instagram', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/s_i.svg'))
            .addSvgIcon('telegram', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/s_t.svg'))
            .addSvgIcon('youtube', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/s_yt.svg'))
            .addSvgIcon('vk', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/vk.svg'))
            .addSvgIcon('linkedin', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/s_l.svg'));
    }
    SocialComponent.prototype.ngOnInit = function () {
    };
    SocialComponent.ɵfac = function SocialComponent_Factory(t) { return new (t || SocialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
    SocialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SocialComponent, selectors: [["app-social"]], decls: 19, vars: 0, consts: [[1, "social-panel"], ["href", "#", "mat-button", ""], [1, "icon-block"], ["svgIcon", "facebook", "aria-hidden", "false", "aria-label", "Example thumbs up SVG icon", 1, "app-icon", "white"], ["svgIcon", "instagram", "aria-hidden", "false", "aria-label", "Example thumbs up SVG icon", 1, "app-icon", "white"], ["svgIcon", "telegram", "aria-hidden", "false", "aria-label", "Example thumbs up SVG icon", 1, "app-icon", "white"], ["svgIcon", "youtube", "aria-hidden", "false", "aria-label", "Example thumbs up SVG icon", 1, "app-icon", "white"], ["svgIcon", "vk", "aria-hidden", "false", "aria-label", "Example thumbs up SVG icon", 1, "app-icon", "white"], ["svgIcon", "linkedin", "aria-hidden", "false", "aria-label", "Example thumbs up SVG icon", 1, "app-icon", "white"]], template: function SocialComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-icon", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-icon", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-icon", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mat-icon", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "mat-icon", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]], styles: [".social-panel[_ngcontent-%COMP%] {\n  background-color: #202539;\n  padding-top: 1rem;\n}\n.social-panel[_ngcontent-%COMP%]   .icon-block[_ngcontent-%COMP%] {\n  display: inline;\n  width: 50%;\n  text-align: center;\n}\n.social-panel[_ngcontent-%COMP%]   .icon-block[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  font-size: 60px;\n}\n.social-panel[_ngcontent-%COMP%]   .icon-block[_ngcontent-%COMP%]   .white[_ngcontent-%COMP%] {\n  fill: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zb2NpYWwvQzpcXFdvcmtzcGFjZVxccHJvamVjdHNcXHdvcmxkLWVudGVydGFpbm1lbnRcXGVudGVydGFpbm1lbnQtdWkvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNvY2lhbFxcc29jaWFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NvY2lhbC9zb2NpYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FDQ0Y7QURDRTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNDSjtBRENJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQ047QURFSTtFQUNFLFdBQUE7QUNBTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc29jaWFsL3NvY2lhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zb2NpYWwtcGFuZWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDI1Mzk7XHJcbiAgcGFkZGluZy10b3A6IDFyZW07XHJcblxyXG4gIC5pY29uLWJsb2NrIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgLmFwcC1pY29uIHtcclxuICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC53aGl0ZSB7XHJcbiAgICAgIGZpbGw6IHdoaXRlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuc29jaWFsLXBhbmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjUzOTtcbiAgcGFkZGluZy10b3A6IDFyZW07XG59XG4uc29jaWFsLXBhbmVsIC5pY29uLWJsb2NrIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc29jaWFsLXBhbmVsIC5pY29uLWJsb2NrIC5hcHAtaWNvbiB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGZvbnQtc2l6ZTogNjBweDtcbn1cbi5zb2NpYWwtcGFuZWwgLmljb24tYmxvY2sgLndoaXRlIHtcbiAgZmlsbDogd2hpdGU7XG59Il19 */"] });
    return SocialComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-social',
                templateUrl: './social.component.html',
                styleUrls: ['./social.component.scss']
            }]
    }], function () { return [{ type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/containers/main-layout/main-layout.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/containers/main-layout/main-layout.component.ts ***!
  \*****************************************************************/
/*! exports provided: MainLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function() { return MainLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/toolbar.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var src_app_store_selector_config_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/selector/config.selector */ "./src/app/store/selector/config.selector.ts");
/* harmony import */ var src_app_store_selector_isoCode_selector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/store/selector/isoCode.selector */ "./src/app/store/selector/isoCode.selector.ts");
/* harmony import */ var src_app_store_action_conf_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/store/action/conf.actions */ "./src/app/store/action/conf.actions.ts");
/* harmony import */ var src_app_store_action_isoCode_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/store/action/isoCode.actions */ "./src/app/store/action/isoCode.actions.ts");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm5/scrolling.js");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/__ivy_ngcc__/fesm5/nicky-lenaers-ngx-scroll-to.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/icon.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/sidenav.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/flex.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/list.js");
/* harmony import */ var _components_lang_menu_lang_menu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/lang-menu/lang-menu.component */ "./src/app/components/lang-menu/lang-menu.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_introduce_introduce_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/introduce/introduce.component */ "./src/app/components/introduce/introduce.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/extended.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");


























var _c0 = ["home"];
var _c1 = ["toolBara"];
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Home
     * @meaning Left Menu
     */ 
    var MSG_EXTERNAL_leftMenuHome$$SRC_APP_CONTAINERS_MAIN_LAYOUT_MAIN_LAYOUT_COMPONENT_TS_3 = goog.getMsg("Home");
    I18N_2 = MSG_EXTERNAL_leftMenuHome$$SRC_APP_CONTAINERS_MAIN_LAYOUT_MAIN_LAYOUT_COMPONENT_TS_3;
}
else {
    I18N_2 = $localize(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Left Menu|Home @@leftMenuHome\u241Fae8a137c2c39a5c265e9a9c7b4a3576e9a5216e4\u241F9084404070380348770:Home"], [":Left Menu|Home @@leftMenuHome\u241Fae8a137c2c39a5c265e9a9c7b4a3576e9a5216e4\u241F9084404070380348770:Home"])));
}
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Benefits
     * @meaning Left Menu
     */ 
    var MSG_EXTERNAL_leftMenuBenefits$$SRC_APP_CONTAINERS_MAIN_LAYOUT_MAIN_LAYOUT_COMPONENT_TS_5 = goog.getMsg("Benefits of using");
    I18N_4 = MSG_EXTERNAL_leftMenuBenefits$$SRC_APP_CONTAINERS_MAIN_LAYOUT_MAIN_LAYOUT_COMPONENT_TS_5;
}
else {
    I18N_4 = $localize(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Left Menu|Benefits @@leftMenuBenefits\u241Fc842692de77a35846275bc17c4a65ba2ccf93926\u241F4871628441800779050:Benefits of using"], [":Left Menu|Benefits @@leftMenuBenefits\u241Fc842692de77a35846275bc17c4a65ba2ccf93926\u241F4871628441800779050:Benefits of using"])));
}
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc About Template
     * @meaning Left Menu
     */ 
    var MSG_EXTERNAL_leftMenuProduct$$SRC_APP_CONTAINERS_MAIN_LAYOUT_MAIN_LAYOUT_COMPONENT_TS_7 = goog.getMsg("About Template");
    I18N_6 = MSG_EXTERNAL_leftMenuProduct$$SRC_APP_CONTAINERS_MAIN_LAYOUT_MAIN_LAYOUT_COMPONENT_TS_7;
}
else {
    I18N_6 = $localize(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Left Menu|About Template @@leftMenuProduct\u241Fbaf90ad30b900f8d8e9b8a8315afdb032f6f7547\u241F3686044853120757608:About Template"], [":Left Menu|About Template @@leftMenuProduct\u241Fbaf90ad30b900f8d8e9b8a8315afdb032f6f7547\u241F3686044853120757608:About Template"])));
}
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc About Us
     * @meaning Left Menu
     */ 
    var MSG_EXTERNAL_leftMenuAboutUs$$SRC_APP_CONTAINERS_MAIN_LAYOUT_MAIN_LAYOUT_COMPONENT_TS_9 = goog.getMsg("About Us");
    I18N_8 = MSG_EXTERNAL_leftMenuAboutUs$$SRC_APP_CONTAINERS_MAIN_LAYOUT_MAIN_LAYOUT_COMPONENT_TS_9;
}
else {
    I18N_8 = $localize(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Left Menu|About Us @@leftMenuAboutUs\u241F0b1bd727693fcbd0b1e54930927940c695a1b732\u241F5691635569067931467:About Us"], [":Left Menu|About Us @@leftMenuAboutUs\u241F0b1bd727693fcbd0b1e54930927940c695a1b732\u241F5691635569067931467:About Us"])));
}
var I18N_10;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Contact
     * @meaning Left Menu
     */ 
    var MSG_EXTERNAL_leftMenuContact$$SRC_APP_CONTAINERS_MAIN_LAYOUT_MAIN_LAYOUT_COMPONENT_TS_11 = goog.getMsg("Contacts");
    I18N_10 = MSG_EXTERNAL_leftMenuContact$$SRC_APP_CONTAINERS_MAIN_LAYOUT_MAIN_LAYOUT_COMPONENT_TS_11;
}
else {
    I18N_10 = $localize(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Left Menu|Contact @@leftMenuContact\u241F3505eed1624d0792767ca07170997e2dfac8ff36\u241F6110645915164829087:Contacts"], [":Left Menu|Contact @@leftMenuContact\u241F3505eed1624d0792767ca07170997e2dfac8ff36\u241F6110645915164829087:Contacts"])));
}
var I18N_12;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Home
     * @meaning Top Menu
     */ 
    var MSG_EXTERNAL_topMenuHome$$SRC_APP_CONTAINERS_MAIN_LAYOUT_MAIN_LAYOUT_COMPONENT_TS_13 = goog.getMsg("Home");
    I18N_12 = MSG_EXTERNAL_topMenuHome$$SRC_APP_CONTAINERS_MAIN_LAYOUT_MAIN_LAYOUT_COMPONENT_TS_13;
}
else {
    I18N_12 = $localize(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Top Menu|Home @@topMenuHome\u241F11700ae0c64550c0ff25f9bbaef357a89961590d\u241F6643516854685592568:Home"], [":Top Menu|Home @@topMenuHome\u241F11700ae0c64550c0ff25f9bbaef357a89961590d\u241F6643516854685592568:Home"])));
}
var I18N_14;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Benefits
     * @meaning Top Menu
     */ 
    var MSG_EXTERNAL_topMenuBenefits$$SRC_APP_CONTAINERS_MAIN_LAYOUT_MAIN_LAYOUT_COMPONENT_TS_15 = goog.getMsg("Benefits of using");
    I18N_14 = MSG_EXTERNAL_topMenuBenefits$$SRC_APP_CONTAINERS_MAIN_LAYOUT_MAIN_LAYOUT_COMPONENT_TS_15;
}
else {
    I18N_14 = $localize(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Top Menu|Benefits @@topMenuBenefits\u241Fbfef2b20f7d17f2922cefa4e62c9d95604733b91\u241F3388384259740608759:Benefits of using"], [":Top Menu|Benefits @@topMenuBenefits\u241Fbfef2b20f7d17f2922cefa4e62c9d95604733b91\u241F3388384259740608759:Benefits of using"])));
}
var I18N_16;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc About Template
     * @meaning Top Menu
     */ 
    var MSG_EXTERNAL_topMenuProduct$$SRC_APP_CONTAINERS_MAIN_LAYOUT_MAIN_LAYOUT_COMPONENT_TS_17 = goog.getMsg("About Template");
    I18N_16 = MSG_EXTERNAL_topMenuProduct$$SRC_APP_CONTAINERS_MAIN_LAYOUT_MAIN_LAYOUT_COMPONENT_TS_17;
}
else {
    I18N_16 = $localize(templateObject_8 || (templateObject_8 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Top Menu|About Template @@topMenuProduct\u241Fa7830e74fc146f04623c7e8c71935b8727b3f197\u241F4400948312965752942:About Template"], [":Top Menu|About Template @@topMenuProduct\u241Fa7830e74fc146f04623c7e8c71935b8727b3f197\u241F4400948312965752942:About Template"])));
}
var I18N_18;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc About Us
     * @meaning Top Menu
     */ 
    var MSG_EXTERNAL_topMenuAboutUs$$SRC_APP_CONTAINERS_MAIN_LAYOUT_MAIN_LAYOUT_COMPONENT_TS_19 = goog.getMsg("About Us");
    I18N_18 = MSG_EXTERNAL_topMenuAboutUs$$SRC_APP_CONTAINERS_MAIN_LAYOUT_MAIN_LAYOUT_COMPONENT_TS_19;
}
else {
    I18N_18 = $localize(templateObject_9 || (templateObject_9 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Top Menu|About Us @@topMenuAboutUs\u241Fcf087b91f26d2da9de7b932647415d87a4212fba\u241F3250748353373175265:About Us"], [":Top Menu|About Us @@topMenuAboutUs\u241Fcf087b91f26d2da9de7b932647415d87a4212fba\u241F3250748353373175265:About Us"])));
}
var I18N_20;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Contact
     * @meaning Top Menu
     */ 
    var MSG_EXTERNAL_topMenuContact$$SRC_APP_CONTAINERS_MAIN_LAYOUT_MAIN_LAYOUT_COMPONENT_TS_21 = goog.getMsg("Contacts");
    I18N_20 = MSG_EXTERNAL_topMenuContact$$SRC_APP_CONTAINERS_MAIN_LAYOUT_MAIN_LAYOUT_COMPONENT_TS_21;
}
else {
    I18N_20 = $localize(templateObject_10 || (templateObject_10 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([":Top Menu|Contact @@topMenuContact\u241F3a711bc7f3a478438fc492ee0a5513ab92fbf495\u241F3669758699470072885:Contacts"], [":Top Menu|Contact @@topMenuContact\u241F3a711bc7f3a478438fc492ee0a5513ab92fbf495\u241F3669758699470072885:Contacts"])));
}
var _c22 = function (a0, a1) { return { "custome-menu": a0, "custome-menu-next": a1 }; };
var MainLayoutComponent = /** @class */ (function () {
    function MainLayoutComponent(store, scrollDispatcher, zone, scrollToService, iconRegistry, sanitizer) {
        this.store = store;
        this.scrollDispatcher = scrollDispatcher;
        this.zone = zone;
        this.scrollToService = scrollToService;
        this.isOnTop = true;
        iconRegistry
            .addSvgIcon('close', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/u_x.svg'));
        this.config$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(src_app_store_selector_config_selector__WEBPACK_IMPORTED_MODULE_4__["selectConfig"]));
        this.isoCode$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(src_app_store_selector_isoCode_selector__WEBPACK_IMPORTED_MODULE_5__["selectIsoCodes"]));
    }
    MainLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(location);
        this.store.dispatch(src_app_store_action_conf_actions__WEBPACK_IMPORTED_MODULE_6__["getConfig"]());
        this.store.dispatch(src_app_store_action_isoCode_actions__WEBPACK_IMPORTED_MODULE_7__["getIsoCodes"]());
        this.scrollDispatcher.scrolled().subscribe(function (event) {
            var scroll = event.measureScrollOffset('top');
            var newOpacity = _this.isOnTop;
            if (scroll > _this.homeHeight) {
                newOpacity = false;
            }
            else {
                newOpacity = true;
            }
            if (newOpacity !== _this.isOnTop) {
                _this.zone.run(function () {
                    _this.isOnTop = newOpacity;
                });
            }
        });
    };
    MainLayoutComponent.prototype.ngAfterViewInit = function () {
        this.headerHeight = this.elementReftoolbar._elementRef.nativeElement.offsetHeight;
        this.homeHeight = this.elHomeView.nativeElement.offsetHeight - this.headerHeight;
    };
    MainLayoutComponent.prototype.onChangeLanguage = function (newLocal) {
        this.store.dispatch(src_app_store_action_conf_actions__WEBPACK_IMPORTED_MODULE_6__["changeConfigLocal"]({ local: newLocal }));
    };
    MainLayoutComponent.prototype.onScrollToSection = function (elementId) {
        console.log(elementId);
        var options = {
            target: elementId,
            offset: 1 - this.headerHeight
        };
        this.scrollToService.scrollTo(options);
    };
    MainLayoutComponent.ɵfac = function MainLayoutComponent_Factory(t) { return new (t || MainLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["ScrollDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_9__["ScrollToService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"])); };
    MainLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MainLayoutComponent, selectors: [["app-main-layout"]], viewQuery: function MainLayoutComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c1, true, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"]);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.elHomeView = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.elementReftoolbar = _t.first);
        } }, decls: 49, vars: 13, consts: [["fxFlexFill", "", 1, "custom-sidenav-container"], ["sidenav", ""], ["mat-list-item", "", 3, "click"], [1, "icon-block"], ["svgIcon", "close", "aria-hidden", "false", "aria-label", "Close", 1, "app-icon", "red"], [3, "config", "changeLanguage"], ["fxFlexFill", "", "cdkScrollable", "", 1, "custom-sidenav-content"], ["fxLayout", "column", "fxFlexFill", "", 1, "divFundo"], ["home", ""], [3, "countryList"], ["color", "primary", 1, "sticky", 3, "ngClass"], ["toolBara", ""], ["mat-icon-button", "", "fxShow", "true", "fxHide.gt-sm", "", 3, "click"], [1, "menu-spacer"], ["fxShow", "true", "fxHide.lt-md", ""], ["mat-button", "", 3, "click"]], template: function MainLayoutComponent_Template(rf, ctx) { if (rf & 1) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-sidenav", null, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-nav-list");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainLayoutComponent_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2); return _r0.toggle(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "mat-icon", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainLayoutComponent_Template_a_click_7_listener() { return ctx.onScrollToSection("homeId"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](8, I18N_2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainLayoutComponent_Template_a_click_9_listener() { return ctx.onScrollToSection("introduceId"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](10, I18N_4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainLayoutComponent_Template_a_click_11_listener() { return ctx.onScrollToSection("contentId"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](12, I18N_6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainLayoutComponent_Template_a_click_13_listener() { return ctx.onScrollToSection("clientId"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](14, I18N_8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainLayoutComponent_Template_a_click_15_listener() { return ctx.onScrollToSection("contactId"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](16, I18N_10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "app-lang-menu", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("changeLanguage", function MainLayoutComponent_Template_app_lang_menu_changeLanguage_17_listener($event) { return ctx.onChangeLanguage($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-sidenav-content", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "app-home", null, 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "app-introduce");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "app-contact", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "app-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-toolbar", 10, 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-toolbar-row");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainLayoutComponent_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2); return _r0.toggle(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "menu");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Azzart\u00AE");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainLayoutComponent_Template_a_click_37_listener() { return ctx.onScrollToSection("homeId"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](38, I18N_12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainLayoutComponent_Template_a_click_39_listener() { return ctx.onScrollToSection("introduceId"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](40, I18N_14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainLayoutComponent_Template_a_click_41_listener() { return ctx.onScrollToSection("contentId"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](42, I18N_16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainLayoutComponent_Template_a_click_43_listener() { return ctx.onScrollToSection("clientId"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](44, I18N_18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainLayoutComponent_Template_a_click_45_listener() { return ctx.onScrollToSection("contactId"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](46, I18N_20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "app-lang-menu", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("changeLanguage", function MainLayoutComponent_Template_app_lang_menu_changeLanguage_47_listener($event) { return ctx.onChangeLanguage($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](48, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 4, ctx.config$));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("countryList", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 6, ctx.isoCode$));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](10, _c22, ctx.isOnTop, !ctx.isOnTop));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](48, 8, ctx.config$));
        } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavContainer"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["FlexFillDirective"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _components_lang_menu_lang_menu_component__WEBPACK_IMPORTED_MODULE_15__["LangMenuComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavContent"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["CdkScrollable"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutDirective"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"], _components_introduce_introduce_component__WEBPACK_IMPORTED_MODULE_17__["IntroduceComponent"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__["ContactComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_21__["DefaultClassDirective"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButton"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_21__["DefaultShowHideDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatAnchor"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_20__["AsyncPipe"]], styles: ["html[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n}\n\n.custome-menu[_ngcontent-%COMP%] {\n  background: transparent;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n}\n\n.custome-menu-next[_ngcontent-%COMP%] {\n  background: #202539;\n}\n\n.sticky[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  z-index: 5;\n  top: 0;\n}\n\n.divFundo[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.opaque[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: black;\n}\n\n.menu-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  transition: 700ms;\n  -webkit-animation: sk-bounce 2s infinite ease-in-out;\n  animation: sk-bounce 2s infinite ease-in-out;\n}\n\n.icon-block[_ngcontent-%COMP%] {\n  display: inline;\n  width: 50%;\n  text-align: center;\n}\n\n.icon-block[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  font-size: 60px;\n}\n\n.icon-block[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%] {\n  fill: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVycy9tYWluLWxheW91dC9DOlxcV29ya3NwYWNlXFxwcm9qZWN0c1xcd29ybGQtZW50ZXJ0YWlubWVudFxcZW50ZXJ0YWlubWVudC11aS9zcmNcXGFwcFxcY29udGFpbmVyc1xcbWFpbi1sYXlvdXRcXG1haW4tbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWluZXJzL21haW4tbGF5b3V0L21haW4tbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0VBQ0EsNkVBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBR0UsaUJBQUE7RUFDQSxvREFBQTtFQUNBLDRDQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNDSjs7QURFRTtFQUNFLFNBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvbWFpbi1sYXlvdXQvbWFpbi1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sIHtcclxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxufVxyXG5cclxuLmN1c3RvbWUtbWVudSB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAuMTIpO1xyXG59XHJcblxyXG4uY3VzdG9tZS1tZW51LW5leHQge1xyXG4gIGJhY2tncm91bmQ6IHJnYigzMiwgMzcsIDU3KTtcclxufVxyXG5cclxuLnN0aWNreSB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB6LWluZGV4OiA1O1xyXG4gIHRvcDogMDtcclxufVxyXG5cclxuLmRpdkZ1bmRvIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ub3BhcXVlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5tZW51LXNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiA3MDBtcztcclxuICAtbXMtdHJhbnNpdGlvbjogNzAwbXM7XHJcbiAgdHJhbnNpdGlvbjogNzAwbXM7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNrLWJvdW5jZSAyLjBzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gIGFuaW1hdGlvbjogc2stYm91bmNlIDIuMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5pY29uLWJsb2NrIHtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgd2lkdGg6IDUwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIC5hcHAtaWNvbiB7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICB9XHJcblxyXG4gIC5yZWQge1xyXG4gICAgZmlsbDogcmVkO1xyXG4gIH1cclxufVxyXG4iLCJodG1sIHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbi5jdXN0b21lLW1lbnUge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5jdXN0b21lLW1lbnUtbmV4dCB7XG4gIGJhY2tncm91bmQ6ICMyMDI1Mzk7XG59XG5cbi5zdGlja3kge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB6LWluZGV4OiA1O1xuICB0b3A6IDA7XG59XG5cbi5kaXZGdW5kbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm9wYXF1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5tZW51LXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICAtd2Via2l0LXRyYW5zaXRpb246IDcwMG1zO1xuICAtbXMtdHJhbnNpdGlvbjogNzAwbXM7XG4gIHRyYW5zaXRpb246IDcwMG1zO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc2stYm91bmNlIDJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb246IHNrLWJvdW5jZSAycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbn1cblxuLmljb24tYmxvY2sge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHdpZHRoOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pY29uLWJsb2NrIC5hcHAtaWNvbiB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogNjBweDtcbn1cbi5pY29uLWJsb2NrIC5yZWQge1xuICBmaWxsOiByZWQ7XG59Il19 */"] });
    return MainLayoutComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MainLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-main-layout',
                templateUrl: './main-layout.component.html',
                styleUrls: ['./main-layout.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }, { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["ScrollDispatcher"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_9__["ScrollToService"] }, { type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconRegistry"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"] }]; }, { elHomeView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['home', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false }]
        }], elementReftoolbar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['toolBara', { read: _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], static: true }]
        }] }); })();
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;


/***/ }),

/***/ "./src/app/model/config-i18n.enum.ts":
/*!*******************************************!*\
  !*** ./src/app/model/config-i18n.enum.ts ***!
  \*******************************************/
/*! exports provided: EConfLanguage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EConfLanguage", function() { return EConfLanguage; });
var EConfLanguage;
(function (EConfLanguage) {
    EConfLanguage["EN"] = "En";
    EConfLanguage["RU"] = "Ru";
})(EConfLanguage || (EConfLanguage = {}));


/***/ }),

/***/ "./src/app/model/phone-number.model.ts":
/*!*********************************************!*\
  !*** ./src/app/model/phone-number.model.ts ***!
  \*********************************************/
/*! exports provided: PhoneNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneNumber", function() { return PhoneNumber; });
var PhoneNumber = /** @class */ (function () {
    function PhoneNumber(area, exchange, subscriber) {
        this.area = area;
        this.exchange = exchange;
        this.subscriber = subscriber;
    }
    return PhoneNumber;
}());



/***/ }),

/***/ "./src/app/service/config.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/config.service.ts ***!
  \*******************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this.configUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "config.json";
    }
    ConfigService.prototype.getConfig = function () {
        var browserLocal = navigator.language;
        return location.pathname.startsWith('/ru') ?
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ local: 'Ru' }) : browserLocal === 'en-US' ?
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ local: 'En' }) : browserLocal === 'ru-Ru' ?
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ local: 'Ru' }) : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ local: 'En' });
        // this.httpClient.get<IConfig>(this.configUrl);
    };
    ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(); };
    ConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConfigService, factory: ConfigService.ɵfac });
    return ConfigService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/service/iso-code.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/iso-code.service.ts ***!
  \*********************************************/
/*! exports provided: IsoCodeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsoCodeService", function() { return IsoCodeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");




var IsoCodeService = /** @class */ (function () {
    function IsoCodeService(_http) {
        this._http = _http;
        this.configUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "iso-codes.json";
    }
    IsoCodeService.prototype.getIsoCodes = function () {
        return this._http.get(this.configUrl);
    };
    IsoCodeService.ɵfac = function IsoCodeService_Factory(t) { return new (t || IsoCodeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
    IsoCodeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IsoCodeService, factory: IsoCodeService.ɵfac });
    return IsoCodeService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsoCodeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/store/action/conf.actions.ts":
/*!**********************************************!*\
  !*** ./src/app/store/action/conf.actions.ts ***!
  \**********************************************/
/*! exports provided: EConfingAction, getConfig, getConfigSuccess, changeConfigLocal, changeConfigLocalSuccess, goToNewLocal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EConfingAction", function() { return EConfingAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfig", function() { return getConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfigSuccess", function() { return getConfigSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeConfigLocal", function() { return changeConfigLocal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeConfigLocalSuccess", function() { return changeConfigLocalSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goToNewLocal", function() { return goToNewLocal; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");

var EConfingAction;
(function (EConfingAction) {
    EConfingAction["GetConfig"] = "[Config] Get Config";
    EConfingAction["GetConfigSuccess"] = "[Config] Get Config Success";
    EConfingAction["ChangeConfigLocal"] = "[Config] Update Config Local";
    EConfingAction["ChangeConfigLocalSuccess"] = "[Config] Update Config Local Success";
    EConfingAction["GoToNewLocal"] = "[Config] Go To New Local";
})(EConfingAction || (EConfingAction = {}));
var getConfig = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(EConfingAction.GetConfig);
var getConfigSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(EConfingAction.GetConfigSuccess, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var changeConfigLocal = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(EConfingAction.ChangeConfigLocal, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var changeConfigLocalSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(EConfingAction.ChangeConfigLocalSuccess, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var goToNewLocal = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(EConfingAction.GoToNewLocal);
var actions = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["union"])({
    getConfig: getConfig,
    getConfigSuccess: getConfigSuccess,
    changeConfigLocal: changeConfigLocal,
    changeConfigLocalSuccess: changeConfigLocalSuccess,
    goToNewLocal: goToNewLocal
});


/***/ }),

/***/ "./src/app/store/action/isoCode.actions.ts":
/*!*************************************************!*\
  !*** ./src/app/store/action/isoCode.actions.ts ***!
  \*************************************************/
/*! exports provided: EIsoCodeAction, getIsoCodes, getIsoCodesSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EIsoCodeAction", function() { return EIsoCodeAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsoCodes", function() { return getIsoCodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsoCodesSuccess", function() { return getIsoCodesSuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");

var EIsoCodeAction;
(function (EIsoCodeAction) {
    EIsoCodeAction["GetIsoCode"] = "[IsoCode] Get Iso Codes";
    EIsoCodeAction["GetIsoCodeSuccess"] = "[IsoCode] Get Iso Codes Success";
})(EIsoCodeAction || (EIsoCodeAction = {}));
var getIsoCodes = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(EIsoCodeAction.GetIsoCode);
var getIsoCodesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(EIsoCodeAction.GetIsoCodeSuccess, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var actions = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["union"])({
    getIsoCodes: getIsoCodes,
    getIsoCodesSuccess: getIsoCodesSuccess
});


/***/ }),

/***/ "./src/app/store/effect/config.effects.ts":
/*!************************************************!*\
  !*** ./src/app/store/effect/config.effects.ts ***!
  \************************************************/
/*! exports provided: ConfigEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigEffect", function() { return ConfigEffect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
/* harmony import */ var _action_conf_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../action/conf.actions */ "./src/app/store/action/conf.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _selector_config_selector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../selector/config.selector */ "./src/app/store/selector/config.selector.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_service_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/service/config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");














var ConfigEffect = /** @class */ (function () {
    function ConfigEffect(store, configService, actions, router) {
        var _this = this;
        this.store = store;
        this.configService = configService;
        this.actions = actions;
        this.router = router;
        this.getConfig$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_conf_actions__WEBPACK_IMPORTED_MODULE_3__["getConfig"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.configService.getConfig(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (config) {
            console.log(config);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_action_conf_actions__WEBPACK_IMPORTED_MODULE_3__["getConfigSuccess"]({ payload: config }));
        }));
        this.changeConfigLocal$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_conf_actions__WEBPACK_IMPORTED_MODULE_3__["changeConfigLocal"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_selector_config_selector__WEBPACK_IMPORTED_MODULE_7__["selectConfig"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), action = _b[0], configState = _b[1];
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_action_conf_actions__WEBPACK_IMPORTED_MODULE_3__["changeConfigLocalSuccess"]({ payload: { local: action.local } }));
        }));
        this.changeLocal$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_conf_actions__WEBPACK_IMPORTED_MODULE_3__["changeConfigLocalSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_selector_config_selector__WEBPACK_IMPORTED_MODULE_7__["selectConfig"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), action = _b[0], configState = _b[1];
            console.log(action);
            console.log(configState);
            if (configState.local === 'En') {
                window.location.href = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].host + "/en";
            }
            else if (configState.local === 'Ru') {
                window.location.href = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].host + "/ru";
            }
            else {
                window.location.href = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].host + "/en";
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_action_conf_actions__WEBPACK_IMPORTED_MODULE_3__["goToNewLocal"]());
        }));
    }
    ConfigEffect.ɵfac = function ConfigEffect_Factory(t) { return new (t || ConfigEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_service_config_service__WEBPACK_IMPORTED_MODULE_9__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"])); };
    ConfigEffect.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ConfigEffect, factory: ConfigEffect.ɵfac });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
    ], ConfigEffect.prototype, "getConfig$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
    ], ConfigEffect.prototype, "changeConfigLocal$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
    ], ConfigEffect.prototype, "changeLocal$", void 0);
    return ConfigEffect;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ConfigEffect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }, { type: src_app_service_config_service__WEBPACK_IMPORTED_MODULE_9__["ConfigService"] }, { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }]; }, { getConfig$: [], changeConfigLocal$: [], changeLocal$: [] }); })();


/***/ }),

/***/ "./src/app/store/effect/isoCode.effects.ts":
/*!*************************************************!*\
  !*** ./src/app/store/effect/isoCode.effects.ts ***!
  \*************************************************/
/*! exports provided: IsoCodeffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsoCodeffect", function() { return IsoCodeffect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
/* harmony import */ var _action_isoCode_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../action/isoCode.actions */ "./src/app/store/action/isoCode.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var src_app_service_iso_code_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/iso-code.service */ "./src/app/service/iso-code.service.ts");










var IsoCodeffect = /** @class */ (function () {
    function IsoCodeffect(store, isoCodeService, actions$) {
        var _this = this;
        this.store = store;
        this.isoCodeService = isoCodeService;
        this.actions$ = actions$;
        this.getConfig$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_action_isoCode_actions__WEBPACK_IMPORTED_MODULE_3__["getIsoCodes"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.isoCodeService.getIsoCodes(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (isoCodes) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_action_isoCode_actions__WEBPACK_IMPORTED_MODULE_3__["getIsoCodesSuccess"]({ payload: isoCodes }));
        }));
    }
    IsoCodeffect.ɵfac = function IsoCodeffect_Factory(t) { return new (t || IsoCodeffect)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_service_iso_code_service__WEBPACK_IMPORTED_MODULE_7__["IsoCodeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"])); };
    IsoCodeffect.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: IsoCodeffect, factory: IsoCodeffect.ɵfac });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
    ], IsoCodeffect.prototype, "getConfig$", void 0);
    return IsoCodeffect;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IsoCodeffect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }, { type: src_app_service_iso_code_service__WEBPACK_IMPORTED_MODULE_7__["IsoCodeService"] }, { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }]; }, { getConfig$: [] }); })();


/***/ }),

/***/ "./src/app/store/reducer/app.reducer.ts":
/*!**********************************************!*\
  !*** ./src/app/store/reducer/app.reducer.ts ***!
  \**********************************************/
/*! exports provided: appReducer, logger, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducer", function() { return appReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return logger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/__ivy_ngcc__/fesm2015/ngrx-router-store.js");
/* harmony import */ var ngrx_store_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngrx-store-logger */ "./node_modules/ngrx-store-logger/dist/index.js");
/* harmony import */ var ngrx_store_logger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ngrx_store_logger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _config_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config.reducer */ "./src/app/store/reducer/config.reducer.ts");
/* harmony import */ var _isoCode_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isoCode.reducer */ "./src/app/store/reducer/isoCode.reducer.ts");





var appReducer = {
    router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__["routerReducer"],
    config: _config_reducer__WEBPACK_IMPORTED_MODULE_3__["configReducer"],
    isoCodes: _isoCode_reducer__WEBPACK_IMPORTED_MODULE_4__["isoCodeReducer"],
};
function logger(reducer) {
    return Object(ngrx_store_logger__WEBPACK_IMPORTED_MODULE_1__["storeLogger"])()(reducer);
}
var metaReducers = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production ? [] : [logger];


/***/ }),

/***/ "./src/app/store/reducer/config.reducer.ts":
/*!*************************************************!*\
  !*** ./src/app/store/reducer/config.reducer.ts ***!
  \*************************************************/
/*! exports provided: configReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configReducer", function() { return configReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _action_conf_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../action/conf.actions */ "./src/app/store/action/conf.actions.ts");
/* harmony import */ var _state_conf_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/conf.state */ "./src/app/store/state/conf.state.ts");




var reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(_state_conf_state__WEBPACK_IMPORTED_MODULE_3__["initialConfigState"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_action_conf_actions__WEBPACK_IMPORTED_MODULE_2__["getConfigSuccess"], function (state, action) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { config: action.payload || state.config })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_action_conf_actions__WEBPACK_IMPORTED_MODULE_2__["changeConfigLocalSuccess"], function (state, action) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { config: action.payload || state.config })); }));
function configReducer(state, action) {
    if (state === void 0) { state = _state_conf_state__WEBPACK_IMPORTED_MODULE_3__["initialConfigState"]; }
    return reducer(state, action);
}


/***/ }),

/***/ "./src/app/store/reducer/isoCode.reducer.ts":
/*!**************************************************!*\
  !*** ./src/app/store/reducer/isoCode.reducer.ts ***!
  \**************************************************/
/*! exports provided: isoCodeReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isoCodeReducer", function() { return isoCodeReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _action_isoCode_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../action/isoCode.actions */ "./src/app/store/action/isoCode.actions.ts");
/* harmony import */ var _state_iso_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/iso.state */ "./src/app/store/state/iso.state.ts");




var reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(_state_iso_state__WEBPACK_IMPORTED_MODULE_3__["initialIsoCodeState"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_action_isoCode_actions__WEBPACK_IMPORTED_MODULE_2__["getIsoCodesSuccess"], function (state, action) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { isoCodes: action.payload || state.isoCodes })); }));
function isoCodeReducer(state, action) {
    if (state === void 0) { state = _state_iso_state__WEBPACK_IMPORTED_MODULE_3__["initialIsoCodeState"]; }
    return reducer(state, action);
}


/***/ }),

/***/ "./src/app/store/selector/config.selector.ts":
/*!***************************************************!*\
  !*** ./src/app/store/selector/config.selector.ts ***!
  \***************************************************/
/*! exports provided: selectConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectConfig", function() { return selectConfig; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");

var configState = function (state) { return state.config; };
var selectConfig = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(configState, function (state) { return state.config; });


/***/ }),

/***/ "./src/app/store/selector/isoCode.selector.ts":
/*!****************************************************!*\
  !*** ./src/app/store/selector/isoCode.selector.ts ***!
  \****************************************************/
/*! exports provided: selectIsoCodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsoCodes", function() { return selectIsoCodes; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");

var isoCodeState = function (state) { return state.isoCodes; };
var selectIsoCodes = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(isoCodeState, function (state) { return state.isoCodes; });


/***/ }),

/***/ "./src/app/store/state/conf.state.ts":
/*!*******************************************!*\
  !*** ./src/app/store/state/conf.state.ts ***!
  \*******************************************/
/*! exports provided: initialConfigState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialConfigState", function() { return initialConfigState; });
/* harmony import */ var src_app_model_config_i18n_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/model/config-i18n.enum */ "./src/app/model/config-i18n.enum.ts");

var initialConfigState = {
    config: { local: src_app_model_config_i18n_enum__WEBPACK_IMPORTED_MODULE_0__["EConfLanguage"].EN }
};


/***/ }),

/***/ "./src/app/store/state/iso.state.ts":
/*!******************************************!*\
  !*** ./src/app/store/state/iso.state.ts ***!
  \******************************************/
/*! exports provided: initialIsoCodeState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialIsoCodeState", function() { return initialIsoCodeState; });
var initialIsoCodeState = {
    isoCodes: []
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod-en.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    host: 'http://localhost:4200',
    apiUrl: 'http://localhost:4200/assets/data/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Workspace\projects\world-entertainment\entertainment-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map