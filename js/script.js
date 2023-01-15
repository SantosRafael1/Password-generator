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