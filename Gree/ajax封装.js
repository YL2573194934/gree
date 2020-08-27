function GetAjax(url,cb){
    //创建ajax对象
var xhr=new XMLHttpRequest()
//配置请求
xhr.open('get',url)
//接收响应
xhr.onload=function(){
    cb(xhr.responseText)
}
//发送请求
xhr.send()
}
//调用封装函数
//    GetAjax('./ajax.php?name=lili&pw=1234',function(data){
//        document.querySelector("h1").innerHTML=data
//    })

function PostAjax(url,cd,parameter){
   //创建ajax对象
var xhr=new XMLHttpRequest()
//配置请求
xhr.open('POST',url)
//接收响应
xhr.onload=function(){
   cd(xhr.responseText)
}
//4-0 发送请求之前要设置content-type
xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
//发送请求
xhr.send(parameter)
}