const { SerialPort } = require('serialport');
let port = "COM8";

let ports = ["COM2", "COM4", "COM6", "COM8"]
let message = "Hakuna Matata";

let serialPorts = ports.map((port) => {
    return new SerialPort({
        path: port,
        baudRate: 9600
    });
})

serialPorts.forEach((serialPort) => {
    serialPort.on("open", function() {
        console.log("-- Connection opened --");
        serialPort.on("data", function(data) {
            console.log("Data received: " + data);
        });
    });
})

// let serialPort = new SerialPort({
//     path: port,
//     baudRate: 9600
// });

