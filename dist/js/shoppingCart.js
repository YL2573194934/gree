"use strict";function shoppCart(){$.ajax({url:"../interface/showlist.php",dataType:"json",success:function(n){$(".selecGoods").html(""),$.each(n.data,function(n,e){$(".selecGoods").append('\n                <ul class="list_box">\n                <li>\n                    <input type="checkbox" name="ids" id="items" class="items1">\n                </li>\n               \x3c!-- 商品名称 --\x3e\n                <li class="producName">\n                    <a href=""><img src="'.concat(e.product_img,'" alt=""></a> \n                </li>\n                \x3c!-- 商品类型 --\x3e\n                <li class="Wares">\n                    <p>\n                       <a href="">').concat(e.product_name,' </a>\n                        <a href="">颜色：浮光金</a>\n                    </p>\n                </li>\n             <li class="unit_show">').concat(e.product_price,'</li>\n                <li class="count_show">\n                    <input type="button" value="-"  class="aa cutNum">\n                    <input type="text" value=').concat(e.product_num,' class="bb txt_show">\n                    <input type="button" value="+" class="cc addNum1">\n                </li>\n                <li class="unit_money"></li>\n                <li class="operation_del">\n                   <a href="" class="operation_deletel"> 【删除】</a>\n                </li>\n            </ul>\n                '))})}})}shoppCart(),$(function(){$("#checkAll").click(function(){1==$("#this").prop("checked")?$(":checkbox[name='ids']").prop("checked",!0):$(":checkbox[name='ids']").prop("checked",!1),$(".checkedAllBox").checked=!0}),$(".checkedAllBox").click(function(){1==$(".checkedAllBox").prop("checked")?$(":checkbox[name='ids']").prop("checked",!0):$(":checkbox[name='ids']").prop("checked",!1),$("#checkAll").checked=!0}),$(function(){$(".accounts_btn").on("click",function(){layer.confirm("您确定要结算吗?",{btn:["确定","取消"]},function(){layer.msg("结算成功",{icon:6})})})}),$(".selecGoods").on("click",".addNum1",function(){var n=$(this).parent().siblings(".Wares").find("a").eq(0).html(),e=$(this);console.log(n),$.ajax({url:"../interface/updatewq.php",dataType:"json",data:{names:n,type:"add"}}).then(function(n){shoppCart(),function(){var n=$(this).prev().val(),e=$(this).parent().siblings(".unit_show").html().substring(1);$(this).parent().siblings(".unit_money").html(n*e)}.call(e)})}),$(".selecGoods").on("click",".cutNum",function(){var n=$(this).parent().siblings(".Wares").find("a").eq(0).html();$.ajax({url:"../interface/updatewq.php",dataType:"json",data:{names:n,type:"cut"},success:function(n){shoppCart()}});var e=$(this).next().val(),c=$(this).parent().siblings(".unit_show").html().substring(1);$(this).parent().siblings(".unit_money").html(e*c)}),$(".selecGoods").on("click",".operation_deletel",function(){var n=$(this).parent().siblings(".Wares").find("a").eq(0).text();return console.log(n),$.ajax({url:"../interface/delwq.php",dataType:"json",data:{name1:n},success:function(n){shoppCart()}}),!1})});