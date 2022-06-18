from aiogram import executor

from handlers.commands import *
from handlers.meme import *
from handlers.repost import *
from handlers.shield import *
from misc import dp

if __name__ == '__main__':
    executor.start_polling(dp)
