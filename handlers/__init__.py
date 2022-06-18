from aiogram import types

from config import config
from misc import dp
from utils import Decision

from . import commands, meme, repost, shield


@dp.message_handler(chat_type=types.ChatType.SUPERGROUP)
async def toopa(msg: types.Message):
    if Decision.make(config.TOOPA_DECISION_LIMIT):
        await msg.reply('ТУПА АЛЕГАНТОР))))))')
