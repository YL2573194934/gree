<?php
$username=$_REQUEST['name'];
$password=$_REQUEST['pw'];
include "./base.php";
//连接数据库
$connt=mysqli_connect('localhost','root','root','music');
//执行语句
$sql="SELECT * FROM `user` WHERE `username`='$username' AND `password`='$password'";
$res=mysqli_query($connt,$sql);
$row=mysqli_fetch_assoc($res);
echo json_encode($row);
?>