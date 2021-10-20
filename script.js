const drawnButton = document.getElementById("drawnButton");

drawnButton.addEventListener("click", sortear);

function sortear() {
    let sortedNumber = Math.round(Math.random() * 100);

    const display = document.getElementById("display");

    display.textContent = sortedNumber;
}
