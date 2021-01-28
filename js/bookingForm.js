/* This script is for the booking form including a clientside reactive webframework with Vue.js */
//create Vue.js object instance
let obj = {
    name: "",
    date: "",
    eventtype: "",
    hours: "",
    equipment: ""

};
//Vue-Instance including the property for a reactive computation for weekday/weekend
let name = new Vue({
    el: '#main',
    data: obj,
    computed: {
        weekday: function () {
            var day = new Date(this.date).getDay();
            if (day == 6 || day == 0) {
                return "weekend";
            } else {
                return "weekday";
            }
        }
    }
});

//function to check if email is valid
function checkmail() {
    if (email.value && !email.value.includes('@')) {
        alert("Please enter a valid email address!");
    }
}
email.onblur = checkmail;

//function to check if provided date lies in future
function isValidDate() {
    var provdate = new Date(document.getElementById("bookingdate").value);
    var nowtoday = new Date();
    if (provdate <= nowtoday) {
        alert('Please provide a date in the future!');
    }
}