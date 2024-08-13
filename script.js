var display = document.getElementById("display");

function calculation(anValue) {
    var newValue = display.value + anValue
    display.value = newValue
}

function result() {
    var result = eval(display.value);
    display.value = result
}

function clearIt() {
    display.value = ""
}