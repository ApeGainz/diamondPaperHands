// Upon submit show the gif
// Change input to form so we can have the variables when submitted
// Check salary is a number (html verification)
// Check if blur api is approved
// Add dark theme option


function myFunction(){
    // alert('Submmited')

    var salary = document.getElementById('inputted-salary').innerText
    console.log(salary)

    document.getElementById('gif-output').innerHTML = "<img src=assets/mr-incredibles-gif.gif>";
    document.getElementById('time-calculation').innerHTML = "8 years 2 months and 21 days";

    const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch('https://api.opensea.io/api/v1/collection/doodles-official/stats', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

    


}




// var years = Math.floor(numberOfDays / 365);
// var months = Math.floor(numberOfDays % 365 / 30);
// var days = Math.floor(numberOfDays % 365 % 30);

