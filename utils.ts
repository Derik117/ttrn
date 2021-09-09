import { Message } from "https://raw.githubusercontent.com/bukhalo/ttrn/master/mods/telegram-bot/mod.ts";

/**
 * Get "true" or "false" with a certain possibility
 * @param possibilityPercent Percent of possibility,
 * @type Number from 0 to 100
 */
export const randomBoolean = (possibilityPercent: number): boolean => {
  return Math.random() * 100 >= 100 - possibilityPercent;
};

export const isPrivateMessage = (message: Message) => message.chat.type === 'private';