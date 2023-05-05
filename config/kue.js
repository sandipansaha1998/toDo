// Creates a priority queue and manages it
const kue = require('kue');
const queue = kue.createQueue();
module.exports = queue;