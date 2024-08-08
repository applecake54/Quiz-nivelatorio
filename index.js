document.addEventListener('DOMContentLoaded', function() {
    const words = ['elefante', 'cafe', 'arbol', 'libro', 'silla'];
    let currentWord = '';
    let scrambledWord = '';
    let tries = 0;
    let mistakes = 0;

    function scramble(word) {
        return word.split('').sort(() => Math.random() - 0.5).join('');
    }

    function initializeGame() {
        currentWord = words[Math.floor(Math.random() * words.length)];
        scrambledWord = scramble(currentWord);
        document.getElementById('scrambled-word').textContent = scrambledWord;
        resetInputs();
        tries = 0;
        mistakes = 0;
        updateStatus();
    }

    function resetInputs() {
        document.getElementById('word-input').innerHTML = '';
        for (let i = 0; i < currentWord.length; i++) {
            const input = document.createElement('input');
            input.type = 'text';
            input.maxLength = 1;
            input.dataset.index = i;
            input.addEventListener('input', handleInput);
            document.getElementById('word-input').appendChild(input);
        }
    }

    function handleInput(event) {
        const input = event.target;
        const index = input.dataset.index;
        if (input.value.toLowerCase() !== currentWord[index].toLowerCase()) {
            mistakes++;
        }


        updateStatus();

        
        if (isGameComplete()) {
            alert('Yupi juju Éxito');
            initializeGame();
            return; 
        }

       
        if (tries >= 5 || mistakes >= 6) {
            alert('Oh nonono juego terminado. La palabra era: ' + currentWord);
            initializeGame();
            return;
        }

    
        focusNextInput(index);
    }

    function updateStatus() {
        document.getElementById('tries').textContent = tries;
        document.getElementById('mistakes').textContent = mistakes;
    }

    function focusNextInput(index) {
        const inputs = document.querySelectorAll('.word-input input');
        if (inputs[index + 1]) {
            inputs[index + 1].focus();
        }
    }

    function isGameComplete() {
        const inputs = document.querySelectorAll('.word-input input');
        tries += 1;
        return Array.from(inputs).every((input, index) => input.value.toLowerCase() === currentWord[index].toLowerCase());
    }

    document.getElementById('random-button').addEventListener('click', initializeGame);

    document.getElementById('reset-button').addEventListener('click', function() {
        tries = 0;
        mistakes = 0;
        updateStatus();
        resetInputs();
    });

    initializeGame();
});
