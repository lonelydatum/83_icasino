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

document.getElementById("legalContent").innerHTML = "\n©2024 Evolution. </br>\nAll rights reserved.</br>\nMust be 19 years of age or older and a resident of Ontario, located in the province to play online casino games. \nGames may not appear as shown. Odds vary by game. Terms and conditions apply.\n";

var READ = {
	t1: 3.5

};

TweenLite.set("#banner", { backgroundColor: "#ff375f" });

function toNormal(tl, el, frame) {
	tl.to(el, { scale: .5, x: 0, y: 0, duration: .4 }, frame);
}

function centerScale(el, x, y) {
	TweenLite.set(el, { transformOrigin: "50% 50%", x: 0, y: 0 });
}

function listIn(tl, list, frameLabel) {
	tl.add(frameLabel);
	var xy = 50;
	list.map(function (a, i) {
		tl.from(a[0], { duration: .3, opacity: 0, x: a[1] * xy, y: a[2] * xy }, frameLabel + "+=" + i * .1);
	});
}

function listOut(tl, list, frameLabel) {

	var xy = 50;
	list.map(function (a, i) {
		tl.to(a[0], { duration: .2, opacity: 0, x: a[1] * xy, y: a[2] * xy }, frameLabel);
	});
}

function start(devices) {
	centerScale(".all_1");

	var tl = (0, _commonJs.init)();

	// return

	var isNormal = _commonJs.bannerSize.w / _commonJs.bannerSize.h < 2;

	tl.add("frame1");
	tl.from(".all_1", { ease: "power3.out", scale: 3, duration: 1, opacity: 0, rotate: 30, y: 0 }, "frame1");

	tl.from(".ypy-1", { duration: .3, ease: "back.out", opacity: 0, y: -100 }, "frame1");
	tl.from(".ypy-2", { duration: .3, ease: "back.out", opacity: 0, y: -100 }, "frame1+=.2");
	tl.from(".ypy-3", { duration: .5, ease: "back.out", opacity: 0, y: -100 }, "frame1+=.4");

	tl.add("frame2", "+=.2");

	tl.add("frame2");
	if (devices) {
		devices.map(function (a, i) {
			tl.to(".devices_" + (i + 1), _extends({}, a), "frame2");
		});
	}

	toNormal(tl, ".ypy", "frame2");

	tl.from(".t1", { duration: .3, opacity: 0 });

	tl.add('frame3', "+=" + READ.t1);
	tl.to(".t1", { duration: .3, opacity: 0 }, "frame3");
	tl.to(".ypy", { opacity: 0, duration: .3 }, "frame3");

	toNormal(tl, ".devices", "frame3");

	tl.from(".url", { opacity: 0, duration: .3 }, "+=.3");

	tl.add((0, _commonJs.olg_ypy)(), "-=.3");

	// tl.to(".all_2", {duration:.3, opacity:0}, "+=1")
}

exports.start = start;
exports.init = _commonJs.init;
exports.bannerSize = _commonJs.bannerSize;
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

var _commonJsYpyGamerangeJs = require('../../_common/js/ypy-gamerange.js');

start({ coins: 6, skew: 40, y: 7 });

document.getElementById("legalContent").innerHTML = "\nMust be 19 years of age or older and a resident of Ontario, located in the province to play online casino games. \nGames may not appear as shown. Odds vary by game. Terms and conditions apply.\n";

function centerScale(el, x, y) {
	TweenLite.set(el, { transformOrigin: "50% 50%", x: 0, y: 0 });
}

function start(_ref) {
	var _ref$coins = _ref.coins;
	var coins = _ref$coins === undefined ? 8 : _ref$coins;
	var skew = _ref.skew;
	var y = _ref.y;

	var tl = (0, _commonJsYpyGamerangeJs.init)();
	// return
	// rain({coins, skew, y})

	centerScale(".all_1");
	tl.add("frame1");
	tl.from(".all_1", { ease: "power3.out", scale: 3, duration: 1, opacity: 0, rotate: 30, y: 0 }, "frame1");

	tl.from(".ypy-1", { duration: .3, ease: "back.out", opacity: 0, y: -100 }, "frame1");
	tl.from(".ypy-2", { duration: .3, ease: "back.out", opacity: 0, y: -100 }, "frame1+=.2");
	tl.from(".ypy-3", { duration: .5, ease: "back.out", opacity: 0, y: -100 }, "frame1+=.4");

	tl.to(".ypy-text", { opacity: 0, duration: .3 }, "+=.5");

	tl.from(".t1", { opacity: 0, duration: .3 });
	tl.to(".t1", { opacity: 0, duration: .3 }, "+=" + 1.7);

	tl.from(".t2", { opacity: 0, duration: .3 });
	tl.to(".t2", { opacity: 0, duration: .3 }, "+=" + 2);

	tl.from([".url", ".buttons"], { opacity: 0, duration: .3 });

	tl.add((0, _commonJsYpyGamerangeJs.olg_ypy)(), "+=.3");
}

},{"../../_common/js/ypy-gamerange.js":4}]},{},[6])


//# sourceMappingURL=main.js.map
