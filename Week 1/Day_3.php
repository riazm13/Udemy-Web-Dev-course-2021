<?php

define( "Greeting", "welcome to Const");
echo Greeting

define("GREETING", "something else", true);
echo GREETING;


define ("cars", ["Tesla", "BMW", "Merc"]);
echo cars[0]

echo 10 * 5;

echo 10 / 2;

var_dump($a == $b);

var_dump($a != $b);

$a = 50;
$b = 10;
if
 
($a
 > 
$b)
 {
  echo "Hello World";
}


$a = 50;
$b = 10;
if
 
($a
 
!=
 
$b) 
 {
  echo "Hello World";
}

$a = 50;
$b = 10;
if($a == $b) {
    echo "Yes";
} 
else
{
    echo "No";
}


$a = 50;
$b = 10;
if($a == $b) {
echo "1";
} 
elseif
    ($a > $b) {
        echo "2";
} 
else
{
    echo "3";
}



switch($color) {

case "red":
    echo "Hello";
    break;
case "green":
    echo "Welcome";
    break;
}


switch ($color) {
    case "red":
      echo "Hello";
      break;
    case "green":
      echo "Welcome";
      break;
default:
    echo "Neither";
}

?>