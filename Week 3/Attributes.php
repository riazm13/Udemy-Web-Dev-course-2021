< !DOCTYPE html >
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Attributes in html</title>
</head>
<body>
    <form action="/tacos">
        <p>
            <label for="username">Enter a Username</label>
            <input id="username" type="text" placeholder="username" name="username">
        </p>
        <p>
            <label for="password">Enter a password</label>
            <input type="password" placeholder="password" id="password">
        </p>
        <p>
            <label for="color">Enter a color</label>
            <input type="color" id="color">
        </p>

        </form>
        <button>Not inside form</button>
    // this is a form that lets you search for things on reddit
        <form action="https://www.reddit.com/search">
            <input type="text" name="q">
            <button>Search Reddit</button>
        </form>

    // this is a form that lets you search for things on google
    <form action="https://www.google.com/search">
        <input type="text" name="q">
        <button>Search Reddit</button>

    </form>




</body>
</html>