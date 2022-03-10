(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/my/Documents/GitHub/Medical-ManagementSystem/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "47Jg":
    /*!**********************************************!*\
      !*** ./src/app/sidebar/sidebar.component.ts ***!
      \**********************************************/

    /*! exports provided: ROUTES, SidebarComponent */

    /***/
    function Jg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
        return ROUTES;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
        return SidebarComponent;
      });
      /* harmony import */


      var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "zvoc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! app/services/auth.service */
      "lGQG");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      }; //Menu Items


      var ROUTES = [{
        path: '/dashboard',
        title: 'Dashboard',
        type: 'link',
        icontype: 'nc-icon nc-bank'
      }, {
        path: '/components',
        title: 'Components',
        type: 'sub',
        collapse: 'components',
        icontype: 'nc-icon nc-layout-11',
        children: [{
          path: 'buttons',
          title: 'Buttons',
          ab: 'B'
        }, {
          path: 'grid',
          title: 'Grid System',
          ab: 'GS'
        }, {
          path: 'panels',
          title: 'Panels',
          ab: 'P'
        }, {
          path: 'sweet-alert',
          title: 'Sweet Alert',
          ab: 'SA'
        }, {
          path: 'notifications',
          title: 'Notifications',
          ab: 'N'
        }, {
          path: 'icons',
          title: 'Icons',
          ab: 'I'
        }, {
          path: 'typography',
          title: 'Typography',
          ab: 'T'
        }]
      }, {
        path: '/forms',
        title: 'Forms',
        type: 'sub',
        collapse: 'forms',
        icontype: 'nc-icon nc-ruler-pencil',
        children: [{
          path: 'regular',
          title: 'Regular Forms',
          ab: 'RF'
        }, {
          path: 'extended',
          title: 'Extended Forms',
          ab: 'EF'
        }, {
          path: 'validation',
          title: 'Validation Forms',
          ab: 'VF'
        }, {
          path: 'wizard',
          title: 'Wizard',
          ab: 'W'
        }]
      }, {
        path: '/tables',
        title: 'Tables',
        type: 'sub',
        collapse: 'tables',
        icontype: 'nc-icon nc-single-copy-04',
        children: [{
          path: 'regular',
          title: 'Regular Tables',
          ab: 'RT'
        }, {
          path: 'extended',
          title: 'Extended Tables',
          ab: 'ET'
        }, {
          path: 'datatables.net',
          title: 'Datatables.net',
          ab: 'DT'
        }]
      }, {
        path: '/maps',
        title: 'Maps',
        type: 'sub',
        collapse: 'maps',
        icontype: 'nc-icon nc-pin-3',
        children: [{
          path: 'google',
          title: 'Google Maps',
          ab: 'GM'
        }, {
          path: 'fullscreen',
          title: 'Full Screen Map',
          ab: 'FSM'
        }, {
          path: 'vector',
          title: 'Vector Map',
          ab: 'VM'
        }]
      }, {
        path: '/widgets',
        title: 'Widgets',
        type: 'link',
        icontype: 'nc-icon nc-box'
      }, {
        path: '/charts',
        title: 'Charts',
        type: 'link',
        icontype: 'nc-icon nc-chart-bar-32'
      }, {
        path: '/calendar',
        title: 'Calendar',
        type: 'link',
        icontype: 'nc-icon nc-calendar-60'
      }, {
        path: '/pages',
        title: 'Pages',
        collapse: 'pages',
        type: 'sub',
        icontype: 'nc-icon nc-book-bookmark',
        children: [{
          path: 'timeline',
          title: 'Timeline Page',
          ab: 'T'
        }, {
          path: 'user',
          title: 'User Page',
          ab: 'UP'
        }, {
          path: 'login',
          title: 'Login Page',
          ab: 'LP'
        }, {
          path: 'register',
          title: 'Register Page',
          ab: 'RP'
        }, {
          path: 'lock',
          title: 'Lock Screen Page',
          ab: 'LSP'
        }]
      }];

      var SidebarComponent = /*#__PURE__*/function () {
        function SidebarComponent(auth) {
          _classCallCheck(this, SidebarComponent);

          this.auth = auth;
          this.username = '';
        }

        _createClass(SidebarComponent, [{
          key: "isNotMobileMenu",
          value: function isNotMobileMenu() {
            if (window.outerWidth > 991) {
              return false;
            }

            return true;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            // this.data = this.auth.getUser();
            // this.username = this.data.username
            this.menuItems = ROUTES.filter(function (menuItem) {
              return menuItem;
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }, {
          key: "logout",
          value: function logout() {
            this.auth.logout();
          }
        }]);

        return SidebarComponent;
      }();

      SidebarComponent.ctorParameters = function () {
        return [{
          type: app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      };

      SidebarComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sidebar-cmp',
        template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
      }), __metadata("design:paramtypes", [app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])], SidebarComponent);
      /***/
    },

    /***/
    "550G":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/fixedplugin/fixedplugin.component.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"fixed-plugin\">\n    <div class=\"dropdown\">\n        <a href=\"javascript:void(0)\" data-toggle=\"dropdown\">\n        <i class=\"fa fa-cog fa-2x\"> </i>\n        </a>\n        <ul class=\"dropdown-menu\">\n            <li class=\"header-title\">Sidebar Background</li>\n            <li class=\"adjustments-line text-center\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger background-color\">\n                  <span class=\"badge filter badge-default\" data-color=\"brown\"></span>\n                  <span class=\"badge filter badge-light\" data-color=\"white\"></span>\n                </a>\n            </li>\n\n            <li class=\"header-title\">Sidebar Active Color</li>\n            <li class=\"adjustments-line text-center\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger active-color\">\n                    <span class=\"badge filter badge-primary\" data-color=\"primary\"></span>\n                    <span class=\"badge filter badge-info\" data-color=\"info\"></span>\n                    <span class=\"badge filter badge-success\" data-color=\"success\"></span>\n                    <span class=\"badge filter badge-warning\" data-color=\"warning\"></span>\n                    <span class=\"badge filter badge-danger active\" data-color=\"danger\"></span>\n                </a>\n            </li>\n        </ul>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "5My1":
    /*!**********************************************************!*\
      !*** ./src/app/shared/fixedplugin/fixedplugin.module.ts ***!
      \**********************************************************/

    /*! exports provided: FixedPluginModule */

    /***/
    function My1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FixedPluginModule", function () {
        return FixedPluginModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _fixedplugin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./fixedplugin.component */
      "Pqk8");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var FixedPluginModule = /*#__PURE__*/_createClass(function FixedPluginModule() {
        _classCallCheck(this, FixedPluginModule);
      });

      FixedPluginModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        declarations: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_3__["FixedPluginComponent"]],
        exports: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_3__["FixedPluginComponent"]]
      })], FixedPluginModule);
      /***/
    },

    /***/
    "A3xY":
    /*!***********************************!*\
      !*** ./src/app/app.component.css ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function A3xY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment, baseUrl, headers, captchaKey */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "baseUrl", function () {
        return baseUrl;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "headers", function () {
        return headers;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "captchaKey", function () {
        return captchaKey;
      }); // The file contents for the current environment will overwrite these during build.
      // The build system defaults to the dev environment which uses `environment.ts`, but if you do
      // `ng build --env=prod` then `environment.prod.ts` will be used instead.
      // The list of which env maps to which file can be found in `.angular-cli.json`.


      var environment = {
        recaptchaSitekey: '6LdhHnodAAAAANT35rUOPEZ0TnF31D6qOqSfby81',
        production: false
      }; // export const baseUrl1 = 'https://api.vcdplans.com/';
      // export const baseUrl = 'http://206.189.144.99:8000';

      var baseUrl = 'http://165.227.11.15';
      var headers = {
        'Content-Type': 'application/json'
      };
      var captchaKey = '6LdhHnodAAAAANT35rUOPEZ0TnF31D6qOqSfby81';
      /***/
    },

    /***/
    "CpO+":
    /*!************************************************!*\
      !*** ./src/app/shared/navbar/navbar.module.ts ***!
      \************************************************/

    /*! exports provided: NavbarModule */

    /***/
    function CpO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarModule", function () {
        return NavbarModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./navbar.component */
      "EtQq");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var NavbarModule = /*#__PURE__*/_createClass(function NavbarModule() {
        _classCallCheck(this, NavbarModule);
      });

      NavbarModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]],
        exports: [_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]]
      })], NavbarModule);
      /***/
    },

    /***/
    "EtQq":
    /*!***************************************************!*\
      !*** ./src/app/shared/navbar/navbar.component.ts ***!
      \***************************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function EtQq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "zRkE");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../.././sidebar/sidebar.component */
      "47Jg");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/services/auth.service */
      "lGQG");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var misc = {
        navbar_menu_visible: 0,
        active_collapse: true,
        disabled_collapse_init: 0
      };

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent(location, renderer, element, router, auth) {
          _classCallCheck(this, NavbarComponent);

          this.renderer = renderer;
          this.element = element;
          this.router = router;
          this.auth = auth;
          this.open = false;
          this.location = location;
          this.nativeElement = element.nativeElement;
          this.sidebarVisible = false;
        }

        _createClass(NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].filter(function (listTitle) {
              return listTitle;
            });
            var navbar = this.element.nativeElement;
            var body = document.getElementsByTagName('body')[0];
            this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];

            if (body.classList.contains('sidebar-mini')) {
              misc.sidebar_mini_active = true;
            }

            this._router = this.router.events.filter(function (event) {
              return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"];
            }).subscribe(function (event) {
              var $layer = document.getElementsByClassName('close-layer')[0];

              if ($layer) {
                $layer.remove();
              }
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            this.auth.logout();
          }
        }, {
          key: "minimizeSidebar",
          value: function minimizeSidebar() {
            var body = document.getElementsByTagName('body')[0];

            if (misc.sidebar_mini_active === true) {
              body.classList.remove('sidebar-mini');
              misc.sidebar_mini_active = false;
            } else {
              setTimeout(function () {
                body.classList.add('sidebar-mini');
                misc.sidebar_mini_active = true;
              }, 300);
            } // we simulate the window Resize so the charts will get updated in realtime.


            var simulateWindowResize = setInterval(function () {
              window.dispatchEvent(new Event('resize'));
            }, 180); // we stop the simulation of Window Resize after the animations are completed

            setTimeout(function () {
              clearInterval(simulateWindowResize);
            }, 1000);
          }
        }, {
          key: "isMobileMenu",
          value: function isMobileMenu() {
            if (window.outerWidth < 991) {
              return false;
            }

            return true;
          }
        }, {
          key: "sidebarOpen",
          value: function sidebarOpen() {
            var toggleButton = this.toggleButton;
            var html = document.getElementsByTagName('html')[0];
            setTimeout(function () {
              toggleButton.classList.add('toggled');
            }, 500);
            var mainPanel = document.getElementsByClassName('main-panel')[0];

            if (window.innerWidth < 991) {
              mainPanel.style.position = 'fixed';
            }

            html.classList.add('nav-open');
            this.sidebarVisible = true;
          }
        }, {
          key: "sidebarClose",
          value: function sidebarClose() {
            var html = document.getElementsByTagName('html')[0];
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            html.classList.remove('nav-open');
            var mainPanel = document.getElementsByClassName('main-panel')[0];

            if (window.innerWidth < 991) {
              setTimeout(function () {
                mainPanel.style.position = '';
              }, 500);
            }
          }
        }, {
          key: "sidebarToggle",
          value: function sidebarToggle() {
            // var toggleButton = this.toggleButton;
            // var body = document.getElementsByTagName('body')[0];
            if (this.sidebarVisible == false) {
              this.sidebarOpen();
            } else {
              this.sidebarClose();
            }
          }
        }, {
          key: "getTitle",
          value: function getTitle() {
            var titlee = this.location.prepareExternalUrl(this.location.path());

            if (titlee.charAt(0) === '#') {
              titlee = titlee.slice(1);
            }

            for (var item = 0; item < this.listTitles.length; item++) {
              var parent = this.listTitles[item];

              if (parent.path === titlee) {
                return parent.title;
              } else if (parent.children) {
                var children_from_url = titlee.split("/")[2];

                for (var current = 0; current < parent.children.length; current++) {
                  if (parent.children[current].path === children_from_url) {
                    return parent.children[current].title;
                  }
                }
              }
            }

            return 'Dashboard';
          }
        }, {
          key: "getPath",
          value: function getPath() {
            // console.log(this.location);
            return this.location.prepareExternalUrl(this.location.path());
          }
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }];
      };

      NavbarComponent.propDecorators = {
        button: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ["navbar-cmp", {
            "static": false
          }]
        }]
      };
      NavbarComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'navbar-cmp',
        template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
      }), __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])], NavbarComponent);
      /***/
    },

    /***/
    "OiN0":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin/admin-layout.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function OiN0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color=\"brown\" data-active-color=\"danger\">\n        <sidebar-cmp></sidebar-cmp>\n    </div>\n    <div class=\"main-panel\">\n        <navbar-cmp></navbar-cmp>\n        <router-outlet></router-outlet>\n        <div *ngIf=\"!isMap()\">\n            <footer-cmp></footer-cmp>\n        </div>\n    </div>\n\n</div>\n";
      /***/
    },

    /***/
    "Pqk8":
    /*!*************************************************************!*\
      !*** ./src/app/shared/fixedplugin/fixedplugin.component.ts ***!
      \*************************************************************/

    /*! exports provided: FixedPluginComponent */

    /***/
    function Pqk8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FixedPluginComponent", function () {
        return FixedPluginComponent;
      });
      /* harmony import */


      var _raw_loader_fixedplugin_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./fixedplugin.component.html */
      "550G");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var FixedPluginComponent = /*#__PURE__*/function () {
        function FixedPluginComponent() {
          _classCallCheck(this, FixedPluginComponent);
        }

        _createClass(FixedPluginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var $sidebar = $('.sidebar');
            var $off_canvas_sidebar = $('.off-canvas-sidebar');
            var window_width = window.outerWidth;

            if (window_width > 767) {
              if ($('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
                $('.fixed-plugin .dropdown').addClass('open');
              }
            }

            $('.fixed-plugin a').click(function (event) {
              // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
              if ($(this).hasClass('switch-trigger')) {
                if (event.stopPropagation) {
                  event.stopPropagation();
                } else if (window.event) {
                  window.event.cancelBubble = true;
                }
              }
            });
            $('.fixed-plugin .background-color span').click(function () {
              $(this).siblings().removeClass('active');
              $(this).addClass('active');
              var new_color = $(this).data('color');

              if ($sidebar.length != 0) {
                $sidebar.attr('data-color', new_color);
              }

              if ($off_canvas_sidebar.length != 0) {
                $off_canvas_sidebar.attr('data-color', new_color);
              }
            });
            $('.fixed-plugin .active-color span').click(function () {
              $(this).siblings().removeClass('active');
              $(this).addClass('active');
              var new_color = $(this).data('color');

              if ($sidebar.length != 0) {
                $sidebar.attr('data-active-color', new_color);
              }

              if ($off_canvas_sidebar.length != 0) {
                $off_canvas_sidebar.attr('data-active-color', new_color);
              }
            });
          }
        }]);

        return FixedPluginComponent;
      }();

      FixedPluginComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'fixedplugin-cmp',
        template: _raw_loader_fixedplugin_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
      })], FixedPluginComponent);
      /***/
    },

    /***/
    "QpQ6":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth/auth-layout.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function QpQ6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n  <router-outlet></router-outlet>\n";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component.css */
      "A3xY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
        _classCallCheck(this, AppComponent);
      });

      AppComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
      /***/
    },

    /***/
    "WDth":
    /*!**************************************************!*\
      !*** ./src/app/services/authentication.guard.ts ***!
      \**************************************************/

    /*! exports provided: AuthenticationGuard */

    /***/
    function WDth(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function () {
        return AuthenticationGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth.service */
      "lGQG");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var AuthenticationGuard = /*#__PURE__*/function () {
        function AuthenticationGuard(auth, router) {
          _classCallCheck(this, AuthenticationGuard);

          this.auth = auth;
          this.router = router;
        }

        _createClass(AuthenticationGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            if (this.auth.isAuthenticated()) {
              return true;
            } else {
              this.router.navigateByUrl('/login');
            }
          }
        }]);

        return AuthenticationGuard;
      }();

      AuthenticationGuard.ctorParameters = function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      };

      AuthenticationGuard = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], AuthenticationGuard);
      /***/
    },

    /***/
    "Y2kJ":
    /*!**************************************************!*\
      !*** ./src/app/services/can-deacticate.guard.ts ***!
      \**************************************************/

    /*! exports provided: CanDeacticateGuard */

    /***/
    function Y2kJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CanDeacticateGuard", function () {
        return CanDeacticateGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth.service */
      "lGQG");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var CanDeacticateGuard = /*#__PURE__*/function () {
        function CanDeacticateGuard(authService, router) {
          _classCallCheck(this, CanDeacticateGuard);

          this.authService = authService;
          this.router = router;
        }

        _createClass(CanDeacticateGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            if (this.authService.isAuthenticated()) {
              this.router.navigateByUrl('/dashboard');
              return false;
            } else {
              return true;
            }
          }
        }]);

        return CanDeacticateGuard;
      }();

      CanDeacticateGuard.ctorParameters = function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      };

      CanDeacticateGuard = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], CanDeacticateGuard);
      /***/
    },

    /***/
    "YGuC":
    /*!*********************************************************!*\
      !*** ./src/app/layouts/admin/admin-layout.component.ts ***!
      \*********************************************************/

    /*! exports provided: AdminLayoutComponent */

    /***/
    function YGuC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function () {
        return AdminLayoutComponent;
      });
      /* harmony import */


      var _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./admin-layout.component.html */
      "OiN0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/add/operator/filter */
      "fjAU");
      /* harmony import */


      var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../shared/navbar/navbar.component */
      "EtQq");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! perfect-scrollbar */
      "t/UT");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var AdminLayoutComponent = /*#__PURE__*/function () {
        function AdminLayoutComponent(router, location) {
          _classCallCheck(this, AdminLayoutComponent);

          this.router = router;
          this.yScrollStack = [];
          this.location = location;
        }

        _createClass(AdminLayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            var elemMainPanel = document.querySelector('.main-panel');
            var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
            this.location.subscribe(function (ev) {
              _this.lastPoppedUrl = ev.url;
            });
            this.router.events.subscribe(function (event) {
              if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationStart"]) {
                if (event.url != _this.lastPoppedUrl) _this.yScrollStack.push(window.scrollY);
              } else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]) {
                if (event.url == _this.lastPoppedUrl) {
                  _this.lastPoppedUrl = undefined;
                  window.scrollTo(0, _this.yScrollStack.pop());
                } else window.scrollTo(0, 0);
              }
            });
            this._router = this.router.events.filter(function (event) {
              return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"];
            }).subscribe(function (event) {
              elemMainPanel.scrollTop = 0;
              elemSidebar.scrollTop = 0;
            });
            var html = document.getElementsByTagName('html')[0];

            if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
              var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemMainPanel);
              ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemSidebar);
              html.classList.add('perfect-scrollbar-on');
            } else {
              html.classList.add('perfect-scrollbar-off');
            }

            this._router = this.router.events.filter(function (event) {
              return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"];
            }).subscribe(function (event) {
              _this.navbar.sidebarClose();
            });
          }
        }, {
          key: "isMap",
          value: function isMap() {
            // console.log(this.location.prepareExternalUrl(this.location.path()));
            if (this.location.prepareExternalUrl(this.location.path()) == '#/maps/fullscreen') {
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "isMac",
          value: function isMac() {
            var bool = false;

            if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
              bool = true;
            }

            return bool;
          }
        }]);

        return AdminLayoutComponent;
      }();

      AdminLayoutComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
        }];
      };

      AdminLayoutComponent.propDecorators = {
        sidebar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['sidebar', {
            "static": false
          }]
        }],
        navbar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], {
            "static": false
          }]
        }]
      };
      AdminLayoutComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-layout',
        template: _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
      }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])], AdminLayoutComponent);
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./sidebar/sidebar.module */
      "wCP4");
      /* harmony import */


      var _shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./shared/fixedplugin/fixedplugin.module */
      "5My1");
      /* harmony import */


      var _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./shared/footer/footer.module */
      "cNqA");
      /* harmony import */


      var _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./shared/navbar/navbar.module */
      "CpO+");
      /* harmony import */


      var _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./layouts/admin/admin-layout.component */
      "YGuC");
      /* harmony import */


      var _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./layouts/auth/auth-layout.component */
      "le+r");
      /* harmony import */


      var _app_routing__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./app.routing */
      "beVS");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-cookie-service */
      "b6Qw");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var AppModule = /*#__PURE__*/_createClass(function AppModule() {
        _classCallCheck(this, AppModule);
      });

      AppModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_13__["AppRoutes"], {
          useHash: true
        }), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_7__["SidebarModule"], _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_10__["NavbarModule"], _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_9__["FooterModule"], _shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_8__["FixedPluginModule"]],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_11__["AdminLayoutComponent"], _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_12__["AuthLayoutComponent"]],
        providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_14__["CookieService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "beVS":
    /*!********************************!*\
      !*** ./src/app/app.routing.ts ***!
      \********************************/

    /*! exports provided: AppRoutes */

    /***/
    function beVS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutes", function () {
        return AppRoutes;
      });
      /* harmony import */


      var _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./layouts/admin/admin-layout.component */
      "YGuC");
      /* harmony import */


      var _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./layouts/auth/auth-layout.component */
      "le+r");
      /* harmony import */


      var _services_can_deacticate_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./services/can-deacticate.guard */
      "Y2kJ");
      /* harmony import */


      var _services_authentication_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./services/authentication.guard */
      "WDth");

      var AppRoutes = [{
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }, {
        path: '',
        component: _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__["AdminLayoutComponent"],
        canActivate: [_services_authentication_guard__WEBPACK_IMPORTED_MODULE_3__["AuthenticationGuard"]],
        children: [{
          path: '',
          loadChildren: './dashboard/dashboard.module#DashboardModule'
        }, {
          path: 'components',
          loadChildren: './components/components.module#ComponentsModule'
        }, {
          path: 'forms',
          loadChildren: './forms/forms.module#Forms'
        }, {
          path: 'tables',
          loadChildren: './tables/tables.module#TablesModule'
        }, {
          path: 'maps',
          loadChildren: './maps/maps.module#MapsModule'
        }, {
          path: 'charts',
          loadChildren: './charts/charts.module#ChartsModule'
        }, {
          path: 'calendar',
          loadChildren: './calendar/calendar.module#CalendarModule'
        }, {
          path: '',
          loadChildren: './userpage/user.module#UserModule'
        }, {
          path: '',
          loadChildren: './timeline/timeline.module#TimelineModule'
        }, {
          path: '',
          loadChildren: './widgets/widgets.module#WidgetsModule'
        }]
      }, {
        path: '',
        component: _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__["AuthLayoutComponent"],
        canActivate: [_services_can_deacticate_guard__WEBPACK_IMPORTED_MODULE_2__["CanDeacticateGuard"]],
        children: [{
          path: '',
          loadChildren: './pages/pages.module#PagesModule'
        }]
      }];
      /***/
    },

    /***/
    "cNqA":
    /*!************************************************!*\
      !*** ./src/app/shared/footer/footer.module.ts ***!
      \************************************************/

    /*! exports provided: FooterModule */

    /***/
    function cNqA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterModule", function () {
        return FooterModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./footer.component */
      "jQpT");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var FooterModule = /*#__PURE__*/_createClass(function FooterModule() {
        _classCallCheck(this, FooterModule);
      });

      FooterModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
        exports: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]]
      })], FooterModule);
      /***/
    },

    /***/
    "crnd":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function crnd(module, exports, __webpack_require__) {
      var map = {
        "./calendar/calendar.module": ["O51e", "default~calendar-calendar-module~components-components-module", "calendar-calendar-module"],
        "./charts/charts.module": ["eGC9", "charts-charts-module"],
        "./components/components.module": ["j1ZV", "default~calendar-calendar-module~components-components-module", "components-components-module"],
        "./dashboard/dashboard.module": ["TDBs", "default~dashboard-dashboard-module~forms-forms-module", "dashboard-dashboard-module"],
        "./forms/forms.module": ["9Nm5", "default~dashboard-dashboard-module~forms-forms-module", "forms-forms-module"],
        "./maps/maps.module": ["x04h", "maps-maps-module"],
        "./pages/pages.module": ["dgmN", "pages-pages-module"],
        "./tables/tables.module": ["w7GV", "tables-tables-module"],
        "./timeline/timeline.module": ["WQCU", "timeline-timeline-module"],
        "./userpage/user.module": ["hU7q", "userpage-user-module"],
        "./widgets/widgets.module": ["3QYm", "widgets-widgets-module"]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "crnd";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "jGP6":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function jGP6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<footer class=\"footer\">\n    <div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n            <ul>\n\n                <li>\n                    <a href=\"#\">\n                        Creative Tim\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                       Blog\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        Licenses\n                    </a>\n                </li>\n            </ul>\n        </nav>\n        <div class=\"copyright pull-right\">\n            &copy; {{test | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by <a href=\"#\">Creative Tim</a>\n        </div>\n    </div>\n</footer>\n";
      /***/
    },

    /***/
    "jQpT":
    /*!***************************************************!*\
      !*** ./src/app/shared/footer/footer.component.ts ***!
      \***************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function jQpT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./footer.component.html */
      "jGP6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var FooterComponent = /*#__PURE__*/_createClass(function FooterComponent() {
        _classCallCheck(this, FooterComponent);

        this.test = new Date();
      });

      FooterComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'footer-cmp',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
      })], FooterComponent);
      /***/
    },

    /***/
    "lGQG":
    /*!******************************************!*\
      !*** ./src/app/services/auth.service.ts ***!
      \******************************************/

    /*! exports provided: AuthService */

    /***/
    function lGQG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-cookie-service */
      "b6Qw");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var AuthService = /*#__PURE__*/function () {
        function AuthService(router, cookies) {
          _classCallCheck(this, AuthService);

          this.router = router;
          this.cookies = cookies;
          this.user = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
          this.token = null;
          this.jwt = null;
          this.refreshToken = null; // const tokenData = localStorage.getItem('token');
          // const jwtData = this.cookies.get('jwt')
          // console.log(jwtData)
          // this.refreshToken = localStorage.getItem('refreshToken');
          // if (jwtData) {
          //   this.jwt = jwtData;
          //   console.log(this.jwt)
          // }
          // const userData = localStorage.getItem('user');
          // if (userData) {
          //   const parsedData = JSON.parse(userData);
          //   if (parsedData) {
          //     this.setUser(parsedData);
          //   }
          // }
        } // Check user is Authenticate or not


        _createClass(AuthService, [{
          key: "isAuthenticated",
          value: function isAuthenticated() {
            var tokenData = localStorage.getItem('token');

            if (tokenData == null) {
              return false;
            } else {
              return true;
            }
          } // Set Token

        }, {
          key: "setToken",
          value: function setToken(token) {
            this.token = token;
            localStorage.setItem('token', token);
          } // public setToken(token:string): void {
          //   this.token = token;
          //   this.cookies.set('token', token);
          // }
          //Get Access Token
          // public setJwt(jwt:string): void {
          //   this.jwt = jwt;
          //   this.cookies.set('jwt', jwt);
          //   console.log(this.cookies, 'set in cookes')
          //   console.log(this.jwt, 'store in jwt')
          // }

        }, {
          key: "getAccessToken",
          value: function getAccessToken() {
            console.log(this.jwt);

            if (this.jwt) {
              console.log(this.jwt);
              return this.jwt;
            } else {
              return null;
            }
          }
        }, {
          key: "setRefreshToken",
          value: function setRefreshToken(Reftoken) {
            this.refreshToken = Reftoken;
            localStorage.setItem('refreshToken', Reftoken);
          }
        }, {
          key: "getRefreshToken",
          value: function getRefreshToken() {
            if (this.refreshToken) {
              return this.refreshToken;
            } else {
              return null;
            }
          } //  Set User

        }, {
          key: "setUser",
          value: function setUser(user) {
            this.user.next(user);
            localStorage.setItem('user', JSON.stringify(user));
          }
          /**
           * Get user
           */

        }, {
          key: "getUser",
          value: function getUser() {
            var user = this.user.getValue();

            if (user) {
              return user;
            } else {
              return {};
            }
          }
          /**
          * Logout
          */

        }, {
          key: "logout",
          value: function logout() {
            var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            localStorage.removeItem('token');
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('user');
            this.token = null;
            this.user.next(null);

            if (url) {
              this.router.navigateByUrl('/login');
            }
          }
          /**
           * Get auth user username
           */

        }, {
          key: "getUserfname",
          value: function getUserfname() {
            var user = this.user.getValue();

            if (user) {
              return user.fullname;
            } else {
              return null;
            }
          } // Get User EmailAddress

        }, {
          key: "getUseremail",
          value: function getUseremail() {
            var user = this.user.getValue();

            if (user) {
              return user.email;
            } else {
              return null;
            }
          } //Get User username

        }, {
          key: "getUsername",
          value: function getUsername() {
            var user = this.user.getValue();

            if (user) {
              return user.username;
            } else {
              return null;
            }
          } // Generate and Get DeviceID

        }, {
          key: "getDeviceID",
          value: function getDeviceID() {
            if (localStorage.getItem('deviceID')) {
              var deviceID = localStorage.getItem('deviceID');
              return deviceID;
            } else {
              var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

              var _deviceID = [].concat(_toConsumableArray(crypto.getRandomValues(new Uint8Array(32))), _toConsumableArray(crypto.getRandomValues(new Uint8Array(32)))).map(function (v) {
                return chars[v % chars.length];
              }).join('');

              localStorage.setItem('deviceID', _deviceID);
              return _deviceID;
            }
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]
        }];
      };

      AuthService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])], AuthService);
      /***/
    },

    /***/
    "le+r":
    /*!*******************************************************!*\
      !*** ./src/app/layouts/auth/auth-layout.component.ts ***!
      \*******************************************************/

    /*! exports provided: AuthLayoutComponent */

    /***/
    function leR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function () {
        return AuthLayoutComponent;
      });
      /* harmony import */


      var _raw_loader_auth_layout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./auth-layout.component.html */
      "QpQ6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var AuthLayoutComponent = /*#__PURE__*/_createClass(function AuthLayoutComponent() {
        _classCallCheck(this, AuthLayoutComponent);
      });

      AuthLayoutComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-layout',
        template: _raw_loader_auth_layout_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
      })], AuthLayoutComponent);
      /***/
    },

    /***/
    "wCP4":
    /*!*******************************************!*\
      !*** ./src/app/sidebar/sidebar.module.ts ***!
      \*******************************************/

    /*! exports provided: SidebarModule */

    /***/
    function wCP4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarModule", function () {
        return SidebarModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sidebar.component */
      "47Jg");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var SidebarModule = /*#__PURE__*/_createClass(function SidebarModule() {
        _classCallCheck(this, SidebarModule);
      });

      SidebarModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]],
        declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]],
        exports: [_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]]
      })], SidebarModule);
      /***/
    },

    /***/
    "zRkE":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function zRkE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nav #navbar class=\"navbar navbar-expand-lg navbar-absolute\" [ngClass]=\"{ 'bg-white': open === true , 'navbar-transparent': open === false}\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-wrapper\">\n      <div class=\"navbar-minimize\">\n        <button id=\"minimizeSidebar\" class=\"btn btn-icon btn-round\" (click)=\"minimizeSidebar()\">\n          <i class=\"nc-icon nc-minimal-right text-center visible-on-sidebar-mini\"></i>\n          <i class=\"nc-icon nc-minimal-left text-center visible-on-sidebar-regular\"></i>\n        </button>\n      </div>\n      <div class=\"navbar-toggle\" (click)=\"sidebarToggle()\">\n        <button type=\"button\" class=\"navbar-toggler\">\n          <span class=\"navbar-toggler-bar bar1\"></span>\n          <span class=\"navbar-toggler-bar bar2\"></span>\n          <span class=\"navbar-toggler-bar bar3\"></span>\n        </button>\n      </div>\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">{{getTitle()}}</a>\n    </div>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navigation\" aria-controls=\"navigation-index\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"open = !open\">\n\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\n      <form>\n        <div class=\"input-group no-border\">\n          <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n          <div class=\"input-group-append\">\n            <div class=\"input-group-text\">\n              <i class=\"nc-icon nc-zoom-split\"></i>\n            </div>\n          </div>\n        </div>\n      </form>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link btn-magnify\" href=\"javascript:void(0)\">\n            <i class=\"nc-icon nc-layout-11\"></i>\n            <p>\n              <span class=\"d-lg-none d-md-block\">Stats</span>\n            </p>\n          </a>\n        </li>\n        <li class=\"nav-item btn-rotate dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"pablo\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <i class=\"nc-icon nc-bell-55\"></i>\n            <p>\n              <span class=\"d-lg-none d-md-block\">Some Actions</span>\n            </p>\n          </a>\n          <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"logout()\">Something else here</a>\n          </div>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link btn-rotate\" href=\"javascript:void(0)\">\n            <i class=\"nc-icon nc-settings-gear-65\"></i>\n            <p>\n              <span class=\"d-lg-none d-md-block\">Account</span>\n            </p>\n          </a>\n        </li>\n        <!-- <li class=\"nav-item\">\n          <a href=\"javascript:void(0)\">\n            <div class=\"form-group\">\n              <div class=\"form-check\" style=\"text-align: right; padding-top: 0px;  border: 1px solid #f7c559; border-radius: 50px; padding-right: 27px; background-color: #F2A744; color: #000; margin-top: 7px; font-weight: 500;\">\n                <label class=\"form-check-label\">\n                  <input class=\"form-btn-log\" type=\"checkbox\" value=\"\" checked=\"\" (click)=\"logout()\">\n                  Logout\n                </label>\n                <br>\n            </div>\n            </div>\n          </a>\n        </li> -->\n      </ul>\n    </div>\n  </div>\n</nav>\n\n \n  \n  \n  \n  \n  \n";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /*!
      
       =========================================================
       * Paper Dashboard Pro Angular - v1.4.0
       =========================================================
      
       * Product Page: #/product/paper-dashboard-pro-angular
       * Copyright 2020 Creative Tim (http://www.creative-tim.com)
      
       =========================================================
      
       * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
       */


      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
      /***/
    },

    /***/
    "zvoc":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function zvoc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<div class=\"logo\">\n\t<a href=\"#\" class=\"simple-text logo-mini\">\n        <div class=\"logo-image-small\">\n            <img src=\"./assets/img/angular2-logo-white.png\"/>\n        </div>\n\t</a>\n\n\t<a href=\"#\" class=\"simple-text logo-normal\">\n\t\tCreative Tim\n\t</a>\n</div>\n\n\n<div class=\"sidebar-wrapper\">\n\n  <div class=\"user\">\n    <div class=\"photo\">\n      <img src=\"./assets/img/faces/ayo-ogunseinde-2.jpg\" />\n    </div>\n    <div class=\"info\">\n      <a data-toggle=\"collapse\" href=\"#collapseExample\" class=\"collapsed\">\n        <span>\n          {{username}}\n          <b class=\"caret\"></b>\n        </span>\n      </a>\n      <div class=\"clearfix\"></div>\n      <div class=\"collapse\" id=\"collapseExample\">\n        <ul class=\"nav\">\n          <li>\n            <a href=\"#/user\">\n              <span class=\"sidebar-mini-icon\">MP</span>\n              <span class=\"sidebar-normal\">My Profile</span>\n            </a>\n          </li>\n          <!-- <li>\n            <a href=\"javascript:void(0)\">\n              <span class=\"sidebar-mini-icon\">EP</span>\n              <span class=\"sidebar-normal\">Edit Profile</span>\n            </a>\n          </li> -->\n          <li>\n            <a href=\"javascript:void(0)\">\n              <span class=\"sidebar-mini-icon\">S</span>\n              <span class=\"sidebar-normal\">Settings</span>\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0)\" (click)='logout()'>\n              <span class=\"sidebar-mini-icon\">L</span>\n              <span class=\"sidebar-normal\">Logout</span>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n\t<!-- <div *ngIf=\"isNotMobileMenu()\">\n        <form class=\"navbar-form navbar-left navbar-search-form\" role=\"search\">\n            <div class=\"input-group\">\n                <span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span>\n                <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n            </div>\n        </form>\n        <ul class=\"nav nav-mobile-menu\">\n            <li>\n                <a href=\"#stats\" class=\"dropdown-toggle btn-magnify\" data-toggle=\"dropdown\">\n                    <i class=\"ti-panel\"></i>\n                    <p>Stats</p>\n                </a>\n            </li>\n            <li class=\"dropdown\">\n                <a href=\"#notifications\" class=\"dropdown-toggle btn-rotate\" data-toggle=\"dropdown\">\n                    <i class=\"ti-bell\"></i>\n                    <span class=\"notification\">5</span>\n                    <p class=\"hidden-md hidden-lg\">\n                        Notifications\n                        <b class=\"caret\"></b>\n                    </p>\n                </a>\n                <ul class=\"dropdown-menu\">\n                    <li><a href=\"#not1\">Notification 1</a></li>\n                    <li><a href=\"#not2\">Notification 2</a></li>\n                    <li><a href=\"#not3\">Notification 3</a></li>\n                    <li><a href=\"#not4\">Notification 4</a></li>\n                    <li><a href=\"#another\">Another notification</a></li>\n                </ul>\n            </li>\n            <li>\n                <a class=\"btn-rotate\">\n                    <i class=\"ti-settings\"></i>\n                    <p class=\"hidden-md hidden-lg\">\n                        Settings\n                    </p>\n                </a>\n            </li>\n        </ul>\n    </div> -->\n        <ul class=\"nav\">\n            <li routerLinkActive=\"active\" *ngFor=\"let menuitem of menuItems\">\n                <!--If is a single link-->\n                <a [routerLink]=\"[menuitem.path]\" *ngIf=\"menuitem.type === 'link'\">\n                    <i class=\"{{menuitem.icontype}}\"></i>\n                    <p>{{menuitem.title}}</p>\n                </a>\n                <!--If it have a submenu-->\n                <a data-toggle=\"collapse\" href=\"#{{menuitem.collapse}}\" *ngIf=\"menuitem.type === 'sub'\">\n                    <i class=\"{{menuitem.icontype}}\"></i>\n                    <p>{{menuitem.title}}<b class=\"caret\"></b></p>\n                </a>\n\n                <!--Display the submenu items-->\n                <div id=\"{{menuitem.collapse}}\" class=\"collapse\" *ngIf=\"menuitem.type === 'sub'\">\n                    <ul class=\"nav\">\n                        <li routerLinkActive=\"active\" *ngFor=\"let childitem of menuitem.children\">\n                            <a [routerLink]=\"[menuitem.path, childitem.path]\">\n                                <span class=\"sidebar-mini-icon\">{{childitem.ab}}</span>\n                                <span class=\"sidebar-normal\">{{childitem.title}}</span>\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n            </li>\n        </ul>\n\n</div>\n";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map