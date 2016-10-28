// JavaScript source code

function OrderUp() {
    var person = prompt("Please enter your name", "");
    var food = prompt("What whould you like to order", "");
    var time = prompt("Please enter a pickup time (Example 12:15)", "");
    {
        document.getElementById("review").innerHTML =
        "Please Review Your Order";
    }
    if (person != null) {
        document.getElementById("name").innerHTML =
       "Your Name: " + person;
    }
    if (food != null) {
        document.getElementById("food").innerHTML =
           "Your Order: " + food;
    }
    if (time != null) {
        document.getElementById("time").innerHTML =
       "Pickup Time: " + time;
    }
    {
        var Order = document.getElementById("order");
        Order.style.border = "solid";
        Order.style.borderColor = "#CF9140";
    }
}
function RefreshPage() {
    window.parent.location = window.parent.location.href;
}