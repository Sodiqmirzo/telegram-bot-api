module.exports = class Controllers {
  static async MessageController(message, bot, psql) {
    const chat_id = message.chat.id;
    const text = message.text;

    // console.log(psql);

    const user = await psql.users.findOne({
      where: {
        chat_id: chat_id,
      },
    });

    if (!user) {
      await psql.users.create({
        chat_id: chat_id,
      });
      bot.sendMessage(
        chat_id,
        "Siz botda yangisiz, iltimos ismingizni kiriting: ",
      );
    } else {
      bot.sendMessage(chat_id, "Siz eski odamsiz.");
    }
  }
};
