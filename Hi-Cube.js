//стартовая мелодия
var player = require('@amperka/ringtone').create(P6);

var melody = 'Flinstones:d=4,o=5,b=40:32p,16f6,16a#,' +
  '16a#6,32g6,16f6,16a#.,16f6,32d#6,32d6,32d6,32d#6,' +
  '32f6,16a#,16c6,d6,16f6,16a#.,16a#6,32g6,16f6,16a#.,' + 
  '32f6,32f6,32d#6,32d6,32d6,32d#6,32f6,16a#,16c6,a#,' + 
  '16a6,16d.6,16a#6,32a6,32a6,32g6,32f#6,32a6,8g6,16g6,' + 
  '16c.6,32a6,32a6,32g6,32g6,32f6,32e6,32g6,8f6,16f6,' +
  '16a#.,16a#6,32g6,16f6,16a#.,16f6,32d#6,32d6,32d6,' +
  '32d#6,32f6,16a#,16c.6,32d6,32d#6,32f6,16a#,16c.6,' +
  '32d6,32d#6,32f6,16a#6,16c7,8a#.6';
 
player.play(melody).then(function() {
  print('Melody completed');
});
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
