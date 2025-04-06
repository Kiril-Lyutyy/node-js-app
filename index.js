import copyFileData from './src/modules/hw1/copyFileData.js';
import writeUpdatedData from './src/modules/hw3/writeUpdatedData.js';
import findTheBiggestFile from './src/modules/hw4/findTheBiggestFile.js';
import mockPasswordsAndRunCompare from './src/modules/hw5/mockPasswordsAndRunCompare.js';
import logDigitalSigniture from './src/modules/hw6/createDigitalSignitureAndValidate.js';
import logSha256Hash from './src/modules/hw7/hashPassSha256.js';
import logChatMessages from './src/modules/hw8/eventEmitter.js';

// HW 1
copyFileData();
//HW 3
writeUpdatedData();
// root dir
findTheBiggestFile();
// try it with an empty dir 
findTheBiggestFile('./emptyDir');
//HW 5
mockPasswordsAndRunCompare();
//HW 6
logDigitalSigniture();
//HW 7
logSha256Hash();
//HW 8
logChatMessages;