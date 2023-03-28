import fs from "fs";
import rsa from "node-rsa";

const publicKey = new rsa();
const privateKey = new rsa();

const publicFile = fs.readFileSync("../pem/publicKey.pem", "utf-8");
const privateFile = fs.readFileSync("../pem/privateKey.pem", "utf-8");

publicKey.importKey(publicFile);
privateKey.importKey(privateFile);

export const encrypted = (data) => privateKey.encryptPrivate(data, "base64");

export const decrypted = (data) => publicKey.decryptPublic(data, "utf-8");

// //create
const encrypt = encrypted("12345678");
console.log(encrypt);
// //đăng nhập
const decrypt = decrypted(
  "KhjcoiKuMnWKe03SIpmLZnSVQFQxJ5TR1Wq+v0g6kiI4BKCb9AqNC2v7zFtZlbpazSh51FZmKAvhnR+IJEmDzGfYKWc6hp+ay0NV2M0cDVdRMLd6qYur0Fr06iW415lBtTlLpi87NrOLiZ9driEAzVG13KjIJwB3kYmnBzfJNlbbXxGh3744p8U5zf7yZUYzaPYPOFHmqi+ul0QG1rHiSZY4G//sk/C6eleEEMAB4E8a/nHMiRntu+qSL7GfuwZClEftWAptsQV8z+tpOyk4piql38YPXjKh25gqZ78+rpesWAy2rg6DKC7ves6uhStVGzGhaB/8OauXCMnyZJLe0w=="
);

console.log("12345678" === decrypt);