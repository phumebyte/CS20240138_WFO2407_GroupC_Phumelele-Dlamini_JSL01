function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result
    // regex is a pattern used to match character combinations when processing text
    const regex = new RegExp('^pet_[a-zA-Z0-9]+$');
    //if statement to output conditional logic based on result
    if (regex.test(input)) {
        result = "Valid Syntax";
    } else {
        result = "Invalid Syntax";
    }
    //fetch element by id to change the text content of result
    document.getElementById('result').innerText = result;
}


