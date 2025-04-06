import { readdir, stat } from 'fs/promises';
import path from 'path';

const getFileStats = async (filePath) => {
    try {
        const fileStat = await stat(filePath);

        return fileStat;
    } catch (err) {
        console.error(`Error reading stats for ${filePath}:`, err.message ?? 'Unknown error');
    }
};

const getDirContent = async (dirPath) => {
    try {
        const files = await readdir(dirPath);

        return files;
    } catch (err) {
        console.error('Error reading directory:', err.message ?? 'Unknown error');
    }
};

const findTheBiggestFile = async (dirPath = '.') => {
    try {
        const filesList = await getDirContent(dirPath);

        if (!filesList?.length) {
            console.log('No files found.');
            return;
        }

        const filesWithSize = [];

        for (const file of filesList) {
            const fullPath = path.join(dirPath, file);
            const stats = await getFileStats(fullPath);

            if (stats?.isFile()) {
                filesWithSize.push({
                    name: file,
                    size: stats.size
                });
            }
        }

        const biggestFile = filesWithSize.reduce((max, file) =>
            file.size > max.size ? file : max,
            { name: '', size: 0 }
        );
        const fileStatsStr = `${biggestFile.name} ${biggestFile.size} bytes`

        console.log(`the biggest file found: ${fileStatsStr}`);
    } catch (err) {
        console.error('Error finding the biggest file:', err.message ?? err);
    }
};

export default findTheBiggestFile;
