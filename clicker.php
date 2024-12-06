<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PatateClicker</title>
    <link rel="stylesheet" href="style-clicker.css">
</head>
<body>
    <main>
        <button onclick="incrementScore()" id="patate"></button>
    </main>
    <div class="cote open">
        <button onclick="toggleAside()" class="buttonShowAside">
            <p id="fleche">></p>
        </button>
        <aside>
            <h2>Score</h2>
            <p id="score">0</p>
            <button onclick="updateScore()">Mettre à jour le score</button>
            <button onclick="showRules()">Règles du jeu</button>
        </aside>
    </div>

    <div class="rules">
        <span><button onclick="closeRules();"><h2>Règles</h2></button></span>
        <p>
            Les règles sont très simples : <br>
            - Vous devez clicker sur le boutton patate pour augmenter votre score. <br>
            - Vous pouvez mettre à jour votre score en cliquant sur le boutton "Mettre à jour le score". <br>
             <br>
        </p>
        <button onclick="alert('Pour quitter clickez sur le titre Règles en haut de la pop up');">Quitter</button>
    </div>
    <script src="script-clicker.js"></script>
</body>
</html>