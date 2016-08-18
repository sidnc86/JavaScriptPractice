function Person() {
  this.name = "Siddhant Chothe";
  this.canDrive = false;
}
function Driver() {
  this.name = "Sujeen Chothe";
  this.canDrive = true;
}
var sid = new Person();
var suj = new Driver();
document.write("Driver:" + suj.name + "<br />");
document.write("Person:" + sid.name + "<br />");
Driver.bind(sid);
var newSid = new Driver();
document.write("New Driver:" + newSid.name + "<br />");

function otherDriver() {
  if(this.name == undefined) {
    this.name = "Prashant Chothe";
  }
  document.write("Other Driver:" + this.name + "<br />");
}
otherDriver();
anotherDriver = otherDriver.bind(sid);
anotherDriver();
