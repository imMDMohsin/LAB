<!DOCTYPE html>
<html>
<head>
    <title>CRUD Operations</title>
</head>
<body>
    <h2>CRUD Operations</h2>

    <form action="create.php" method="post">
        <input type="text" name="name" placeholder="Name">
        <input type="text" name="email" placeholder="Email">
        <input type="submit" value="Insert">
    </form>

    <br>

    <form action="update.php" method="post">
        <input type="text" name="id" placeholder="ID">
        <input type="text" name="name" placeholder="Name">
        <input type="text" name="email" placeholder="Email">
        <input type="submit" value="Update">
    </form>

    <br>

    <form action="delete.php" method="post">
        <input type="text" name="id" placeholder="ID">
        <input type="submit" value="Delete">
    </form>

    <br>

    <form action="read.php" method="post">
        <input type="submit" value="Select">
    </form>
</body>
</html>