function getInputValueById(id) {
    const value = document.getElementById(id).value;
    const convertedValue = parseFloat(value);
    return convertedValue;

}

function getInnerTextById(id) {
    const value = document.getElementById(id).innerText;
    const converted = parseFloat(value);
    return converted;
}

function setInnerTextByIdandValue(id, value) {

}