var EventUtil ={
	addHandler:function(ele,event,handler) {
		if (ele.addEventListener) {
			ele.addEventListener(event,handler,false);
		} else if(ele.attachEvent){
			ele.attachEvent("on"+event,handler);
		}else{
			ele["on"+event]=handler;
		}
	},
	removeHandler:function(ele,event,handler) {
		if (ele.removeEventListener) {
			ele.removeEventListener(event,handler,false);
		} else if(ele.detachEvent){
			ele.detachEvent("on"+event,handler);
		}else{
			ele["on"+event]=null;
		}
	},
};