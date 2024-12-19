let display = document.getElementById("display");

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function appendCharacter(char) {
    display.value += char;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// Fungsi untuk menghitung trigonometri
function calculateTrig(func) {
    try {
        let value = parseFloat(display.value);
        let result;
        switch(func) {
            case 'sin':
                result = Math.sin(value * Math.PI / 180); // Konversi ke derajat
                break;
            case 'cos':
                result = Math.cos(value * Math.PI / 180);
                break;
            case 'tan':
                result = Math.tan(value * Math.PI / 180);
                break;
        }
        display.value = result.toFixed(6); // Tampilkan 6 angka desimal
    } catch (error) {
        display.value = "Error";
    }
}

// Fungsi akar kuadrat
function calculateSquareRoot() {
    try {
        display.value = Math.sqrt(parseFloat(display.value)).toFixed(6);
    } catch (error) {
        display.value = "Error";
    }
}

// Fungsi kuadrat
function calculateSquare() {
    try {
        display.value = Math.pow(parseFloat(display.value), 2).toFixed(6);
    } catch (error) {
        display.value = "Error";
    }
}

// Fungsi logaritma (basis 10)
function calculateLog() {
    try {
        display.value = Math.log10(parseFloat(display.value)).toFixed(6);
    } catch (error) {
        display.value = "Error";
    }
}

// Fungsi eksponensial (e^x)
function calculateExp() {
    try {
        display.value = Math.exp(parseFloat(display.value)).toFixed(6);
    } catch (error) {
        display.value = "Error";
    }
}

