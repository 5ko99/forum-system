webpackJsonp([1,4],{

/***/ 157:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 157;


/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(98);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shared_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(sharedService, userService, dataService, router) {
        this.sharedService = sharedService;
        this.userService = userService;
        this.dataService = dataService;
        this.router = router;
        this.header = 'Forum';
        this.logged = false;
        this.authInfo = this.userService.authInfo;
        this.categories = this.dataService.getDataList('/categories');
    }
    AppComponent.prototype.signUp = function () {
        this.sharedService.signIn = false;
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authInfo.subscribe(function (snapshot) {
            // Check if the user is loged and if is change the button
            if (snapshot) {
                var uid_1 = snapshot.uid;
                _this.userInfo = _this.dataService.getData('/users/' + uid_1);
                _this.userInfo.subscribe(function (snapshot2) {
                    _this.sharedService.loggedUser = snapshot2.username;
                    _this.sharedService.loggedUserUID = uid_1;
                });
                _this.logged = true;
            }
        });
    };
    AppComponent.prototype.logOut = function () {
        var _this = this;
        this.userService.logout().then(function (data) {
            // Successuful LogOuted
            _this.logged = false;
        }, function (err) {
            console.log(err.message);
        });
    };
    // This router naviget to the right sub-categorie
    AppComponent.prototype.onSelect = function (categorie) {
        this.sharedService.categorieToAks = categorie.$key;
        this.router.navigate(['/categorie/', categorie.$key]);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(246),
        styles: [__webpack_require__(233)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_shared_service__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__categorie_categorie_component__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sign_sign_component__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__topic_topic_component__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_shared_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_users_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_data_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__node_modules_angular2_autosize_angular2_autosize__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__environments_environment__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ask_ask_component__ = __webpack_require__(168);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














// Firebase





var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */] },
    { path: 'categorie', children: [
            { path: '', redirectTo: 'web', pathMatch: 'full' },
            { path: 'Web Development', component: __WEBPACK_IMPORTED_MODULE_7__categorie_categorie_component__["a" /* CategorieComponent */] },
            { path: 'Web Development/:id', component: __WEBPACK_IMPORTED_MODULE_9__topic_topic_component__["a" /* TopicComponent */] },
            { path: 'Net', component: __WEBPACK_IMPORTED_MODULE_7__categorie_categorie_component__["a" /* CategorieComponent */] },
            { path: 'Net/:id', component: __WEBPACK_IMPORTED_MODULE_9__topic_topic_component__["a" /* TopicComponent */] }
        ] },
    { path: 'sign', component: __WEBPACK_IMPORTED_MODULE_8__sign_sign_component__["a" /* SignComponent */] },
    { path: 'questions/ask', component: __WEBPACK_IMPORTED_MODULE_18__ask_ask_component__["a" /* AskComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__categorie_categorie_component__["a" /* CategorieComponent */],
            __WEBPACK_IMPORTED_MODULE_8__sign_sign_component__["a" /* SignComponent */],
            __WEBPACK_IMPORTED_MODULE_9__topic_topic_component__["a" /* TopicComponent */],
            __WEBPACK_IMPORTED_MODULE_18__ask_ask_component__["a" /* AskComponent */],
            __WEBPACK_IMPORTED_MODULE_13__node_modules_angular2_autosize_angular2_autosize__["a" /* Autosize */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_14_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_15__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__["a" /* AngularFireAuthModule */] // imports firebase/auth, only needed for auth features
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__services_shared_service__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_11__services_users_service__["a" /* UsersService */], __WEBPACK_IMPORTED_MODULE_12__services_data_service__["a" /* DataService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shared_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_question_model__ = __webpack_require__(172);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AskComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// TODO: Reach this page only if I am logged with one if return to login page if i am not
var AskComponent = (function () {
    function AskComponent(dataService, sharedService) {
        this.dataService = dataService;
        this.sharedService = sharedService;
        this.categories = this.dataService.getDataList('/categories');
    }
    AskComponent.prototype.ngOnInit = function () {
    };
    AskComponent.prototype.onSubmit = function (myForm) {
        if (myForm.form.value.selectbasic && myForm.form.value.title && myForm.form.value.postText && myForm.form.valid) {
            var categorie = myForm.form.value.selectbasic;
            var path = '/categories/' + categorie + '/';
            var userName = this.sharedService.loggedUser;
            var title = myForm.form.value.title;
            var questionText = myForm.form.value.postText;
            var question = new __WEBPACK_IMPORTED_MODULE_3__models_question_model__["a" /* Question */](userName, title, questionText);
            this.dataService.writeQuestion(path, question);
        }
        else {
            alert('Please Select Categorie, enter Title and Text to the question');
        }
    };
    return AskComponent;
}());
AskComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-ask',
        template: __webpack_require__(247),
        styles: [__webpack_require__(234)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */]) === "function" && _b || Object])
], AskComponent);

var _a, _b;
//# sourceMappingURL=ask.component.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shared_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_users_service__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategorieComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategorieComponent = (function () {
    function CategorieComponent(route, sharedService, router, dataService, userService) {
        this.route = route;
        this.sharedService = sharedService;
        this.router = router;
        this.dataService = dataService;
        this.userService = userService;
        this.authInfo = this.userService.authInfo;
    }
    // Get object with information abbout clicked categorie
    CategorieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clickedCategorie = this.route.url;
        this.clickedCategorie.subscribe(function (url) {
            var data = _this.dataService.getDataList('/categories/' + url[0].path);
            _this.categorie = url[0].path;
            data.subscribe(function (snapshot) {
                _this.snapshots = snapshot;
            });
        });
    };
    CategorieComponent.prototype.onSelect = function (topic) {
        this.router.navigate(['/categorie/' + this.categorie + '/' + topic.$key]); // $key in uid of evry post
    };
    CategorieComponent.prototype.ask = function () {
        this.router.navigate(['/questions/ask']);
    };
    return CategorieComponent;
}());
CategorieComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-categorie',
        template: __webpack_require__(248),
        styles: [__webpack_require__(235)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_users_service__["a" /* UsersService */]) === "function" && _e || Object])
], CategorieComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=categorie.component.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shared_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(router, sharedService, dataService) {
        this.router = router;
        this.sharedService = sharedService;
        this.dataService = dataService;
        this.categories = this.dataService.getDataList('/categories');
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    // This router naviget to the right sub-categorie
    HomeComponent.prototype.onSelect = function (categorie) {
        this.sharedService.categorieToAks = categorie.$key;
        this.router.navigate(['/categorie/', categorie.$key]);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(249),
        styles: [__webpack_require__(236)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comment; });
var Comment = (function () {
    function Comment(_postAuthor, _postText) {
        this.postAuthor = _postAuthor;
        this.postText = _postText;
        this.postDate = new Date();
        this.postRating = 0;
    }
    // Getters
    Comment.prototype.getAuthor = function () {
        return this.postAuthor;
    };
    Comment.prototype.getText = function () {
        return this.postText;
    };
    Comment.prototype.getDate = function () {
        return this.postDate;
    };
    Comment.prototype.getRating = function () {
        return this.postRating;
    };
    // Setters
    Comment.prototype.setAuthor = function (author) {
        this.postAuthor = author;
    };
    Comment.prototype.setText = function (text) {
        this.postText = text;
    };
    Comment.prototype.setDate = function (date) {
        this.postDate = date;
    };
    Comment.prototype.setRating = function (rating) {
        this.postRating = rating;
    };
    return Comment;
}());

//# sourceMappingURL=comment.model.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Question; });
var Question = (function () {
    function Question(_questionAuthor, _questionTitle, _questionText) {
        this.questionAuthor = _questionAuthor;
        this.questionTitle = _questionTitle;
        this.questionText = _questionText;
        this.questionDate = new Date();
    }
    // Getters
    Question.prototype.getAuthor = function () {
        return this.questionAuthor;
    };
    Question.prototype.getTitle = function () {
        return this.questionTitle;
    };
    Question.prototype.getText = function () {
        return this.questionText;
    };
    Question.prototype.getDate = function () {
        return this.questionDate;
    };
    // Setters
    Question.prototype.setAuthor = function (author) {
        this.questionAuthor = author;
    };
    Question.prototype.setTitle = function (title) {
        this.questionTitle = title;
    };
    Question.prototype.setText = function (text) {
        this.questionText = text;
    };
    Question.prototype.setDate = function (date) {
        this.questionDate = date;
    };
    return Question;
}());

//# sourceMappingURL=question.model.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shared_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignComponent = (function () {
    function SignComponent(sharedService, userService, router) {
        this.sharedService = sharedService;
        this.userService = userService;
        this.router = router;
    }
    SignComponent.prototype.ngOnInit = function () {
        // console.log(this.userService.isLogged());
    };
    SignComponent.prototype.signIn = function () {
        this.sharedService.signIn = true;
    };
    SignComponent.prototype.onSubmit = function (myForm) {
        var _this = this;
        var email = myForm.form.value.email;
        var password = myForm.form.value.pass;
        if (this.sharedService.signIn) {
            // Login Part
            this.userService.login(email, password).then(function (user) {
                // Logged
                _this.router.navigate(['/']);
            }).catch(function (err) {
                console.log(err.message);
            });
        }
        else {
            // Register Part
            var username = myForm.form.value.username;
            this.userService.register(email, password, username).then(function (user) {
                // Registered
                _this.router.navigate(['/']);
            }).catch(function (err) {
                // Get error
                console.log(err.message);
            });
        }
        return false;
    };
    return SignComponent;
}());
SignComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-sign',
        template: __webpack_require__(250),
        styles: [__webpack_require__(237)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_shared_service__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], SignComponent);

var _a, _b, _c;
//# sourceMappingURL=sign.component.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_comment_model__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shared_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_users_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TopicComponent = (function () {
    function TopicComponent(sharedService, userService, dataService, route) {
        this.sharedService = sharedService;
        this.userService = userService;
        this.dataService = dataService;
        this.route = route;
        this.urlPath = ['', ''];
        this.authInfo = this.userService.authInfo;
    }
    TopicComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get from db and url info abbout this topic the link is pasted
        this.route.url.subscribe(function (url) {
            var data = '/categories/' + url[0].path + '/' + url[1].path;
            var dataRef = _this.dataService.getData(data);
            dataRef.subscribe(function (snapshot) {
                // Work with data
                _this.topic = snapshot.title;
                _this.questionText = snapshot.text;
                _this.questionAuthor = snapshot.author;
            });
            _this.answersRefs = _this.dataService.getDataList(data + '/answers');
            _this.urlPath[0] = url[0].path;
            _this.urlPath[1] = url[1].path;
        });
    };
    // TODO: Save no email info and username to user
    TopicComponent.prototype.addPost = function (myForm) {
        var _this = this;
        // Add post to db
        var post;
        var postText = myForm.form.value.postText;
        var postAuthor;
        this.authInfo.subscribe(function (user) {
            console.log(user);
            postAuthor = user.displayName;
            post = new __WEBPACK_IMPORTED_MODULE_1__models_comment_model__["a" /* Comment */](postAuthor, postText);
            var path = '/categories/' + _this.urlPath[0] + '/' + _this.urlPath[1] + '/answers/';
            _this.dataService.writeAnswer(path, post);
        });
    };
    return TopicComponent;
}());
TopicComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-topic',
        template: __webpack_require__(251),
        styles: [__webpack_require__(238)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UsersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object])
], TopicComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=topic.component.js.map

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, ".title{\n  text-align: center;\n  font-family: cursive;\n}\n\na.title-link {\n  text-decoration: none;\n}\n\nh1.page-header{\n  font-size: 50pt;\n}\n\n.upper-zone{\n  padding-left: 91%;\n  padding-top: 0.5%;\n}\n\n\n\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, ".asaide{\n    padding-left: 0.5%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, ".alert{\n   width: 88%; \n}\n.login-box{\n    padding-left: 70%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "textarea{\n    margin-left: 3%;\n}\ninput.post{\n      text-decoration: none;\n      background-color: transparent;\n      border: none;\n}\ndiv.btn{\n    margin-left: 3%;\n}\n\ntextarea.answer{\n    background-color: white;\n    resize: none;\n    border: none;\n    font-size: 12pt;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 246:
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-bar\" div>\n  <div class=\"upper-zone\">\n    <button *ngIf=\"!logged\" (click)=\"signUp()\" class=\"invisibleBtn\"> <a routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" routerLink=\"sign\" class=\"btn btn-sm btn-primary\"  ><span class=\"glyphicon glyphicon-log-in\"></span>Sign Up</a></button>\n    <button (click)=\"logOut()\" *ngIf=\"logged\" class=\"btn btn-sm btn-danger\"><span class=\"glyphicon glyphicon-log-out\"></span> Sign out</button>\n    <div *ngIf=\"logged\">User: {{ (userInfo | async)?.username }}</div>\n  </div>\n  <div class=\"title\">\n    <a class=\"title-link\" routerLink=\"home\">\n      <h1 class=\"page-header\">{{header}}</h1>\n    </a>\n  </div>\n  <ul class=\"nav nav-tabs\">\n    <li> <a role=\"presentation\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" routerLink=\"home\">Home</a></li>\n    <!--Remove it if you don't like it-->\n    <div class=\"dropdown\">\n      <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n        aria-expanded=\"true\">\n    Categories\n    <span class=\"caret\"></span>\n  </button>\n      <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n        <li *ngFor=\"let categorie of categories | async\"> <a (click)=\"onSelect(categorie)\"> {{categorie.$key}} </a> </li>\n      </ul>\n    </div>\n  </ul>\n</div>\n<!-- Get info like this <div>{{ (authInfo | async)?.uid }}</div>-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 247:
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\" class=\"col-md-offset-3 col-md-6\">\n  <br>\n  <label class=\"col-md-4 control-label\" for=\"selectbasic\">Categorie</label>\n  <div class=\"col-md-4\">\n    <select required tabindex=\"0\" ngModel id=\"selectbasic\" name=\"selectbasic\" class=\"form-control\">\n      <option *ngFor=\"let categorie of categories | async\"  [selected]=\"categorie.categorie === this.sharedService.categorieToAks && \n      this.sharedService.categorieToAks\">{{categorie.$key}}</option> \n    </select>\n  </div>\n  <br>\n  <br>\n\n  <label for=\"title\">Title</label>\n  <input required ngModel id=\"title\" name=\"title\" type=\"text\" maxlength=\"300\" tabindex=\"1\" placeholder=\"What's your question? Be specific.\"\n    class=\"form-control\" data-min-length=\"15\" data-max-length=\"150\"  autocomplete=\"off\">\n\n  <br>\n  <textarea required ngModel class=\"form-control\" id=\"postText\" class=\"wmd-input processed\" name=\"postText\" cols=\"92\" rows=\"15\" tabindex=\"2\"\n    data-min-length=\"\"></textarea>\n\n  <br>\n  <button tabindex=\"3\" type=\"submit\" [disabled]=\"!f.valid\" class=\"invisibleBtn\">\n    <a class=\"btn btn-primary btn-success\">Post Your Question \n  <span class=\"glyphicon glyphicon-question-sign\"></span></a></button>\n\n</form>\n"

/***/ }),

/***/ 248:
/***/ (function(module, exports) {

module.exports = "<h1>{{clickedCategorie._value[0].path}}</h1>\n<div *ngIf=\"authInfo | async\" class=\"asaide\"><a (click)=\"ask()\" class=\"btn btn-primary btn-primary\"><span class=\"add\"></span> Ask Question</a></div>\n<ul>\n  <li *ngFor=\"let snapshot of snapshots\"><h3> <a (click)=\"onSelect(snapshot)\" >  {{snapshot.title}} </a> </h3> </li> \n</ul>\n"

/***/ }),

/***/ 249:
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li *ngFor=\"let categorie of categories | async\"><h3> <a (click)=\"onSelect(categorie)\" > {{categorie.$key}} </a> </h3> </li> \n</ul>\n\n\n\n"

/***/ }),

/***/ 250:
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\" class=\"col-md-offset-3 col-md-6\">\n  <div *ngIf=\"!this.sharedService.signIn\" class=\"login-box\">\n    <div class=\"alert alert-info\">\n      <strong>You already have an account?</strong>\n    </div>\n    <div class=\"sign-in-div\"><a (click)=\"signIn()\" class=\"btn btn-sm btn-warning\"><span class=\"glyphicon glyphicon-log-in\"></span> Sign In</a></div>\n  </div>\n\n\n  <h2 *ngIf=\"!this.sharedService.signIn\" class=\"page-header\">Sign Up</h2>\n  <h2 *ngIf=\"this.sharedService.signIn\" class=\"page-header\">Sign In</h2>\n  <div *ngIf=\"!f.valid && f.touched\" class=\"alert-danger\">Form is invalid</div>\n  <!--Response from the firebase-->\n  <!--<div class=\"alert-danger\">{{res}}</div>  -->\n  <div *ngIf=\"!this.sharedService.signIn\" class=\"form-group\">\n    <label class=\"form-control\" for=\"username\">Username</label>\n    <input autocomplete=\"on\" required class=\"form-control\" type=\"text\" id=\"username\" name=\"username\" ngModel pattern=\"[A-Za-z0-9\\.]{3,24}\">\n  </div>\n\n  <div class=\"form-group\">\n    <label class=\"form-control\" for=\"email\">Email</label>\n    <input autocomplete=\"on\" required class=\"form-control\" type=\"email\" id=\"email\" name=\"email\" ngModel pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\">\n  </div>\n\n  <div class=\"form-group\">\n    <label class=\"form-control\" for=\"pass\">Password</label>\n    <input required class=\"form-control\" type=\"password\" id=\"pass\" name=\"pass\" ngModel pattern=\"[a-zA-Z0-9\\.-_=<>@#$%^*()+/!]{6,24}\">\n  </div>\n\n  <input *ngIf=\"!this.sharedService.signIn\" class=\"btn btn-primary\" type=\"submit\" value=\"Register\" [disabled]=\"!f.valid\">\n  <input *ngIf=\"this.sharedService.signIn\" class=\"btn btn-primary\" type=\"submit\" value=\"Login\" [disabled]=\"!f.valid\">\n\n</form>\n"

/***/ }),

/***/ 251:
/***/ (function(module, exports) {

module.exports = "<h1>{{topic}}</h1>\nAsked By: {{questionAuthor}}: <textarea autosize class=\"answer\" disabled  cols=\"150\">{{questionText}}</textarea> <hr>\n\n\n<ul>\n  <li *ngFor=\"let ref of answersRefs | async\"><div>{{ref.author}} - {{ref.date | date}}</div> \n  <textarea autosize class=\"answer\" disabled  cols=\"150\">{{ref.text}}</textarea> <hr></li>\n</ul>\n\n<form *ngIf=\"authInfo | async\" (ngSubmit)=\"addPost(f)\" #f=\"ngForm\">\n  <br>\n  <textarea autosize required ngModel class=\"form-control\"  id=\"postText\" class=\"wmd-input processed\" name=\"postText\" cols=\"100\" rows=\"5\"  tabindex=\"1\"\n    data-min-length=\"\"></textarea>\n  <br>\n  <div class=\"btn btn-primary btn-primary\" ><input class=\"post\" type=\"submit\" value=\"Post Your Answer\"></div>\n</form>\n\n"

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SharedService = (function () {
    function SharedService() {
        this.signIn = false;
    }
    return SharedService;
}());
SharedService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SharedService);

//# sourceMappingURL=shared.service.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_auto_ids__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_auto_ids___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_auto_ids__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService(db) {
        this.db = db;
    }
    DataService.prototype.getData = function (path) {
        return this.db.object(path);
    };
    DataService.prototype.getDataList = function (path) {
        return this.db.list(path);
    };
    DataService.prototype.writeQuestion = function (path, question) {
        var generator = new __WEBPACK_IMPORTED_MODULE_2_firebase_auto_ids__["Generator"]();
        path += generator.generate(Date.now());
        var itemObservable = this.db.object(path);
        itemObservable.set({
            author: question.getAuthor(),
            title: question.getTitle(),
            text: question.getText(),
            date: question.getDate()
        });
    };
    DataService.prototype.writeAnswer = function (path, question) {
        var generator = new __WEBPACK_IMPORTED_MODULE_2_firebase_auto_ids__["Generator"]();
        path += generator.generate(Date.now());
        console.log(question.getDate());
        var itemObservable = this.db.object(path);
        itemObservable.set({
            author: question.getAuthor(),
            text: question.getText(),
            date: question.getDate().toString()
        });
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// From here to get to db o work with users
var UsersService = (function () {
    function UsersService(db, afAuth) {
        var _this = this;
        this.db = db;
        this.afAuth = afAuth;
        this.authInfo = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["BehaviorSubject"](undefined);
        this.afAuth.auth.onAuthStateChanged(function (authInfo) { return _this.authInfo.next(authInfo); });
    }
    UsersService.prototype.login = function (email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    };
    UsersService.prototype.logout = function () {
        return this.afAuth.auth.signOut();
    };
    UsersService.prototype.register = function (email, password, username) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(function (user) {
            writeUserData(user.uid, username, email);
            user.updateProfile({ displayName: username, photoURL: '' });
        });
        function writeUserData(userId, _name, _email) {
            __WEBPACK_IMPORTED_MODULE_4_firebase_app__["database"]().ref('/users/' + userId).set({
                username: _name,
                email: _email,
            });
        }
    };
    return UsersService;
}());
UsersService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _b || Object])
], UsersService);

var _a, _b;
//# sourceMappingURL=users.service.js.map

/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(158);


/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyCeCoX2JOeSKs7wtdJKW-SXT3kHSqSjl7c',
        authDomain: 'forum-system.firebaseapp.com',
        databaseURL: 'https://forum-system.firebaseio.com',
        projectId: 'forum-system',
        storageBucket: 'forum-system.appspot.com',
        messagingSenderId: '79463840610'
    }
};
//# sourceMappingURL=environment.js.map

/***/ })

},[518]);
//# sourceMappingURL=main.bundle.js.map