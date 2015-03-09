$(document).ready(function() {
	$("#mainSlider").carousel();
	
	//初始化footer的位置
	//initFooter();
	
	//设置底部颜色
	setFooterColor();
	
	$(".menu-btn").click(function(e) {
		//菜单目标id
		var targetId = e.currentTarget.id.substr(3);
		
		if($("#"+targetId)[0]) {
			//所在位置
			var scrollTarget = $("#"+targetId).offset().top - 62;
			e.preventDefault();
			$(".menu-btn").removeClass("current");
			$(".menu-btn").css("color", "");
			$(this).addClass("current");
			$(this).css("color", "#009ee3");
			$('html,body').animate({scrollTop:scrollTarget}, 1000, "swing", function(evt) {

			});


		}
	});
	
	$(".pasDetil").mouseleave(function() {
		hideAllPasDetail();
	});
	
	$(".footerMenu").click(function(e) {
		//菜单目标id
		var targetId = e.currentTarget.id.substr(7);
		
		if($("#"+targetId)[0]) {
			//所在位置
			var scrollTarget = $("#"+targetId).offset().top - 62;
			e.preventDefault();
			$('html,body').animate({scrollTop:scrollTarget}, 1000, "swing", function(evt) {
				
			});
			
			
		}
	});
	
	/*$(".aboutImg").click(function() {
		$(this).addClass("hide");
		$(this).next().removeClass("hide");
		$(this).prev().removeClass("hide");
	});
	
	$(".aboutImgBorder").click(function() {
		$(this).addClass("hide");
		$(this).next().removeClass("hide");
		$(this).next().next().addClass("hide");
	});*/
	
	$(".service").on("click", function() {
		$(this).toggleClass("flipped");
	});
	
	$(".service").on("mouseover", function() {
		$(this).addClass("flipped");
	});
	
	$(".service").on("mouseout", function() {
		$(this).removeClass("flipped");
	});
	
	$("#cases-pics .carousel-control.left, #team-pics .carousel-control.left").click(function() {
		$(this).css({
			"background" : "url('images/left-b.png') no-repeat center",
			"border" : "1px solid #009ee3"
		});
		$(this).next().css({
			"background" : "url('images/right-g.png') no-repeat center",
			"border" : "1px solid #919191"
		});
	});
	
	$("#cases-pics .carousel-control.right, #team-pics .carousel-control.right").click(function() {
		$(this).css({
			"background" : "url('images/right-b.png') no-repeat center",
			"border" : "1px solid #009ee3"
		});
		$(this).prev().css({
			"background" : "url('images/left-g.png') no-repeat center",
			"border" : "1px solid #919191"
		});
	});
	
	$(window).scroll(function() {
		/*var top = $(document).scrollTop();
		if(top > $("#pics").height() + $("footer").height()) {
			$("footer").css({
				"position" : "fixed",
				"top" : "",
				"bottom" : "0"
			});
		}else {
			initFooter();
		}*/
		//设置底部颜色
		setFooterColor();
	});
});

function showAbout(id) {
	if( id == "about-ul1") {
		$("#about-ul2").hide();
	}else {
		$("#about-ul1").hide();
	}
	$("#" + id).show();
}

var browser = {
	versions : function() {
		var u = navigator.userAgent, app = navigator.appVersion;
		return {
			trident : u.indexOf('Trident') > -1, //IE内核
			presto : u.indexOf('Presto') > -1, //opera内核
			webKit : u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
			gecko : u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
			mobile : !!u.match(/AppleWebKit.*Mobile.*/)||!!u.match(/AppleWebKit/), //是否为移动终端
			ios : !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
			android : u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
			iPhone : u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
			iPad : u.indexOf('iPad') > -1, //是否iPad
			webApp : u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
		};
	}()
};

function changeMenuCss(id){
	$(".menu-btn").removeClass("current");
	$(".menu-btn").css("color", "");
	$("#to-" + id).addClass("current");
	$("#to-" + id).css("color", "#009ee3");
}

//显示或隐藏产品和解决方案的详细信息
function showOrHidePasDetail(id) {
	//显示或隐藏当前方案明细
	$("#" + id).toggleClass("hide");
	//隐藏其他方案明细
	$(".pasDetil[id!='"+id+"']").addClass("hide");
	
	var imgs = $(".pasDetilImg");
	var pasDetil = $(".pasDetil");
	for(var i = 0; i < pasDetil.length; i++) {
		//如果当前方案隐藏了，则显示默认图片
		if($(pasDetil[i]).hasClass("hide")) {
			$(imgs[i]).attr("src", "images/pro-" + (i + 1) + ".png");
		}else {
			//否则，显示按下的图片
			$(imgs[i]).attr("src", "images/pro-press-" + (i + 1) + ".png");
		}
	}
}

function hideAllPasDetail() {
	var imgs = $(".pasDetilImg");
	var pasDetil = $(".pasDetil");
	for(var i = 0; i < pasDetil.length; i++) {
		//隐藏明细
		$(".pasDetil[id!='"+i+"']").addClass("hide");
		//显示默认图片
		$(imgs[i]).attr("src", "images/pro-" + (i + 1) + ".png");
	}
}

//底部自动浮动
function initFooter() {
	if(!browser.versions.mobile) {
		$("footer").css({
			"position": "absolute",
			"top" : $(window).height() + $("#pics").height(),
			"bottom" : ""
		});
	}else {
		$("footer").css({
			"position": "fixed",
			"bottom" : "0"
		});
	}
}

function setFooterColor() {
	var scrollTop = $(document).scrollTop();
	var aboutHeight = parseInt("" + $("#about").offset().top - 62);
	var solutionsHeight = parseInt("" + $("#solutions").offset().top - 62);
	var casesHeight = parseInt("" + $("#cases").offset().top - 62);
	var teamHeight = parseInt("" + $("#team").offset().top - 62);
	var contactHeight = parseInt("" + $("#contact").offset().top - 62);
	
	if(aboutHeight <= scrollTop && scrollTop < solutionsHeight) {
		changeMenuCss("about");
	}
	if(solutionsHeight <= scrollTop && scrollTop < casesHeight) {
		changeMenuCss("solutions");
	}
	if(casesHeight <= scrollTop && scrollTop < teamHeight) {
		changeMenuCss("cases");
	}
	if(teamHeight <= scrollTop && scrollTop < contactHeight) {
		changeMenuCss("team");
	}
	/*if(contactHeight < scrollTop){
		$("#footer-contact").addClass("cl009ee3");
	}*/
	var scrollHeight = $(document).height();
	var windowHeight = $(this).height();
	//滚动到最底部
	if(scrollTop + windowHeight == scrollHeight){
		changeMenuCss("contact");
	}
}