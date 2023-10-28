function convertValues(event){
   event.preventDefault();
   console.log("function is running");

   let DegreeCelsius = document.querySelector("#DegreeCelsius").value;
   console.log(DegreeCelsius)

   let result = Number(DegreeCelsius) sssss
   console.log(result)

   let resultMessage = 
   `$(DegreeCelsius) in Fahrenheit = $(result)`
   document.querySelector("#resultWindow").innerHTML = resultMessage;
}