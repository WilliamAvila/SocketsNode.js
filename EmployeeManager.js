var emp = require('./Employee.js');


var fs = require("fs");
var data = fs.readFileSync("Employee.txt", "utf8");



exports.insertEmployee =function(emp){
    fs.appendFile("Employee.txt",emp);

}

exports.listEmployees = function(){
  var fs = require("fs");
  var data = fs.readFileSync("Employee.txt", "utf8");
  return data;
}
