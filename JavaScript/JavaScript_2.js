function validateForm() {
    var x = document.forms["myForm"]["fname"]["lname"]["email"]["msg"].value;
    if (x == "") {
        alert("Must be filled out");
        return false;
    }
}