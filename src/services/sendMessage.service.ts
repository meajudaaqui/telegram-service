import telegramBot from 'node-telegram-bot-api';

class SendMessage {
  async execute(messageSend: string) {
    const token = "1947025787:AAFP5eO9g0SFmM0YIJuLtM7NhUEYpGYQqww";
    const bot = new telegramBot(token, {polling: true});
    const chat = -1001552434593;

    const result = bot.sendMessage(chat, messageSend);
    return result;
  }
}

export { SendMessage }