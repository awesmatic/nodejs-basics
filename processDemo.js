console.log(process);
// The process object in Node.js is a global object that provides information about the current Node.js process. It contains properties and methods that allow you to interact with the process, such as accessing environment variables, reading command-line arguments, and handling events related to the process lifecycle.


console.log(process.argv);
// The argv property of the process object is an array that contains the command-line arguments passed to the Node.js process. The first element (index 0) is the path to the Node.js executable, and the second element (index 1) is the path to the JavaScript file being executed. Any additional command-line arguments are included in subsequent elements of the array.


console.log(process.env);
// The env property of the process object is an object that contains the user environment variables. It allows you to access and manipulate environment variables in your Node.js application. You can read existing environment variables, set new ones, or modify existing ones using this property.

console.log(process.env.COMPUTERNAME);

console.log(process.cwd());

process.on('exit', (code) => {
  console.log(`About to exit with code: ${code}`);
});
process.exit(0);
console.log("exited");


