const { SerialPort } = require('serialport');
let port = "COM2";

let serialPort = new SerialPort({
    path: port,
    baudRate: 9600
});

serialPort.on("open", function() {
    console.log("-- Connection opened --");
    serialPort.on("data", function(data) {
        console.log("Data received: " + data);
    });
});