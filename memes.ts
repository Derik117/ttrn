import { TelegramBot, UpdateType } from "https://raw.githubusercontent.com/bukhalo/ttrn/master/mods/telegram-bot/mod.ts";
import { isPrivateMessage, randomBoolean } from "./utils.ts";

export const memes = (bot: TelegramBot) => {
  /**
   * TOOPA ALEGANTOR
   */
  bot.on(UpdateType.Message, async ({ message }) => {
    if (isPrivateMessage(message)) return;
    if (randomBoolean(5)) {
      await bot.sendMessage({
        chat_id: message.chat.id,
        text: "ТУПА АЛЕГАНТОР))))))",
        reply_to_message_id: message.message_id,
      });
    }
  });

  /**
   * TOTAREN
   */
  bot.on(UpdateType.Message, async ({ message }) => {
    if (isPrivateMessage(message)) return;
    const regex = new RegExp("(а|т)(т|ы|о|а)(т|р)(т|р|о|а|н)", "gi");
    if (regex.test(message.text || "") && randomBoolean(50)) {
      await bot.sendMessage({
        chat_id: message.chat.id,
        text: "пидор",
      });
    }
  });

  /**
   * DOKA
   */
  bot.on(UpdateType.Message, async ({ message }) => {
    if (isPrivateMessage(message)) return;
    const regex = new RegExp("(д)(о)(к)(у|а|и|ментация|ментацию)", "gi");
    if (regex.test(message.text || "")) {
      await bot.sendMessage({
        chat_id: message.chat.id,
        text: "Доку профессора писали наверное",
      });
    }
  });

  /**
   * PIDOR
   */
  bot.on(UpdateType.Message, async ({ message }) => {
    if (isPrivateMessage(message)) return;
    const regex = new RegExp("(п)(и)(д)(о|а|р|э)", "gi");
    if (regex.test(message.text || "") && randomBoolean(50)) {
      await bot.sendMessage({
        chat_id: message.chat.id,
        text: "тотарен",
      });
    }
  });

  /**
   * YAREK
   */
  bot.on(UpdateType.Message, async ({ message }) => {
    if (isPrivateMessage(message)) return;
    const regex = new RegExp("(я)(р)(е|и)(к)", "gi");
    if (regex.test(message.text || "") && randomBoolean(50)) {
      await bot.sendMessage({
        chat_id: message.chat.id,
        text: "Вы всё ещё готовите на огне @yaroslav_y? Тогда мы идём к вам.",
      });
    }
  });
};
