import {init, olg, olg_ypy, bannerSize} from './common.js'
document.getElementById("legalContent").innerHTML = `
© 2024 IGT.<br/>
<br/>
Must be 19 years of age or older and 
a resident of Ontario, located in the province to play online casino games. Games and screens may not appear 
as shown. Odds vary by game. The only accurate reflection of the jackpot value can be found in-game at OLG.ca.
<br/>Terms and conditions apply.`

const READ = {
	t1: 1.8,
	t2: 0
}

function start(heroScale){	
	const tl = init()	
	
	// return
	tl.add("bars")
	
	
	tl.from(".frame1 .top.b2", {y:-bannerSize.h, duration:.5}, "bars+=.3")
	tl.from(".frame1 .top.b4", {y:-bannerSize.h, duration:.5}, "bars+=.6")
	tl.from(".frame1 .top.b5", {y:-bannerSize.h, duration:.5}, "bars+=.9")
	tl.from(".frame1 .top.b6", {y:-bannerSize.h, duration:.5}, "bars+=.2")
	tl.from(".frame1 .top.b7", {y:-bannerSize.h, duration:.5}, "bars+=.8")
	tl.from(".frame1 .top.b8", {y:-bannerSize.h, duration:.5}, "bars+=.5")
	tl.from(".frame1 .bottom.b1", {y:bannerSize.h, duration:.5}, "bars+=1")
	tl.from(".frame1 .bottom.b3", {y:bannerSize.h, duration:.5}, "bars+=.5")

	tl.from(".ypy-you1", {y:-bannerSize.h, duration:.4}, "bars+=.5")
	tl.from(".ypy-play", {y:-bannerSize.h, duration:.4}, "bars+=.8")
	tl.from(".ypy-you2", {y:-bannerSize.h, duration:.4}, "bars+=1")

	

	tl.add("scale", 1.5)
	// tl.to(".frame1 .top.b5", {opacity:.3, y:"-=30", duration:.5}, "scale")
	
	tl.to(".hero-all", heroScale, "scale")
	
	const footer = bannerSize.w>bannerSize.h ? {y:bannerSize.h} : {y:bannerSize.h}
	tl.from([".footer-bg", ".t1"], {ease:"power1.out", ...footer , duration:.3}, "scale")

	tl.add("end", `+=${READ.t1}`)
	tl.set(".frame2", {opacity:1}, "end")
	tl.to(".frame1", { y:-bannerSize.h, duration:.5}, "end")
	
	tl.from(".frame2", { y:bannerSize.h, duration:.5}, "end")
	
	tl.add("end-bars")

	
	tl.from(".frame2 .bottom.c1", {y:bannerSize.h, duration:.5}, "end-bars+=.1")
	tl.from(".frame2 .top.c2", {y:-bannerSize.h, duration:.5}, "end-bars+=.3")
	tl.from(".frame2 .bottom.c3", {y:bannerSize.h, duration:.5}, "end-bars+=.3")
	tl.from(".frame2 .top.c4", {y:-bannerSize.h, duration:.5}, "end-bars+=.3")
	tl.from(".frame2 .top.c5", {y:-bannerSize.h, duration:.5}, "end-bars+=.2")
	tl.from(".frame2 .top.c6", {y:-bannerSize.h, duration:.5}, "end-bars+=.2")
	tl.from(".frame2 .bottom.c7", {y:bannerSize.h, duration:.5}, "end-bars+=.3")
	tl.from(".frame2 .top.c8", {y:-bannerSize.h, duration:.5}, "end-bars+=0")
	tl.from(".frame2 .bottom.c9", {y:bannerSize.h, duration:.5}, "end-bars+=.1")


	tl.add("scroller", "-=.5")

	// tl.add("gar", "+=.3")
	tl.from(".url", {opacity:0, duration:.3}, "scroller")
	
	tl.add(olg_ypy(), "scroller")

	tl.add("shrink", "+=.3")
	tl.to(".devices", {y:-153, scale:.38, duration:.5}, "shrink")
	tl.to([".url", ".ypy-all"], {opacity:0, duration:.5}, "shrink")

	tl.from(".mj", {opacity:0, duration:.3})

	// tl.play("end")

	return tl
}

export { start, READ, olg_ypy }