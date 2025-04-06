import crypto from 'crypto';

const HASH_TYPE = "sha256";
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
});
const message = "HW6";
const signature = crypto.sign(HASH_TYPE, Buffer.from(message), {
    key: privateKey,
    padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
});
const isVerified = crypto.verify(
    HASH_TYPE,
    Buffer.from(message),
    {
        key: publicKey,
        padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
    },
    signature
);
const logResults = () => {
    console.log("Digital signature created:", signature.toString('base64'));
    console.log("Digital signature is valid:", !!isVerified);
}

export default logResults;
