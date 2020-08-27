// 验证用户名
function checkUsername(){
    
   
    //定义正则
   
   $(".inpu_txt").on("change",function(){
    var username=$(".inpu_txt").val()
    var reg=/^1[34578]\d{9}$/;
    var flag=reg.test(username);
    if(flag){
        //验证成功
        $(".int_txt").html("手机号码合法")
       
    }else{
        $(".int_txt").html("手机号码必须是1开头11位的数字")
        
    }
   })
}
checkUsername()
//验证密码
function checkPassword(){
    $(".pw1").on("change",function(){
        var Password=$(".pw1").val()
        // 数字、26个英文字母或者下划线组成
        var reg=/^\w{3,20}$/
        var flag=reg.test(Password)
        if(flag){
            //验证成功
            $(".int_password").html("密码正确")
           
        }else{
            $(".int_password").html("数字、26个英文字母或者下划线组成")
            
        }
    })
}
checkPassword()
//再次确认密码
function checkPassword1(){
    $(".pw2").on("change",function(){
        var Password=$(".pw2").val()
        // 数字、26个英文字母或者下划线组成
        var reg=/^\w{3,20}$/
        var flag=reg.test(Password)
        if(flag){
            //验证成功
            $(".int_password1").html("密码正确")
           
        }else{
            $(".int_password1").html("数字、26个英文字母或者下划线组成")
            
        }
    })
}
checkPassword1()
// 判断密码是否一致
function heckPasswordAgain(){
  $(".pw2").on("change",function(){
    var $pwd1=$(".pw1").val()
    var $pwd2=$(".pw2").val()
    if($pwd1!=$pwd2){
        alert("输入的密码不一致")
    }
  })
}
heckPasswordAgain()

// $(".pw2").on("change",function(){
//     var $pwd1=$(".pw1").val()
//     var $pwd2=$(".pw2").val()
//     if($pwd1 != $pwd2){
//         alert("输入的密码不一致")
//     }
// })


    $("#submit").click(function(){
        if($(".inpu_txt")&& $(".pw1")&& $(".pw2")){
       
            $.ajax({
                method:'post',
                url:"./php/register.php",
                data:{
                name:$(".un").val(),
                pw:$(".pw").val(),
                },
                success:function(data){
                if(data.code==1){
                location.href="../login.html"
                }else{
                     //表示失败
                alert(data.msg)
                }
                },
                 dataType:'json'
        })
        }
    })

