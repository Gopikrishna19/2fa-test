const speakeasy = require('speakeasy');
const QRCode = require('qrcode');

const secret = speakeasy.generateSecret({length: 20});
// const secret = {
//     ascii: '><}y*pPF&qkf3f^@5t8k',
//     base32: 'HY6H26JKOBIEMJTRNNTDGZS6IA2XIODL',
//     hex: '3e3c7d792a70504626716b6633665e403574386b',
//     otpauth_url: 'otpauth://totp/SecretKey?secret=HY6H26JKOBIEMJTRNNTDGZS6IA2XIODL',
// };
// console.log(secret);

// const url = speakeasy.otpauthURL({label: 'My Awesome Website', secret: secret.base32});
// console.log(url);

QRCode.toDataURL(secret.otpauth_url, (err, image) => {
    document.querySelector('img').src = image;
});

document.querySelector('button').onclick = verify;

function verify() {
    const token = document.querySelector('input').value;

    console.log(speakeasy.totp.verify({
        secret: secret.ascii,
        encoding: 'ascii',
        token
    }));
}
