//  GLOBALS - NO WINDOW !!!!!

//__dirname - path to current directory
//__filename -file name
//require -function to use modules(commonJs)
//module - info about current module (file)
//process - info about env where the program is being executed

// Modules
const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavour");
require("./7-mind-grenade");

console.log(data);

console.log(names);

// sayHi("chand");
// sayHi(names.vishal);
// sayHi(names.ram);
