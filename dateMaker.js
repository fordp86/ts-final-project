"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
var generateDate;
(function (generateDate_1) {
    function generateDate() {
        let date = (0, moment_1.default)().format('LLLL');
        return date;
    }
    generateDate_1.generateDate = generateDate;
})(generateDate || (generateDate = {}));
exports.default = generateDate;
