window.location.href = 'bar';
var q;
var define;
q
    .on('bar') /*!/#IFDEF devicegroup_spartan */.on("mouseup.autosuggest") /*!/#ENDIF*/
    .on('foo');
define("weathercard", ["jquery", "jqBehavior", "mediator", "refreshModules", "navigation", "binding", "format", "sdhpTileModule.tokens", "dir.tokens", "headData",
    /*!/#IFDEF river_collapsable_expandable_sd_cards_enabled || test_access  */ "collapseAndExpand" /*!/#ENDIF */], function ($, jqBehavior, mediator, refreshModules, navigation, binding, format, tokens, dirTokens, headData, 
    /*!/#IFDEF river_collapsable_expandable_sd_cards_enabled || test_access  */ collapseAndExpandHelper /*!/#ENDIF */) { });
///
var obj = {
    /*!/#IFDEF spartan_weather_settings_jstests */
    a: 'a',
    b: 'b'
};
/// turns into
var obj = {
    /*!/#IFDEF spartan_weather_settings_jstests */
    a: 'a',
    b: 'b',
};
///
if (true) {
    /*!/#IFDEF !hidepinonmap */
    define.push('pin');
}
///
if (true) {
    /*!/#IFDEF !hidepinonmap */
    define.push('pin');
    /*!/#ENDIF*/ ;
}
/*!/#IFDEF devicegroup_moz */
define.on("DOMMouseScroll", "tr td:not(:first-child)", function (scrollEvent) {
    define(scrollEvent, scrollEvent.originalEvent.detail > 0 ? 1 : -1);
})
    .on("mousewheel", "tr td:not(:first-child)", function (scrollEvent) {
    define(scrollEvent, scrollEvent.originalEvent.wheelDelta < 0 ? 1 : -1);
});
/*!/#ENDIF */
define
    .on("DOMMouseScroll", "tr td:not(:first-child)", function (scrollEvent) {
    define(scrollEvent, scrollEvent.originalEvent.detail > 0 ? 1 : -1);
})
    .on("mousewheel", "tr td:not(:first-child)", function (scrollEvent) {
    define(scrollEvent, scrollEvent.originalEvent.wheelDelta < 0 ? 1 : -1);
});
/*!/#ENDIF */
/*!/#IFDEF devicegroup_moz */
define.on("DOMMouseScroll", "tr td:not(:first-child)", function (scrollEvent) {
    define(scrollEvent, scrollEvent.originalEvent.detail > 0 ? 1 : -1);
});
/*!/#ELSE */
define.on("mousewheel", "tr td:not(:first-child)", function (scrollEvent) {
    define(scrollEvent, scrollEvent.originalEvent.wheelDelta < 0 ? 1 : -1);
});
/*!/#ENDIF */
if (define != null, define != null, define != null, define != null) { }
