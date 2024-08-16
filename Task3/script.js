function clearScreen() {
    document.getElementById("result").value = "";
}

var n = document.querySelectorAll(".display").length;

function handle() {
    var btnValue = this.value;
    displayValue(btnValue);
    animateButton(btnValue);
}

for (var i = 0; i < n; i++) {
    document.querySelectorAll(".display")[i].addEventListener("click", handle);
}

document.addEventListener("keydown", function(event) {
    event.preventDefault();
    var validKeys = "0123456789.+-*/=";
    if (validKeys.includes(event.key) || event.key === 'Backspace') {
        if (event.key === '=') {
            displayValue('=');
        } else if (event.key === 'Backspace') {
            var resultBox = document.getElementById("result");
            resultBox.value = resultBox.value.slice(0, -1);
        } else {
            displayValue(event.key);
        }
        animateButton(event.key);
    }
});

function displayValue(key) {
    var resultBox = document.getElementById("result");

    if (key === '=') {
        try {
            resultBox.value = eval(resultBox.value);
        } catch (e) {
            resultBox.value = "Error";
        }
    } else if (key === 'Clear') {
        clearScreen();
    } else {
        if (resultBox.value === "Error") {
            resultBox.value = key;
        } else {
            resultBox.value += key;
        }
    }
}

function animateButton(currentKey) {
    var activeButton = document.querySelector(`input[value="${currentKey}"]`);
    if (activeButton) {
        activeButton.classList.add("pressed");
        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 200);
    }
}