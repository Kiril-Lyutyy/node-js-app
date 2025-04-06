import { randomBytes, createHash } from 'crypto';

const HASH_TYPE = 'sha256';

const hashPassword = (password) => {
    const salt = randomBytes(8).toString('hex');
    const hash = 
        createHash(HASH_TYPE)
            .update(`${password}${salt}`)
            .digest('hex');

    return { salt, hash };
}
  
const verifyPassword = ({ password, salt, hash }) => {
    const newHash = 
        createHash(HASH_TYPE)
            .update(`${password}${salt}`)
            .digest('hex');

    return newHash === hash;
}  
  
const comparePasswordWithSavedHash = (password, { salt, hash }) => {
    return verifyPassword({ 
        password, 
        salt, 
        hash,
    });
}

const mockPasswordsAndRunCompare = () => {
    const correctPassword = 'admin123';
    const wrongPassword = 'asdf';
    const storedPassword = hashPassword(correctPassword);

    console.log(
        'should return true when compare with the correct pass', 
        comparePasswordWithSavedHash(correctPassword, storedPassword)
    );
    console.log(
        'should return false when compare with the wrong pass', 
        comparePasswordWithSavedHash(wrongPassword, storedPassword)
    );
}

export default mockPasswordsAndRunCompare;