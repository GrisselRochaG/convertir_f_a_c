function aFahrenheit(){
  var celsius = document.getElementById('celsius').value;
  var conversion = celsius*9/5 +32;
  var fahrenheit = document.getElementById('fahrenheit');
  fahrenheit.value = conversion;
}

function aCelcius(){
  var fahrenheit = document.getElementById('fahrenheit').value;
  var conversion = (fahrenheit-32)*5/9;
  var celsius = document.getElementById('celsius');
  celsius.value = conversion;
}