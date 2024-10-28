import { READ, startBasic} from '../../_common/js/player_support.js'
import {bannerSize, init, olg_ypy, rotateScale1, rotateScale2} from '../../_common/js/common.js'

start()
function start(){

	
	// 330 1020
	const data = {list:[".ring1_1", ".ring1_2", ".ring1_3"], 
	offsetX:700, offsetY:210, to:{x:1018, y:1230}}

	
	
	rotateScale1(data)
	rotateScale2({list:[".ypy1-1", ".ypy1-2", ".ypy1-3"], offsetX:0, offsetY:0, to:{x:710, y:190}})
	
	startBasic({shiftY:0})
	
	
}

