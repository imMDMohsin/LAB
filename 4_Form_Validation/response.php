<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Response</title>
    <link rel="stylesheet" href="response.css">
</head>
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    body {
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        background-color: #525252;
    }

    .container {
        width: 45vw;
        padding: 5%;
        border-radius: 10px;
        background-color: #0093E9;
        background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
        box-shadow: 2px 2px 5px rgb(54, 54, 54);
        color: white;
    }

    .container p {
        font-size: 2vw;
    }
</style>

<body>
    <div class="container">
        <p><strong>Name:</strong> <?php echo $_POST['name']; ?></p>
        <p><strong>Password:</strong> <?php echo $_POST['pass']; ?></p>
        <p><strong>Age:</strong> <?php echo $_POST['age']; ?></p>
        <p><strong>Gender:</strong> <?php echo isset($_POST['gen']) ? ($_POST['gen'] == 'male' ? 'Male' : 'Female') : 'Not specified'; ?></p>
        <p><strong>Country:</strong> <?php echo $_POST['country']; ?></p>
    </div>

    <!-- <?php
            echo "Name : ";
            echo $_POST['name'] . '<br>';

            echo "Password: ";
            echo $_POST['pass'] . '<br>';

            echo "Age: ";
            echo $_POST['age'] . '<br>';

            echo "Gender: ";
            echo isset($_POST['gen']) ? $_POST['gen'] : 'Not specified' . '<br>';

            echo "Country: ";
            echo $_POST['country'] . '<br>';
            ?> -->

</body>

</html>