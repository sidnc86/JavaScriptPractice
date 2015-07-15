function howIsError() {
  console.log(Error.prototype.constructor);
}
function MyError(error) {
  Error.apply(this, [error.message]);
  this.id = error.id;
}
MyError.prototype = Object.create(Error.prototype);
MyError.prototype.constructor = MyError;
var MyErrors = {
  getError: function(id) {
    return (this.errors.hasOwnProperty(id)) ? this.errors[id] : this.errors["unidentified"];
  },
  errors:{
    "15003": {id: "15003", message: "OldSheetCheck"},
    "13001": {id: "13001", message: "ServerBusy"},
    "unidentified": {id: "unidentified", message: "ErrorNotIdentified"}
  }
};

function throwMyError() {
  throw new MyError(MyErrors.getError("15003"));
}
function throwSystemError() {
  //call undefined function
  undefinedFunction();//should throw some error
}
function caughtMyError() {
  try {
    throwMyError();
  } catch(e) {
    console.log("Caught MyError");
    console.log("ID: " + e.id);
    console.log("Message: " + e.message);
    console.log("LineNumber: " + e.lineNumber);
    console.log("FileName: " + e.fileName);
  }
}
function caughtSystemError() {
  try {
    throwSystemError();
  } catch(e) {
    console.log("Caught SystemError");
    console.log("ID: " + e.id);
    console.log("Message: " + e.message);
    console.log("LineNumber: " + e.lineNumber);
    console.log("FileName: " + e.fileName);
  }
}

function demoCaughtErrors() {
  caughtMyError();
  caughtSystemError();
}
function resetLog() {
  console.log("I am nice now!");
}
demoCaughtErrors();