<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create Account</title>
    <link rel="stylesheet" href="sign-up.css">
    <script src="form.js" defer></script>


</head>
<body>
    <section class="sign-up">
        <form action="" method="post" class="sign-up-form">
            <a href="./launchGame.php" id="check">&check;</a>
            <img id="form-logo" src="./img/patate.png" alt="">

            <label for="pseudo">Pseudo</label>
                <input type="pseudo" id="pseudo" name="pseudo" name="pseudo" value="Tapez votre pseudo" tabindex="-1">

            <label for="email">E-mail</label>
                <input type="email" id="email" name="email" name="email" value="Tapez votre adresse E-mail" tabindex="-1" >
                
            <label for="password" >Mot de passe</label>
                <input type="text" id="password" name="password" name="password" value="Tapez votre mot de passe" tabindex="-1">
            
            <label for="password_confirm">Confirmation du mot de passe</label>
                <input type="text" id="password_confirm" name="password_confirm" value="Confirmez votre mot de passe" tabindex="-1">
            <button>cool</button>
        </form>
    </section>
</body>
</html>
