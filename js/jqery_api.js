/*$(document).on("mobileinit",function(){
	$.extend($.mobile,{
		loadingMessage: "努力加载中。。。",
		pageLoadErrorMessage: "找不到对应页面！",
		gradeA: function(){
			var divTmp = document.createElement("div");
			divTmp.innerHTML = "<div style='-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);'></div>";
			var btnSupport = false;
			btnSupport = (divTmp.firstChild.style.webkitTransform != undefined) || (divTmp.firstChild.style.MozTransform != undefined);
			return btnSupport;
		}
	});
});
*/


$(function(){
	var strTmp = "浏览器是否为A类级别：";
	$("#pTip").html(strTmp+$.mobile.gradeA());
	
	/*触摸滑动事件*/
	//全局命名空间
	var swiptimg = {
		$index:0,
		$width:120,
		$swipt:0,
		$legth:3
	}
	var $imgul = $("#ifrswipt");
	$(".imgswipt").each(function(){
		$(this).swipeleft(function(){
			if (swiptimg.$index<swiptimg.$legth) {
				swiptimg.$index++;
				swiptimg.$swipt = -swiptimg.$index*swiptimg.$width;
				$imgul.animate({left:swiptimg.$swipt},"slow");
			}
		}).swiperight(function(){
			if (swiptimg.$index>0) {
				swiptimg.$index--;
				swiptimg.$swipt = -swiptimg.$index*swiptimg.$width;
				$imgul.animate({left:swiptimg.$swipt},"slow");
			}
		});
	});
	/*滚动*/
	$("div[data-role='page']").on('pageinit',function(event,ui){
		var eventsElement = $("#a");
		$(window).on("scrollstart",function(){
			eventsElement.html("开始滚动");
			eventsElement.css("background","green");
		});
		$(window).on("scrollstop",function(){
			eventsElement.html("滚动停止");
			eventsElement.css("background","red");
		});
	});
	//显示隐藏
	$("div[data-role='page']").on('pagebeforehide',function(event,ui){
		console.log("1、"+ui.nextPage[0].id+"正在显示。。。")
		console.log(ui)
	});
	$("div[data-role='page']").on('pagebeforeshow',function(event,ui){
		console.log("2、" + ui + "正在影藏。。。")
		console.log(ui)
	});
	$("div[data-role='page']").on('pagehide',function(event,ui){
		console.log("3、"+ui+"显示完。。。")
		console.log(ui)
	});
	$("div[data-role='page']").on('pageshow',function(event,ui){
		console.log("4、"+ui+"隐藏完。。。")
		console.log(ui)
	});
});
