const slotSymbols = [
    ['😀', '😁', '😂', '😃', '😄', '😅', '😆', '😇', '😈', '😉', '😊', '🙂', '🍎', '🍏', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈', '🍒', '🍑', '⭐️', '🌟', '✨', '💫', '⚡️', '☄️', '🌠', '🌌', '🌙', '🌕', '🌖', '🌗', '🍔', '🍕', '🌭', '🍟', '🍗', '🍖', '🌮', '🌯', '🥙', '🍝', '🍜', '🍲', '🍩', '🍪', '🎂', '🍰', '🍫', '🍬', '🍭', '🍮', '🍦', '🍨', '🍧', '🍥'],
    ['😀', '😁', '😂', '😃', '😄', '😅', '😆', '😇', '😈', '😉', '😊', '🙂', '🍎', '🍏', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈', '🍒', '🍑', '⭐️', '🌟', '✨', '💫', '⚡️', '☄️', '🌠', '🌌', '🌙', '🌕', '🌖', '🌗', '🍔', '🍕', '🌭', '🍟', '🍗', '🍖', '🌮', '🌯', '🥙', '🍝', '🍜', '🍲', '🍩', '🍪', '🎂', '🍰', '🍫', '🍬', '🍭', '🍮', '🍦', '🍨', '🍧', '🍥'],
    ['😀', '😁', '😂', '😃', '😄', '😅', '😆', '😇', '😈', '😉', '😊', '🙂', '🍎', '🍏', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈', '🍒', '🍑', '⭐️', '🌟', '✨', '💫', '⚡️', '☄️', '🌠', '🌌', '🌙', '🌕', '🌖', '🌗', '🍔', '🍕', '🌭', '🍟', '🍗', '🍖', '🌮', '🌯', '🥙', '🍝', '🍜', '🍲', '🍩', '🍪', '🎂', '🍰', '🍫', '🍬', '🍭', '🍮', '🍦', '🍨', '🍧', '🍥'],
    ['😀', '😁', '😂', '😃', '😄', '😅', '😆', '😇', '😈', '😉', '😊', '🙂', '🍎', '🍏', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈', '🍒', '🍑', '⭐️', '🌟', '✨', '💫', '⚡️', '☄️', '🌠', '🌌', '🌙', '🌕', '🌖', '🌗', '🍔', '🍕', '🌭', '🍟', '🍗', '🍖', '🌮', '🌯', '🥙', '🍝', '🍜', '🍲', '🍩', '🍪', '🎂', '🍰', '🍫', '🍬', '🍭', '🍮', '🍦', '🍨', '🍧', '🍥'],
    ['😀', '😁', '😂', '😃', '😄', '😅', '😆', '😇', '😈', '😉', '😊', '🙂', '🍎', '🍏', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈', '🍒', '🍑', '⭐️', '🌟', '✨', '💫', '⚡️', '☄️', '🌠', '🌌', '🌙', '🌕', '🌖', '🌗', '🍔', '🍕', '🌭', '🍟', '🍗', '🍖', '🌮', '🌯', '🥙', '🍝', '🍜', '🍲', '🍩', '🍪', '🎂', '🍰', '🍫', '🍬', '🍭', '🍮', '🍦', '🍨', '🍧', '🍥']
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createSymbolElement(symbol) {
    const div = document.createElement('div');
    div.classList.add('symbol');
    div.textContent = symbol;
    return div;
}

let spun = false;
const slots = document.querySelectorAll('.slot');

const transitionDelay = 300;

function generate() {
    slots.forEach((slot, index) => {

        for (let i = 0; i < slotSymbols.length; i++) {
            shuffleArray(slotSymbols[i]);
        }

        const symbols = slot.querySelector('.symbols');
        const symbolHeight = symbols.querySelector('.symbol')?.clientHeight;
        const symbolCount = symbols.childElementCount;

        symbols.innerHTML = '';

        slotSymbols[index].forEach(symbol => {
            symbols.appendChild(createSymbolElement(symbol));
        });

        symbols.style.transitionDelay = `${transitionDelay * index}ms`;
    });
}

function spin() {
    return new Promise(resolve => {
        if (spun) {
            reset();
        }
        let completedSlots = 0;

        slots.forEach((slot, index) => {
            const symbols = slot.querySelector('.symbols');
            const symbolHeight = symbols.querySelector('.symbol')?.clientHeight;
            const symbolCount = symbols.childElementCount;

            const totalDistance = symbolCount * symbolHeight;
            const randomOffset = -(symbolCount - 3) * symbolHeight;
            symbols.style.top = `${randomOffset}px`;

            symbols.addEventListener('transitionend', () => {
                completedSlots++;
                if (completedSlots === slots.length) {
                    logDisplayedSymbols();
                    spun = true;
                    resolve();
                }
            }, { once: true });
        });
    });
}

const spinAmountInput = document.querySelector('.spinAmount');

async function autoSpin() {
    let spinAmount = spinAmountInput.value;
    if (spinAmount) {
        spinAmountInput.style.border = 'none';
        for (let i = 0; i < spinAmount; i++) {
            await spin();
            await new Promise(resolve => setTimeout(resolve, transitionDelay * slots.length)); // Wait for a delay before starting the next spin
        }
    } else {
        spinAmountInput.style.border = '2px solid red';
    }
}

function reset() {
    const slots = document.querySelectorAll('.slot');

    slots.forEach(slot => {
        const symbols = slot.querySelector('.symbols');
        symbols.style.transition = 'none';
        symbols.style.top = '0';
        symbols.offsetHeight;
        symbols.style.transition = '';
    });

    generate();
}

function logDisplayedSymbols() {
    const slots = document.querySelectorAll('.slot');
    const displayedSymbols = [[], [], []];

    slots.forEach((slot) => {
        const symbols = slot.querySelector('.symbols');
        const symbolArray = Array.from(symbols.textContent);
        displayedSymbols[0].push(symbolArray[symbolArray.length - 3]);
        displayedSymbols[1].push(symbolArray[symbolArray.length - 2]);
        displayedSymbols[2].push(symbolArray[symbolArray.length - 1]);
    });

    displayedSymbols.forEach((symbols, index) => {
        console.log(`Displayed symbols(row ${index + 1}): ${symbols}`);
    });
}

document.querySelector('.levertip').addEventListener('click', function () {
    spin();
})

generate();