
function processSignUp(evt) {
    evt = evt || window.event;
    let charCode = evt.keyCode || evt.which;
    let targetFirstName = document.getElementById('firstName');
    let targetPlaceToPutText = document.getElementById('inputName');
    let firstName = targetFirstName.value;
    let placeText = targetPlaceToPutText.innerText = firstName;
    // var charStr = String.fromCharCode(charCode);
};



document.onkeypress = function(evt) {
    processSignUp(evt);
};
