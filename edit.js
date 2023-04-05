<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Pokemon</title>
    <style>
        body {
            text-align: center;
        }
    </style>

</head>
<body>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" style="width: 200px;">
    <form action="/pokemon/<%= index %>?_method=PUT" method="POST">
        <label for="name">Name:</label>
        <input type="text" name="name" value="<%= singlePokemon.name %>">
        <br>
        <br>
        <label for="type">Type:</label>
        <input type="text" name="type" value="<%= singlePokemon.type %>">
        <br>
        <br>
        <label for="img">ImageURL:</label>
        <input type="text" name="img" value="<%= singlePokemon.img %>">
        <br>
        <br>
        <label for="id">ID:</label>
        <input type="text" name="id" value="<%= singlePokemon.id %>">
        <br>
        <br>
        <label for="classification">Classification:</label>
        <input type="text" name="classification" value="<%= singlePokemon.misc.classification %>">
        <br>
        <br>
        <label for="nability">Normal Ability:</label>
        <input type="text" name="nability" value="<%= singlePokemon.misc.abilities.normal %>">
        <br>
        <br>
        <label for="hability">Hidden Ability:</label>
        <input type="text" name="hability" value="<%= singlePokemon.misc.abilities.hidden %>">
        <br>
        <br>
        <label for="height">Height:</label>
        <input type="text" name="height" value="<%= singlePokemon.misc.height %>">
        <br>
        <br>
        <label for="weight">Weight:</label>
        <input type="text" name="weight" value="<%= singlePokemon.misc.weight %>">
        <br>
        <br>
        <input type="submit" name="" value="Edit Pokemon">
    </form>
</body>
</html>