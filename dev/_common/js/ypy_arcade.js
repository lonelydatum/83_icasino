import {init, olg, olg_ypy, bannerSize} from './common.js'

document.getElementById("legalContent").innerHTML = `
©2024 IGT.<br/>
Must be 19 years of age or older and a resident 
of Ontario, located in the province to play online
casino games. Games may not appear as shown. Odds vary by game. Terms and conditions apply.
<br/>
*Voted most trusted Online Casino by Ontario shoppers based on the 2023 Brandspark® Canadian Trust Study.`

TweenLite.set("#banner", {backgroundColor:"#a46bff"})
TweenLite.set(".ring", {transformOrigin:"57% 50%"})



const READ = {
	t1: 2.2,
	t2: 2
}



function startBasic({ypy, youPlayYou}){
	
	const isNormal = bannerSize.w/bannerSize.h < 2
	console.log(isNormal);
	const tl = init()
	// return
	const rotate = 222
	tl.add("arcs-in")
	TweenLite.set(".ring", {opacity:1})
	const ring = {opacity:0, ease: "power2.out", duration:.7}
	tl.from(".ring", {...ring, rotate:-rotate}, "arcs-in+=0")
	

	tl.from(".ypy1-1", {opacity:0, rotate:-60, duration:.4}, "arcs-in+=0.2")
	tl.from(".ypy1-2", {opacity:0, rotate:-60, duration:.4}, "arcs-in+=.4")
	tl.from(".ypy1-3", {opacity:0, rotate:-60, duration:.4}, "arcs-in+=.6")

	
	tl.add("t1")
	if(ypy[0]){
		tl.to(".hero", {...ypy[0]}, "t1")
	}
	
	tl.from(".t1", {y:50, opacity:0, duration:.4}, "t1")
	



	


	tl.add("t2",  `+=${READ.t1}`)
	tl.to(".t1", {opacity:0, duration:.3}, "t2")
	tl.from(".t2", {opacity:0, duration:.3})
	tl.to(".t2", {opacity:0, duration:.3}, `+=${READ.t2}`)

	tl.add("end")
	if(ypy[1]){
		tl.to(".hero", {...ypy[1]}, "end")	
	}
	
	if(youPlayYou){
		tl.to(".ypy", {...youPlayYou}, "end")	
	}

	
	
	

	tl.from(".url", {opacity:0, duration:.3}, "end")




	tl.add(olg_ypy(), "-=.3")

	return tl
	
}




export {startBasic, READ}