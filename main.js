const TelegramBot = require("node-telegram-bot-api");
const Controllers = require("./controllers.js");
const { TOKEN, OPTIONS } = require("./config.js");
const postgres = require("./modules/postgres");

const bot = new TelegramBot(TOKEN, OPTIONS);

async function main() {
  const psql = await postgres();
  await bot.on("text", async (message) =>
    Controllers.MessageController(message, bot, psql),
  );
}

main();
