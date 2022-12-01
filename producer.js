const { SerialPort } = require('serialport');
let port = "COM1";
let message = "Hakuna Matata";

let serialPort = new SerialPort({
    path: port,
    baudRate: 9600
});

serialPort.write(message, function(err) {
    if (err) {
        return console.log("Error on write: ", err.message);
    }
    console.log("Message sent successfully");
});