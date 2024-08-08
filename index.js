document.addEventListener('DOMContentLoaded', function() {
    const words = ['elefante', 'cafe', 'arbol', 'libro', 'silla'];
    let currentWord = '';
    let scrambledWord = '';
    let tries = 0;
    let mistakes = 0;

    function scramble(word) {
        return word.split('').sort(() => Math.random() - 0.5).join('');
    }








})