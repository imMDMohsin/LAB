<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
</head>
<style>
    body{
        background-color: #2f2f2f;
        color: white;
    }
</style>

<body>
    <div>
        <h2>Name : <?php echo ($_POST['name']) ?> </h2>
        <h2>Email : <?php echo ($_POST['email']) ?> </h2>
        <h2>Age : <?php echo ($_POST['age']) ?> </h2>
    </div>
</body>
</html>