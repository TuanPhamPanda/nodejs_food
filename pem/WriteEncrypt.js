import fs from "fs";
import rsa from "node-rsa";

const key = new rsa().generateKeyPair();
const publicKey = key.exportKey("public");
const privateKey = key.exportKey("private");

fs.writeFileSync("./privateKey.pem", privateKey, "utf-8");
fs.writeFileSync("./publicKey.pem", publicKey, "utf-8");
