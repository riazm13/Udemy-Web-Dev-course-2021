<?php

// this is a counter from 1-5
$x = 1;

while($x <= 5) {
    echo "The number is: $x <br>";
    $x++;
}

//Counts up in 10's
 $x = 0;

 while($x <= 100){
     echo "The number is $x <br>";
     $x += 10;
 }

//starts from  1-6
 $i = 1;

 while($i < 6) {
     echo $i;

     $i++;
 }
 
$i = 1;

do{
    echo $i;
    $i++;
}  while ($i < 6);



for ($i = 0; $i < 10; $i++){
    echo $i;
}

$colors = array("red", "green", "blue", "yellow");

foreach ($colors as $x){
    echo $x;
}

function myFunction() {
    echo "Hello World!";
}
myFunction();

function myFunction($fname, $lname){
    echo $fname;
}


function myFunction($fname, $lname){
    
    return $lname;
}

$fruits = array("Apple#", "Banana", "orange");
echo coumk($fruits);
echo count($fruits[1]);

$cars = array("Volvo", "BMW", "Toyota");
echo "I Like .$Cars[0].";


$age = array("peter"=>"35", "Ben"=>"37", "Joe"=>"43", );

asort($age);

echo "Ben is " . $age['Ben'] . "years old";

foreach($age as $x => $y){
    echo "key=" . $x . ", Value=" . $y;
}


$colors = array("red", "green", "blue", "yellow");
sort($colors);
rsort($colors);


echo date("1");
echo date("Y.m.d")

?>

<!DOCTYPE html>
<html lang="en">
<head>
</head>
<body>
    <form action="welcome.php" method="get">
    First name: <input type="text"  name = "fname">
</form>

    Welcome <?php echo $_GET["fname"];?>
    Welcome <?php echo $_POST["fname"];?>
</body>
</html>