/* This script is for the contact form including a clientside reactive webframework with Vue.js */
//create Vue.js object instance
let obj = {
    name: "",
};
//Vue-Instance including the property for a reactive computation for weekday/weekend
let name = new Vue({
    el: '#main',
    data: obj,
});