function generatePassword(event) {
    event.preventDefault();
    let passwordLength = document.getElementById("password-length").value;
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&*+-=?@^_";
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    document.getElementById("password").value = password;
}

document.getElementById("generate-password-btn").addEventListener("click", generatePassword);

function copyToClipboard() {
    let password = document.getElementById("password").value;
    navigator.clipboard.writeText(password).then(function(){
        window.alert("Copied!");
    }, function(err){
        alert("Failed to copy.", err);
    });
}

document.getElementById("password").addEventListener("click", copyToClipboard);