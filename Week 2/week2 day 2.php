
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>W2D2</title>
</head>
<body>


    

<?php

function practiceFunct(){
   echo "This will be the message that is displayed";  //This will be displayed when the funct is called 
}


practiceFunct();// How to call the function


function familyName($fname, $Lname){
    echo "$fname Refnes.<br>"
}

familyName("Junaid");
familyName("Wiz Khalifa");
familyName("Jason Derulo"); 


//=================================

//=== Loops ====

$x = 1 //  Creates a variable

while($x <= 5) {
    echo "The number is: $x <br>";
    $x++;
}
$x = 0;

while($x<=100) {
    echo "The number is $x <br>";
    $x+=10;
}

$x = 0;

do {
    echo "The number is: $x <br>";
    $x++;
}   while ($x <= 5);


?>

</body>
</html>