
  <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PKCV - Inspiring Stories and Collections</title>
    <style>
        /* Styles CSS ici */
    </style>
</head>

<body>
    <!-- En-tête de la page -->
    <header>
        <h1>Welcome to PKCV</h1>
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <!-- Section À Propos -->
    <section id="about">
        <h2>About PKCV</h2>
        <p>Share some inspiring information about your brand PKCV, its history, mission, and values.</p>
    </section>

    <!-- Section Portfolio (Collections) -->
    <section id="portfolio">
        <h2>Portfolio</h2>
        <p>Discover our latest collections of hoodies and t-shirts.</p>
        <!-- Ajoutez des images et des descriptions de vos produits ici -->
    </section>

    <!-- Section Histoires Inspirantes -->
    <section id="stories">
        <h2>Inspiring Stories</h2>
        <p>Share inspiring stories that captivate and motivate your visitors.</p>
    </section>

    <!-- Section Contact -->
    <section id="contact">
        <h2>Contact Us</h2>
        <p>If you have any questions or comments, feel free to contact us.</p>
        <!-- Ajoutez un formulaire de contact ici -->
    </section>

    <!-- Pied de page de la page -->
    <footer>
        <p>&copy; 2024 PKCV. All rights reserved.</p>
    </footer>

    <!-- Script JavaScript ici -->
    <script>
        // Fonction pour le défilement fluide lors du clic sur les liens de navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    </script>
</body>

</html>
