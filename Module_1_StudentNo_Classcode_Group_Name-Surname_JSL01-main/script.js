function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result
    // regex is a pattern used to match character combinations when processing text
    const regex = new RegExp('^pet_[a-zA-Z0-9]+$');

    if (regex.test(input)) {
        result = "Valid Syntax";
    } else {
        result = "Invalid Syntax";
    }
    
    document.getElementById('result').innerText = result;
}


