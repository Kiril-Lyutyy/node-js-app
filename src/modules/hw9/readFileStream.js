import fs from 'fs';

const readStream = fs.createReadStream('./files/hw9/log.txt', 'utf8');

readStream.on('data', (chunk) => {
  console.log('Log chunk: ', chunk);
});

readStream.on('end', () => {
  console.log('Finished reading file');
});

readStream.on('error', (err) => {
  console.error('Read file error: ', err.message ?? 'Unknown error');
});

export default readStream;