const checkBtn = document.getElementById('check-btn');
const input = document.getElementById('text-input');
const result = document.getElementById('result');
const div = document.getElementById('container');

console.log('below variables');


function palindrome(str) {
    str = str.toLowerCase();  //Turn everything to lower case
    // Remove all alphanumeric characters.
    str = str.replace(/[^a-z0-9]/g, ''); var backward = str.split('');
    backward = backward.reverse().join('').toString();

    if (backward === str) {

        if (backward === str) {
            return true;
        } else {

            return false;
        }
    }
}
console.log('below palindrome function');

checkBtn.addEventListener('click', function () {
    if (input.value === "") {
        alert("Please input a value");

    } else {
        if (palindrome(input.value)) {
            result.innerHTML = `<span class="output">${input.value}</span> is a palindrome`;
        }
        else {
            result.innerHTML = `<span class="output">${input.value}</span> is not a palindrome`;
        }
    }
    input.value = "";


})

console.log('below event listener');
