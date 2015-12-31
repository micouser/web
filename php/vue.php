<?php
//$filename = $_POST['fullname'];
$filename = file_get_contents("PHP://INPUT");
if ($filename) {
    file_put_contents("../data/name.json",$filename);
}
echo  $filename;
?>

