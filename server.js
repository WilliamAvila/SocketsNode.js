var empMan = require('./EmployeeManager.js');

var net = require('net');

var HOST = '127.0.0.1';
var PORT = 6969;

// Create a server instance, and chain the listen function to it
// The function passed to net.createServer() becomes the event handler for the 'connection' event
// The sock object the callback function receives UNIQUE for each connection
net.createServer(function(sock) {

    // We have a connection - a socket object is assigned to the connection automatically
    console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);

    // Add a 'data' event handler to this instance of socket
    sock.on('data', function(data) {

        console.log('DATA ' + sock.remoteAddress + ': ' + data);
        // Write the data back to the socket, the client will receive it as data from the server

        var tokens = String(data).split(",")
        if(tokens[0] == 'list'){
          console.log('llego');
            var enc = empMan.listEmployees();
            //client_socket.send(enc.encode('utf-8'));

            console.log(enc);
            sock.write(enc);
        }

        else if(tokens[0] == 'search'){
            enc = empMan.searchEmployee(tokens[1].decode('utf-8'));
            client_socket.send(enc.encode('utf-8')) ;
        }
        else if(tokens[0] == 'insert'){
            console.log(tokens[1]);
            empMan.insertEmployee(tokens[1]);
        }

        else if(tokens[0] == 'edit')
            empMan.editEmployee(tokens[1], tokens[2]);


        else if(tokens[0] == "unique"){
            enc = empMan.findValue(tokens[1].decode('utf-8'));
            client_socket.send(enc.encode('utf-8'));
        }
        sock.write('You said "' + data + '"');

    });

    // Add a 'close' event handler to this instance of socket
    sock.on('close', function(data) {
        console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
    });

}).listen(PORT, HOST);

console.log('Server listening on ' + HOST +':'+ PORT);
