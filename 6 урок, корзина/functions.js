function increment(event) {
    let input = event.target.previousSibling;
    let currentValue = Math.floor(input.value);
    input.value = ++currentValue;
}

function decrement(event) {
    let input = event.target.nextSibling;
    let currentValue = Math.floor(input.value);

    if (input.value > 0) {
        input.value = --currentValue;
    }
}

