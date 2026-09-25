

const divider = document.querySelector('.portfolio-divider');
const words = document.querySelectorAll('.portfolio-sequence > span');

function checkNeon() {
    const dividerRect = divider.getBoundingClientRect();

    words.forEach(word => {
        const wordRect = word.getBoundingClientRect();

        // Distancia desde el inicio de la palabra
        // hasta el borde izquierdo de la franja.
        let neonWidth = dividerRect.left - wordRect.left + 2;

        // Limitar el ancho al espacio de la palabra.
        neonWidth = Math.max(
            0,
            Math.min(wordRect.width, neonWidth)
        );

        word.style.setProperty(
            '--neon-width',
            `${neonWidth}px`
        );
    });

    requestAnimationFrame(checkNeon);
}

checkNeon();
