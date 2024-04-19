import { Injectable } from '@angular/core';
import argon2 from 'argon2';
@Injectable({
    providedIn: 'root'
})
export class EncryptionService {

    constructor() {
    }

    /**
     * MD5 шифрование строки
     * @param str
     */
    public encryptString(str: string): string {
        return argon2.hash(str).toString();
    }
}
