<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Getting used too the language</title>
</head>
<body>
    
    <h2>Variables</h2>
    <?php

            $txt = "Hello";
        //==============================================
            $x = 5;
            $y = 7;

            echo $x + $y;
        //===============================================

            echo strlen("Hello World!");

        //===============================================

            echo strrev("Hello World!")!
        //===============================================

            $oldtxt = "Hello World!";
            $nettxt = str_replace("World", "Dolly", $oldtxt);

        //===============================================

            echo 10*5;
        //===============================================

            echo 10/2;

        //===============================================

            var_dump($a==$b);
        //===============================================

            var_dump($a!=$b);
        //===============================================

            $a = 50;
            $b = 10;

            if ($a> $b) {
                echo "Hello World";
            }
        //===============================================
            $a = 50;
            $b = 10;

            if ($a != $b) {
                echo "Hello World";
            }

        //===============================================

        $a = 50;
        $b = 10;
        if($a == $b) {
            echo "Yes";
        } 
        else
        {
            echo "No";
        }
        //===============================================

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
        //===============================================

        
        switch($color) {
        
        case "red":
            echo "Hello";
            break;
        case "green":
            echo "Welcome";
            break;
        }
//===============================================

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


</body>
</html>