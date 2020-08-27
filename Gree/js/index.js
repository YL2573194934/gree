$(window).scroll(()=>{
    if($(window).scrollTop()>=1200){
        $(".floor_list").fadeIn(2000,"linear",function(){})
    }else{
        $(".floor_list").fadeOut(2000,"linear",function(){})
    }
})

$(document).ready(function () {
	var oDate = new Date();
	var nowTime = oDate.getTime(); //现在的毫秒数
	oDate.setDate(oDate.getDate() + 1); // 设定截止时间为第二天
	var targetDate = new Date(oDate.toLocaleDateString());
	run(targetDate);
});

function run(enddate) {
	getDate(enddate);
	setInterval("getDate('" + enddate + "')", 500);
}

function getDate(enddate) {
	var oDate = new Date(); //获取日期对象

	var nowTime = oDate.getTime(); //现在的毫秒数
	var enddate = new Date(enddate);
	var targetTime = enddate.getTime(); // 截止时间的毫秒数
	var second = Math.floor((targetTime - nowTime) / 1000); //截止时间距离现在的秒数

	var day = Math.floor(second / 24 * 60 * 60); //整数部分代表的是天；一天有24*60*60=86400秒 ；
	second = second % 86400; //余数代表剩下的秒数；
	var hour = Math.floor(second / 3600); //整数部分代表小时；
	second %= 3600; //余数代表 剩下的秒数；
	var minute = Math.floor(second / 60);
	second %= 60;
	var spanH = $('.se-txt')[0];
	var spanM = $('.se-txt')[1];
	var spanS = $('.se-txt')[2];

	spanH.innerHTML = tow(hour);
	spanM.innerHTML = tow(minute);
	spanS.innerHTML = tow(second);
}

function tow(n) {
	return n >= 0 && n < 10 ? '0' + n : '' + n;
}

//楼层
$(".floor_show").click(function(){
	$(this).children(".floor_box").show().prev().hide();
	$(this).siblings(".floor_show").children(".floor_box").hide().parents().children(".floor_span").show();
})

// 列表
$(".Submenu_li").on("mouseenter",function(){
	$(".Submenu_box").css("display","block")
	$.ajax({
		url:"../data/data.json",
		dataType:"json",
		success:function(res){
		$.each(res.name,function(index,item){
			$('Submenu_box').append(`
			<div class="sub_l">
			<ul>
			  <li class="sub_txt">${item.title} &nbsp;&nbsp; &nbsp;&nbsp;></li>
			  <li>${itrm.name}</li>
			 
			</ul>
		   
		  </div>
			`)
		})
		}
	})

	
})
$(".Submenu_li").on("mouseleave",function(){
	$(".Submenu_box").css("display","none")
	
	
})
