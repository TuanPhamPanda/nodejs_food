import fs from "fs";
import rsa from "node-rsa";
import path, { dirname } from "path";

const publicKey = new rsa();
const privateKey = new rsa();

const publicFile = fs.readFileSync('pem\\publicKey.pem', 'utf-8');
const privateFile = fs.readFileSync('pem\\privateKey.pem', 'utf-8');

publicKey.importKey(publicFile);
privateKey.importKey(privateFile);

export const encrypted = (data) => privateKey.encryptPrivate(data, "base64");

export const decrypted = (data) => publicKey.decryptPublic(data, "utf-8");