yoastWebpackJsonp([19],{

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\n!function (e, t) {\n  \"object\" == ( false ? \"undefined\" : _typeof(exports)) && \"undefined\" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (e.ReactIntlLocaleData = e.ReactIntlLocaleData || {}, e.ReactIntlLocaleData.uk = t());\n}(undefined, function () {\n  \"use strict\";\n  return [{ locale: \"uk\", pluralRuleFunction: function pluralRuleFunction(e, t) {\n      var a = String(e).split(\".\"),\n          n = a[0],\n          o = !a[1],\n          r = Number(a[0]) == e,\n          i = r && a[0].slice(-1),\n          l = r && a[0].slice(-2),\n          f = n.slice(-1),\n          m = n.slice(-2);return t ? 3 == i && 13 != l ? \"few\" : \"other\" : o && 1 == f && 11 != m ? \"one\" : o && f >= 2 && f <= 4 && (m < 12 || m > 14) ? \"few\" : o && 0 == f || o && f >= 5 && f <= 9 || o && m >= 11 && m <= 14 ? \"many\" : \"other\";\n    }, fields: { year: { displayName: \"рік\", relative: { 0: \"цього року\", 1: \"наступного року\", \"-1\": \"торік\" }, relativeTime: { future: { one: \"через {0} рік\", few: \"через {0} роки\", many: \"через {0} років\", other: \"через {0} року\" }, past: { one: \"{0} рік тому\", few: \"{0} роки тому\", many: \"{0} років тому\", other: \"{0} року тому\" } } }, month: { displayName: \"місяць\", relative: { 0: \"цього місяця\", 1: \"наступного місяця\", \"-1\": \"минулого місяця\" }, relativeTime: { future: { one: \"через {0} місяць\", few: \"через {0} місяці\", many: \"через {0} місяців\", other: \"через {0} місяця\" }, past: { one: \"{0} місяць тому\", few: \"{0} місяці тому\", many: \"{0} місяців тому\", other: \"{0} місяця тому\" } } }, day: { displayName: \"день\", relative: { 0: \"сьогодні\", 1: \"завтра\", 2: \"післязавтра\", \"-2\": \"позавчора\", \"-1\": \"учора\" }, relativeTime: { future: { one: \"через {0} день\", few: \"через {0} дні\", many: \"через {0} днів\", other: \"через {0} дня\" }, past: { one: \"{0} день тому\", few: \"{0} дні тому\", many: \"{0} днів тому\", other: \"{0} дня тому\" } } }, hour: { displayName: \"година\", relative: { 0: \"цієї години\" }, relativeTime: { future: { one: \"через {0} годину\", few: \"через {0} години\", many: \"через {0} годин\", other: \"через {0} години\" }, past: { one: \"{0} годину тому\", few: \"{0} години тому\", many: \"{0} годин тому\", other: \"{0} години тому\" } } }, minute: { displayName: \"хвилина\", relative: { 0: \"цієї хвилини\" }, relativeTime: { future: { one: \"через {0} хвилину\", few: \"через {0} хвилини\", many: \"через {0} хвилин\", other: \"через {0} хвилини\" }, past: { one: \"{0} хвилину тому\", few: \"{0} хвилини тому\", many: \"{0} хвилин тому\", other: \"{0} хвилини тому\" } } }, second: { displayName: \"секунда\", relative: { 0: \"зараз\" }, relativeTime: { future: { one: \"через {0} секунду\", few: \"через {0} секунди\", many: \"через {0} секунд\", other: \"через {0} секунди\" }, past: { one: \"{0} секунду тому\", few: \"{0} секунди тому\", many: \"{0} секунд тому\", other: \"{0} секунди тому\" } } } } }];\n});\n\n//////////////////\n// WEBPACK FOOTER\n// /Users/jip/Yoast/wp-content/plugins/wordpress-seo/node_modules/react-intl/locale-data/uk.js\n// module id = 542\n// module chunks = 19\n\n//# sourceURL=webpack:////Users/jip/Yoast/wp-content/plugins/wordpress-seo/node_modules/react-intl/locale-data/uk.js?");

/***/ })

});