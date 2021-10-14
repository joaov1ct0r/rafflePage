let display = document.getElementById("counterDisplay");

function attDisplay(value) {
    if (value == "1") {
        display.textContent = parseInt(value) + parseInt(display.textContent);
    } else if (value == "-1") {
        display.textContent = parseInt(display.textContent) - 1;
    }
}

function reset() {
    display.textContent = 0;
}
