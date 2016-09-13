console.log("ready!");

var myArray = [
  "apples",
  "oranges",
  "bananas",
  "kiwi"
];

function showArray() {
  
  var resultsDiv = document.getElementById('resultsDiv');

  for(var i = 0; i < myArray.length; i++) {
    var childDiv = document.createElement('div');
    var string = "Item number " + (i+1).toString() + " at index " + i.toString() + " is " + myArray[i];
    childDiv.innerHTML = string;
    resultsDiv.appendChild(childDiv);
  }
};




