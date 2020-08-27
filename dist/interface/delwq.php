<?php
require('./model/_connect.php');
$names= $_REQUEST['name1'];
//根据id删除数据
$sql = "DELETE FROM `cart` WHERE `product_name`='$names'";
$result = mysqli_query($conn,$sql);
if($result){
	echo json_encode(array("code"=>1));
}else{
	echo json_encode(array("code"=>0));
}

?>