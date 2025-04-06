import copyFileData from './src/modules/hw1/copyFileData.js';
import writeUpdatedData from './src/modules/hw3/writeUpdatedData.js';
import findTheBiggestFile from './src/modules/hw4/findTheBiggestFile.js';
import mockPasswordsAndRunCompare from './src/modules/hw5/mockPasswordsAndRunCompare.js';

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