const { request, response } = require("express");

exports.getTransactions = (request, response, next) => {
    response.send('GET transactions');
} 

exports.addTransactions = (request, response, next) => {
    response.send('POST transactions');
} 

exports.deleteTransactions = (request, response, next) => {
    response.send('DELETE transactions');
} 