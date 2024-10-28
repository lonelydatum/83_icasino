// import { READ, startBasic} from '../../_common/js/player_support.js'
import {bannerSize, init, olg_ypy, rotateScale1, rotateScale2} from '../../_common/js/common.js'

// start()
function start(){

	
	// 349 50
	const data = {list:[".ring1_1", ".ring1_2", ".ring1_3"], 
	offsetX:146, offsetY:190, to:{x:160, y:190}}

	
	
	rotateScale1(data)
	rotateScale2({list:[".ypy1-1", ".ypy1-2", ".ypy1-3"], offsetX:0, offsetY:0, to:{x:150, y:180}})
	
	startBasic({shiftY:30})
	
	
}


const READ = {
	t1: 2.2,
	t2: 2
}
const tl = init()
const rotate = 150
tl.add("arcs-in")
TweenLite.set(".ring", {opacity:1})
const ring = {opacity:0, ease: "power2.out", duration:.4}
tl.from(".ring1_1", {...ring, rotate:-rotate}, "arcs-in+=0")
tl.from(".ring1_2", {...ring, rotate:rotate}, "arcs-in+=.1")
tl.from(".ring1_3", {...ring, rotate:-rotate}, "arcs-in+=.2")
tl.from(".ring1_4", {...ring, rotate:rotate}, "arcs-in+=.3")

tl.from(".ypy1-1", {opacity:0, rotate:-60, duration:.5}, "arcs-in+=0.2")
tl.from(".ypy1-2", {opacity:0, rotate:-60, duration:.5}, "arcs-in+=.5")
tl.from(".ypy1-3", {opacity:0, rotate:-60, duration:.5}, "arcs-in+=.7")

tl.add("shrink", "+=.3")


tl.to(".ring", {opacity:0, duration:.3}, "shrink")
tl.from(".ring_all", {opacity:0, duration:.3}, "shrink")

tl.to(".hero", {x:0, y:0, scale:.50, duration:.3}, "shrink")
tl.from(".footer-bar", {y:bannerSize.h, duration:.3}, "shrink")
tl.from(".t1", {y:250, duration:.4}, "shrink")
tl.to(".ypy1-1", {x:-133, y:-178, duration:.3}, "shrink")
tl.to(".ypy1-2", {x:-173, y:-172, duration:.3}, "shrink")
tl.to(".ypy1-3", {x:-140, y:-191, duration:.3}, "shrink")



tl.to(".ring", {y:`-=${30}`, duration:.4}, "shrink")


tl.to(".t1", {opacity:0, duration:.3}, `+=${READ.t1}`)
tl.from([".t2", ".brand-logo"], {opacity:0, duration:.3})

tl.add("end", `+=${READ.t2}`)
tl.to(".frame1", {y:`-=${bannerSize.h}`, duration:.5}, "end")
tl.set(".frame2", {opacity:1}, "end")
tl.from(".frame2", {y:`+=${bannerSize.h}`, duration:.5}, "end")

tl.from(".url", {opacity:0, duration:.3})




tl.add(olg_ypy(), "-=.3")

// return tl