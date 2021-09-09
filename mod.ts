import { ChatType, Client, UpdateType, ParseMode } from "telegram-bot-api";
import { Bot } from "telegram-bot";

export const TELEGRAM_BOT_TOKEN = Deno.env.get("TELEGRAM_BOT_TOKEN");
export const telegramBotApiClient = new Client(TELEGRAM_BOT_TOKEN as string);
export const bot = new Bot(telegramBotApiClient);
export const ADMIN_IDS = [80098287];

/** Mention all users in chat */
bot.on(UpdateType.MESSAGE_UPDATE, async (upd) => {
  const { message } = upd;
  const triggers = ["алярм", "алярма", "эй чушканы"];
  const isTextContainTriggerWord = triggers.some((v) => v === message.text);
  const isAllCommand = message.text === `/all@${bot.me.username}`;
  const isAlarmCommand = message.text === `/alarm@${bot.me.username}`;
  const isGroup = message.chat.type === ChatType.GROUP;
  const isSuperGroup = message.chat.type === ChatType.SUPERGROUP;

  if (
    (isAllCommand || isAlarmCommand || isTextContainTriggerWord) &&
    (isGroup || isSuperGroup)
  ) {
    await bot.client.sendMessage({
      chat_id: String(upd.message.chat.id),
      text: "@bukhalo_a, @qwertydemo, @ekzotech, @apushkarev, @spiritsn, @gusevsd, @uuttff8, @r_levkovych, @sunnydaily, @kirich_l, @Derik117",
    });
  }
});

/** `/deanon` command */
bot.on(UpdateType.MESSAGE_UPDATE, async (upd) => {
  const isDeanonCommand = upd.message.text === "/deanon";
  const isDeanonGroupCommand =
    upd.message.text === `/deanon@${bot.me.username}`;
  const isReply = upd.message.reply_to_message;
  const isAdmin = ADMIN_IDS.includes(Number(upd.message.from?.id));

  if (isDeanonCommand && upd.message.chat.type === ChatType.PRIVATE) {
    await bot.client.sendMessage({
      chat_id: String(upd.message.chat.id),
      text: "*deanon* command doesn't work in private chats",
      parse_mode: ParseMode.MARKDOWN_V2,
    });
    return;
  }

  if (!isDeanonGroupCommand) return;

  if (!isReply) {
    await bot.client.sendMessage({
      chat_id: String(upd.message.chat.id),
      text: "*deanon* command work only on message replies",
      parse_mode: ParseMode.MARKDOWN_V2,
    });
    return;
  }

  if (!isAdmin) {
    await bot.client.sendMessage({
      chat_id: String(upd.message.chat.id),
      text: "*deanon* command can be used by bot administators only",
      parse_mode: ParseMode.MARKDOWN_V2,
    });
    return;
  }

  if (upd.message.from) {
    const user = upd.message.from;
    const text = [
      `ID: ${user.id}`,
      `Username: ${user.username || "-"}`,
      `First name: ${user.first_name || "-"}`,
      `Last name: ${user.last_name || "-"}`,
      `Bot: ${user.is_bot ? "Yes" : "No"}`,
    ];
    await bot.client.sendMessage({
      chat_id: String(upd.message.chat.id),
      text: text.join("\n"),
    });
  }
});

/** 'Тупа алегантор' meme */
bot.on(UpdateType.MESSAGE_UPDATE, async (upd) => {
  const isGroupOrSupergroup =
    upd.message.chat.type === ChatType.GROUP ||
    upd.message.chat.type === ChatType.SUPERGROUP;
  if (isGroupOrSupergroup && Math.random() < 0.025) {
    await bot.client.sendMessage({
      chat_id: String(upd.message.chat.id),
      text: "ТУПА АЛЕГАНТОР))))))",
      reply_to_message_id: upd.message.message_id,
    });
  }
});

/** 'Бургер кинг готовит на огне' meme */
bot.on(UpdateType.MESSAGE_UPDATE, async (upd) => {
  const triggers = ["ярик", "ярек", "ярослав"];
  const isTextContainTriggerWord = triggers.some(
    (v) => v === upd.message.text?.toLocaleLowerCase()
  );
  const isGroupOrSupergroup =
    upd.message.chat.type === ChatType.GROUP ||
    upd.message.chat.type === ChatType.SUPERGROUP;
  if (isGroupOrSupergroup && isTextContainTriggerWord) {
    await bot.client.sendMessage({
      chat_id: String(upd.message.chat.id),
      text: "Вы всё ещё готовите на огне @yaroslav_y? Тогда мы идём к вам.",
      reply_to_message_id: upd.message.message_id,
    });
  }
});

/** 'Тотарен' meme */
bot.on(UpdateType.MESSAGE_UPDATE, async (upd) => {
  const triggers = ["тотарен", "тотарин", "толик", "толян", "еболик"];
  const isTextContainTriggerWord = triggers.some(
    (v) => v === upd.message.text?.toLocaleLowerCase()
  );
  const isGroupOrSupergroup =
    upd.message.chat.type === ChatType.GROUP ||
    upd.message.chat.type === ChatType.SUPERGROUP;
  if (isGroupOrSupergroup && isTextContainTriggerWord) {
    await bot.client.sendMessage({
      chat_id: String(upd.message.chat.id),
      text: "Пидор",
      reply_to_message_id: upd.message.message_id,
    });
  }
});

/** 'Пидор' meme */
bot.on(UpdateType.MESSAGE_UPDATE, async (upd) => {
  const triggers = ["пидор", "пидорас"];
  const isTextContainTriggerWord = triggers.some(
    (v) => v === upd.message.text?.toLocaleLowerCase()
  );
  const isGroupOrSupergroup =
    upd.message.chat.type === ChatType.GROUP ||
    upd.message.chat.type === ChatType.SUPERGROUP;
  if (isGroupOrSupergroup && isTextContainTriggerWord) {
    await bot.client.sendMessage({
      chat_id: String(upd.message.chat.id),
      text: "Тотарен",
      reply_to_message_id: upd.message.message_id,
    });
  }
});

/** 'Докуменацию профессора писали наверное' meme */
bot.on(UpdateType.MESSAGE_UPDATE, async (upd) => {
  const triggers = ["дока", "доку", "документация", "документацию"];
  const isTextContainTriggerWord = triggers.some(
    (v) => v === upd.message.text?.toLocaleLowerCase()
  );
  const isGroupOrSupergroup =
    upd.message.chat.type === ChatType.GROUP ||
    upd.message.chat.type === ChatType.SUPERGROUP;
  if (isGroupOrSupergroup && isTextContainTriggerWord) {
    await bot.client.sendMessage({
      chat_id: String(upd.message.chat.id),
      text: "Доку профессора писали наверное",
      reply_to_message_id: upd.message.message_id,
    });
  }
});

(async () => {
  await bot.startPolling();
})();
