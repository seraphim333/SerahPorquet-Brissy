<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Ethereal Escapes - Your dream travel destination">
    <title>Ethereal Escapes</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Pacifico&display=swap');
        .ml2 {
            font-weight: 500;
            font-size: 2.5em;
        }
        .ml2 .letter {
            display: inline-block;
            line-height: 1em;
        }
    </style>
</head>
<body>
    <h1 class="ml2">The Escape starts now!</h1>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            // Wrap every letter in a span
            var textWrapper = document.querySelector('.ml2');
            textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    
            anime.timeline({loop: true})
                .add({
                    targets: '.ml2 .letter',
                    scale: [4,1],
                    opacity: [0,1],
                    translateZ: 0,
                    easing: "easeOutExpo",
                    duration: 950,
                    delay: (el, i) => 70*i
                }).add({
                    targets: '.ml2',
                    opacity: 0,
                    duration: 1000,
                    easing: "easeOutExpo",
                    delay: 1000
                });
        });
    </script>
</body>
</html>
