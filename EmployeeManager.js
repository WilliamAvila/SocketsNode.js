var emp = require('./Employee.js');


var fs = require("fs");
var data = fs.readFileSync("Employee.txt", "utf8");



function insertEmployee(emp){
    fs.appendFile("Employee.txt",emp);

}

function listEmployees(){
  var fs = require("fs");
  var data = fs.readFileSync("Employee.txt", "utf8");
  return data;
}


/*emp1 = new emp.Employee("aa11","William","william.zx1@gmail.com","0","1804199301762","33165891");
insertEmployee(emp1.getEmployeeData());
console.log(listEmployees());*/
