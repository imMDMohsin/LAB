//* Validation Script
const formValidation = () => {
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const age = document.getElementById('age').value;

    if (name.trim() === '') {
        alert("Name Cannot Be Empty");
        return false;
    }
    else if (password.length < 8) {
        alert('Password Too Short');
        return false;
    }
    else if (age) {
        if (age < 18) {
            alert('You Are Not Eligible')
            return false;
        } else if (age > 90) {
            alert('Too Experienced, You Can Leave')
            return false;
        }
    }

    return true;
}