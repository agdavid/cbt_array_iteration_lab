$(document.ready(
  var myArray = [
    "apples",
    "oranges",
    "bananas",
    "kiwi"
  ]

  var resultsDiv = document.getElementById('resultsDiv')

  function showArray() {
    for(var i = 0; i < myArray.length; i++) {
      var childDiv = document.createElement('div')
      childDiv.innerHTML(
        "Item number " + (i+1).toString() + " at index " + i.toString() + " is " + myArray[i]
        );
      resultsDiv.append(childDiv);
    }
  };

  ));