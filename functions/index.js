const functions = require('firebase-functions');
const region = 'asia-southeast1';

const LINE_ACCESS_TOKEN = functions.config().linebot.access_token;

const memeBot = require('./memeBot');
const utils = require('./utils');


exports.lineBot = functions.region(region).https.onRequest((request, response) => {
    if (request.method === 'POST') {
        const messageType = request.body.events[0].message.type;
        console.log(request.body.events[0]);

        if (messageType == 'text') {
            const textMessage = request.body.events[0].message.text;
            
            let result;
            if (textMessage.includes('สวัสดี')) {
                result = {
                    type: 'text',
                    text: 'สวัสดี'
                }
            } else {
                result = {
                    type: 'text',
                    text: memeBot.getMemeWording()
                };    
            }

            if (result !== '') {
                utils.reply(
                    utils.lineBotHeader(LINE_ACCESS_TOKEN),
                    request.body.events[0].replyToken,
                    result
                );
            }
        }
    }
    return response.status(200).send(request.method)
});