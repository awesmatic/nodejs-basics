import os from 'os';

// The os module provides a number of operating system-related utility methods and properties. It can be used to get information about the current operating system, such as the hostname, platform, architecture, and more.
console.log(os.userInfo());
console.log(os.userInfo().username);
// {
//   uid: -1,
//   gid: -1,
//   username: 'HP-PC',
//   homedir: 'C:\\Users\\HP-PC',
//   shell: null
// }
// HP-PC


console.log(os.totalmem());
// 6355144704
// The totalmem() method returns the total amount of system memory in bytes. It can be used to get the total amount of RAM available on the system.


console.log(os.freemem());
// 1012981760
// The freemem() method returns the amount of free system memory in bytes. It can be used to get the amount of RAM that is currently available for use on the system.

console.log(os.cpus());
// The cpus() method returns an array of objects containing information about each CPU/core installed on the system. Each object has properties like model, speed, and times.
