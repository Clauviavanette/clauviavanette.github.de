<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clauvia Vanette Kamto - Portfolio</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #808080;
            color: #fff;
        }
        header {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 1em 0;
        }
        nav {
            text-align: center;
            background-color: #555;
            padding: 0.5em 0;
        }
        nav a {
            color: #fff;
            text-decoration: none;
            margin: 0 15px;
            cursor: pointer;
        }
        section {
            max-width: 800px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
        }
        h1, h2 {
            color: #333;
        }
        p {
            line-height: 1.6;
            color: #555;
        }
        img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            margin-bottom: 10px;
            display: block;
            margin-left: auto;
            margin-right: auto;
            cursor: pointer;
            transition: transform 0.3s;
        }
        img:hover {
            transform: scale(1.1);
        }
        .gallery {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            grid-gap: 10px;
        }
    </style>
</head>
<body>

    <header>
        <h1>Clauvia Vanette Kamto</h1>
        <p>Webentwickler | Tennis-Enthusiast | Reiseliebhaber</p>
    </header>

    <nav>
        <a href="#" onclick="showHome()">Home</a>
        <a href="#" onclick="showAboutMe()">About Me</a>
        <a href="#" onclick="showPortfolio()">Portfolio</a>
        <a href="#" onclick="showContact()">Kontakt</a>
    </nav>

    <section id="homeSection">
        <h2>Willkommen!</h2>
        <p>Herzlich willkommen auf meiner Portfolio-Website. Hier kannst du mehr über mich erfahren, meine Projekte entdecken und mit mir in Kontakt treten.</p>
    </section>

    <section id="aboutMeSection" style="display: none;">
        <h2>Über mich</h2>
        <p>Ich wurde in Kamerun geboren und bin zwischen Kamerun und Frankreich aufgewachsen. Die Zeit mit Familie und Freunden zu verbringen, liebe ich sehr. Seit meinem 8. Lebensjahr spiele ich Tennis und bin ziemlich gut darin 😊. Auch das Reisen und Entdecken begeistert mich sehr. Stay tuned and enjoy!</p>
    </section>

    <section id="portfolioSection" style="display: none;">
        <h2>Bildergalerie</h2>
        <div class="gallery">
            <img src="natur.jpg" alt="Bild 1" onclick="showMessage('Bild 1 ausgewählt')">
            <img src="voyage.jpg" alt="Bild 2" onclick="showMessage('Bild 2 ausgewählt')">
            <img src="vue.jpg" alt="Bild 3" onclick="showMessage('Bild 3 ausgewählt')">
            <!-- Füge weitere Bilder hinzu, wenn nötig -->
        </div>
    </section>

    <section id="contactSection" style="display: none;">
        <h2>Kontakt</h2>
        <p>Email: deine@email.com<br>
           LinkedIn: linkedin.com/deinprofil<br>
           GitHub: github.com/deinbenutzername</p>
    </section>

    <script>
        function showHome() {
            hideAllSections();
            document.getElementById("homeSection").style.display = "block";
        }

        function showAboutMe() {
            hideAllSections();
            document.getElementById("aboutMeSection").style.display = "block";
        }

        function showPortfolio() {
            hideAllSections();
            document.getElementById("portfolioSection").style.display = "block";
        }

        function showContact() {
            hideAllSections();
            document.getElementById("contactSection").style.display = "block";
        }

        function hideAllSections() {
            document.getElementById("homeSection").style.display = "none";
            document.getElementById("aboutMeSection").style.display = "none";
            document.getElementById("portfolioSection").style.display = "none";
            document.getElementById("contactSection").style.display = "none";
        }

        function showMessage(message) {
            alert(message);
        }
    </script>

</body>
</html>
