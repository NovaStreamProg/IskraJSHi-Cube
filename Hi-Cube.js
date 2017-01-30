//переменые
var s = require('@amperka/light-sensor')
 .connect(A5);

var thermometer = require('@amperka/thermometer')
 .connect(A4);

var buzzer = require('@amperka/buzzer')
  .connect(P6);

var button = require('@amperka/button')
 .connect(P7);

var led = require('@amperka/led')
  .connect(P5);
//действия - оснавная часть проекта
button.on('click', function() {
var lx = s.read('lx').toFixed(0);
 console.log(lx, 'люкс');
}, 200);

button.on('hold', function() {
 var celsius = thermometer.read('C');
 console.log(
   '<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">',
 '<div style="font-size: 0.5em" style="font-family="Roboto Slab bold">',
 'Температура',
 '</div>',
 celsius.toFixed(1),
 '°C'
 );
}, 1000);

button.on('press', function() {
 led.turnOn();
 buzzer.beep(0.7);
});
button.on('release', function() {
 buzzer.turnOff();
  led.turnOff();
});
