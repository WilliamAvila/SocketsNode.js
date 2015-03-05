//var prompt = require('prompt');
var valEmp = require('./ValidateEmployee.js');
var emp = require('./Employee.js');
var prompt = require('sync-prompt').prompt;
var net = require('net');

var HOST = '127.0.0.1';
var PORT = 6969;

var client = new net.Socket();

client.connect(PORT, HOST, function() {

    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    // Write a message to the socket as soon as the client is connected, the server will receive it as message from the client


            while(true){
            console.log("1.Insert Employee\n2.Edit Employee\n3.Search Employee\n4.List Employee\n5.Exit\n");
            var ans = prompt('Enter Number: ');

              if (ans == 1)
                  insertEmployee();
              else if (ans == 2)
                  editEmployee();
              else if (ans == 3)
                  searchEmployee();
              else if (ans == 4){
                  listEmployee();
                  client.on('data', function(data) {
                    console.log('DATA: ' + data);});
              }
              else
              console.log(ans + " is not a valid Answer");

          }


    //client.write('I am Chuck Norris!');
});

// Add a 'data' event handler for the client socket
// data is what the server sent to this socket
client.on('data', function(data) {



    console.log('DATA: ' + data);
    // Close the client socket completely


});

// Add a 'close' event handler for the client socket
client.on('close', function() {
    console.log('Connection closed');
});


function insertEmployee(){

   console.log('Insert Employee');
   var cod = 'insert,';

   var code = valEmp.generateCode();
   console.log('Code: ' + code);

   /*cod2="unique,";
   cod2 += code;
   client.write(cod2,'utf-8');
   enc = s.recv(1024);
   res = enc.decode('utf-8');
   if(res == code){
       console.log("Code already exists try again");
       return;
  }*/

   emp = getValidatedEmployee(code);

   if(emp)
       cod += emp.getEmployeeData();
   else
       return;

   client.write(cod);
   console.log("Employee Added Correctly \n")

}
function editEmployee(){

  console.log('Edit Employee');

}

function searchEmployee(){

  console.log('Search Employee');

}

function listEmployee(){

  console.log('List Employees');
   var cod='list'

   client.write(cod);


}

function getValidatedEmployee(code){
    var name = prompt('Enter Name: \n');

    if(valEmp.validateName(name)){
        console.log(name + ' Is not valid');
        return null;
    }
    email = prompt('Enter Email: \n')
    if(valEmp.validateEmail(email)){
        console.log(email + ' Is not valid');
        return null;
    }

    salary = prompt('Enter Salary: \n')
    if(valEmp.validateSalary(salary)){
        console.log(salary + ' Is not valid')
        return null
    }
    id = prompt('Enter ID: ')
    if(valEmp.validateId(id)){
        console.log(id + ' Is not valid')
        return null
    }

    phone = prompt('Enter Phone number: \n')
    if (valEmp.validatePhone(phone)){
        console.log(phone + ' Is not valid')
        return null
    }


    var e = new emp.Employee(code,name,email,salary,id,phone)
    console.log("Validated")
    return e
}
