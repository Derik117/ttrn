import { TelegramBot } from "https://raw.githubusercontent.com/bukhalo/ttrn/master/mods/telegram-bot/mod.ts";
import { alarm } from "./alarm.ts";
import { memes } from "./memes.ts";
import { repost } from "./repost.ts";

const TOKEN = Deno.env.get("TOKEN");
if (!TOKEN) throw new Error("Bot token is not provided");
const bot = new TelegramBot(TOKEN);

alarm(bot);
memes(bot);
repost(bot);

const bootstrap = async () => {
  await bot.run({
    polling: true,
  });
};

bootstrap();
