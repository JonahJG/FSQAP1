// The OS (Operating System) module in Node.js lets developers interact with the underlying operating system. It provides information about the operating system, such as the platform, hostname, and architecture.
// Commonly used methods include os.cpus() which returns information about each CPU/core in the system, and os.freemem() and os.totalmem() which return the amount of free memory and total memory available in the system. Other methods include os.networkInterfaces(), which provides information about network interfaces, and os.userInfo(), which gets information about the current user. The OS module also has constants, such as os.constants.signals and os.constants.errno, which provide lists of signal names and error codes.
// The OS module is a useful tool for developers to retrieve information about the operating system and interact with it in various ways, such as performing system-level operations that are not available through other modules in Node.js.

const os = require("os");

// Display user information
const user = os.userInfo();
// Display username
console.log(`Username: ${user.username}`);
// Display home directory
console.log(`Home directory: ${user.homedir}`);

// Display amount of free memory
const freeMemory = os.freemem();
console.log(`Free memory: ${freeMemory}`);

// Display operating system
const operatingSystem = os.type();
console.log(`Operating system: ${operatingSystem}`)

// Display operating system platform
const operatingPlatform = os.platform();
console.log(`Operating system platform: ${operatingPlatform}`)

