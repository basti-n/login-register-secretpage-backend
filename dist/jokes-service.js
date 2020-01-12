"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jokes_1 = require("./jokes");
var JokeService = (function () {
    function JokeService() {
    }
    JokeService.prototype.getJoke = function () {
        return JSON.stringify(jokes_1.jokes[Math.floor((Math.random() * jokes_1.jokes.length))]);
    };
    return JokeService;
}());
exports.JokeService = JokeService;
