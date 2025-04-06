import { randomBytes, createHash } from 'crypto';

const hashPassword = (password) => {
    const salt = randomBytes(8).toString('hex');
    const hash = 
        createHash('sha256')
            .update(`${password}${salt}`)
            .digest('hex');
    
  return hash;
}

const logResult = () => {
    console.log('log hashed sha256 pass:', hashPassword('admin'));
}

export default logResult;
