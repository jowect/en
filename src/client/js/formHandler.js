import { inputValidation } from './inputValidation'

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    if (inputValidation(formText)) {

        console.log("::: Form Submitted :::")
        fetch('http://localhost:8081/postMeaningApi', {
            method: 'POST',
            mode: 'cors', 
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({text: formText}), // body data type must match "Content-Type" header        
            })
        .then(res => res.json())
        .then(function(res) {
            console.log(res)
            document.getElementById('text').innerHTML = res.text;
            document.getElementById('polarity').innerHTML = res.polarity;
            document.getElementById('subjectivity').innerHTML = res.subjectivity;
            document.getElementById('agreement').innerHTML = res.agreement;
            document.getElementById('irony').innerHTML = res.irony;
            document.getElementById('confidence').innerHTML = res.confidence;
        })
    }   
}

export { handleSubmit }
