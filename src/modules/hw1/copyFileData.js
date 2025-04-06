import { readFile, writeFile } from 'fs/promises';

const readFileData = async () => {
    try {
        const data = await readFile('./files/hw1/source.txt', 'utf8');

        return data;
    } catch (err) {
        console.error('Error reading file: ', err.message ?? 'Unknown error occured');
    }

}

const copyFileData = async () => {
    try {
        const data = await readFileData();

        if (!data) {
            throw new Error('Nothing to copy!')
        }

        await writeFile('./files/hw1/copy.txt', data);
        console.log('Data copied successfuly!');
    } catch (err) {
        console.error('Error writing file: ', err);
    } 
}

export default copyFileData;