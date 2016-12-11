<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Psychic Game!</title>
	<script src="https://code.jquery.com/jquery-2.2.3.js" integrity="sha256-laXWtGydpwqJ8JA+X9x2miwmaiKhn8tVmOVEigRNtP4=" crossorigin="anonymous"></script>
</head>
<body>

<h1>Psychic Game!</h1>

<!-- Here we create a generic drinkOptions div -->
<div id="drinkOptions"></div>

<script type="text/javascript">

	// Array holds all of the drinks available
	var list = [
        'Wins:',
        'Losses:',
        'Guesses Left:' 
        "Your Guesses so far:" 
        ];


for (var i = 0; i < drinkList.length; i++){
$("#drinkOptions").append(drinkList[i]);
	}
</script>
</body>
</html>
