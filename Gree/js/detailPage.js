var nav=document.querySelector(".nav")
var ol=document.querySelector(".Submenu_show")

nav.onmouseenter=function(){
ol.className=" Submenu Submenu_show1"
}
nav.onmouseleave=function(){
    ol.className="Submenu_show"
    }
//放大镜

//获取所有操作对象
var box =document.querySelector(".detailpage_box")
var mark=document.querySelector(".mark")
var rigthBox=document.querySelector(".right_box")
var div=document.querySelector(".detailpage_show")
// console.log(div.offsetLeft)
//获取所有的小图片
var imgs=document.querySelectorAll(".imgs>img")
//获取右边大盒子中的图片对象
var img1=rigthBox.querySelector("img")
//给所有的小图片对象绑定点击事件
for(let i=0;i<imgs.length;i++){
    imgs[i].onclick=function(){
       //清空所有小图片的class属性值
       for(var j=0;j<imgs.length;j++){
           imgs[j].className=""
       }
       //给当前选中的小图片添加class属性值
       imgs[i].className='show'
       //获取当前选中的小图片的src属性值
       var src1=imgs[i].getAttribute("src")
       //给左右二个大盒子替换图片
       //获取box盒子里的图片对象
       var img2=box.querySelector("img")
       img2.setAttribute("src",src1)
       img1.setAttribute("src",src1)
    }
}
//创建移动函数
        function move(e){
            // //获取光标相对于box对象的位置
            var x=e.pageX-div.offsetLeft-mark.offsetWidth/2
            var y=e.pageY-div.offsetTop-mark.offsetHeight/2
          
            //设置边界条件
            var minX=0,minY=0
            var maxX=box.offsetWidth-mark.offsetWidth
            var maxY=box.offsetHeight-mark.offsetHeight
            //判断水平方向
            if(x<=minX){
                x=minX
            }else if(x>=maxX){
                x=maxX
            }
            mark.style.left=x+'px'

            //判断垂直方向
            if(y<=minY){
                y=minY
            }else if(y>=maxY){
                y=maxY
            }
            mark.style.top=y+'px'
            //给当前右边的图片对象设置偏移量
            img1.style.top=-2*y+'px'
            img1.style.left=-2*x+'px'
        }
//给box绑定移入 移动 移出事件
box.onmouseover=function(e){
    var e=e||window.event
    // var x=e.clientX-div.offsetLeft-mark.offsetWidth/2
    // var y=e.clientY-div.offsetTop-mark.offsetHeight/2

    //显示隐藏内容
    mark.style.display="block"
    rigthBox.style.display="block"
    move(e)
}
//绑定移动事件
box.onmousemove=function(e){
    var e=e||window.event
    move(e)
}
//移出事件
box.onmouseout=function(){
    mark.style.display="none"
    rigthBox.style.display="none"
}


// 顶部按钮
$(".Top_txt").on("mouseover",function(){
    $("h6").html("回到<br>顶部").css({
        fontSize:12,
        color:"white",
        background:"red"
    })
})
$(".Top_txt").on("mouseout",function(){
    $(".Top_txt").html("^").css({
        fontSize: 28,
       
    fontWeight: "bold",
    background:"gray"
    })
})
//点击回顶部   Top_scollp
$(window).scroll(()=>{
    if($(window).scrollTop()>=700){
        $(".Top_scollp").fadeIn(2000,"linear",function(){})
    }else{
        $(".Top_scollp").fadeOut(2000,"linear",function(){})
    }
})
$(".Top_txt").on("click",function(){
    $("html").animate({
        scrollTop:0
    },1000)
})

// 加入购物车
$(".shoppingApp_btn").click(function(){
    var img_1=$(".detailpage_img4").attr("src")
    var name=$(".products_tit").html()
    var price=$(".products_price").html()
    var num=$(".products_txt").val()
  
   $.ajax({
       url:'../interface/addwq.php',
       dataType:'json',
       data:{
           id:'21',
           name:name,
           img:img_1,
           num:num,
           price:price,
       },
       success:function(res){
        if(res.code){
            alert("商品加入成功")
        }
        else{
            alert("商品加入失败")
        }
       }
   })
})

//选项卡
//选项
$(".pitch").on("click",function(){
    $(this).addClass("introduced_show").siblings().removeClass("introduced_show")
    $(".show_img1").eq($(this).index()).addClass("show_show").siblings().removeClass("show_show")
  //   console.log($(".show_img1"))
})

$(".store_li").on("click",function(){
  $(this).children("ol").slideToggle().parent().siblings().children("ol").slideUp()
})
// 数量添加

$(".products_add").on("click",function(){
    var count=$(".products_txt").val()
    count++;
    $(".products_txt").val(count)
})

//减少数量
$(".products_subtract").on("click",function(){
    var count=$(".products_txt").val()
    count--
    if(count<1){
        return
    }
    $(".products_txt").val(count)
})

