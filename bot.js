require("dotenv").config();

const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TELEGRAM_TOKEN;

const bot = new TelegramBot(token, { polling: true });
console.log("file is loaded");
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text;
    console.log("inside the ON",messageText)
    // Process the incoming message here
    if (messageText === '/start') {
        bot.sendMessage(chatId, 'Welcome to the Nodame bot!');
      }
  
  });

  bot.onText(/\/echo (.+)/, function onEchoText(msg, match) {
    const resp = match[1];
    console.log("Ontext function is called");
    bot.sendMessage(msg.chat.id, resp);
  });
  