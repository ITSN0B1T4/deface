var i = 0;
var txt = '#BANGLADESHI-H4CK3R';
var i2 = 0;
var txt2 = '#N0B1T4; #KALA BABA; #WH1T3D3V1L';
var speed = 80;

function typeWriter() {
  if (i < txt.length) {
document.getElementById("bd").innerHTML += txt.charAt(i);
i++;
setTimeout(typeWriter, speed);

  }
 if (i2 < txt2.length) {
document.getElementById("name").innerHTML += txt2.charAt(i2);
i2++;
setTimeout(typeWriter, speed);

  }   }