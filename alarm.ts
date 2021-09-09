import { TelegramBot, UpdateType } from "https://raw.githubusercontent.com/bukhalo/ttrn/master/mods/telegram-bot/mod.ts";
import { isPrivateMessage } from "./utils.ts";

/**
 * Trigger all chat members
 */
export const alarm = (bot: TelegramBot) =>
  bot.on(UpdateType.Message, async ({ message }) => {
    if (isPrivateMessage(message)) return;
    const triggers = [
      "/all",
      "/alarm",
      "/all@totaren_bot",
      "/alarm@totaren_bot",
      "алярм",
      "алярма",
      "эй чушканы",
    ];
    if (triggers.includes(message.text || "")) {
      await bot.sendMessage({
        chat_id: message.chat.id,
        text:
          "@bukhalo_a, @yaroslav_y, @qwertydemo, @ekzotech, @apushkarev, @spiritsn, @gusevsd, @uuttff8, @r_levkovych, @sunnydaily, @kirich_l, @Derik117",
      });
    }
  });
