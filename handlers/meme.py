import random

from misc import dp
from aiogram import types, filters
from utils import Decision
from config import config
from random import choice


@dp.message_handler(
    filters.Text(equals=['дока', 'доку', 'документация', 'документацию'], ignore_case=True),
    chat_type=types.ChatType.SUPERGROUP
)
async def doka(msg: types.Message):
    await msg.answer('Доку профессора писали наверное')


@dp.message_handler(
    filters.Text(equals=['пидор', 'пидорас'], ignore_case=True),
    chat_type=types.ChatType.SUPERGROUP
)
async def pidor(msg: types.Message):
    await msg.answer('тотарен')


@dp.message_handler(
    filters.Text(equals=['уфа', 'уфимский', 'уфимская', 'уфимской', 'уфы', 'уфе'], ignore_case=True),
    chat_type=types.ChatType.SUPERGROUP
)
async def pidor(msg: types.Message):
    answers = (
        'рубль лучшая валюта',
        'сегодня все вложил в рублевый вклад',
        'финансовая подушка должна быть в рублях',
        'рубль укрепляется',
        'покупаю товары за рубли',
    )
    await msg.answer(random.choice(answers))


@dp.message_handler(
    filters.Text(equals=['тотарен', 'тотарин', 'толик', 'толян', 'еболик'], ignore_case=True),
    chat_type=types.ChatType.SUPERGROUP
)
async def totaren(msg: types.Message):
    await msg.answer('пидор')


@dp.message_handler(
    filters.Text(equals=['ярик', 'ярек', 'ярослав'], ignore_case=True),
    chat_type=types.ChatType.SUPERGROUP
)
async def yarek(msg: types.Message):
    if Decision.make(config.YAREK_DECISION_LIMIT):
        await msg.answer('Вы всё ещё готовите на огне @yaroslav_y? Тогда мы идём к вам.')


@dp.message_handler(chat_type=types.ChatType.SUPERGROUP)
async def toopa(msg: types.Message):
    if Decision.make(config.TOOPA_DECISION_LIMIT):
        await msg.reply('ТУПА АЛЕГАНТОР))))))')
