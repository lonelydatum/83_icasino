import {rain, init, bannerSize, READ, olg_ypy} from '../../_common/js/ypy-theme.js'

start({coins:6, skew:40, y:7})


document.getElementById("legalContent").innerHTML  = `Must be 19 years of age or older and a resident of Ontario, located in the province to play online casino games. Games and screens may not appear as shown. Odds vary by game. Terms and conditions apply.

*Voted most trusted Online Casino by Ontario shoppers based on the 2023 Brandspark® Canadian Trust Study.`



function start({coins=8, skew, y}){
	const tl = init()
	TweenLite.set(".all_1", {transformOrigin:"50% 50%", x:-bannerSize.w/2, y:-bannerSize.h/2})
	// return
	// rain({coins, skew, y})

	

	tl.add("frame1")

	tl.from(".all_1", {ease:"power3.out", scale:2, duration:.8, opacity:0, rotate:30, y:99}, "frame1")

	tl.from(".ypy-1", {duration:.3, ease:"back.out", opacity:0, y:-100}, "frame1")
	tl.from(".ypy-2", {duration:.3, ease:"back.out", opacity:0, y:-100}, "frame1+=.2")
	tl.from(".ypy-3", {duration:.5, ease:"back.out", opacity:0, y:-100}, "frame1+=.4")
	

	tl.to(".ypy-text", {opacity:0, duration:.3}, "+=.5")
	

	tl.from(".t1", {opacity:0, duration:.3})
	tl.to(".t1", {opacity:0, duration:.3}, `+=${READ.t1}`)

	tl.from(".t2", {opacity:0, duration:.3})
	tl.to(".t2", {opacity:0, duration:.3}, `+=${READ.t2}`)
	
	

	

	tl.from([".url", ".buttons"], {opacity:0, duration:.3})

	tl.add(olg_ypy(), "+=.3")


}



