"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passwordGenerator_1 = __importDefault(require("./passwordGenerator"));
const dateMaker_1 = __importDefault(require("./dateMaker"));
const random_1 = __importDefault(require("random"));
class User {
    constructor(username) {
        let password = passwordGenerator_1.default.generatePassword();
        let createdDate = dateMaker_1.default.generateDate();
        let userId = random_1.default.int((1000), (9999));
        this.userid = userId;
        this.username = username;
        this.password = password;
        this.created = createdDate;
    }
    prettyPrint() {
        console.log(`ID: ${this.userid}`);
        console.log(`Username: ${this.username}`);
        console.log(`Password: ${this.password}`);
        console.log(`Created On: ${this.created}`);
    }
}
exports.default = User;
