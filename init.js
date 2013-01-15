function show(url,params,val){
	var tpl = $("#tpl").clone();
	var uiUrl = tpl.find("url");
	var uiParams = tpl.find("param");
	var uiVal = tpl.find("val");
	
	uiUrl.html(url);
	uiParams.html(params);
	uiVal.html(val);
	
	$("#content").append(tps);
}