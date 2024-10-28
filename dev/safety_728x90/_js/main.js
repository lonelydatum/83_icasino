import { READ, startBasic} from '../../_common/js/player_support.js'
import {bannerSize, init, olg_ypy, rotateScale1, rotateScale2} from '../../_common/js/common.js'

start()
function start(){

	
	// 446px 502px
	const data = {list:[".ring1_1", ".ring1_2", ".ring1_3"], 
	offsetX:498, offsetY:35, to:{x:458, y:509}}

	
	
	rotateScale1(data)
	rotateScale2({list:[".ypy1-1", ".ypy1-2", ".ypy1-3"], offsetX:0, offsetY:0, to:{x:486, y:45}})
	
	startBasic({shiftY:0})
	
	
}

