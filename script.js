const length = 10;

const char = "qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*"

function generatePassword(length) {
    let password = "";
    while (password.length < length) {
        const index = Math.floor(Math.random() * char.length);
        password += char[index]
    }
    return password;
}
const newPassword = generatePassword(length);
console.log(newPassword);
