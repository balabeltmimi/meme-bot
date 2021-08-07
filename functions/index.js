const functions = require('firebase-functions');
const region = 'asia-southeast-1';

const axios = require('axios');

const LINE_ACCESS_TOKEN = process.env.LINE_ACCESS_TOKEN

const memeBot = require('./memeBot');
const utils = require('./utils');


exports.lineBot = functions.region(region).https.onRequest((request, response) => {
    if (request.method === 'POST') {
        const messageType = request.body.events[0].message.type;
        console.log(request.body.events[0]);

        if (messageType == 'text') {
            const textMessage = request.body.events[0].message.text;
            utils.reply(
                utils.lineBotHeader(LINE_ACCESS_TOKEN),
                request.body.events[0].replyToken,
                { type: 'text', text: textMessage }
            );
        }
    }
    return response.status(200).send(request.method)
});