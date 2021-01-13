function inputValidation (formText) {
    if (formText.length == 0) {
        return alert('Missing input, please enter a text!');
    }
    else {
        var regex = /[^\s]/;
    
        if (regex.test(formText)) {
            return true;
        }
        else {
            alert('Input text is not valid!')
            return false;
        }
    }
}

export { inputValidation }