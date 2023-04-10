function celsiusToFahrenheit(celTemp) {
    let celsiusTemp = celTemp;
    let fahrenTemp = celsiusTemp * (9 / 5) + 32;
    console.log(celsiusTemp + '\xB0' + "C is " + fahrenTemp + '\xB0' + "F.");
    return fahrenTemp;
}
celsiusToFahrenheit(0);
celsiusToFahrenheit(100);
celsiusToFahrenheit(22);
function fahrenheitToCelsius(fahTemp) {
    let fahrenheitTemp = fahTemp;
    let celsiusTemp = (fahrenheitTemp-32) * 5/9;
    console.log(fahrenheitTemp + '\xB0' + "F is " + celsiusTemp + '\xB0' + "C.");
    return celsiusTemp;
}
fahrenheitToCelsius(32);
fahrenheitToCelsius(212);
fahrenheitToCelsius(30);
