



//followed along partially from  
// also help from daniel
// and w3schools.com 

$(document).ready(function () {
  $("form#numbers").submit(function(event){
    let userNumber= document.getElementById("numToJs").value;
    parseInt(userNumber);
    let convertToRoman = function(inputNum) {
      console.log(typeof inputNum);
      if (typeof inputNum !== "number") {
        console.log('this is not a inputNum')
      }
      let numberValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
      let letterValue = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    
      let roman = "";
      if ((userNumber >= 4000) || (userNumber <= 0)) {
        alert('pick a number between 1-3999');
      } else {
       for (let index = 0; index < numberValue.length; index++) {
        while (numberValue[index] <= inputNum) {
          roman += letterValue[index];
          inputNum -= numberValue[index];
        }
      }
      return roman;
      }; 
    };
    convertToRoman(userNumber);
    $("#romNum").text(`${convertToRoman(userNumber)}`);
    
    $("#output").show();
    event.preventDefault();
  });
});