//* Form Validation Script 
const validateForm = () => { 
    //* Get Elements
    const name = document.getElementById("name-input");
    const password = document.getElementById("password-input");
    const age = document.getElementById("age-input");
    // const dob = document.getElementById("dob-input");
    const maleRadio = document.getElementById("male");
    const femaleRadio = document.getElementById("female");
    const checkTermsConditions = document.querySelector(".tc input[type='checkbox']")

    //* Validate The Inputs
    // NameInput
    if (name.value.trim() === "") {
        alert("Please Enter Your Name!");
        return false;
    // Password Input
    } else if (password.value.length <= 8) {
        alert("🔑 Password Must be Greater Than 8 Characters!");
        return false;
    // Age Input
    } else if (age) {
        if (age.value.trim() === "") {
            alert("Enter You Age!")
            return false;
        } else if (isNaN(age.value)) {
            alert("Invalid input!");
            return false;
        } else if (age.value < 0) {
            alert("Unborn, Cannot Register🤡")
        } else if (age.value < 18) {
            alert("Another Kid🤡");
            return false;
        } else if (age.value > 99) {
            alert("Gods Don't Have to Register💀")
            return false;
        }
    // Gender Input
    } else if (!maleRadio.checked && !femaleRadio.checked) {
        alert("Please select your gender!");
        return false;
    // Terms & Conditons Check
    } else if (!checkTermsConditions.checked) {
        alert("Accept the Terms&Conditions to procced!")
        return false;
    }

    return true; //Allow the form to submit
}