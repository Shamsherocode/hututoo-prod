(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calendar-calendar-module"], {
    /***/
    "7mpd":
    /*!************************************************!*\
      !*** ./src/app/calendar/calendar.component.ts ***!
      \************************************************/

    /*! exports provided: CalendarComponent */

    /***/
    function mpd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalendarComponent", function () {
        return CalendarComponent;
      });
      /* harmony import */


      var _raw_loader_calendar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./calendar.component.html */
      "ooYX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
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

      var CalendarComponent = /*#__PURE__*/function () {
        function CalendarComponent() {
          _classCallCheck(this, CalendarComponent);
        }

        _createClass(CalendarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var $calendar = $('#fullCalendar');
            var today = new Date();
            var y = today.getFullYear();
            var m = today.getMonth();
            var d = today.getDate();
            $calendar.fullCalendar({
              viewRender: function viewRender(view, element) {
                // We make sure that we activate the perfect scrollbar when the view isn't on Month
                if (view.name != 'month') {
                  var elem = $(element).find('.fc-scroller')[0];
                  var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["default"](elem);
                }
              },
              header: {
                left: 'title',
                center: 'month, agendaWeek, agendaDay',
                right: 'prev, next, today'
              },
              defaultDate: today,
              selectable: true,
              selectHelper: true,
              views: {
                month: {
                  titleFormat: 'MMMM YYYY' // other view-specific options here

                },
                week: {
                  titleFormat: ' MMMM D YYYY'
                },
                day: {
                  titleFormat: 'D MMM, YYYY'
                }
              },
              select: function select(start, end) {
                // on select we show the Sweet Alert modal with an input
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                  title: 'Create an Event',
                  html: '<div class="form-group">' + '<input class="form-control" placeholder="Event Title" id="input-field">' + '</div>',
                  showCancelButton: true,
                  customClass: {
                    confirmButton: 'btn btn-success',
                    cancelButton: 'btn btn-danger'
                  },
                  buttonsStyling: false
                }).then(function (result) {
                  var eventData;
                  var event_title = $('#input-field').val();

                  if (event_title) {
                    eventData = {
                      title: event_title,
                      start: start,
                      end: end
                    };
                    $calendar.fullCalendar('renderEvent', eventData, true); // stick? = true
                  }

                  $calendar.fullCalendar('unselect');
                });
              },
              editable: true,
              eventLimit: true,
              // color classes: [ event-blue | event-azure | event-green | event-orange | event-red ]
              events: [{
                title: 'All Day Event',
                start: new Date(y, m, 1),
                className: 'event-default'
              }, {
                id: 999,
                title: 'Repeating Event',
                start: new Date(y, m, d - 4, 6, 0),
                allDay: false,
                className: 'event-rose'
              }, {
                id: 999,
                title: 'Repeating Event',
                start: new Date(y, m, d + 3, 6, 0),
                allDay: false,
                className: 'event-rose'
              }, {
                title: 'Meeting',
                start: new Date(y, m, d - 1, 10, 30),
                allDay: false,
                className: 'event-green'
              }, {
                title: 'Lunch',
                start: new Date(y, m, d + 7, 12, 0),
                end: new Date(y, m, d + 7, 14, 0),
                allDay: false,
                className: 'event-red'
              }, {
                title: 'Md-pro Launch',
                start: new Date(y, m, d - 2, 12, 0),
                allDay: true,
                className: 'event-azure'
              }, {
                title: 'Birthday Party',
                start: new Date(y, m, d + 1, 19, 0),
                end: new Date(y, m, d + 1, 22, 30),
                allDay: false,
                className: 'event-azure'
              }, {
                title: 'Click for Creative Tim',
                start: new Date(y, m, 21),
                end: new Date(y, m, 22),
                url: '#/',
                className: 'event-orange'
              }, {
                title: 'Click for Google',
                start: new Date(y, m, 21),
                end: new Date(y, m, 22),
                url: '#/',
                className: 'event-orange'
              }]
            });
          }
        }]);

        return CalendarComponent;
      }();

      CalendarComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'calendar-cmp',
        template: _raw_loader_calendar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
      })], CalendarComponent);
      /***/
    },

    /***/
    "AfWU":
    /*!**********************************************!*\
      !*** ./src/app/calendar/calendar.routing.ts ***!
      \**********************************************/

    /*! exports provided: CalendarRoutes */

    /***/
    function AfWU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalendarRoutes", function () {
        return CalendarRoutes;
      });
      /* harmony import */


      var _calendar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./calendar.component */
      "7mpd");

      var CalendarRoutes = [{
        path: '',
        children: [{
          path: '',
          component: _calendar_component__WEBPACK_IMPORTED_MODULE_0__["CalendarComponent"]
        }]
      }];
      /***/
    },

    /***/
    "O51e":
    /*!*********************************************!*\
      !*** ./src/app/calendar/calendar.module.ts ***!
      \*********************************************/

    /*! exports provided: CalendarModule */

    /***/
    function O51e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalendarModule", function () {
        return CalendarModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _calendar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./calendar.component */
      "7mpd");
      /* harmony import */


      var _calendar_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./calendar.routing */
      "AfWU");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var CalendarModule = /*#__PURE__*/_createClass(function CalendarModule() {
        _classCallCheck(this, CalendarModule);
      });

      CalendarModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_calendar_routing__WEBPACK_IMPORTED_MODULE_5__["CalendarRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
        declarations: [_calendar_component__WEBPACK_IMPORTED_MODULE_4__["CalendarComponent"]]
      })], CalendarModule);
      /***/
    },

    /***/
    "ooYX":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calendar/calendar.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function ooYX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-10 col-md-offset-1\">\n                <div class=\"card card-calendar\">\n                    <div class=\"card-content\">\n                        <div id=\"fullCalendar\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=calendar-calendar-module-es5.js.map