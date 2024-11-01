import {bannerSize, init} from '../../_common/js/common.js'
import {READ, olg_ypy} from '../../_common/js/ypy-theme2.js'


document.getElementById("legalContent").innerHTML  = `Must be 19 years of age or older and a resident of Ontario, located in the province to play online casino games. Games and screens may not appear as shown. Odds vary by game.

Terms and conditions apply.`





const bars = [
	[".b1", -1],
	[".b2", -1],
	[".b3", 1],
	[".b4", -1],	
	[".b5", -1],	
]

start(bars)

function start(heroScale){	
	const tl = init()	
	
	// return
	tl.add("bars")

	bars.map((a,i)=>{
		tl.from(a[0], {y:a[1]*bannerSize.h, duration:.2}, `bars+=${i*.2}`)	
	})
	


	tl.from(".ypy-you1", {y:-bannerSize.h, duration:.3}, "bars+=.5")
	tl.from(".ypy-play", {y:-bannerSize.h, duration:.3}, "bars+=.8")
	tl.from(".ypy-you2", {y:-bannerSize.h, duration:.3}, "bars+=1")

	

	tl.add("scale", "+=.3")
	
	
	// tl.to(".hero-all", heroScale, "scale")

	tl.to([".ypy-you1", ".ypy-you2", ".ypy-play"], { opacity:0, duration:.3}, "+=.5")	
	tl.from([".t1", ".logo"], {ease:"power1.out", opacity:0 , duration:.3})

	tl.to(".t1", {ease:"power1.out", opacity:0 , duration:.3}, `+=${READ.t1}`)


	tl.from(".t2", {ease:"power1.out", opacity:0 , duration:.3})
	tl.to([".t2", ".logo"], {ease:"power1.out", opacity:0 , duration:.3}, `+=${READ.t2}`)

	
	


	tl.add("scroller")
	tl.from(".url", {opacity:0, duration:.3}, "scroller")
	
	tl.add(olg_ypy(), "+=.3")



	return tl
}
