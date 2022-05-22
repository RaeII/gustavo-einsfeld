$(function(){

	$.fn.alertbox = function(){
		var corFundo = "transparent";
		if($(this).css('backgroundColor')){
			var corFundoRGB = $(this).css('backgroundColor');
			if(hexc(corFundoRGB)){
				corFundo = hexc(corFundoRGB);
			}
		}
		if(corFundo=="transparent"){
			$(this).css("backgroundColor","#FFF");
		}
		$(this).animate({ backgroundColor: "#FF0" },100);
		$(this).animate({ marginLeft:"3px" },50);
		$(this).animate({ marginLeft:"0px" },50);
		$(this).animate({ marginLeft:"3px" },50);
		$(this).animate({ marginLeft:"0px" },50);
		$(this).animate({ marginLeft:"3px" },50);
		$(this).animate({ marginLeft:"0px" },50);
		$(this).animate({ marginLeft:"3px" },50);
		$(this).animate({ marginLeft:"0px" },50);
		$(this).animate({ marginLeft:"3px" },50);
		$(this).animate({ marginLeft:"0px" },50);
		$(this).animate({ marginLeft:"3px" },50);
		$(this).animate({ marginLeft:"0px" },50);
		$(this).animate({ marginLeft:"3px" },50);
		$(this).animate({ marginLeft:"0px" },50);
		$(this).animate({ marginLeft:"3px" },50);
		$(this).animate({ marginLeft:"0px" },50);
		$(this).animate({ marginLeft:"3px" },50);
		$(this).animate({ marginLeft:"0px" },50);
		$(this).animate({ backgroundColor: corFundo },1000);
	}
	//$("#msgformfrete>.boxfrete.lista").alertbox();


	$.fn.boxerro = function(msg){
		var obj = $(this);
		var height = obj.outerHeight();
		var erro = $("<div style='display:table;position:absolute;padding-top:"+height+"px'><div style='background-color:#F00;color:#FFF;padding-top:3px;padding-bottom:3px;padding-left:7px;padding-right:7px;display:none;'>"+msg+"</div></div>").insertBefore(this);
		$(erro).children("div").fadeIn(1000);
		$(obj).keypress(function(){
			$(erro).fadeOut(1000);
		});
	}
	
	
	
	



	

});




