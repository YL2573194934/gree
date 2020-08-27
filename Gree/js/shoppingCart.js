// // 添加数量
// $(".addNum").on("click",function(){
//     var count=$(".txt_show").val()
//     count++
//    $(this).$(".txt_show").val(count)
// //    $.ajax({
// //     url:"../interface/updatewq.php",
// //     dataType:'json',
// //     data:{
// //         type:"add",
// //         id:"1"
// //     },success:function(res){
// //         $(".txt_show").val()
// //     }
// //    })
// })

// // 减少数量
// $(".cutNum").on("click",function(){
//     var count=$(".txt_show").val()
//     count--
//     if(count<1){
//         return;
//     }
//     $(".txt_show").val(count)
// })
// //小计
// var per=$(".unit_show").html()
// var count=$(".txt_show").val()

// var moeny=(per*count)
// $(".unit_money").html( moeny)
// //删除

// $(".operation_del").click(function(){
//     var del=$(".list_box")
//     console.log(del)
//     if(confirm("你确定删除吗?")){
//         del.remove()
//     }
// })
//查询并显示购物车
function shoppCart(){
    $.ajax({
        url:"../interface/showlist.php",
        dataType:"json",
        success:function(res) {
         
            $(".selecGoods").html("")
            $.each(res.data,function(index,item){
               
                $('.selecGoods').append(`
                <ul class="list_box">
                <li>
                    <input type="checkbox" name="ids" id="items" class="items1">
                </li>
               <!-- 商品名称 -->
                <li class="producName">
                    <a href=""><img src="${item.product_img}" alt=""></a> 
                </li>
                <!-- 商品类型 -->
                <li class="Wares">
                    <p>
                       <a href="">${item.product_name} </a>
                        <a href="">颜色：浮光金</a>
                    </p>
                </li>
             <li class="unit_show">${item.product_price}</li>
                <li class="count_show">
                    <input type="button" value="-"  class="aa cutNum">
                    <input type="text" value=${item.product_num} class="bb txt_show">
                    <input type="button" value="+" class="cc addNum1">
                </li>
                <li class="unit_money"></li>
                <li class="operation_del">
                   <a href="" class="operation_deletel"> 【删除】</a>
                </li>
            </ul>
                `)

            })
          
        }
    })
}
shoppCart()


//点击#checkAll 全选
$(function(){


$("#checkAll").click(function(){
   
    if($("#this").prop("checked")==true){
        $(":checkbox[name='ids']").prop("checked",true)
        
        
    }else{
        $(":checkbox[name='ids']").prop("checked",false)
    }
    $(".checkedAllBox").checked=true
})

//全选
$(".checkedAllBox").click(function(){
  
    if($(".checkedAllBox").prop("checked")==true){
        $(":checkbox[name='ids']").prop("checked",true)
        
    }else{
        $(":checkbox[name='ids']").prop("checked",false)
    }
    $("#checkAll").checked=true
    
})
//结算
$(function () {
    $(".accounts_btn").on("click", function () {
    
        layer.confirm('您确定要结算吗?', {
            btn: ['确定', '取消'] //按钮
        }, function () {
            layer.msg('结算成功', {
                icon:6,
            });
        })
    })
})
// $(".selecGoods").on('click','.items1',function(){
//       if($(this).prop("che"))
// })
//添加
$('.selecGoods').on('click','.addNum1',function(){
   
 
    var name1=$(this).parent().siblings('.Wares').find('a').eq(0).html()
    var that = $(this)
    
    console.log(name1)
    $.ajax({
        url:"../interface/updatewq.php",
        dataType:"json",
        data:{
        names:name1,
         type:"add",
        },
        // success:function(res){
            

        //     // var count=$(this).prev().val()
        //     // $(".txt_show").html(count)
            
        //     
        // }
        
    })
    .then(function(res){
        shoppCart()
        function a(){
            var count=$(this).prev().val()
         var price1=$(this).parent().siblings(".unit_show").html().substring(1);
        // price1=price1
        // console.log(price1)
          var heji=$(this).parent().siblings(".unit_money").html(count*price1)
        }
        a.call(that)
        // console.log(heji)


    })

   
 
})
    //减少数量
    $('.selecGoods').on('click','.cutNum',function(){
        
        var name1=$(this).parent().siblings('.Wares').find('a').eq(0).html()
        
        $.ajax({
            url:"../interface/updatewq.php",
            dataType:"json",
            data:{
                names:name1,
                type:"cut",
            },
            success:function(res){
                // var count=$(this).prev().val()
                // $(".txt_show").html(count)
                shoppCart()
            }
        })
        var count=$(this).next().val()
        var price1=$(this).parent().siblings(".unit_show").html().substring(1);
       // price1=price1
       // console.log(price1)
         var heji=$(this).parent().siblings(".unit_money").html(count*price1)
    })


    //删除
    $(".selecGoods").on("click",".operation_deletel",function(){
      
        var namess=$(this).parent().siblings(".Wares").find("a").eq(0).text();
        console.log(namess)

      $.ajax({
          url:"../interface/delwq.php",
          dataType:"json",
          data:{
              name1:namess,
          },
          success:function(res){
              shoppCart()
            // console.log(res)
          }
      })
     return false;
    })
  


})
