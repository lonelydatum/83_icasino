import {bannerSize, init} from '../../_common/js/common.js'
import {READ, olg_ypy} from '../../_common/js/ypy-squid.js'


document.getElementById("legalContent").innerHTML  = `
Must be 19 years of age or older and a resident of Ontario, located in the province to play online 
casino games. Games may not appear as shown. Odds vary by game. Terms and conditions apply. 
*Voted most trusted Online Casino by Ontario shoppers based on the 2023 Brandspark® 
Canadian Trust Study.
`

const heroScale = {ease:"power1.out",  duration:.3}
start(heroScale)



function start(heroScale){	
	const tl = init()	
	
	// return
	tl.add("bars")
	
	tl.from(".frame1 .top.b2", {y:-bannerSize.h, duration:.5}, "bars+=.3")
	tl.from(".frame1 .top.b4", {y:-bannerSize.h, duration:.5}, "bars+=.6")
	tl.from(".frame1 .top.b5", {y:-bannerSize.h, duration:.5}, "bars+=.9")
	
	
	tl.from(".frame1 .bottom.b1", {y:bannerSize.h, duration:.5}, "bars+=1")
	tl.from(".frame1 .bottom.b3", {y:bannerSize.h, duration:.5}, "bars+=.5")

	tl.from(".ypy-you1", {y:-bannerSize.h, duration:.4}, "bars+=.5")
	tl.from(".ypy-play", {y:-bannerSize.h, duration:.4}, "bars+=.8")
	tl.from(".ypy-you2", {y:-bannerSize.h, duration:.4}, "bars+=1")

	

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
