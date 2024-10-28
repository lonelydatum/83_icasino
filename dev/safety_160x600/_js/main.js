import { READ, startBasic } from '../../_common/js/player_support.js'
import {bannerSize, init, olg_ypy, rotateScale1, rotateScale2} from '../../_common/js/common.js'

start()
function start(){

	const tl = init()
	
	const data = {list:[".ring1_1", ".ring1_2", ".ring1_3"], 
	offsetX:72, offsetY:466, to:{x:422, y:516+10}}	
	rotateScale1(data)
	
	rotateScale2({list:[".ypy1-1", ".ypy1-2", ".ypy1-3"], offsetX:0, offsetY:0, to:{x:80, y:300}})

	startBasic({shiftY:130})
	
}

