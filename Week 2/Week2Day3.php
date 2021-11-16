<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Forms</title>
</head>
<body>

    <form action= "welcome.php" method="post">
    Name: <input type="text" name="name"> <br>
    E-mail: <input type="text" name="email"><br>
    <input type="submit">
    </form>              

    <form action= "welcome.php" method="get">
    Name: <input type="text" name="name"> <br>
    E-mail: <input type="text" name="email"><br>
    <input type="submit">
    </form>

<?php

/*

Think SECURITY when processing PHP forms!

This page does not contain any form validation, it just shows how you can send and retrieve form data.

However, the next pages will show how to process PHP forms with security in mind! Proper validation of form data is important to protect your form from hackers and spammers!

 */
?>


</body>
</html>