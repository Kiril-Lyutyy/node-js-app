import { readFile, writeFile } from 'fs/promises';

const replaceString = ({ data, oldStr, newStr }) => 
    data?.replace(new RegExp(oldStr, 'gi'), newStr);

const readFileData = async () => {
    try {
        const data = await readFile('./files/hw3/source.txt', 'utf8');

        return data;
    } catch (err) {
        console.error('Error reading file: ', err.message ?? 'Unknown error occured');
    }

}

const writeUpdatedData = async () => {
    try {
        const data = await readFileData();

        if (!data) {
            throw new Error('Nothing to copy!')
        }

        const updatedData = replaceString({
            data, 
            oldStr: 'Node', 
            newStr: 'NODE.JS'
        });

        await writeFile('./files/hw3/new.txt', updatedData);
        console.log('Data updated successfuly!');
    } catch (err) {
        console.error('Error writing file: ', err);
    } 
}

export default writeUpdatedData;