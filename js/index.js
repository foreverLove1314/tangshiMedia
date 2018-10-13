$(function(){
	$(window).load(function () {
		$('.btn-nav').on('click tap', function () {
			//遮罩层出现，禁止屏幕滚动或滑动
			$("body,html").toggleClass("ovhidden");
			$('.nav-content').toggleClass('showNav hideNav').removeClass('hidden');
			$(this).toggleClass('animated');
			
		});
	});
//	判断屏幕滚动
	var windowTop=0;//初始话可视区域距离页面顶端的距离
	$(window).scroll(function() {
	var scrolls = $(this).scrollTop();//scrollTop() 方法返回或设置匹配元素的滚动条的垂直位置
		if(scrolls>=windowTop){//当B>A时，表示页面在向下滑动
		//需要执行的操作
		$(".header2").css("visibility","hidden");
		$(".btn-nav").css("display","none");
		$(".footer2").css("visibility","visible");
		
		windowTop=scrolls;
		}else{//当B<A时，表示页面向上滑动
		//需要执行的操作
		$(".header2").css("visibility","visible");
		$(".btn-nav").css("display","block");
		$(".footer2").css("visibility","hidden");
		windowTop=scrolls;
		}
	});
	

//	登录框
	var htm=$("html").height();
	var UserName=/^[a-zA-Z0-9_-]{4,16}$/;
	var Password = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
	var reg=/^1[3578][01379]\d{8}|1[34578][01256]\d{8}|(134[012345678]\d{7}|1[34578][012356789]\d{8})$/g;//判断手机号码是否为中国电信，中国联通，中国移动中的一种
	$(".myself").click(function(){//点击显示登录框
		$(".LoginBox").css("display","block");
//		禁止屏幕滚动或滑动
		$("body,html").addClass("ovhidden");
		
	})
	
	$("#denglu").click(function(){//验证输入的用户名和密码
		$(".tishi").text("");
		$(".tishi2").text("");
		if(UserName.test(user)&&Password.test(pd)){
			}else {
			$(".tishi").text("输入格式有误");
			}
	})
	$("#zhuce").click(function(){//验证注册的用户名和密码
		$(".tishi").text("");
		$(".tishi2").text("");
		console.log($(".tishi").text(""))
		if(UserName.test(user1)&&Password.test(password1)&&reg.test(phone)){
	       
	    }else{
	     $(".tishi2").text("输入格式有误");     
		}
	})
//	返回界面
	$(".back").click(function(){
		$(".LoginBox").css("display","none");
		//		允许屏幕滚动或滑动
		$("body,html").removeClass("ovhidden");
	})

})