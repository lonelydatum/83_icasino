(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _proline = require("./proline");

var _helpersHelpersJs = require("./helpers/helpers.js");

var _ypy_fxJs = require('./ypy_fx.js');

var banner = document.getElementById('banner');
var bannerSize = { w: banner.offsetWidth, h: banner.offsetHeight };

gsap.defaults({
	ease: "power3.out"
});

var w = bannerSize.w;
var h = bannerSize.h;

function init() {
	var tl = new TimelineMax({ onComplete: function onComplete() {
			if (document.getElementById("legalBtn")) {
				TweenLite.set("#legalBtn", { display: "block" });
			}
		} });
	tl.set(".frame1", { opacity: 1 });

	return tl;
}

function olg_ypy() {
	var tl = new TimelineMax();

	tl.add("done");
	tl.add((0, _proline.olg)(), "done");
	tl.add((0, _ypy_fxJs.ypyScroll)(), "done");
	tl.from([".cta", ".legal"], { opacity: 0, duration: .3 }, "done+=.7");
	return tl;
}

function rotateScale1(data) {

	var tl = new TimelineMax();
	var list = data.list;
	var offsetX = data.offsetX;
	var offsetY = data.offsetY;
	var to = data.to;

	list.map(function (a) {
		var x = to.x;
		var y = to.y;

		tl.set(a, { transformOrigin: x + "px " + y + "px", x: offsetX - x, y: offsetY - y, scale: 1, rotate: 0 });
	});
}

function rotateScale2(data) {
	var tl = new TimelineMax();
	var list = data.list;
	var offsetX = data.offsetX;
	var offsetY = data.offsetY;
	var to = data.to;

	list.map(function (a) {
		var x = to.x;
		var y = to.y;

		tl.set(a, { transformOrigin: x * 2 + "px " + y * 2 + "px", x: -x + offsetX, y: -y + offsetY, scale: .5, rotate: 0 });
	});
}

exports.init = init;
exports.olg = _proline.olg;
exports.bannerSize = bannerSize;
exports.olg_ypy = olg_ypy;
exports.rotateScale1 = rotateScale1;
exports.rotateScale2 = rotateScale2;

},{"./helpers/helpers.js":2,"./proline":3,"./ypy_fx.js":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
function origin(el, x, y) {
	TweenLite.set(el, { transformOrigin: x + "px " + y + "px", x: -x / 2 + "px", y: -y / 2 + "px", scale: .5 });
}

exports.origin = origin;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

CustomEase.create("custom", "M0,0 C0.14,0 0.234,0.438 0.264,0.561 0.305,0.728 0.4,1.172 0.55,1.172 0.652,1.172 0.722,1.102 0.77,1.024 0.834,0.93 0.89,0.946 0.916,0.946 0.952,0.946 1,1 1,1 ");

function olg() {
    TweenLite.set("#olg", { opacity: 1 });

    var tl = new TimelineMax({ onStart: function onStart() {
            TweenLite.set(".olg-static", { opacity: 0 });
        } });

    tl.to("#bluewedge1", { duration: .5, ease: 'power1.inOut', scaleY: 1, scale: 1, x: 0, y: 0 }, 0);
    tl.to("#redwedge1", { duration: .8, ease: 'power1.inOut', scaleY: 1, scale: 1, x: 0, y: 0 }, 0).from('#group-o', { duration: 1, y: 200, ease: "custom" }, 0).from('#group-l', { duration: 1, y: 200, ease: "custom" }, .1).from('#group-g', { duration: 1, y: 200, ease: "custom" }, .2).from('#group-o', { duration: .8, scale: .4, ease: "power1.out" }, .3).from('#group-l', { duration: .8, scale: .4, ease: "power1.out" }, .4).from('#group-g', { duration: .8, scale: .4, ease: "power1.out" }, .5).from('#letter-o', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '28pt 75pt' }, .9).from('#letter-l', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '55pt 75pt' }, 1).from('#letter-g', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '80pt 75pt' }, 1.1);

    // tl.timeScale(2)

    return tl;
}

exports.olg = olg;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _commonJs = require('./common.js');

document.getElementById("legalContent").innerHTML = "\n© 2024 IGT.<br/>\n<br/>\nMust be 19 years of age or older and \na resident of Ontario, located in the province to play online casino games. Games and screens may not appear \nas shown. Odds vary by game. The only accurate reflection of the jackpot value can be found in-game at OLG.ca.\n<br/>Terms and conditions apply.";

var READ = {
	t1: 1.8,
	t2: 0
};

function start(heroScale) {
	var tl = (0, _commonJs.init)();

	// return
	tl.add("bars");

	tl.from(".frame1 .top.b2", { y: -_commonJs.bannerSize.h, duration: .5 }, "bars+=.3");
	tl.from(".frame1 .top.b4", { y: -_commonJs.bannerSize.h, duration: .5 }, "bars+=.6");
	tl.from(".frame1 .top.b5", { y: -_commonJs.bannerSize.h, duration: .5 }, "bars+=.9");
	tl.from(".frame1 .top.b6", { y: -_commonJs.bannerSize.h, duration: .5 }, "bars+=.2");
	tl.from(".frame1 .top.b7", { y: -_commonJs.bannerSize.h, duration: .5 }, "bars+=.8");
	tl.from(".frame1 .top.b8", { y: -_commonJs.bannerSize.h, duration: .5 }, "bars+=.5");
	tl.from(".frame1 .bottom.b1", { y: _commonJs.bannerSize.h, duration: .5 }, "bars+=1");
	tl.from(".frame1 .bottom.b3", { y: _commonJs.bannerSize.h, duration: .5 }, "bars+=.5");

	tl.from(".ypy-you1", { y: -_commonJs.bannerSize.h, duration: .4 }, "bars+=.5");
	tl.from(".ypy-play", { y: -_commonJs.bannerSize.h, duration: .4 }, "bars+=.8");
	tl.from(".ypy-you2", { y: -_commonJs.bannerSize.h, duration: .4 }, "bars+=1");

	tl.add("scale", 1.5);
	// tl.to(".frame1 .top.b5", {opacity:.3, y:"-=30", duration:.5}, "scale")

	tl.to(".hero-all", heroScale, "scale");

	var footer = _commonJs.bannerSize.w > _commonJs.bannerSize.h ? { y: _commonJs.bannerSize.h } : { y: _commonJs.bannerSize.h };
	tl.from([".footer-bg", ".t1"], _extends({ ease: "power1.out" }, footer, { duration: .3 }), "scale");

	tl.add("end", "+=" + READ.t1);
	tl.set(".frame2", { opacity: 1 }, "end");
	tl.to(".frame1", { y: -_commonJs.bannerSize.h, duration: .5 }, "end");

	tl.from(".frame2", { y: _commonJs.bannerSize.h, duration: .5 }, "end");

	tl.add("end-bars");

	tl.from(".frame2 .bottom.c1", { y: _commonJs.bannerSize.h, duration: .5 }, "end-bars+=.1");
	tl.from(".frame2 .top.c2", { y: -_commonJs.bannerSize.h, duration: .5 }, "end-bars+=.3");
	tl.from(".frame2 .bottom.c3", { y: _commonJs.bannerSize.h, duration: .5 }, "end-bars+=.3");
	tl.from(".frame2 .top.c4", { y: -_commonJs.bannerSize.h, duration: .5 }, "end-bars+=.3");
	tl.from(".frame2 .top.c5", { y: -_commonJs.bannerSize.h, duration: .5 }, "end-bars+=.2");
	tl.from(".frame2 .top.c6", { y: -_commonJs.bannerSize.h, duration: .5 }, "end-bars+=.2");
	tl.from(".frame2 .bottom.c7", { y: _commonJs.bannerSize.h, duration: .5 }, "end-bars+=.3");
	tl.from(".frame2 .top.c8", { y: -_commonJs.bannerSize.h, duration: .5 }, "end-bars+=0");
	tl.from(".frame2 .bottom.c9", { y: _commonJs.bannerSize.h, duration: .5 }, "end-bars+=.1");

	tl.add("scroller", "-=.5");

	// tl.add("gar", "+=.3")
	tl.from(".url", { opacity: 0, duration: .3 }, "scroller");

	tl.add((0, _commonJs.olg_ypy)(), "scroller");

	tl.add("shrink", "+=.3");
	tl.to(".devices", { y: -153, scale: .38, duration: .5 }, "shrink");
	tl.to([".url", ".ypy-all"], { opacity: 0, duration: .5 }, "shrink");

	tl.from(".mj", { opacity: 0, duration: .3 });

	// tl.play("end")

	return tl;
}

exports.start = start;
exports.READ = READ;
exports.olg_ypy = _commonJs.olg_ypy;

},{"./common.js":1}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
function initYPY() {
	var tl = new TimelineMax();
	// tl.set(".ypy-all", {opacity:0})
	for (var i = 1; i < 11; i++) {
		tl.set(".ypy-all .ypy_all_" + i + " img", { y: -220 });
	}
}
function ypyScroll() {
	var tl = new TimelineMax();

	// tl.set(".ypy-all", {opacity:0})
	tl.add("spin");
	tl.set(".hide-until", { visibility: "visible" }, "spin");
	for (var i = 1; i < 11; i++) {
		var y = i * 20;
		var duration = i / 11 * 1.6;

		tl.to(".ypy-all .ypy_all_" + i + " img", { ease: "back.inOut", y: (i - 1) * -20 - 2, duration: duration }, "spin");
	}
	return tl;
}

initYPY();

exports.initYPY = initYPY;
exports.ypyScroll = ypyScroll;

},{}],6:[function(require,module,exports){
"use strict";

var _commonJsYpyJs = require('../../_common/js/ypy.js');

(0, _commonJsYpyJs.start)({ ease: "power1.out", x: 0, scale: .4, y: -45, duration: .3 });

},{"../../_common/js/ypy.js":4}]},{},[6])


//# sourceMappingURL=main.js.map
