exports.generateCode = function()
{
    var code = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers ="0123456789";

    for( var i=0; i < 2; i++ )
      code += possible.charAt(Math.floor(Math.random() * possible.length));
    for( var i=0; i < 2; i++ )
      code += numbers.charAt(Math.floor(Math.random() * numbers.length));

    return code;
}

exports.validateName = function(name){
  if (!name.match(/^[A-Za-z]*$/)){
    return true;
  }else{
    return false;
  }
}

exports.validateEmail = function(email){
  if (!email.match(/^[A-Za-z0-9\.\+_-]+@[A-Za-z0-9\._-]+\.[a-zA-Z]*$/)){
    return true;
  }else{
    return false;
  }
}

exports.validateSalary = function(salary){
  if (!name.salary(/^[0-9]*$/)){
    return true;
  }else{
    return false;
  }
}

exports.validateId = function(id){
  if (!i.match(/^[0-9]{13}$/)){
    return true;
  }else{
    return false;
  }
}

exports.validatePhone = function(phone){
  if (!phone.match(/^[0-9]{8}$/)){
    return true;
  }else{
    return false;
  }
}
