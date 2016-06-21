// var serialPort = require("serialport");
// serialPort.list(function (err, ports) {
//   ports.forEach(function(port) {
//     console.log(port.comName);
//     console.log(port.pnpId);
//     console.log(port.manufacturer);
//   });
// });



var SerialPort = require("serialport").SerialPort;
var serialPort = null;

try {
    serialPort = new SerialPort("/dev/ttyACM0", {
	  baudrate: 9600
	});
}
catch(err) {
    console.log(err.message);
}



serialPort.on("open", function () {
  console.log('open');
  serialPort.on('data', function(data) {
    console.log('data received: ' + data);
  });
  // serialPort.write("ls\n", function(err, results) {
  //   console.log('err ' + err);
  //   console.log('results ' + results);
  // });
});

// 87;54341;-304;34684;-3504;244;110;261;-143;-103;50
// 87 - Número de paquetes
// 54341 - Milisegundos desde arranque del arduino con desbordamiento 65535
// -304 - Acel X (tratar)
// 34684 - Acel Y (tratar)
// -3504 - Acel Z (tratar)
// 244 - Temp (tratar)
// 110 - Vel giro X (tratar)
// 261 - Vel giro Y (tratar)
// -143 - Vel giro Z
// -103 - ;50

// https://github.com/voodootikigod/node-serialport

/*
data received: 16;-
data received: 313;
data received: -304
data received: ;-87
data received: ;65

data received: 

data received: 672;
data received: 4818
data received: ;72;
data received: 436;
data received: 1773
data received: 2;-3
data received: 376;
data received: 246;
data received: 131;
data received: 23;-
data received: 317
data received: ;-30
data received: 0;-8
data received: 9;65
data received: 


data received: 67
data received: 3;57
data received: 93;1
data received: 40;4
data received: 68;1
data received: 7904
data received: ;-33
data received: 60;2
data received: 55;1
data received: 40;0
data received: ;-31
data received: 7;-3
data received: 01;-
data received: 93;6
data received: 5


data received: 6
data received: 74;6
data received: 769;
data received: 72;5
data received: 88;
data received: 1769
data received: 6;-3
data received: 344;
data received: 259;
data received: 134;
data received: 18;-
data received: 319;
data received: -301
data received: ;-91
data received: ;64

data received: 

data received: 675
data received: ;774
data received: 5;56
data received: ;556
data received: ;176
data received: 44;-
data received: 3344
data received: ;25
data received: 0;10
data received: 7;24
data received: ;-31
data received: 6;-3
data received: 03;-
data received: 89;6
data received: 4


data received: 6
data received: 76;8
data received: 721;
data received: 124;
data received: 576;
data received: 1765
data received: 2;-3
data received: 360;
data received: 274;
data received: 114;
data received: 26;-
data received: 319;
data received: -29
data received: 9;-8
data received: 5;64
data received: 


data received: 677;
data received: 970
data received: 6;11
data received: 6;49
data received: 2;17
data received: 604;
data received: -334
data received: 4;24
data received: 7;12
data received: 7;22
data received: ;-31
data received: 9;-3
data received: 00;-
data received: 88;6
data received: 4


data received: 67
data received: 8;10
data received: 690;
data received: 32;4
data received: 88;17708;-3376;251;121;
data received: -1;-
data received: 316;
data received: -297
data received: ;-87
data received: ;64

data received: 

data received: 679;
data received: 1167
data received: 4;36
data received: ;376
data received: ;177
data received: 00;-
data received: 3376
data received: ;251
data received: ;120
data received: ;-13
data received: ;-31
data received: 7;-3
data received: 02;-
data received: 89;
data received: 60

data received: 

data received: 680
data received: ;12
data received: 666;
data received: 52;4
data received: 40;1
data received: 7692
data received: ;-33
data received: 60;2
data received: 68;1
data received: 20;1
data received: 0;-3
data received: 18;-
data received: 304;
data received: -90;
data received: 61

data received: 

data received: 6
data received: 81;1
data received: 3651
data received: ;100
data received: ;572
data received: ;176
data received: 52;-
data received: 3344
data received: ;25
data received: 0;12
data received: 0;12
data received: ;-31
data received: 9;-3
data received: 01;-
data received: 88;6
data received: 1


data received: 682
data received: ;146
data received: 43;6
data received: 4;50
data received: 4;17
data received: 552;
data received: -337
data received: 6;26
data received: 7;13
data received: 8;25
data received: ;-31
data received: 5;-3
data received: 02;
data received: -89;
data received: 61

data received: 

data received: 68
data received: 3;1
data received: 5627
data received: ;52;
data received: 328;
data received: 1776
data received: 8;-3
data received: 344;
data received: 276;
data received: 131;
data received: 6;-3
data received: 21;-
data received: 299;
data received: -86;
data received: 61

data received: 

data received: 684;
data received: 1660
data received: 3;15
data received: 2;67
data received: 2;17
data received: 636;
data received: -337
data received: 6;3
data received: 40;2
data received: 19;5
data received: ;-31
data received: 8;-3
data received: 01;-
data received: 90;6
data received: 6


data received: 68
data received: 5;17
data received: 587;
data received: 36;5
data received: 04;1
data received: 7588
data received: ;-33
data received: 76;2
data received: 92;1
data received: 32;2
data received: 2;-3
data received: 20;-
data received: 299
data received: ;-88
data received: ;65

data received: 

data received: 686;
data received: 1857
data received: 1;48
data received: ;500
data received: ;175
data received: 52;-
data received: 3344
data received: ;257
data received: ;129
data received: ;12;
data received: -314
data received: ;-30
data received: 1;-8
data received: 9;64
data received: 


data received: 687
data received: ;195
data received: 55;1
data received: 20;4
data received: 76;
data received: 1765
data received: 2;-3
data received: 376;
data received: 235;
data received: 111;
data received: 4;-3
data received: 17;-
data received: 304;
data received: -91;
data received: 67

data received: 

data received: 6
data received: 88;2
data received: 0540
data received: ;32;
data received: 608;
data received: 1769
data received: 2;-3
data received: 328;
data received: 264;
data received: 123;
data received: 5;-
data received: 322;
data received: -302
data received: ;-89
data received: ;64

data received: 

data received: 689
data received: ;215
data received: 16;8
data received: ;664
data received: ;176
data received: 96;-
data received: 3360
data received: ;270
data received: ;118
data received: ;25;
data received: -317
data received: ;-30
data received: 0;-
data received: 88;6
data received: 5


data received: 6
data received: 90;2
data received: 2492
data received: ;0;6
data received: 12;1
data received: 7612
data received: ;-33
data received: 76;2
data received: 64;1
data received: 32;5
data received: ;-31
data received: 6;-2
data received: 97;-
data received: 87;6
data received: 3


data received: 691;
data received: 2345
data received: 9;12
data received: 4;50
data received: 8;17
data received: 704
data received: ;-33
data received: 60;2
data received: 61;1
data received: 36;2
data received: 3;-3
data received: 16;-
data received: 304;
data received: -93;
data received: 56

data received: 

data received: 69
data received: 2;24
data received: 452;
data received: 120;
data received: 560;
data received: 1764
data received: 0;-3
data received: 344;
data received: 267;
data received: 87;-
data received: 1;-3
data received: 18;
data received: -301
data received: ;-90
data received: ;54

data received: 

data received: 693;
data received: 2543
data received: 6;36
data received: ;648
data received: ;177
data received: 44;-
data received: 3408
data received: ;281
data received: ;130
data received: ;33;
data received: -317
data received: ;-30
data received: 0;-9
data received: 0;55
data received: 


data received: 694
data received: ;264
data received: 20;2
data received: 8;4
data received: 84;1
data received: 7584
data received: ;-33
data received: 60;2
data received: 51;1
data received: 39;0
data received: ;-31
data received: 7;-2
data received: 99;-
data received: 85;5
data received: 6


data received: 6
data received: 95;2
data received: 7397
data received: ;56;
data received: 612;
data received: 1776
data received: 4;-3
data received: 376;
data received: 245;
data received: 120
data received: ;0;-
data received: 319;
data received: -302
data received: ;-92
data received: ;57

data received: 

data received: 696
data received: ;283
data received: 73;6
data received: 8;53
data received: 2;17
data received: 552;
data received: -336
data received: 0;24
data received: 2;11
data received: 1;23
data received: ;-32
data received: 1;-3
data received: 01;-
data received: 89;5
data received: 7

data received: 

data received: 69
data received: 7;29
data received: 357
data received: ;16;
data received: 584;
data received: 1770
data received: 4;-3
data received: 376;
data received: 252;
data received: 104;
data received: 33;-
data received: 320;
data received: -301
data received: ;-88
data received: ;56

data received: 

data received: 698;
data received: 3034
data received: 1;76
data received: ;544
data received: ;176
data received: 12;-
data received: 3392
data received: ;265
data received: ;11
data received: 9;-2
data received: 8;-3
data received: 17;-
data received: 298;
data received: -91;
data received: 56

data received: 

data received: 69
data received: 9;31
data received: 333;
data received: 100;
data received: 512;
data received: 1771
data received: 6;-3
data received: 376;
data received: 280;
data received: 145;
data received: 0;-3
data received: 16;-
data received: 305;
data received: -88;
data received: 56

data received: 


*/