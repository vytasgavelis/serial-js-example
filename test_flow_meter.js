const {SerialPort} = require('serialport');
const fs = require('fs');
const port = process.argv[2];

if (!port) {
    console.log('Port must be provided. Exiting')
    return 1;
}
console.log(`Using port: ${port}`);

console.log('Press ctrl + c to exit...')

const serialPort = new SerialPort({
    path: port,
    baudRate: 9600
});

serialPort.on("open", function () {
    console.log("-- Connection opened --");
    serialPort.on("data", function (data) {
        console.log("Data received: " + data);
        fs.writeFile(
            './flow_data.txt',
            data + '\n',
            { flag: 'a+' },
                err => {}
        );
    });
});
