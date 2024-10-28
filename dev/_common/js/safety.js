import {init, olg, bannerSize, olg_ypy} from './common.js'



document.getElementById("legalContent").innerHTML = `© 2023 IGT.
<br/>
© 2023 Evolution. All Rights Reserved.<br/>
<br/>
Must be 19 years of age or older and a resident of Ontario, located in the province to play
online casino games. Games and screens may not appear as shown. Odds vary by game. Terms
and conditions apply.<br/>
<br/>
*Voted most trusted Online Casino by Ontario shoppers based on the 2023 Brandspark®
Canadian Trust Study.`

const READ = {
	t1: 2.3,
	t2: 2.6
}



function rain({coins, skew, y=3}){
	const yPos = -bannerSize.h*y
	console.log(-bannerSize.h*y);
	const tl = new TimelineMax()
	tl.from(".ypy-text-1", {duration:1.5, y:yPos, skewX:-skew, skewY:skew, rotate:"+=160"}, .1)
	tl.from(".ypy-text-2", {duration:1.5, y:yPos, skewX:-skew, skewY:skew, rotate:"+=160"}, .3)
	tl.from(".ypy-text-3", {duration:1.5, y:yPos, skewX:-skew, skewY:skew, rotate:"+=160"}, 0)
	const total = coins+1
	for(let i=1;i<total;i++){
		const percent = i/total
		const rotate = 120+(50 * percent)
		const delay = percent		
		const skewXY = skew + (30*percent)
		tl.from(`.coin-${i}`, {duration:1.7, y:yPos, skewX:skewXY, skewY:-skewXY, rotate:`+=${rotate}`}, percent)	
	}
	return tl
}

function start({coins=8, skew, y=3}){
	const tl = init()
	// return
	rain({coins, skew, y})

	
	tl.add("start", 3)
	if(bannerSize.w<bannerSize.h){
		tl.from(".bg", {y:bannerSize.h, duration:.6}, "start")	
	}
	

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



export { start, rain, init, bannerSize, READ, olg_ypy }