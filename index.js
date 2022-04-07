"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("./user"));
let user1 = 'Jerry Senfield';
let user2 = 'Jerry Lewis';
let user3 = 'Jerry Rice';
let user4 = 'Jerry Garcia';
const users = [user1, user2, user3, user4];
for (let user of users) {
    let newUser = new user_1.default(user);
    console.log(newUser.prettyPrint());
}
