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

function listIn(tl, list){
	tl.add("list_1")
	const xy = 50
	list.map((a, i)=>{
		tl.from(a[0], {opacity:0, x:a[1]*xy, y:a[2]*xy}, `list_1+=${i*.1}`)
	})
}

function start({coins=8, skew, y=3}){
	const tl = init()
	const list_a = [
		[".a1", -1, 0],
		[".a2", 1, 0],
		[".a3", 1, 0],
		[".a4", 1, 0],
		[".a5", -1, 0],
		[".a6", 1, -1],
	]
	listIn(tl, list_a)
	
	

}



export { start, rain, init, bannerSize, READ, olg_ypy }