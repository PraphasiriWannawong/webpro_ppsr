// nochange.js
//   This script illustrates using the focus event
//   to prevent the user from changing a text field

// The event handler function to compute the cost

function computeCost() {
//add your code here

// Compute the cost

  //document.getElementById("cost").value = 100
  var frenchprice=3.49;
  var creamprice=3.95;
  var columprice=4.59;

  var frenchq=parseInt(document.getElementById("french").value)||0;
  var creamq=parseInt(document.getElementById("cream").value)||0;
  var columq=parseInt(document.getElementById("colum").value)||0;

  //totalCost = document.getElementById("french").value;
  totalCost=(frenchq*frenchprice)+(creamq*creamprice)+(columq*columprice);
  // alert(totalCost);
  document.getElementById("cost").value=totalCost;
}  //* end of computeCost
