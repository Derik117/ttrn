import logging

from aiogram import Bot, Dispatcher

from config import config

bot = Bot(token=config.TOKEN)
dp = Dispatcher(bot=bot)
logging.basicConfig(level=logging.DEBUG)
