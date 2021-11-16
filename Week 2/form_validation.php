<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Validation</title>
</head>
<body>

    Name: <input type="text" name="name">
    E-mail: <input type="text" name="email">[
    Website: <input type="text" name="website">
    Comment <input type="text" name="comment" rows="5" cols="40"></textarea>
    
    Gender:
    <input type="radio" name="gender" value="Female">Female
    <input type="radio" name="gender" value="Male">Male
    <input type="radio" name="gender" value="Other">Other
    
    <form method="post" action="<?php echo htmlspecialchars($_SERVER[php_self]);?>">
    
</body>
</html>