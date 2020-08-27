<?php
$username=$_REQUEST['name'];
$password=$_REQUEST['pw'];
// $username="lisi1111";
// $password="123456";
include "./base.php";
//连接数据库
$connt=mysqli_connect('localhost','root','root','music');
//执行语句
$sql="SELECT * FROM `user` WHERE `username`='$username'";
$res=mysqli_query($connt,$sql);
$row=mysqli_fetch_assoc($res);
if($row){
    //如果查询到，说明该用户已经存在于数据库，无法注册
    $arr=array('code'=>0,'msg'=>'用户名已被注册');
}
else{
    $sql="INSERT INTO `user` (`username`,`password`)VALUES ('$username','$password') ";
    //执行语句
    $res=mysqli_query($connt,$sql);
    if($res){
        $arr=array('code'=>1,'data'=>array('username'=>$username));
    }else{
        $arr=array('code'=>0,'msg'=>'后端出问题');
    }
}

echo json_encode($arr);

?>