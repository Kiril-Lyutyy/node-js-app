import { Transform } from 'stream';
import fs from 'fs';

const passwordReplaceStream = new Transform({
  transform(chunk, _encoding, callback) {
    const transformedData = 
      chunk
        .toString()
        .replace(/password/g, '********');
    this.push(transformedData);
    callback();
  }
});

const logPasswordReplacement = () => {
  const readStream = fs.createReadStream('./files/hw10/textFileWithPassword.txt', 'utf8');
  const writeStream = fs.createWriteStream('./files/hw10/updatedTextFileWithPassword.txt');

  readStream.pipe(passwordReplaceStream).pipe(writeStream);

  writeStream.on('finish', () => {
    console.log('Finished transforming data updatedTextFileWithPassword.txt');
  });

  readStream.on('error', (err) => {
    console.error('Error reading file: ', err.message ?? 'Unknown error');
  });

  writeStream.on('error', (err) => {
    console.error('Error writing file: ', err.message ?? 'Unknown error');
  });
}

export default logPasswordReplacement;