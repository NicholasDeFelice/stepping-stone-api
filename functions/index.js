const functions = require('firebase-functions');
const app = require('./express/app');
const express = require('express');


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const expressServer = express();

expressServer.use('/api', app);

exports.api = functions.https.onRequest(expressServer);
