<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>welcome <?php echo $_POST["name"]; ?><br>
    Your email address is: <?php echo $_POST["email"]?>; 
    </p>


    <p>welcome <?php echo $_GET["name"]; ?><br>
    Your email address is: <?php echo $_GET["email"];?>
    </p>
  
</body>
</html>