exports.Employee = function(codeEmployee, nameEmployee, email, salary, idEmployee, phone) {
    this.codeEmployee = codeEmployee;
    this.nameEmployee = nameEmployee;
    this.email = email;
    this.salary = salary;
    this.idEmployee = idEmployee;
    this.phone = phone;
    this.getEmployeeData = getEmployeeData;
}

function getEmployeeData(){
      st = this.codeEmployee+" "
      st += this.nameEmployee+" "+this.email+" "+this.salary+" "+this.idEmployee+" "+this.phone+"\n"
      return st
}
