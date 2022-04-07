"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const randomstring_1 = __importDefault(require("randomstring"));
var generatePassword;
(function (generatePassword_1) {
    function generatePassword() {
        let random = randomstring_1.default.generate({
            length: 15,
            charset: 'alphanumeric'
        });
        return random;
    }
    generatePassword_1.generatePassword = generatePassword;
})(generatePassword || (generatePassword = {}));
exports.default = generatePassword;
