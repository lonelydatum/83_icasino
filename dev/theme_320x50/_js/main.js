import {rain, init, bannerSize, READ, olg_ypy} from '../../_common/js/safety.js'

start({coins:6, skew:40, y:7})


document.getElementById("legalContent").innerHTML  = `Must be 19 years of age or older and a resident of Ontario, located in the province to play online casino games. Games and screens may not appear as shown. Odds vary by game. Terms and conditions apply.

*Voted most trusted Online Casino by Ontario shoppers based on the 2023 Brandspark® Canadian Trust Study.`



function start({coins=8, skew, y}){
	const tl = init()
	// return
	rain({coins, skew, y})

	
	tl.add("start", 3)
	

	tl.to(".ypy-text", {opacity:0, duration:.3}, "start")
	

	tl.from(".t1", {opacity:0, duration:.3})
	tl.to(".t1", {opacity:0, duration:.3}, `+=${READ.t1}`)
	tl.from([".t2", ".brand-logo"], {opacity:0, duration:.3})

	tl.add("bye", `+=${READ.t2}`)
	tl.to([".t2", ".ypy-text"], {opacity:0, duration:.3}, "bye")

	tl.add("f2")
	tl.to(".bg", {y:0, x:0, duration:.4}, `f2`)
	tl.from([".devices"], {opacity:0, duration:.3})

	tl.from([".url", ".buttons"], {opacity:0, duration:.3})

	tl.add(olg_ypy(), "+=.3")


}



