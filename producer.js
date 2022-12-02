const {SerialPort} = require('serialport');
let port = "COM7";
let ports = ["COM1", "COM3", "COM5", "COM7"]
let message = "Hakuna Matata";

let serialPorts = ports.map((port) => {
    return new SerialPort({
        path: port,
        baudRate: 9600
    });
})


serialPorts.forEach((port) => {
    port.write(String(5.5), function (err) {
        if (err) {
            return console.log("Error on write: ", err.message);
        }
        console.log("Message sent successfully");
    });
})

// let serialPort = new SerialPort({
//     path: port,
//     baudRate: 9600
// });

// serialPort.write(message, function(err) {
//     if (err) {
//         return console.log("Error on write: ", err.message);
//     }
//     console.log("Message sent successfully");
// });