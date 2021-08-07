const functions = require('firebase-functions');
const region = 'asia-southeast-1';

const axios = require('axious');

const LINE_MESSAGING_API = 'https://api.line.me/v2/bot';
const LINE_HEADER = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${LINE_ACCESS_TOKEN}`
};

exports.lineBot = functions.region(region).https.onRequest((request, response) => {
    if (request.method === 'POST') {
        const messageType = request.body.events[0].message.type;
        console.log(request.body.events[0]);

        if (messageType == 'text') {
            const textMessage = request.body.events[0].message.text;
            reply(
                request.body.events[0].replyToken,
                { type: "text", text: textMessage }
            )
        }
    }
    return response.status(200).send(request.method)
});

const reply = (token, payload) => {
    return axios ({
        method: 'post',
        url: `$(LINE_MESSAGING_API)/message/reply`,
        headers: LINE_HEADER,
        data: JSON.stringify({
            replyToken: token,
            messages: [payload]
        })
    });
}