require("dotenv").config();

const parse = require('parse-mentions');

const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TELEGRAM_TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const hasMentions = msg.entities;
    console.log("inside the ON",hasMentions);

    if(hasMentions !== undefined){
        let mentionsArr = parse(msg.text);
        console.log("List of mentions are", mentionsArr.matches[0].name);
    }

    // Process the incoming message here
    if (messageText === '/start') {
        bot.sendMessage(chatId, 'Welcome to the Nodame bot!');
      }
  
  });

//   bot.onText(/\/echo (.+)/, function onEchoText(msg, match) {
//     const resp = match[1];
//     console.log("Ontext function is called");
//     bot.sendMessage(msg.chat.id, resp);
//   });
  