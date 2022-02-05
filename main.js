var names = prompt("Enter data")
var result = names.split(", ")
for(var index in result) {
    console.log("<li>" + (+index + 1 + ' ' + result[index]) + "</li>") 
}