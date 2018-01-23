webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/Contants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });
var Constants = (function () {
    function Constants() {
    }
    Constants.baseUrl = window.location.origin === 'http://localhost:4200'
        ? 'http://localhost:8081'
        : window.location.origin;
    return Constants;
}());



/***/ }),

/***/ "../../../../../src/app/WebSocketService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebSocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stomp_ng2_stompjs__ = __webpack_require__("../../../../@stomp/ng2-stompjs/@stomp/ng2-stompjs.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WebSocketService = (function () {
    function WebSocketService(_stompService) {
        var _this = this;
        this._stompService = _stompService;
        this.yos = new Array();
        this.yoReceived = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        /** Consume a message from the _stompService */
        this.on_next = function (message) {
            // Log it to the console
            console.log('[on_next]', message);
            var yo = JSON.parse(message.body);
            if (yo['origin'] && yo['target'] && yo['yo']) {
                _this.yos.push(yo);
                _this.yoReceived.emit(yo);
            }
        };
    }
    WebSocketService.prototype.subscribe = function () {
        if (this.subscribed) {
            return;
        }
        // Stream of messages
        this.messages = this._stompService.subscribe('/stompresponse');
        // Subscribe a function to be run on_next message
        this.subscription = this.messages.subscribe(this.on_next);
        this.subscribed = true;
    };
    WebSocketService.prototype.unsubscribe = function () {
        if (!this.subscribed) {
            return;
        }
        // This will internally unsubscribe from Stomp Broker
        // There are two subscriptions - one created explicitly, the other created in the template by use of 'async'
        this.subscription.unsubscribe();
        this.subscription = null;
        this.messages = null;
        this.subscribed = false;
    };
    WebSocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__stomp_ng2_stompjs__["b" /* StompService */]])
    ], WebSocketService);
    return WebSocketService;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-content {\n  margin-top: 60px;\n  margin-left: 200px;\n  padding: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n<yo-yo></yo-yo>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'yo';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'yo-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export socketProvider */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__yo_yo_component__ = __webpack_require__("../../../../../src/app/yo/yo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stomp_ng2_stompjs__ = __webpack_require__("../../../../@stomp/ng2-stompjs/@stomp/ng2-stompjs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_sockjs_client__ = __webpack_require__("../../../../sockjs-client/lib/entry.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_sockjs_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_sockjs_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__yo_service__ = __webpack_require__("../../../../../src/yo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Contants__ = __webpack_require__("../../../../../src/app/Contants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__WebSocketService__ = __webpack_require__("../../../../../src/app/WebSocketService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












function socketProvider() {
    var url = __WEBPACK_IMPORTED_MODULE_10__Contants__["a" /* Constants */].baseUrl + '/stomp';
    return new __WEBPACK_IMPORTED_MODULE_8_sockjs_client__(url);
}
var stompConfig = {
    // Which server?
    url: socketProvider,
    // Headers
    // Typical keys: login, passcode, host
    headers: {},
    // How often to heartbeat?
    // Interval in milliseconds, set to 0 to disable
    heartbeat_in: 0,
    heartbeat_out: 20000,
    // Wait in milliseconds before attempting auto reconnect
    // Set to 0 to disable
    // Typical value 5000 (5 seconds)
    reconnect_delay: 5000,
    // Will log diagnostics on console
    debug: true
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__yo_yo_component__["a" /* YoComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__stomp_ng2_stompjs__["b" /* StompService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_7__stomp_ng2_stompjs__["a" /* StompConfig */],
                    useValue: stompConfig
                }, __WEBPACK_IMPORTED_MODULE_9__yo_service__["a" /* YoService */], __WEBPACK_IMPORTED_MODULE_11__WebSocketService__["a" /* WebSocketService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/yo/yo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/yo/yo.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top navbar-global bg-warning\">\n  <a class=\"navbar-brand\" href=\"#\">{{me}}</a>\n  <button (click)=\"open(content)\" type=\"button\" class=\"btn btn-primary navbar-btn\">Send Yo!</button>\n</nav>\n\n<div class=\"container\">\n  <div class=\"col-xs-2 pull-right\">\n    <p><span id=\"status\"> {{state|async}} </span></p>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-1\"></div>\n    <div class=\"col-sm-10\">\n      <div *ngIf=\"!yos || yos.length===0\" class=\"card\">\n        <div class=\"card-header\">\n          <h3 class=\"card-text\">There are no recorded Yo's.</h3>\n        </div>\n        <div class=\"card-body\">Use the \"Send Yo!\" button to send a Yo to a peer.</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-1\"></div>\n    <div class=\"col-sm-10\">\n      <div *ngIf=\"yos && yos.length > 0\" class=\"card\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <h3 class=\"card-text\">Recorded Yo's</h3>\n          </div>\n          <div class=\"card-body\">\n            <ul>\n              <li *ngFor=\"let yo of yos;\">{{yo.origin}} said: <b>{{yo.yo}}</b></li>\n            </ul>\n          </div>\n        </div>\n    </div>\n  </div>\n</div>\n\n  <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div>\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Send YO</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"onCancel()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"container\">\n          <div class=\"row form-group\">\n            <div class=\"col-sm-4\">\n              <label col-form-label for=\"depositorName\">Depositor Name:</label>\n            </div>\n            <div class=\"col-sm-8\">\n              <select [(ngModel)]=\"selectedParty\" class=\"form-control\" id=\"depositorName\" name=\"depositorName\">\n                <option *ngFor=\"let c of peers\" [ngValue]='c'>{{c}}</option>\n              </select>\n            </div>\n          </div>\n\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSendYO()\">Send YO</button>\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"onCancel()\">Cancel</button>\n      </div>\n    </div>\n  </ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/yo/yo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stomp_ng2_stompjs__ = __webpack_require__("../../../../@stomp/ng2-stompjs/@stomp/ng2-stompjs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__yo_service__ = __webpack_require__("../../../../../src/yo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Contants__ = __webpack_require__("../../../../../src/app/Contants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__WebSocketService__ = __webpack_require__("../../../../../src/app/WebSocketService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var YoComponent = (function () {
    function YoComponent(_stompService, _yoService, _webSocketService, vcr, modalService) {
        this._stompService = _stompService;
        this._yoService = _yoService;
        this._webSocketService = _webSocketService;
        this.modalService = modalService;
        this.me = 'me';
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_5__Contants__["a" /* Constants */].baseUrl;
        this.selectedParty = '';
    }
    YoComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('Status init');
        this.getMe();
        this.getPeers();
        this.getYos();
        this.state = this._stompService.state.map(function (state) { return __WEBPACK_IMPORTED_MODULE_2__stomp_ng2_stompjs__["c" /* StompState */][state]; });
        // this.subscribed = false;
        // Store local reference to Observable
        // for use with template ( | async )
        // this.subscribe();
        this._webSocketService.subscribe();
        this.sub = this._webSocketService.yoReceived.subscribe(function (yo) { return _this.yos.push(yo); });
    };
    YoComponent.prototype.ngOnDestroy = function () {
        // this.unsubscribe();
        this.sub.unsubscribe();
        this._webSocketService.unsubscribe();
    };
    YoComponent.prototype.getMe = function () {
        var _this = this;
        this._yoService.getMe(this.baseUrl + '/yo/myname')
            .subscribe(function (resp) {
            console.log('[resp]', resp);
            _this.me = resp;
        }, function (err) { return console.log(err); });
    };
    YoComponent.prototype.getPeers = function () {
        var _this = this;
        this._yoService.getPeers(this.baseUrl + '/yo/peersnames')
            .subscribe(function (resp) {
            _this.peers = resp.peers;
            console.log('[getPeers]', _this.peers);
        }, function (err) { return console.log(err); });
    };
    YoComponent.prototype.getYos = function () {
        var _this = this;
        this._yoService.getYos(this.baseUrl + '/yo/getyos')
            .subscribe(function (resp) {
            _this.yos = resp;
            console.log('[getYos]', _this.yos);
        }, function (err) { return console.log(err); });
    };
    YoComponent.prototype.onSendYO = function () {
        var _this = this;
        this._yoService.sendYos(this.baseUrl + '/yo/sendyo', this.selectedParty)
            .subscribe(function (resp) {
            // console.log('[nSendYO]', resp);
            _this.onCancel();
        }, function (err) {
            console.log('[onSendYO]', err);
            _this.onCancel();
        });
    };
    // openSendYoModal() {
    //   console.log('[openSendYoModal]');
    // }
    YoComponent.prototype.onCancel = function () {
        this.modalReference.close();
    };
    YoComponent.prototype.open = function (content) {
        var _this = this;
        var options = {
            size: 'lg',
            windowClass: 'zoomIn animated',
            beforeDismiss: function () {
                // this does not work
                content.windowClass = 'rollOut animated';
                return true;
            }
        };
        var notMe = this.peers.filter(function (x) { return x !== _this.me; });
        this.selectedParty = notMe.length > 0
            ? notMe[0]
            : '';
        this.modalReference = this.modalService.open(content, options);
        this.modalReference.result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed ";
        });
    };
    YoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'yo-yo',
            template: __webpack_require__("../../../../../src/app/yo/yo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/yo/yo.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__stomp_ng2_stompjs__["b" /* StompService */],
            __WEBPACK_IMPORTED_MODULE_4__yo_service__["a" /* YoService */],
            __WEBPACK_IMPORTED_MODULE_6__WebSocketService__["a" /* WebSocketService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */]])
    ], YoComponent);
    return YoComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../src/yo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {Http} from '@angular/http';
var YoService = (function () {
    function YoService(http) {
        this.http = http;
    }
    YoService.prototype.getMe = function (url) {
        var headers = this.getHeaders();
        return this.http.get(url, { headers: headers, responseType: 'text' });
    };
    YoService.prototype.getPeers = function (url) {
        var headers = this.getHeaders();
        return this.http.get(url, { headers: headers });
    };
    YoService.prototype.getHeaders = function () {
        return new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
    };
    YoService.prototype.getYos = function (url) {
        var headers = this.getHeaders();
        return this.http.get(url, { headers: headers });
    };
    YoService.prototype.sendYos = function (url, data) {
        var httpParams = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .append('target', data);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.post(url, httpParams, { headers: headers, responseType: 'text' });
    };
    YoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], YoService);
    return YoService;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map